"""Import local gallery originals without ever changing the external library.

The return value contains portable public URLs only. Repeated imports are
content-addressed; a disconnected external drive never removes prior imports.
"""
from __future__ import annotations

import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

DEFAULT_GALLERY = Path.home() / "AppData/Local/LiteGameLibrary/gallery"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}
PUBLIC_FIELDS = ("id", "url", "thumbnail", "caption", "source", "width", "height")


def _warning(message: str) -> None:
    print(f"[画作] {message}", file=sys.stderr)


def _digest(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def _originals(directory: Path):
    """Only files beneath an originals component; thumbnails never qualify."""
    for path in sorted(directory.rglob("*"), key=lambda p: p.as_posix().casefold()):
        relative = path.relative_to(directory)
        folders = {part.lower() for part in relative.parts[:-1]}
        if (path.is_file() and path.suffix.lower() in EXTENSIONS
                and "originals" in folders and "thumbnails" not in folders
                and not path.is_symlink()):
            yield path


def _safe_public(root: Path, row: dict) -> bool:
    for name in ("url", "thumbnail"):
        value = row.get(name, "")
        if not isinstance(value, str) or not value.startswith("sources/") or ".." in Path(value).parts:
            return False
        if not (root / value).is_file():
            return False
    return all(field in row for field in PUBLIC_FIELDS)


def import_gallery(root: Path) -> list[dict]:
    """Return deduplicated site + persistent imported artwork metadata.

    Optional root/content-sources.local.json may contain galleryDirectories:
    ["C:/path/to/gallery"]. It is local configuration, never public output.
    """
    root = Path(root).resolve()
    destination = root / "sources" / "gallery-imports"
    originals = destination / "originals"
    thumbnails = destination / "thumbnails"
    originals.mkdir(parents=True, exist_ok=True)
    thumbnails.mkdir(parents=True, exist_ok=True)
    catalog_path = destination / "catalog.json"
    try:
        catalog = json.loads(catalog_path.read_text(encoding="utf-8")) if catalog_path.exists() else []
        if not isinstance(catalog, list):
            raise ValueError("catalog must be an array")
    except (ValueError, OSError) as error:
        # Do not silently replace an unreadable persistent catalog.
        raise RuntimeError(f"画作目录清单无法读取：{catalog_path.name}") from error

    retained = {row["id"]: row for row in catalog
                if isinstance(row, dict) and _safe_public(root, row)}
    public = {}
    candidates = [(path, "站内收藏", False)
                  for path in sorted((root / "sources" / "img").glob("*"))
                  if path.is_file() and path.suffix.lower() in EXTENSIONS]

    config_path = root / "content-sources.local.json"
    directories = [DEFAULT_GALLERY]
    if config_path.exists():
        config = json.loads(config_path.read_text(encoding="utf-8-sig"))
        configured = config.get("galleryDirectories", [str(DEFAULT_GALLERY)])
        if not isinstance(configured, list) or not all(isinstance(x, str) and x.strip() for x in configured):
            raise ValueError("galleryDirectories 必须为目录路径字符串数组")
        directories = [Path(value).expanduser() for value in configured]
    for directory in directories:
        if not directory.is_absolute():
            directory = root / directory
        if not directory.is_dir():
            _warning("外部图库暂不可用，保留之前导入的画作。")
            continue
        candidates.extend((path, "LiteGameLibrary", True) for path in _originals(directory))

    for path, source, copy_original in candidates:
        try:
            digest = _digest(path)
            if digest in public:
                continue
            with Image.open(path) as raw:
                image = ImageOps.exif_transpose(raw)
                width, height = image.size
                thumbnail = thumbnails / f"{digest}.webp"
                if not thumbnail.exists():
                    image.thumbnail((720, 720), Image.Resampling.LANCZOS)
                    image.convert("RGB").save(thumbnail, "WEBP", quality=82, method=6)
            if copy_original:
                target = originals / f"{digest}{path.suffix.lower()}"
                if not target.exists():
                    shutil.copyfile(path, target)
            else:
                target = path
            caption = path.stem.replace("_", " ")
            if re.fullmatch(r"\d{8}-\d+-[a-fA-F0-9]+", path.stem):
                caption = f"图库收藏 · {path.stem[:4]}.{path.stem[4:6]}.{path.stem[6:8]} · {digest[:6]}"
            row = dict(id=digest, url=target.relative_to(root).as_posix(),
                       thumbnail=thumbnail.relative_to(root).as_posix(),
                       caption=caption, source=source, width=width, height=height)
            public[digest] = row
            if copy_original:
                retained[digest] = row
        except (OSError, ValueError, Image.DecompressionBombError) as error:
            _warning(f"跳过无法读取的图片 {path.name}：{type(error).__name__}")

    # Site images take precedence when their bytes also occur in the library.
    for digest, row in retained.items():
        public.setdefault(digest, {field: row[field] for field in PUBLIC_FIELDS})
    catalog_path.write_text(json.dumps(list(retained.values()), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return list(public.values())


if __name__ == "__main__":
    rows = import_gallery(Path(__file__).resolve().parents[1])
    print(f"画作导入完成：{len(rows)} 幅，按 SHA-256 去重。")
