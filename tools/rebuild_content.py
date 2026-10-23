# -*- coding: utf-8 -*-
"""Generate canonical course, portable gallery, and music indexes."""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "sources" / "img"
MUSIC = ROOT / "sources" / "music"
COVERS = MUSIC / "covers"
JS = ROOT / "js"

GALLERY_OUT = JS / "gallery-data.js"
MUSIC_OUT = JS / "music-data.js"

IMG_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"}
DEFAULT_COVER = "sources/img/残花的迷宫.png"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end < 0:
        return {}, text
    raw = text[3:end].strip()
    body = text[end + 4:].lstrip("\n")
    meta: dict = {}
    for line in raw.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        key, val = line.split(":", 1)
        key = key.strip()
        val = val.strip()
        if val.startswith("[") and val.endswith("]"):
            inner = val[1:-1].strip()
            meta[key] = [x.strip().strip("'\"") for x in inner.split(",") if x.strip()]
        else:
            meta[key] = val.strip("'\"")
    return meta, body


def load_existing_array(path: Path, const_name: str) -> list:
    if not path.is_file():
        return []
    text = path.read_text(encoding="utf-8")
    m = re.search(rf"(?:const|var)\s+{re.escape(const_name)}\s*=\s*(\[.*?\]);", text, re.S)
    if not m:
        return []
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return []


def write_const_file(path: Path, header_lines: list[str], consts: dict[str, object]) -> None:
    chunks = list(header_lines) + [""]
    for name, value in consts.items():
        # 用 var：软跳转时可重新执行覆盖；const 会报 already declared
        chunks.append(f"var {name} = {json.dumps(value, ensure_ascii=False, indent=2)};\n")
    path.write_text("\n".join(chunks), encoding="utf-8")


def pretty_caption(stem: str) -> str:
    name = stem
    name = re.sub(r"^\d+[-_]", "", name)
    name = name.replace("_", " ").replace("满破", " 满破").strip()
    return name or stem


def rebuild_gallery() -> list[dict]:
    from gallery_assets import import_gallery
    items = import_gallery(ROOT)
    write_const_file(GALLERY_OUT, ["// 自动生成：画作索引"], {"galleryItems": items})
    return items


def ensure_mutagen():
    try:
        from mutagen.id3 import ID3  # noqa: F401
        return True
    except ImportError:
        import subprocess
        print("正在安装 mutagen（读取 mp3 封面）…")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "mutagen", "-q"])
        return True


def cover_key(mp3: Path) -> str:
    digest = hashlib.md5(mp3.name.encode("utf-8")).hexdigest()[:12]
    return digest


def extract_cover(mp3: Path) -> str | None:
    """导出内嵌封面到 covers/{hash}.jpg|png，返回相对站点根的路径。"""
    from mutagen.id3 import ID3

    COVERS.mkdir(parents=True, exist_ok=True)
    key = cover_key(mp3)
    for ext in (".jpg", ".jpeg", ".png"):
        existing = COVERS / f"{key}{ext}"
        if existing.is_file():
            return existing.relative_to(ROOT).as_posix()

    try:
        tags = ID3(mp3)
    except Exception:
        return None

    apic = None
    for k in tags.keys():
        if str(k).startswith("APIC"):
            apic = tags[k]
            break
    if apic is None:
        return None

    mime = (getattr(apic, "mime", "") or "").lower()
    ext = ".png" if "png" in mime else ".jpg"
    out = COVERS / f"{key}{ext}"
    out.write_bytes(apic.data)
    return out.relative_to(ROOT).as_posix()


def read_id3_meta(mp3: Path) -> tuple[str, str]:
    title, artist = mp3.stem, ""
    try:
        from mutagen.id3 import ID3
        tags = ID3(mp3)
        if "TIT2" in tags:
            title = str(tags["TIT2"])
        if "TPE1" in tags:
            artist = str(tags["TPE1"])
    except Exception:
        pass

    if " - " in mp3.stem:
        a, t = mp3.stem.split(" - ", 1)
        if not artist:
            artist = a
        if title == mp3.stem:
            title = t
    # 去掉标题里过长的括号附加信息（显示用可缩短）
    title = re.sub(r"\s*\[.*?\]\s*$", "", title).strip() or mp3.stem
    return title, artist or "Unknown"


def pick_fallback_cover(gallery: list[dict]) -> str:
    default_path = ROOT / DEFAULT_COVER
    if default_path.is_file():
        return DEFAULT_COVER
    if gallery:
        return gallery[0]["url"]
    return DEFAULT_COVER


def rebuild_music(gallery: list[dict]) -> list[dict]:
    MUSIC.mkdir(parents=True, exist_ok=True)
    COVERS.mkdir(parents=True, exist_ok=True)
    ensure_mutagen()

    old_list = load_existing_array(MUSIC_OUT, "musicList")
    if not old_list:
        old_list = load_existing_array(JS / "site-data.js", "musicList")
    old = {item.get("file"): item for item in old_list}

    fallback = pick_fallback_cover(gallery)
    items = []
    for mp3 in sorted(MUSIC.glob("*.mp3"), key=lambda p: p.name.lower()):
        rel = mp3.relative_to(ROOT).as_posix()
        prev = old.get(rel) or {}
        title, artist = read_id3_meta(mp3)
        if prev.get("title"):
            title = prev["title"]
        if prev.get("artist"):
            artist = prev["artist"]

        cover = prev.get("cover") or ""
        if cover and not (ROOT / cover).is_file():
            cover = ""
        if not cover:
            cover = extract_cover(mp3) or fallback

        try:
            from mutagen.mp3 import MP3
            duration = round(MP3(mp3).info.length, 2)
        except Exception:
            duration = 0
        items.append({
            "duration": duration,
            "title": title,
            "artist": artist,
            "cover": cover,
            "file": rel,
        })

    write_const_file(
        MUSIC_OUT,
        [
            "// 由 tools/rebuild_content.py 自动生成，请勿手改",
            "// 放入 sources/music/*.mp3 后运行 更新内容.bat；已有标题/封面会尽量保留",
        ],
        {"musicList": items},
    )
    return items


def main() -> None:
    from learning_content import rebuild_learning
    JS.mkdir(parents=True, exist_ok=True)
    notes = rebuild_learning()
    print(f"Learning notes: {len(notes)}")
    gallery = rebuild_gallery()
    print(f"Unique artworks: {len(gallery)}")
    music = rebuild_music(gallery)
    print(f"Music tracks: {len(music)}")


if __name__ == "__main__":
    main()
