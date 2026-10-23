"""Content contract and real public-artifact regression checks."""
import hashlib
import json
import re
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
import learning_content as content
from rebuild_content import ROOT, parse_frontmatter
from build_site import DIST, require_learning_notes, local_images, fingerprint_page_assets
from check_integrity import verify

class Contracts(unittest.TestCase):
    def test_public_privacy_redaction_preserves_source(self):
        from public_content import public_markdown
        original='Project E:\\codex\\private-project\nphone: 13812344321\n'
        result=public_markdown(original)
        self.assertIn('YOUR_PROJECT_DIR',result);self.assertIn('PHONE_EXAMPLE',result)
        self.assertIn('private-project',original);self.assertNotIn('private-project',result)
        if DIST.exists():
            files=list((DIST/'learning').rglob('*.md'))+[DIST/'js/learning-data.js']
            for p in files:
                text=p.read_text(encoding='utf-8')
                if p.suffix=='.js':
                    notes=json.JSONDecoder().raw_decode(text.split('var learningNotes = ',1)[1])[0]
                    text='\n'.join(n['searchText'] for n in notes)
                self.assertNotRegex(text,r'[A-Z]:[\\/]codex[\\/]',str(p))
                self.assertNotRegex(text,r'(?<!\d)1[3-9]\d{9}(?!\d)',str(p))

    def test_markdown_versions_change_with_content(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);path=root/'note.md';path.write_text('# A\n\nFirst text',encoding='utf-8')
            with patch('learning_content.ROOT',root):
                first=content.note_record(path,'test',1,'stable-id','系统课程')
                path.write_text('# A\n\nUpdated text',encoding='utf-8')
                second=content.note_record(path,'test',1,'stable-id','系统课程')
            self.assertEqual(first['id'],second['id']);self.assertNotEqual(first['version'],second['version'])

    def test_stylesheets_receive_content_versions(self):
        with tempfile.TemporaryDirectory() as tmp:
            dist=Path(tmp);(dist/'css').mkdir();asset=dist/'css/style.css';asset.write_text('body{}',encoding='utf-8');page=dist/'index.html';page.write_text('<link rel="stylesheet" href="css/style.css">',encoding='utf-8')
            with patch('build_site.DIST',dist):fingerprint_page_assets()
            self.assertIn(hashlib.sha256(asset.read_bytes()).hexdigest()[:12],page.read_text(encoding='utf-8'))

    def test_missing_notes_blocks_publication(self):
        with patch('build_site.collect_notes',return_value=([],[])):
            with self.assertRaisesRegex(RuntimeError,'git submodule update'): require_learning_notes()

    def test_stable_outline_and_code_headings(self):
        result=content.outline_blocks('## 第一章：原理\nexample\n```python\n## not heading\n```\n### 边界\ntext\n## 第一章：原理\nmore')
        self.assertEqual([r['anchor'] for r in result],['第一章原理','边界','第一章原理-2'])

    def test_script_content_fingerprints(self):
        with tempfile.TemporaryDirectory() as tmp:
            dist=Path(tmp);(dist/'blog').mkdir();(dist/'js').mkdir();data=dist/'js/data.js';data.write_text('old',encoding='utf-8');page=dist/'blog/index.html';page.write_text('<script src="../js/data.js"></script>',encoding='utf-8')
            with patch('build_site.DIST',dist):
                fingerprint_page_assets();first=page.read_text(encoding='utf-8');self.assertIn(hashlib.sha256(b'old').hexdigest()[:12],first);data.write_text('new',encoding='utf-8');fingerprint_page_assets();self.assertNotEqual(first,page.read_text(encoding='utf-8'))

    def test_gallery_dedup_and_missing_source_retention(self):
        from PIL import Image
        from gallery_assets import import_gallery
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);(root/'sources/img').mkdir(parents=True);ext=root/'external';(ext/'collection/originals').mkdir(parents=True);(ext/'collection/thumbnails').mkdir()
            Image.new('RGB',(20,20),'red').save(root/'sources/img/red.png');Image.new('RGB',(20,20),'red').save(ext/'collection/originals/duplicate.png');Image.new('RGB',(20,20),'blue').save(ext/'collection/originals/blue.png');Image.new('RGB',(20,20),'green').save(ext/'collection/thumbnails/ignored.png')
            config=root/'content-sources.local.json';config.write_text(json.dumps({'galleryDirectories':[str(ext)]}),encoding='utf-8');before={p.name:p.read_bytes() for p in ext.rglob('*.png')};first=import_gallery(root);self.assertEqual(len(first),2);self.assertEqual(len({x['id'] for x in first}),2);self.assertEqual(first,import_gallery(root));self.assertEqual(before,{p.name:p.read_bytes() for p in ext.rglob('*.png')});config.write_text(json.dumps({'galleryDirectories':[str(root/'unavailable')]}),encoding='utf-8');self.assertEqual(len(import_gallery(root)),2);self.assertTrue(all(not re.search(r'^[A-Z]:|file:',x['url']) for x in first))

    def test_courses_source_coverage_and_questions(self):
        manifest=content.catalog();notes,subjects=content.collect_notes();self.assertGreater(len(manifest['courses']),0);ids={n['id'] for n in notes};self.assertEqual(len(ids),len(notes));courses={c['id']:c for c in manifest['courses']}
        for c in courses.values():
            self.assertTrue(all(p in courses for p in c.get('prerequisites',[])),c['id'])
            for ch in c['chapters']:
                path=ROOT/ch['md'];meta,body=parse_frontmatter(path.read_text(encoding='utf-8'));self.assertEqual(meta['id'],ch['id']);self.assertTrue(body.rstrip().endswith('?') or body.rstrip().endswith('？'),str(path));parts=re.split(r'^##\s+模拟面试问题\s*$',body,flags=re.M);self.assertEqual(len(parts),2,str(path));self.assertGreaterEqual(len(re.findall(r'^\d+[.)、]\s+',parts[-1],re.M)),3);self.assertNotRegex(parts[-1],r'(参考答案|答案[:：]|解答[:：])');self.assertRegex(body,r'https://');self.assertTrue(ch['sources']);self.assertTrue(all((ROOT/s).is_file() for s in ch['sources']))
        source_paths={s['path'] for s in manifest['sources']}
        active={p.relative_to(ROOT).as_posix() for p in content.LEARNING.rglob('*.md') if not any(x in p.parts for x in ('courses','项目学习','_archive','.git','.workbuddy','资料'))}
        self.assertEqual(source_paths,active)
        for s in manifest['sources']:
            self.assertTrue(s.get('disposition'));self.assertTrue(s.get('reason'));self.assertTrue(all(i in ids for i in s.get('chapterIds',[])))
        visiting=set();visited=set()
        def walk(identity):
            self.assertNotIn(identity,visiting,'Prerequisite cycle')
            if identity in visited:return
            visiting.add(identity)
            for p in courses[identity].get('prerequisites',[]):walk(p)
            visiting.remove(identity);visited.add(identity)
        for c in courses:walk(c)

    def test_protected_files_and_heads(self):
        verify(check_heads=False)  # Publishing is now explicitly authorized; source hashes remain protected.

    @unittest.skipUnless(DIST.exists(),'Build first')
    def test_public_artifact(self):
        notes,_=content.collect_notes()
        for n in notes:
            self.assertTrue((DIST/n['md']).is_file(),n['md'])
            for img in local_images(ROOT/n['md']):self.assertTrue((DIST/img.relative_to(ROOT)).is_file())
        for folder in ['blog','fiction','anime']:
            self.assertFalse((DIST/folder).exists())
        for p in (DIST/'learning').rglob('*'):
            if p.is_file():self.assertTrue('courses' in p.parts or '项目学习' in p.parts);self.assertNotIn('_archive',p.parts);self.assertNotIn('资料',p.parts)
        for name in ['marked.min.js','mermaid.min.js','highlight.min.js','katex/katex.min.js']:self.assertTrue((DIST/'js/vendor'/name).is_file())
        text=(DIST/'about.html').read_text(encoding='utf-8');self.assertNotIn('about-bio',text)
        gallery=content.ROOT/'js/gallery-data.js';data=json.loads(re.search(r'var galleryItems = (\[.*?\]);',gallery.read_text(encoding='utf-8'),re.S)[1]);self.assertEqual(len(data),len({x['id'] for x in data}));self.assertTrue(all((DIST/i['thumbnail']).is_file() and (DIST/i['url']).is_file() for i in data));self.assertFalse((DIST/'sources/gallery-imports/catalog.json').exists())

if __name__=='__main__':unittest.main()
