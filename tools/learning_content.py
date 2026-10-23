"""Explicit course catalog + unchanged project originals; source drafts are not published."""
from __future__ import annotations
import hashlib
import json
import re
import subprocess
from pathlib import Path
from rebuild_content import ROOT, JS, parse_frontmatter, write_const_file
from public_content import public_markdown

LEARNING = ROOT / 'learning'
EXCLUDED = {'_archive', '资料', '.git', '.workbuddy', 'node_modules'}

def plain_text(text: str) -> str:
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'!?\[([^\]]*)\]\([^)]*\)', r'\1', text)
    return re.sub(r'\s+', ' ', re.sub(r'[`#*>|~]', ' ', text)).strip()

def heading_slug(text: str) -> str:
    return re.sub(r'\s+', '-', re.sub(r'[^\w\s-]', '', text.lower())).strip('-') or 'section'

def modification_date(path: Path) -> str:
    try:
        p = subprocess.run(['git','log','-1','--format=%cs','--',path.name],cwd=path.parent,capture_output=True,text=True,check=False)
        return p.stdout.strip() if re.fullmatch(r'\d{4}-\d{2}-\d{2}',p.stdout.strip()) else ''
    except OSError:
        return ''

def outline_blocks(body: str) -> list[dict]:
    blocks=[];seen={};fenced=False;current=None
    for line in body.splitlines():
        if line.lstrip().startswith(('```','~~~')): fenced=not fenced
        match=re.match(r'^(#{2,3})\s+(.+?)\s*#*$',line) if not fenced else None
        if match:
            title=plain_text(match.group(2));slug=heading_slug(title);seen[slug]=seen.get(slug,0)+1
            anchor=slug+(f'-{seen[slug]}' if seen[slug]>1 else '')
            current={'title':title,'anchor':anchor,'level':len(match.group(1)),'text':''};blocks.append(current)
        elif current: current['text']+=' '+plain_text(line)
    return blocks

def note_record(path: Path, course: str, order: int, identity: str, kind: str) -> dict | None:
    meta,body=parse_frontmatter(public_markdown(path.read_text(encoding='utf-8-sig')))
    if str(meta.get('draft','')).lower()=='true' or not body.strip().strip('#').strip(): return None
    h=re.search(r'^#\s+(.+)$',body,re.M)
    title=meta.get('title') or (h.group(1) if h else path.stem)
    text=plain_text(body);blocks=outline_blocks(body)
    paragraphs=[plain_text(p) for p in body.split('\n\n') if p.strip() and not p.lstrip().startswith(('#','|','```','---'))]
    description=meta.get('description') or next((p for p in paragraphs if len(p)>15),'项目原文与实践资料，保留原始记录。')[:150]
    tail=re.split(r'^##\s+模拟面试问题\s*$',body,flags=re.M)
    questions=[]
    if len(tail)>1:
        for q in re.findall(r'^\s*\d+[.)、]\s+(.+)$',tail[-1],re.M):
            q=plain_text(q);questions.append({'id':hashlib.sha256((identity+'\n'+q).encode()).hexdigest()[:16],'text':q})
    return {'id':identity,'version':hashlib.sha256(path.read_bytes()).hexdigest()[:12],'md':path.relative_to(ROOT).as_posix(),'title':title,'description':description,'subject':course,'kind':kind,'order':order,'date':meta.get('date') or modification_date(path),'tags':meta.get('tags',[]) if isinstance(meta.get('tags',[]),list) else [meta['tags']],'minutes':max(1,round(len(text)/450)),'outline':blocks,'questions':questions,'searchText':text.lower()}

def catalog() -> dict:
    path=LEARNING/'course-map.json'
    return json.loads(path.read_text(encoding='utf-8')) if path.is_file() else {'courses':[],'sources':[]}

def collect_notes() -> tuple[list[dict],list[dict]]:
    manifest=catalog();notes=[];subjects=[];ids=set();paths=set()
    for course in manifest['courses']:
        children=[]
        for chapter in sorted(course['chapters'],key=lambda x:x['order']):
            path=ROOT/chapter['md']
            if not path.resolve().is_relative_to((LEARNING/'courses').resolve()): raise ValueError('Course escaped canonical directory')
            if chapter['id'] in ids or chapter['md'] in paths: raise ValueError('Duplicate chapter identity')
            ids.add(chapter['id']);paths.add(chapter['md'])
            item=note_record(path,course['id'],chapter['order'],chapter['id'],'系统课程')
            if item: notes.append(item);children.append(item)
        if children: subjects.append({'id':course['id'],'name':course['title'],'description':course['description'],'prerequisites':course.get('prerequisites',[]),'count':len(children),'entry':children[0]['md']})
    projects=[]
    for path in sorted((LEARNING/'项目学习').rglob('*.md')):
        if any(p in EXCLUDED or p.startswith('.') for p in path.relative_to(LEARNING).parts): continue
        rel=path.relative_to(ROOT).as_posix();identity='project-'+hashlib.sha256(rel.encode()).hexdigest()[:12]
        day=re.search(r'day(\d+)',rel);order=int(day[1])+10 if day else (0 if path.stem=='README' else 1)
        item=note_record(path,'projects',order,identity,'项目原文')
        if item: projects.append(item)
    projects.sort(key=lambda n:(n['order'],n['md']));notes+=projects
    if projects: subjects.append({'id':'projects','name':'项目学习 · 原文资料','description':'保留的项目笔记与课程讲义；正文未经本次重写。','prerequisites':[],'count':len(projects),'entry':projects[0]['md']})
    return notes,subjects

def rebuild_learning() -> list[dict]:
    notes,subjects=collect_notes();manifest=catalog()
    mapping={s['path']:s.get('chapterIds',[]) for s in manifest.get('sources',[]) if s.get('chapterIds')}
    write_const_file(JS/'learning-data.js',['// 自动生成：规范课程与项目原文索引。'],{'learningNotes':notes,'learningSubjects':subjects,'courseMap':manifest,'sourceMappings':mapping})
    return notes

if __name__=='__main__': print(f'Indexed {len(rebuild_learning())} notes')
