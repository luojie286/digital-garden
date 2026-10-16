/* Markdown is the source; reading state stays in this browser. */
function getReadingState() {
  try { return JSON.parse(localStorage.getItem('garden-reading') || '{}') || {}; }
  catch { return {}; }
}
function saveReadingState(state) {
  try { localStorage.setItem('garden-reading', JSON.stringify(state)); }
  catch { showToast('浏览器未允许保存阅读记录'); }
}
function subjectName(id) { return learningSubjects.find(s => s.id === id)?.name || id; }
function noteCard(note, state) {
  return `<a class="glass-card note-card" href="${articleHref(note)}">
    <div class="note-card-meta"><span class="tag">${escapeHtml(subjectName(note.subject))}</span>
      <span>${escapeHtml(note.kind)} · ${note.minutes} 分钟</span>
      ${state[note.md]?.read ? '<span class="read-badge">✓ 已读</span>' : ''}</div>
    <h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.description)}</p>
    <div class="note-card-bottom"><span>${note.date ? '更新于 ' + formatDate(note.date) : '主题笔记'}</span><span>阅读全文 ↗</span></div>
  </a>`;
}
function renderHomeLearning() {
  const el = document.getElementById('home-learning');
  if (!el) return;
  const state = getReadingState();
  const last = learningNotes.filter(n => state[n.md]?.visited).sort((a, b) => state[b.md].visited - state[a.md].visited)[0];
  el.innerHTML = `<div class="section-heading"><div><span class="eyebrow">LEARNING GARDEN</span>
    <h2>把学过的，慢慢连起来</h2><p>${learningNotes.length} 篇笔记，${learningSubjects.length} 个方向。从一个问题，走进一片知识。</p></div>
    <a class="pill-link" href="${assetPath('learning.html')}">全部学习笔记 →</a></div>
    <div class="home-subjects">${learningSubjects.slice(0, 5).map(s => `
      <a class="glass-card home-subject" href="${assetPath('learning.html')}?subject=${encodeURIComponent(s.id)}">
        <span class="subject-icon">${s.icon}</span><h3>${escapeHtml(s.name)}</h3><span>${s.count} 篇笔记 ↗</span></a>`).join('')}</div>
    ${last ? `<a class="continue-reading" href="${articleHref(last)}">继续上次阅读：${escapeHtml(last.title)} →</a>` : ''}`;
}
function initLearningLibrary() {
  const root = document.getElementById('learning-library');
  if (!root) return;
  let selected = new URLSearchParams(location.search).get('subject') || '';
  if (!learningSubjects.some(s => s.id === selected)) selected = '';
  const state = getReadingState();
  const readCount = learningNotes.filter(n => state[n.md]?.read).length;
  root.innerHTML = `<section class="glass-card learning-intro">
    <div><span class="eyebrow">NOTES, NOT JUST NUMBERS</span><h2>每次学懂一点，就在这里留下一点。</h2>
    <p>语言基础、计算机原理、算法与项目实践。按主题梳理，也随时回来复习。</p></div>
    <div class="learning-stats"><div><strong>${learningNotes.length}</strong><span>篇笔记</span></div>
      <div><strong>${learningSubjects.length}</strong><span>个方向</span></div><div><strong>${readCount}</strong><span>篇已读</span></div></div>
    </section>
    <div class="learning-layout"><aside class="glass-card subject-panel"><h2>知识地图</h2><nav id="subject-nav" aria-label="笔记主题"></nav>
      <p class="reading-hint">阅读记录仅保存在当前浏览器。</p></aside>
      <section class="notes-section" aria-label="学习笔记列表">
        <div class="glass-card library-tools"><label class="note-search">⌕ <input id="note-query" type="search" placeholder="搜索标题、知识点或正文…" aria-label="搜索笔记正文"></label>
          <div class="library-selects"><label>排序 <select id="note-sort"><option value="topic">学习顺序</option><option value="recent">最近更新</option><option value="title">标题顺序</option></select></label>
          <label>状态 <select id="note-status"><option value="all">全部笔记</option><option value="unread">未读</option><option value="read">已读</option></select></label></div></div>
        <div class="notes-heading"><div><h2 id="notes-title"></h2><p id="notes-description"></p></div><span id="notes-count" aria-live="polite"></span></div>
        <div id="notes-results" class="notes-grid"></div>
      </section></div>`;
  const nav = root.querySelector('#subject-nav');
  function updateUrl() {
    const url = new URL(location.href);
    if (selected) url.searchParams.set('subject', selected); else url.searchParams.delete('subject');
    history.replaceState(history.state, '', url);
  }
  function render() {
    nav.innerHTML = [{id: '', name: '全部笔记', icon: '📚', count: learningNotes.length}, ...learningSubjects].map(s =>
      `<button type="button" data-subject="${escapeHtml(s.id)}" class="subject-button ${selected === s.id ? 'active' : ''}" aria-pressed="${selected === s.id}">
        <span>${s.icon} ${escapeHtml(s.name)}</span><span>${s.count}</span></button>`).join('');
    const subject = learningSubjects.find(s => s.id === selected);
    root.querySelector('#notes-title').textContent = subject?.name || '全部笔记';
    root.querySelector('#notes-description').textContent = subject?.description || '沿着主题阅读，或者从一个关键词开始。';
    const query = root.querySelector('#note-query').value.trim().toLowerCase();
    const status = root.querySelector('#note-status').value;
    const sort = root.querySelector('#note-sort').value;
    let notes = learningNotes.filter(n => (!selected || n.subject === selected)
      && (!query || [n.title, n.description, n.searchText, ...(n.tags || [])].join(' ').toLowerCase().includes(query))
      && (status === 'all' || (status === 'read' ? state[n.md]?.read : !state[n.md]?.read)));
    if (sort === 'recent') notes.sort((a, b) => b.date.localeCompare(a.date) || a.order - b.order);
    if (sort === 'title') notes.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    root.querySelector('#notes-count').textContent = `${notes.length} 篇`;
    root.querySelector('#notes-results').innerHTML = notes.length ? notes.map(n => noteCard(n, state)).join('')
      : '<div class="glass-card notes-empty"><h3>这里暂时没有符合条件的笔记</h3><p>试试其他关键词，或者切换主题与阅读状态。</p><button class="pill-link" id="reset-notes">重置筛选</button></div>';
    root.querySelector('#reset-notes')?.addEventListener('click', () => {
      selected = ''; root.querySelector('#note-query').value = ''; root.querySelector('#note-status').value = 'all'; updateUrl(); render();
    });
  }
  nav.addEventListener('click', event => {
    const button = event.target.closest('[data-subject]');
    if (!button) return;
    selected = button.dataset.subject; updateUrl(); render();
  });
  root.querySelector('#note-query').addEventListener('input', render);
  root.querySelector('#note-sort').addEventListener('change', render);
  root.querySelector('#note-status').addEventListener('change', render);
  render();
}
