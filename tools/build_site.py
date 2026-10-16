"""Build a Pages artifact from an explicit list of public website files."""
from __future__ import annotations

import re
import shutil
from pathlib import Path
from urllib.parse import unquote, urlsplit

from rebuild_content import ROOT, main as rebuild
from learning_content import collect_notes

DIST = ROOT / "dist"
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".bmp"}


def copy_public(path: Path) -> None:
    relative = path.relative_to(ROOT)
    target = DIST / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(path, target)


def local_images(path: Path) -> list[Path]:
    text = path.read_text(encoding="utf-8-sig")
    refs = re.findall(r'!\[[^\]]*\]\(<?([^\n)]+?)>?\)', text)
    refs += re.findall(r'<img\b[^>]*\bsrc=["\']([^"\']+)["\']', text, re.I)
    images = []
    for ref in refs:
        ref = re.sub(r'\s+["\'].*$', '', ref).strip('<> ')
        url = urlsplit(ref.replace('\\', '/'))
        if url.scheme or url.netloc or not url.path:
            continue
        candidate = (path.parent / unquote(url.path)).resolve()
        if not candidate.is_relative_to(ROOT) or candidate.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        if candidate.is_file():
            images.append(candidate)
    return images


def build() -> None:
    rebuild()
    # Only this fixed, resolved build directory can ever be cleared.
    if DIST.resolve() != ROOT.resolve() / "dist" or DIST.is_symlink():
        raise RuntimeError("Unexpected build directory")
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()
    for path in ROOT.glob("*.html"):
        copy_public(path)
    copy_public(ROOT / "favicon.png")
    for directory in ("css", "js", "sources", "blog", "fiction", "anime"):
        for path in (ROOT / directory).rglob("*"):
            if path.is_file() and not any(p.startswith('.') for p in path.relative_to(ROOT).parts):
                copy_public(path)
    notes, _ = collect_notes()
    for note in notes:
        path = ROOT / note["md"]
        copy_public(path)
        for image in local_images(path):
            copy_public(image)
    (DIST / ".nojekyll").touch()
    files = list(DIST.rglob("*"))
    size = sum(p.stat().st_size for p in files if p.is_file()) / 1024 / 1024
    print(f"Built dist/: {len(notes)} notes, {size:.1f} MiB. Ready for GitHub Pages.")


if __name__ == "__main__":
    build()
