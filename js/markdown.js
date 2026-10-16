/* Markdown reader shared by notes and posts. */
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
function rewriteArticleLinks(container, mdPath) {
  const base = new URL(assetPath(mdPath), location.origin);
  container.querySelectorAll('a[href], img[src]').forEach(el => {
    const attr = el.tagName === 'IMG' ? 'src' : 'href';
    const value = el.getAttribute(attr);
    if (!value || value.startsWith('#')) return;
    const url = new URL(value.replace(/\\/g, '/'), base);
    if (!['http:', 'https:'].includes(url.protocol)) { el.removeAttribute(attr); return; }
    if (url.origin === location.origin && url.pathname.startsWith(getBasePath())) {
      const relative = decodeURIComponent(url.pathname.slice(getBasePath().length));
      if (attr === 'href' && /\.md$/i.test(url.pathname)) {
        const note = learningNotes.find(n => n.md === relative);
        if (note || relative.startsWith('sources/text/')) el.href = articleHref({md: relative}) + url.hash;
        else { el.removeAttribute('href'); el.title = '这份原始资料未收录到公开笔记库'; }
      } else el.setAttribute(attr, url.href);
    } else if (attr === 'href') { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    if (el.tagName === 'IMG') { el.loading = 'lazy'; el.decoding = 'async'; }
  });
}
async function loadMarkdownArticle(mdPath) {
  const shell = document.getElementById('article-shell');
  if (!shell) return;
  shell.innerHTML = '<div class="glass-card article"><p role="status">正在翻开这页笔记…</p></div>';
  try {
    const note = learningNotes.find(n => n.md === mdPath);
    const post = [...techPosts, ...fictionPosts, ...animeReviews].find(n => n.md === mdPath);
    if (!note && !post) throw new Error('Note is not in published catalog');
    await ensureMarked();
    const res = await fetch(assetPath(mdPath));
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const {meta, body} = parseFrontmatter(await res.text());
    if (!shell.isConnected || new URLSearchParams(location.search).get('md') !== mdPath) return;
    const title = meta.title || note?.title || post?.title || '文章';
    const tags = Array.isArray(meta.tags) ? meta.tags : (meta.tags ? [meta.tags] : []);
    if (meta.rating) tags.push(meta.rating);
    const date = meta.date || note?.date || post?.date;
    const category = post?.md?.split('/')[2];
    const backPage = note ? 'learning.html' : ({fiction: 'fiction/index.html', anime: 'anime/index.html'}[category] || 'blog/index.html');
    document.title = title + ' — ' + siteConfig.title;
    const siblings = note ? learningNotes.filter(n => n.subject === note.subject) : [];
    const index = siblings.findIndex(n => n.md === mdPath);
    const adjacent = (n, label) => n ? `<a href="${articleHref(n)}"><span>${label}</span><strong>${escapeHtml(n.title)}</strong></a>` : '<span></span>';
    shell.innerHTML = `<div class="reader-layout">
      <article class="glass-card article">
        <div class="reader-breadcrumb"><a href="${assetPath(backPage)}">${note ? '学习笔记' : '文章列表'}</a>
          ${note ? `<span>/</span><a href="${assetPath('learning.html')}?subject=${encodeURIComponent(note.subject)}">${escapeHtml(subjectName(note.subject))}</a>` : ''}</div>
        <h1>${escapeHtml(title)}</h1><div class="article-meta">${date ? `<span>更新于 ${formatDate(date)}</span>` : ''}
          ${note ? `<span>${note.minutes} 分钟阅读</span><span class="tag">${escapeHtml(note.kind)}</span>` : ''}
          ${tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
        ${note ? '<button type="button" class="pill-link mark-read" id="mark-note-read"></button>' : ''}
        <div class="article-body"></div>
        ${note ? `<nav class="article-adjacent" aria-label="同主题笔记">${adjacent(siblings[index - 1], '← 上一篇')}${adjacent(siblings[index + 1], '下一篇 →')}</nav>` : ''}
      </article><aside class="glass-card article-toc"><h2>本篇目录</h2><nav id="article-toc-links" aria-label="本篇目录"></nav><a href="#" class="back-to-top">↑ 回到顶部</a></aside></div>`;
    const content = shell.querySelector('.article-body');
    // Parse into an inert document and sanitize before inserting into the live page.
    const parsed = new DOMParser().parseFromString(renderMarkdown(body.replace(/^#\s+.+\n?/, '')), 'text/html');
    parsed.querySelectorAll('script,iframe,object,embed,style,link,form,meta,base').forEach(el => el.remove());
    parsed.body.querySelectorAll('*').forEach(el => [...el.attributes].forEach(attr => {
      if (attr.name.startsWith('on') || ['srcdoc', 'style', 'srcset'].includes(attr.name)) el.removeAttribute(attr.name);
    }));
    rewriteArticleLinks(parsed.body, mdPath);
    content.append(...parsed.body.childNodes);
    if (content.querySelector('.math-source')) {
      await ensureMath();
      if (!shell.isConnected) return;
      content.querySelectorAll('.math-source').forEach(el => {
        katex.render(el.textContent, el, {displayMode: el.dataset.display === 'true', throwOnError: false, trust: false, strict: 'ignore'});
      });
    }
    content.querySelectorAll('table').forEach(table => {
      const wrapper = document.createElement('div'); wrapper.className = 'table-scroll';
      table.replaceWith(wrapper); wrapper.appendChild(table);
    });
    const headings = [...content.querySelectorAll('h2,h3')];
    headings.forEach((h, i) => { h.id = 'section-' + i; });
    shell.querySelector('#article-toc-links').innerHTML = headings.length ? headings.map(h =>
      `<a class="${h.tagName === 'H3' ? 'toc-sub' : ''}" href="#${h.id}">${escapeHtml(h.textContent)}</a>`).join('') : '<p>本篇暂无分节</p>';
    // Existing overview tables use backtick filenames: make them navigable.
    content.querySelectorAll('code').forEach(code => {
      if (code.closest('pre') || !/\.md$/.test(code.textContent.trim())) return;
      const url = new URL(code.textContent.trim(), new URL(assetPath(mdPath), location.origin));
      const target = learningNotes.find(n => n.md === decodeURIComponent(url.pathname.slice(getBasePath().length)));
      if (!target) return;
      const link = document.createElement('a'); link.href = articleHref(target); code.replaceWith(link); link.appendChild(code);
    });
    if (note) {
      const state = getReadingState();
      state[mdPath] = {...state[mdPath], visited: Date.now()}; saveReadingState(state);
      const button = shell.querySelector('#mark-note-read');
      const refresh = () => {
        button.textContent = state[mdPath].read ? '✓ 已读 · 点击撤销' : '标记为已读';
        button.setAttribute('aria-pressed', String(!!state[mdPath].read));
      };
      button.addEventListener('click', () => { state[mdPath].read = !state[mdPath].read; saveReadingState(state); refresh(); });
      refresh();
    }
    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  } catch (err) {
    if (!shell.isConnected) return;
    console.error(err);
    shell.innerHTML = `<div class="glass-card article"><h1>这页暂时没能打开</h1><p>笔记可能已移动或尚未发布。请返回目录重新选择。</p><a class="pill-link" href="${assetPath('learning.html')}">返回学习笔记 →</a></div>`;
  }
}
function initArticlePage() {
  const md = new URLSearchParams(location.search).get('md');
  if (md) loadMarkdownArticle(md);
  else document.getElementById('article-shell').innerHTML = `<div class="glass-card article"><h1>选一篇笔记，开始阅读</h1><a class="pill-link" href="${assetPath('learning.html')}">浏览学习笔记 →</a></div>`;
}
