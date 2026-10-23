/* Safe Markdown reader for canonical courses and unchanged project notes. */
function parseFrontmatter(text) {
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const match = text.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) return {meta: {}, body: text};
  const meta = {};
  match[1].split('\n').forEach(line => {
    const i = line.indexOf(':');
    if (i < 0) return;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    meta[key] = value.startsWith('[') && value.endsWith(']')
      ? value.slice(1, -1).split(',').map(v => v.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
      : value.replace(/^['"]|['"]$/g, '');
  });
  return {meta, body: text.slice(match[0].length)};
}
function articleHref(item) {
  if (item.md) return assetPath('article.html') + '?md=' + encodeURIComponent(item.md);
  return item.url ? assetPath(item.url) : '#';
}
let markedPromise;
let mathPromise;
function ensureMath() {
  if (typeof katex !== 'undefined') return Promise.resolve();
  if (!mathPromise) mathPromise = new Promise((resolve, reject) => {
    const style = document.createElement('link'); style.rel = 'stylesheet';
    style.href = assetPath('js/vendor/katex/katex.min.css'); document.head.appendChild(style);
    const script = document.createElement('script'); script.src = assetPath('js/vendor/katex/katex.min.js');
    script.onload = resolve; script.onerror = () => { mathPromise = null; reject(new Error('Math renderer unavailable')); };
    document.head.appendChild(script);
  });
  return mathPromise;
}
function renderMarkdown(body) {
  const parser = new marked.Marked({gfm: true, breaks: false});
  // Protect formulas from Markdown emphasis and backslash processing.
  parser.use({extensions: [
    {name: 'displayMath', level: 'block', start: src => src.indexOf('$$'),
      tokenizer(src) { const m = src.match(/^\$\$\s*\n([\s\S]+?)\n\$\$(?:\n|$)/); if (m) return {type: 'displayMath', raw: m[0], text: m[1]}; },
      renderer(token) { return `<div class="math-source" data-display="true">${escapeHtml(token.text)}</div>`; }},
    {name: 'inlineMath', level: 'inline', start: src => src.indexOf('$'),
      tokenizer(src) { const m = src.match(/^\$(\$?)([^\n]+?)\$\1(?!\$)/); if (m) return {type: 'inlineMath', raw: m[0], text: m[2], display: !!m[1]}; },
      renderer(token) { return `<span class="math-source" data-display="${token.display}">${escapeHtml(token.text)}</span>`; }}
  ]});
  return parser.parse(body);
}
function ensureMarked() {
  if (typeof marked !== 'undefined') return Promise.resolve();
  if (!markedPromise) markedPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = assetPath('js/vendor/marked.min.js');
    script.onload = resolve;
    script.onerror = () => { markedPromise = null; reject(new Error('Markdown renderer unavailable')); };
    document.head.appendChild(script);
  });
  return markedPromise;
}

const scriptPromises=new Map();
function loadLibrary(file,ready){if(ready())return Promise.resolve();if(!scriptPromises.has(file))scriptPromises.set(file,new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=assetPath('js/vendor/'+file);s.onload=resolve;s.onerror=()=>{scriptPromises.delete(file);reject(new Error('无法加载 '+file));};document.head.append(s);}));return scriptPromises.get(file);}
function headingSlug(text){return text.toLowerCase().replace(/[^\p{L}\p{N}_\s-]/gu,'').trim().replace(/\s+/g,'-')||'section';}
function safeMarkdownDOM(html){
  const parsed=new DOMParser().parseFromString(html,'text/html');parsed.querySelectorAll('script,iframe,object,embed,style,link,form,meta,base,svg,math,template').forEach(n=>n.remove());
  const allowed=new Set(['P','H1','H2','H3','H4','H5','H6','A','IMG','UL','OL','LI','PRE','CODE','STRONG','EM','DEL','S','HR','BR','TABLE','THEAD','TBODY','TR','TH','TD','BLOCKQUOTE','SPAN','DIV','DETAILS','SUMMARY','SUP','SUB','KBD']);
  parsed.body.querySelectorAll('*').forEach(el=>{if(!allowed.has(el.tagName)){el.replaceWith(...el.childNodes);return;}for(const attr of [...el.attributes]){if(!['href','src','alt','title','class','data-display','start','colspan','rowspan'].includes(attr.name))el.removeAttribute(attr.name);if(attr.name==='class'&&!/^(math-source|language-[\w+-]+)$/.test(attr.value))el.removeAttribute('class');}for(const attr of ['src','href']){const value=el.getAttribute(attr);if(value&&/^(?:\s*(?:javascript|data|vbscript|file):|\s*\/\/)/i.test(value))el.removeAttribute(attr);}});
  return parsed.body;
}
function resolveNotePath(reference,md){try{const u=new URL(reference.replace(/\\/g,'/'),new URL(assetPath(md),location.origin));if(u.origin!==location.origin||!u.pathname.startsWith(getBasePath()))return null;return {path:decodeURIComponent(u.pathname.slice(getBasePath().length)),hash:u.hash};}catch{return null;}}
function mappedNotes(path){const direct=learningNotes.find(n=>n.md===path);if(direct)return [direct];return (sourceMappings[path]||[]).map(id=>learningNotes.find(n=>n.id===id)).filter(Boolean);}
function rewriteArticleLinks(container,note){
  container.querySelectorAll('a[href],img[src]').forEach(el=>{const attr=el.tagName==='IMG'?'src':'href',value=el.getAttribute(attr);if(!value||value.startsWith('#'))return;try{const u=new URL(value.replace(/\\/g,'/'),new URL(assetPath(note.md),location.origin));if(!['http:','https:'].includes(u.protocol)){el.removeAttribute(attr);return;}if(u.origin===location.origin){const path=decodeURIComponent(u.pathname.slice(getBasePath().length));if(attr==='href'&&path.endsWith('.md'))el.href=articleHref({md:path})+u.hash;else el.setAttribute(attr,u.href);}else if(attr==='href'){el.target='_blank';el.rel='noopener noreferrer';}if(el.tagName==='IMG'){el.loading='lazy';el.decoding='async';}}catch{el.removeAttribute(attr);}});
  container.querySelectorAll('code').forEach(code=>{if(code.closest('pre')||!code.textContent.trim().endsWith('.md'))return;const value=code.textContent.trim(),resolved=resolveNotePath(value,note.md);let matches=resolved?mappedNotes(resolved.path):[];if(!matches.length){const keys=Object.keys(sourceMappings).filter(k=>k.endsWith('/'+value));if(keys.length===1)matches=mappedNotes(keys[0]);}if(matches.length===1){const a=document.createElement('a');a.href=articleHref(matches[0]);code.replaceWith(a);a.append(code);}});
}
function applyReaderPreferences(){const p=readStorage().preferences;for(const[key,property,unit]of [['size','--reading-size','px'],['line','--reading-line',''],['width','--reading-width','px']]){if(p[key])document.documentElement.style.setProperty(property,p[key]+unit);else document.documentElement.style.removeProperty(property);}}
function readerTree(note){const peers=learningNotes.filter(n=>n.subject===note.subject);return `<aside class="reader-nav" id="reader-nav" aria-label="课程章节"><button class="reader-nav-close" aria-label="关闭章节目录">关闭 ×</button><h2>${escapeHtml(subjectName(note.subject))}</h2>${peers.map(n=>`<a class="${n.id===note.id?'active':''}" href="${articleHref(n)}">${String(Math.max(1,n.order)).padStart(2,'0')} ${escapeHtml(n.title)}</a>`).join('')}</aside>`;}
let articleEpoch=0;
async function loadMarkdownArticle(mdPath){
  const app=document.getElementById('app'),epoch=++articleEpoch;const note=learningNotes.find(n=>n.md===mdPath);
  if(!note){const mapped=mappedNotes(mdPath);app.innerHTML=pageHeading('ARCHIVE / SOURCE MAP',mapped.length?'原稿已整理为系统课程':'这份档案暂未收录',mapped.length?'选择对应章节继续阅读，原始笔记保留在本地。':'笔记可能已移动、删除或不在本次公开范围内。')+`<div class="note-list">${mapped.map(n=>noteCard(n)).join('')}</div><a class="text-link" href="${assetPath('learning.html')}">返回学习档案 →</a>`;return;}
  app.innerHTML='<p class="loading" role="status">正在翻开章节…</p>';
  try{
    const [res]=await Promise.all([fetch(assetPath(note.md)+'?v='+note.version),ensureMarked()]);if(!res.ok)throw new Error('HTTP '+res.status);let{body}=parseFrontmatter(await res.text());if(!app.isConnected||epoch!==articleEpoch)return;
    const source=safeMarkdownDOM(renderMarkdown(body.replace(/^\s*#\s+.+\n?/,'')));rewriteArticleLinks(source,note);applyReaderPreferences();
    const peers=learningNotes.filter(n=>n.subject===note.subject),index=peers.findIndex(n=>n.id===note.id),adjacent=(n,label)=>n?`<a href="${articleHref(n)}"><span>${label}</span><strong>${escapeHtml(n.title)}</strong></a>`:'<span></span>',prefs=readStorage().preferences;
    app.innerHTML=`<div class="reader-progress" aria-hidden="true"></div><div class="reader-layout">${readerTree(note)}<article class="reader-content"><div class="reader-breadcrumb"><a href="${assetPath('learning.html')}">学习档案</a><span>/</span><a href="${assetPath('learning.html')}?subject=${note.subject}">${escapeHtml(subjectName(note.subject))}</a></div><h1>${escapeHtml(note.title)}</h1><div class="article-meta"><span>${note.kind==='项目原文'?'项目原文 · 本次未改写':(note.subject.startsWith('java')?'系统课程 · Java 17+ / Boot 3.x':'系统课程')}</span><span>${note.minutes} MIN READ</span>${note.date?`<span>更新 ${formatDate(note.date)}</span>`:''}</div><div class="reader-tools"><button class="reader-menu-button" id="open-reader-nav" aria-controls="reader-nav" aria-expanded="false">章节目录 ☰</button><label>字号<select id="reader-size">${[16,18,20].map(v=>`<option value="${v}" ${prefs.size===v||(!prefs.size&&v===(matchMedia('(max-width:760px)').matches?16:18))?'selected':''}>${v}</option>`).join('')}</select></label><label>行距<select id="reader-line">${[1.7,1.85,2].map(v=>`<option value="${v}" ${(prefs.line||1.85)===v?'selected':''}>${v}</option>`).join('')}</select></label><label class="width-tool">行宽<select id="reader-width">${[680,760,880].map(v=>`<option value="${v}" ${(prefs.width||760)===v?'selected':''}>${v}</option>`).join('')}</select></label><button id="mark-read"></button>${note.questions.length?`<a class="button" href="${assetPath('learning.html')}?mode=review&subject=${note.subject}">问题复习 ↗</a>`:''}</div><div class="article-body"></div><nav class="article-adjacent" aria-label="相邻章节">${adjacent(peers[index-1],'← PREVIOUS')}${adjacent(peers[index+1],'NEXT →')}</nav></article><aside class="article-toc"><h2>本篇目录</h2><nav id="article-toc-links" aria-label="本篇目录"></nav><a href="#app">↑ 回到顶部</a></aside></div>`;
    document.title=note.title+' · Roger 数字空间';const content=app.querySelector('.article-body');content.append(...source.childNodes);
    const course=courseMap.courses.find(c=>c.id===note.subject),prerequisiteIds=course?.prerequisites||[];
    const sourcePaths=new Set(course?.chapters.find(c=>c.id===note.id)?.sources||[]);
    const related=learningNotes.filter(n=>n.id!==note.id&&n.kind==='系统课程'&&courseMap.courses.some(c=>c.chapters.some(ch=>ch.id===n.id&&ch.sources.some(s=>sourcePaths.has(s))))).slice(0,3);
    const connections=[...prerequisiteIds.map(id=>({title:'先修 · '+subjectName(id),note:learningNotes.find(n=>n.subject===id)})),...related.map(n=>({title:'相关 · '+n.title,note:n}))].filter(x=>x.note);
    if(connections.length){const links=document.createElement('nav');links.className='chapter-connections';links.setAttribute('aria-label','先修与相关章节');links.innerHTML='<h2>连接阅读</h2>'+connections.map(x=>`<a href="${articleHref(x.note)}">${escapeHtml(x.title)} →</a>`).join('');app.querySelector('.reader-content').append(links);}
    const headings=[...content.querySelectorAll('h2,h3')],seen={};for(const h of headings){const slug=headingSlug(h.textContent);seen[slug]=(seen[slug]||0)+1;h.id=slug+(seen[slug]>1?'-'+seen[slug]:'');}
    const toc=app.querySelector('#article-toc-links');toc.innerHTML=headings.map(h=>`<a class="${h.tagName==='H3'?'toc-sub':''}" href="#${encodeURIComponent(h.id)}">${escapeHtml(h.textContent)}</a>`).join('');
    const drawerToc=document.createElement('nav');drawerToc.className='drawer-toc';drawerToc.setAttribute('aria-label','抽屉内本篇目录');drawerToc.innerHTML='<h2>本篇目录</h2>'+toc.innerHTML;app.querySelector('#reader-nav').append(drawerToc);
    const navButton=app.querySelector('#open-reader-nav'),nav=app.querySelector('#reader-nav');
    const closeReaderNav=()=>{nav.classList.remove('open');navButton.setAttribute('aria-expanded','false');navButton.focus();};
    navButton.onclick=()=>{const open=nav.classList.toggle('open');navButton.setAttribute('aria-expanded',String(open));if(open)app.querySelector('.reader-nav-close').focus();};app.querySelector('.reader-nav-close').onclick=closeReaderNav;
    drawerToc.addEventListener('click',e=>{if(e.target.closest('a'))closeReaderNav();});
    const closeNav=e=>{if(e.key==='Escape'&&nav.classList.contains('open'))closeReaderNav();};document.addEventListener('keydown',closeNav);pageDisposers.push(()=>document.removeEventListener('keydown',closeNav));
    for(const key of ['size','line','width'])app.querySelector('#reader-'+key).onchange=e=>{const state=readStorage();state.preferences[key]=Number(e.target.value);writeStorage(state);applyReaderPreferences();};
    const button=app.querySelector('#mark-read');const updateRead=()=>{const state=getReadingState()[note.id]||{};button.textContent=state.read?'✓ 已读 · 点击撤销':'标记为已读';button.setAttribute('aria-pressed',String(!!state.read));};button.onclick=()=>{const state=readStorage();state.reading[note.id]={...state.reading[note.id],read:!state.reading[note.id]?.read};writeStorage(state);updateRead();};updateRead();
    content.querySelectorAll('table').forEach(table=>{const div=document.createElement('div');div.className='table-scroll';div.tabIndex=0;div.setAttribute('aria-label','可横向滚动的表格');table.replaceWith(div);div.append(table);});
    const images=[...content.querySelectorAll('img')];images.forEach((image,i)=>image.onclick=()=>openImage(images.map(img=>({url:img.src,caption:img.alt})),i));
    const codeBlocks=[...content.querySelectorAll('pre>code')],diagrams=codeBlocks.filter(c=>c.classList.contains('language-mermaid')),normal=codeBlocks.filter(c=>!diagrams.includes(c));
    if(normal.length){await loadLibrary('highlight.min.js',()=>typeof hljs!=='undefined');if(!app.isConnected)return;for(const code of normal){const pre=code.parentElement;const lang=code.className.replace('language-','')||'TEXT';if(hljs.getLanguage(lang))hljs.highlightElement(code);const label=document.createElement('span');label.className='code-language';label.textContent=lang;const copy=document.createElement('button');copy.className='copy-code';copy.textContent='复制代码';copy.onclick=async()=>{try{await navigator.clipboard.writeText(code.textContent);copy.textContent='已复制';setTimeout(()=>{copy.textContent='复制代码';},1500);}catch{showToast('复制失败，请手动选择代码');}};pre.prepend(label,copy);}}
    if(content.querySelector('.math-source')){await ensureMath();if(!app.isConnected)return;content.querySelectorAll('.math-source').forEach(el=>katex.render(el.textContent,el,{displayMode:el.dataset.display==='true',throwOnError:false,trust:false,strict:'ignore'}));}
    if(diagrams.length){await loadLibrary('mermaid.min.js',()=>typeof mermaid!=='undefined');if(!app.isConnected)return;mermaid.initialize({startOnLoad:false,securityLevel:'strict',theme:'neutral',fontFamily:'Microsoft YaHei, sans-serif',flowchart:{htmlLabels:false},suppressErrorRendering:true});for(let i=0;i<diagrams.length;i++){const code=diagrams[i];try{const source=code.textContent.replace(/%%\{[\s\S]*?\}%%/g,'');const result=await mermaid.render('diagram-'+epoch+'-'+i,source);if(!app.isConnected)return;const container=document.createElement('div');container.className='diagram';container.setAttribute('role','img');container.setAttribute('aria-label','章节流程图');container.innerHTML=result.svg;code.parentElement.replaceWith(container);}catch{code.parentElement.prepend(document.createTextNode('流程图暂未渲染，保留源码：\n'));}}}
    if(!app.isConnected)return;const previous=getReadingState()[note.id]||getReadingState()[note.md];let anchor='';try{anchor=decodeURIComponent(location.hash.slice(1));}catch{}if(anchor){const target=document.getElementById(anchor);if(target)target.scrollIntoView();else if(/^section-\d+$/.test(anchor))headings[Number(anchor.slice(8))]?.scrollIntoView();}else if(previous?.anchor&&document.getElementById(previous.anchor))document.getElementById(previous.anchor).scrollIntoView();else if(previous?.ratio)window.scrollTo(0,previous.ratio*Math.max(0,document.documentElement.scrollHeight-innerHeight));
    let timer,currentAnchor=anchor||previous?.anchor||'';
    const checkpoint=()=>{const state=readStorage();state.reading[note.id]={...state.reading[note.id],visited:Date.now(),ratio:scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),anchor:currentAnchor};state.last=note.id;writeStorage(state);};
    const observe=()=>{const h=headings.filter(h=>h.getBoundingClientRect().top<180).at(-1);if(h)currentAnchor=h.id;toc.querySelectorAll('a').forEach(a=>a.classList.toggle('active',decodeURIComponent(a.hash.slice(1))===currentAnchor));const progress=app.querySelector('.reader-progress');if(progress)progress.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%';clearTimeout(timer);timer=setTimeout(checkpoint,350);};window.addEventListener('scroll',observe,{passive:true});pageDisposers.push(()=>{clearTimeout(timer);checkpoint();window.removeEventListener('scroll',observe);});checkpoint();observe();
    const query=new URLSearchParams(location.search).get('q');if(query){const escaped=query.toLowerCase();const target=headings.find(h=>h.textContent.toLowerCase().includes(escaped));if(target&&!anchor)target.scrollIntoView();}
  }catch(e){if(!app.isConnected||epoch!==articleEpoch)return;console.error(e);app.innerHTML=pageHeading('READER / ERROR','暂时无法打开章节','请检查本地服务器或资源文件后重试。')+`<a class="button" href="${articleHref(note)}">重新加载</a><a class="text-link" href="${assetPath('learning.html')}">返回学习档案 →</a>`;}
}
function initArticlePage(){const params=new URLSearchParams(location.search),md=params.get('md'),id=params.get('id');const note=id?learningNotes.find(n=>n.id===id):null;if(note)loadMarkdownArticle(note.md);else if(md)loadMarkdownArticle(md);else document.getElementById('app').innerHTML=pageHeading('READER','选择一个章节开始')+`<a class="button" href="${assetPath('learning.html')}">打开学习档案 →</a>`;}
