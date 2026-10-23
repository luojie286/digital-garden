/* Shared shell. Content and the persistent audio transport live separately. */
const siteRoot = new URL('../', document.currentScript.src);
function getBasePath() { return siteRoot.pathname; }
function assetPath(path) {
  if (!path) return '';
  if (/^https?:\/\//.test(path)) return path;
  return getBasePath() + path.replace(/^\.\.\//, '').replace(/^\//, '').split('/').map(encodeURIComponent).join('/');
}
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function formatDate(value) { return value ? value.slice(0,10).replaceAll('-','.') : ''; }
function showToast(message) { const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(el.timer);el.timer=setTimeout(()=>el.classList.remove('show'),3000); }
const pageDisposers=[];
function disposePage() { pageDisposers.splice(0).forEach(fn=>fn()); }
const navItems=[['index','首页','01'],['projects','项目','02'],['gallery','画作','03'],['music','音乐','04'],['learning','学习笔记','05'],['about','关于','06']];
function renderNavbar() {
  const view=document.getElementById('app').dataset.view;
  document.getElementById('site-header').innerHTML=`<a class="brand" href="${assetPath('index.html')}">ROGER <span>／ 数字空间</span></a><span class="header-label">MECHANICAL PAPER<br>PERSONAL ARCHIVE · 2026</span><form id="site-search"><label class="sr-only" for="global-query">搜索全部学习笔记</label><input id="global-query" name="q" placeholder="搜索知识、章节、问题…" type="search"><button aria-label="搜索">↗</button></form><button id="mobile-nav" aria-label="打开导航" aria-expanded="false">☰</button>`;
  document.getElementById('site-nav').innerHTML=`<nav aria-label="主导航">${navItems.map(([id,name,n])=>`<a href="${assetPath(id+'.html')}" ${id===(view==='article'?'learning':view)?'aria-current="page"':''}><span>${n}</span>${name}</a>`).join('')}</nav><div class="nav-foot"><span class="alpha">α</span><p>THINK / BUILD<br>LISTEN / COLLECT</p><span>记录，亦是连接。</span></div>`;
  document.getElementById('mobile-nav').onclick=()=>{const open=document.body.classList.toggle('nav-open');document.getElementById('mobile-nav').setAttribute('aria-expanded',open);};
  document.getElementById('site-search').onsubmit=e=>{e.preventDefault();navigateTo(assetPath('learning.html')+'?q='+encodeURIComponent(document.getElementById('global-query').value));};
}
function pageHeading(eyebrow,title,description='',extra='') { return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${description?`<p>${description}</p>`:''}</div>${extra}</div>`; }
function emptyState(title,description) {return `<div class="empty-state"><span class="eyebrow">NO RECORDS</span><h2>${title}</h2><p>${description}</p></div>`;}
function initUptime(){
  const el=document.getElementById('site-uptime');
  if(!el) return;
  const startValue=(typeof siteConfig!=='undefined'&&siteConfig.startDate)||'2026-07-14T00:00:00';
  const start=new Date(startValue);
  const startTime=start.getTime();
  const since=document.getElementById('site-since');
  if(since&&!Number.isNaN(startTime)) since.textContent=`SINCE ${start.getFullYear()}.${String(start.getMonth()+1).padStart(2,'0')}.${String(start.getDate()).padStart(2,'0')}`;
  const tick=()=>{
    const diff=Math.max(0,Date.now()-startTime);
    const days=Math.floor(diff/86400000);
    const hours=Math.floor(diff%86400000/3600000);
    const minutes=Math.floor(diff%3600000/60000);
    el.textContent=`${days} 天 ${hours} 小时 ${minutes} 分`;
  };
  tick();
  const timer=setInterval(tick,60000);
  pageDisposers.push(()=>clearInterval(timer));
}
function renderHome() {
  const app=document.getElementById('app'); const state=getReadingState();
  const latest=learningNotes.filter(n=>state[n.id]?.visited||state[n.md]?.visited).sort((a,b)=>(state[b.id]?.visited||state[b.md]?.visited)-(state[a.id]?.visited||state[a.md]?.visited))[0];
  app.innerHTML=`<section class="home-hero"><div class="hero-copy"><div class="eyebrow">A PERSONAL FIELD NOTE / 001</div><h1>思考的轨迹，<br>在此交汇。</h1><p>代码与原理，实践与热爱。<br>把零散的发现，连成可以再次出发的地图。</p><div class="hero-actions"><a class="button primary" href="${assetPath('learning.html')}">打开学习档案 ↗</a><a class="button" href="${assetPath('projects.html')}">项目实践</a></div><div class="hero-meta"><span>${learningNotes.filter(n=>n.kind!=='项目原文').length} 篇课程</span><span>${galleryItems.length} 幅收藏</span><span>${musicList.length} 首音乐</span></div></div><div class="hero-machine"><div class="eyebrow">ROTATION UNIT / α—01</div>${mechanismMarkup('home')}<div class="machine-caption">THE MECHANICS OF CURIOSITY<span>探索 · 积累 · 连接</span></div></div></section>
    ${latest?`<a class="resume-strip" href="${articleHref(latest)}"><span class="eyebrow">CONTINUE READING</span><strong>${escapeHtml(latest.title)}</strong><span>继续上次阅读 →</span></a>`:''}
    <section class="home-section"><div class="section-title"><h2>知识坐标</h2><a href="${assetPath('learning.html')}">全部课程 →</a></div><div class="course-grid">${learningSubjects.filter(s=>s.id!=='projects').map((s,i)=>`<a class="course-card" href="${assetPath('learning.html')}?subject=${encodeURIComponent(s.id)}"><span class="eyebrow">${String(i+1).padStart(2,'0')} / ${s.count} CHAPTERS</span><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p><span class="card-arrow">↗</span></a>`).join('')}</div></section>
    <section class="home-bottom"><a class="feature-panel" href="${assetPath('gallery.html')}"><img src="${assetPath(galleryItems[0]?.thumbnail||galleryItems[0]?.url)}" alt="画作收藏" loading="lazy"><div><span class="eyebrow">VISUAL ARCHIVE</span><h2>光影收藏室</h2><p>留住那些值得再看一眼的画面。</p></div></a><a class="feature-panel paper-panel" href="${assetPath('music.html')}"><span class="big-symbol">♫</span><div><span class="eyebrow">SOUND ARCHIVE</span><h2>旋律档案</h2><p>为思考，留一段背景音。</p></div></a></section>
    <section class="site-status" aria-label="站点运行状态"><span class="status-dot" aria-hidden="true"></span><span class="eyebrow">SITE STATUS</span><span class="status-uptime">站点运行 <b id="site-uptime">--</b></span><span class="status-note" id="site-since">SINCE 2026.07.14</span></section>`;
  initUptime();
}
function renderProjects() {
  document.getElementById('app').innerHTML=pageHeading('FIELD WORK / PROJECTS','项目档案','把原理放进真实场景，再把问题带回笔记。')+`<div class="project-list">${projects.map((p,i)=>`<article class="project-record"><span class="record-number">0${i+1}</span><div><span class="eyebrow">${escapeHtml(p.status)}</span><h2>${escapeHtml(p.title)}</h2><p>${escapeHtml(p.description)}</p><div class="tags">${p.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div></div><a class="button" href="${p.md?articleHref(p):assetPath('index.html')}">打开档案 ↗</a></article>`).join('')}</div><a class="text-link" href="${assetPath('learning.html')}?subject=projects">浏览保留的项目学习原文 →</a>`;
}
let imageCollection=[], imageIndex=0;
function openImage(items,index) {imageCollection=items;imageIndex=index;const d=document.getElementById('image-dialog');paintImage();if(!d.open)d.showModal();}
function paintImage(){const item=imageCollection[imageIndex];if(!item)return;const d=document.getElementById('image-dialog');d.querySelector('img').src=assetPath(item.url);d.querySelector('img').alt=item.caption||'笔记插图';d.querySelector('figcaption').textContent=`${item.caption||''} · ${imageIndex+1} / ${imageCollection.length}`;d.querySelectorAll('[data-image-step]').forEach(b=>b.hidden=imageCollection.length<2);}
function layoutGallery(grid) {
  if(!grid) return;
  const cards=[...grid.querySelectorAll('.artwork')];
  if(!cards.length) return;
  const row=parseFloat(getComputedStyle(grid).getPropertyValue('grid-auto-rows'))||2;
  const gap=parseFloat(getComputedStyle(cards[0]).marginBottom)||0;
  cards.forEach(card=>{
    const height=card.getBoundingClientRect().height;
    card.style.gridRowEnd=`span ${Math.max(1,Math.ceil((height+gap)/row))}`;
  });
}
function renderGallery() {
  const app=document.getElementById('app');app.innerHTML=pageHeading('VISUAL ARCHIVE / GALLERY','光影收藏室','画面无需解释，驻足便有回响。',`<span class="data-label">${galleryItems.length} 幅 / 收藏</span>`)+`<div class="toolbar"><label>来源 <select id="gallery-source"><option value="">全部来源</option>${[...new Set(galleryItems.map(x=>x.source||'站内收藏'))].map(s=>`<option>${escapeHtml(s)}</option>`).join('')}</select></label><label class="search-input">⌕ <input type="search" id="gallery-search" placeholder="搜索画作…" aria-label="搜索画作"></label><span id="gallery-count" aria-live="polite"></span></div><div id="gallery-grid" class="gallery-grid"></div>`;
  function render(){
    const q=app.querySelector('#gallery-search').value.toLowerCase(),source=app.querySelector('#gallery-source').value;
    const items=galleryItems.filter(i=>(!source||i.source===source)&&i.caption.toLowerCase().includes(q));
    const grid=app.querySelector('#gallery-grid');
    app.querySelector('#gallery-count').textContent=items.length+' 幅';
    grid.innerHTML=items.length?items.map((x,i)=>`<button class="artwork" data-image="${i}" aria-label="查看 ${escapeHtml(x.caption)}"><img src="${assetPath(x.thumbnail||x.url)}" alt="${escapeHtml(x.caption)}" style="aspect-ratio:${Number(x.width)||4}/${Number(x.height)||3}" loading="lazy" decoding="async"><span><b>${String(i+1).padStart(3,'0')}</b>${escapeHtml(x.caption)}<i>↗</i></span></button>`).join(''):emptyState('没有匹配的画作','更换来源或关键词试试。');
    app.querySelectorAll('[data-image]').forEach(b=>b.onclick=()=>openImage(items,Number(b.dataset.image)));
    layoutGallery(grid);
  }
  app.querySelector('#gallery-source').onchange=render;app.querySelector('#gallery-search').oninput=render;render();
}
if(typeof window!=='undefined') window.addEventListener('resize',()=>{const grid=document.getElementById('gallery-grid');if(grid)layoutGallery(grid);});
function bootstrapPage() {
  currentRoute=location.pathname+location.search;
  const app=document.getElementById('app'),view=app.dataset.view;document.body.classList.toggle('reading-page',view==='article');renderNavbar();
  document.title=({'index':'首页','projects':'项目','learning':'学习笔记','gallery':'画作','music':'音乐','about':'关于','article':'阅读'}[view]||'档案')+' · Roger 数字空间';
  if(view==='index')renderHome();if(view==='projects')renderProjects();if(view==='gallery')renderGallery();if(view==='music')renderMusicPage();if(view==='learning')initLearningLibrary();if(view==='article')initArticlePage();if(view==='about')app.innerHTML=pageHeading('PERSONAL / ABOUT','关于')+'<section class="about-blank" aria-label="介绍区域"></section>';
  updatePlayerUI();
}
document.addEventListener('DOMContentLoaded',()=>{
  const d=document.getElementById('image-dialog');d.querySelector('[data-close-image]').onclick=()=>d.close();d.querySelectorAll('[data-image-step]').forEach(b=>b.onclick=()=>{imageIndex=(imageIndex+Number(b.dataset.imageStep)+imageCollection.length)%imageCollection.length;paintImage();});d.addEventListener('click',e=>{if(e.target===d)d.close();});d.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)&&imageCollection.length>1){imageIndex=(imageIndex+(e.key==='ArrowRight'?1:-1)+imageCollection.length)%imageCollection.length;paintImage();}});
  initPlayer();initSoftRouter();bootstrapPage();
});
