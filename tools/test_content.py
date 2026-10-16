"""Regression checks for automatic note discovery and the public artifact."""
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import learning_content as content
from build_site import local_images, DIST
from rebuild_content import ROOT


class NoteDiscoveryTests(unittest.TestCase):
    def test_new_subject_order_metadata_and_exclusions(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            learning = root / "learning"
            files = {
                "新主题/02-第二课.md": "# 02 · 第二课\n\n正文中的独特搜索词。",
                "新主题/01-第一课.md": "---\ntitle: 自定义标题\ntags: [测试, 中文]\ndate: 2026-10-01\n---\n# 第一课\n\n这是摘要内容，足够长用来验证摘要提取。",
                "新主题/00-总览.md": "# 总览\n\n主题目录。",
                "新主题/空文件.md": "",
                "新主题/_archive/old.md": "# 旧稿",
                "新主题/.private/private.md": "# 私有资料",
                "项目学习/资料/config.md": "# 配套工程",
                "新主题/draft.md": "---\ndraft: true\n---\n# 草稿",
            }
            for name, text in files.items():
                path = learning / name
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(text, encoding="utf-8")
            with patch.object(content, "ROOT", root), patch.object(content, "LEARNING", learning), patch.object(content, "modification_date", return_value=""):
                notes, subjects = content.collect_notes()
            self.assertEqual(len(notes), 3)
            self.assertEqual([n["title"] for n in notes], ["总览", "自定义标题", "第二课"])
            self.assertEqual(notes[1]["tags"], ["测试", "中文"])
            self.assertEqual(notes[1]["date"], "2026-10-01")
            self.assertIn("独特搜索词", notes[2]["searchText"])
            self.assertEqual(subjects[0]["count"], 3)

    def test_image_paths_stay_inside_site_and_only_copy_images(self):
        with tempfile.TemporaryDirectory(dir=ROOT) as tmp:
            folder = Path(tmp)
            (folder / "中文 图片.png").write_bytes(b"image")
            (folder / "secret.yml").write_text("private", encoding="utf-8")
            note = folder / "note.md"
            note.write_text('![](中文%20图片.png)\n<img src="中文 图片.png">\n![](secret.yml)\n![](https://example.com/photo.png)', encoding="utf-8")
            self.assertEqual(set(local_images(note)), {folder / "中文 图片.png"})


class BuildArtifactTests(unittest.TestCase):
    @unittest.skipUnless(DIST.exists(), "Run build_site.py before artifact checks")
    def test_public_artifact(self):
        notes, _ = content.collect_notes()
        for note in notes:
            source = ROOT / note["md"]
            self.assertTrue((DIST / note["md"]).is_file(), note["md"])
            for image in local_images(source):
                self.assertTrue((DIST / image.relative_to(ROOT)).is_file(), str(image))
        for file in (DIST / "learning").rglob("*"):
            self.assertNotIn("_archive", file.parts)
            if file.is_file():
                self.assertIn(file.suffix.lower(), {".md", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".bmp"})
        self.assertTrue((DIST / "js/vendor/marked.min.js").is_file())
        self.assertTrue((DIST / ".nojekyll").is_file())


if __name__ == "__main__":
    unittest.main()
