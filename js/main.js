/* ===== 通用工具 ===== */

// Capture the script URL once: works at / and /repository/, including soft navigation.
const siteRoot = new URL('../', document.currentScript.src);
function getBasePath() { return siteRoot.pathname; }

function assetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path;
  const clean = path.replace(/^\.\.\//, '').replace(/^\//, '');
  return getBasePath() + clean.split('/').map(p => encodeURIComponent(p)).join('/');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

const pageDisposers = [];
function disposePage() { pageDisposers.splice(0).forEach(dispose => dispose()); }

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function initFavicon() {
  const href = assetPath(siteConfig.faviconUrl || siteConfig.avatarUrl);
  if (!href) return;
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = href.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
  link.href = href;
}

/* ===== 主题切换 ===== */

function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeUI();
}

function updateThemeUI() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-icon-nav').forEach(el => {
    el.textContent = isDark ? '☀️' : '🌙';
  });
  document.querySelectorAll('.theme-toggle-title').forEach(el => {
    el.textContent = isDark ? '夜间模式' : '日间模式';
  });
  document.querySelectorAll('.theme-toggle-sub').forEach(el => {
    el.textContent = isDark ? '流萤飞舞的深空' : '落樱漫舞的清晨';
  });
}

/* ===== 背景轮播 ===== */

function getBackgroundUrls() {
  // 优先用画作收藏全部作品；没有时再退回手动配置
  if (typeof galleryItems !== 'undefined' && galleryItems.length) {
    return galleryItems.map(item => item.url).filter(Boolean);
  }
  return siteConfig.bgImages || [];
}

function initBackground() {
  const layer = document.getElementById('bg-layer');
  const urls = getBackgroundUrls();
  if (!layer || !urls.length) return;

  // 只用两层交叉淡入，按顺序轮播全部作品，避免一次塞进所有图片节点
  const a = document.createElement('div');
  const b = document.createElement('div');
  a.className = 'bg-image active';
  b.className = 'bg-image';
  a.style.backgroundImage = `url(${assetPath(urls[0])})`;
  layer.insertBefore(b, layer.firstChild);
  layer.insertBefore(a, layer.firstChild);

  if (urls.length < 2) return;

  let index = 0;
  let showA = true;
  setInterval(() => {
    index = (index + 1) % urls.length;
    const next = showA ? b : a;
    const prev = showA ? a : b;
    next.style.backgroundImage = `url(${assetPath(urls[index])})`;
    next.classList.add('active');
    prev.classList.remove('active');
    showA = !showA;
  }, 10000);
}

/* ===== 导航栏 ===== */

const navItems = [
  { name: '首页', href: 'index.html' },
  { name: '技术', href: 'blog/index.html' },
  { name: '项目', href: 'projects.html' },
  { name: '创作', href: 'fiction/index.html' },
  { name: '动漫', href: 'anime/index.html' },
  { name: '画作', href: 'gallery.html' },
  { name: '音乐', href: 'music.html' },
  { name: '学习', href: 'learning.html' },
  { name: '关于', href: 'about.html' }
];

function renderNavbar() {
  const path = window.location.pathname;

  const linksHtml = navItems.map(item => {
    const href = assetPath(item.href);
    const section = item.href.replace('index.html', '').replace('.html', '');
    const homeActive = path.endsWith('/index.html') || path === '/' || /\/$/.test(path);
    const readingNote = path.endsWith('/article.html') && new URLSearchParams(location.search).get('md')?.startsWith('learning/');
    const active = item.href === 'learning.html' && readingNote ? true : item.href === 'index.html'
      ? homeActive && !path.includes('/blog/') && !path.includes('/fiction/') && !path.includes('/anime/') && !path.includes('/music') && !path.includes('/gallery') && !path.includes('/projects') && !path.includes('/learning') && !path.includes('/about')
      : path.includes('/' + section.replace(/\/$/, ''));
    return `<a href="${href}" class="${active ? 'active' : ''}">${item.name}</a>`;
  }).join('');

  const mobileHtml = navItems.map(item =>
    `<a href="${assetPath(item.href)}">${item.name}</a>`
  ).join('');

  const nav = document.getElementById('navbar');
  if (!nav) return;

  const brand = `${siteConfig.navTitle}<span class="suffix">${siteConfig.navSuffix}</span>${siteConfig.navAfter}`;

  nav.innerHTML = `
    <div class="navbar-inner">
      <a href="${assetPath('index.html')}" class="nav-brand">${brand}</a>
      <nav class="nav-links">${linksHtml}</nav>
      <div class="nav-actions">
        <button class="theme-btn" onclick="toggleTheme()" title="切换主题">
          <span class="theme-icon-nav">${document.documentElement.classList.contains('dark') ? '☀️' : '🌙'}</span>
        </button>
        <button class="menu-btn" onclick="toggleMobileMenu()" title="菜单">☰</button>
      </div>
    </div>
  `;

  let mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) {
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'mobile-menu';
    nav.parentNode.insertBefore(mobileMenu, nav.nextSibling);
  }
  mobileMenu.innerHTML = mobileHtml;
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu')?.classList.toggle('open');
}

function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastY = y;
  }, { passive: true });
}

/* ===== 底部仪表盘 ===== */

function initDashboard() {
  const el = document.getElementById('dashboard');
  if (!el) return;

  const start = new Date(siteConfig.buildDate).getTime();
  const badges = siteConfig.footerBadges.map(b =>
    `<span class="badge"><span class="badge-dot" style="background:${b.color}"></span>${b.name}</span>`
  ).join('');

  el.innerHTML = `
    <div class="dashboard-clock" id="clock">00:00:00</div>
    <div class="dashboard-info">
      <div><span class="uptime-dot"></span>站点运行：<span id="uptime" style="color:var(--color-indigo)">--</span></div>
      <div class="badges">${badges}</div>
    </div>
  `;

  function tick() {
    const now = new Date();
    document.getElementById('clock').textContent =
      now.toLocaleTimeString('en-US', { hour12: false });
    const diff = now.getTime() - start;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    document.getElementById('uptime').textContent = `${days}天 ${hours}小时`;
  }
  tick();
  const timer = setInterval(tick, 1000);
  pageDisposers.push(() => clearInterval(timer));
}

/* ===== 轮播（交叉淡入）===== */

function initCarousel(containerId, items, badge = 'Latest') {
  const container = document.getElementById(containerId);
  if (!container || !items.length) return;

  let index = 0;
  const base = getBasePath();

  container.innerHTML = `
    ${items.map((item, i) => `
      <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
        <div class="carousel-bg" style="background-image:url('${assetPath(item.cover || siteConfig.defaultCover)}')"></div>
        <a href="${typeof articleHref === 'function' ? articleHref(item) : ('/' + (item.url || ''))}" class="carousel-content">
          <div>
            <span class="carousel-badge">${badge}</span>
            ${item.date ? `<span class="carousel-date">${formatDate(item.date)}</span>` : ''}
          </div>
          <h2 class="carousel-title">${item.title}</h2>
          <p class="carousel-desc">${item.description}</p>
        </a>
      </div>
    `).join('')}
    ${items.length > 1 ? `<div class="carousel-dots">${items.map((_, i) =>
      `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></button>`
    ).join('')}</div>` : ''}
  `;

  function goTo(i) {
    index = i;
    container.querySelectorAll('.carousel-slide').forEach((s, j) => s.classList.toggle('active', j === i));
    container.querySelectorAll('.carousel-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  }

  container.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      goTo(Number(dot.dataset.dot));
    });
  });

  if (items.length > 1) {
    const timer = setInterval(() => goTo((index + 1) % items.length), 5000);
    pageDisposers.push(() => clearInterval(timer));
  }
}

/* ===== 全局搜索 ===== */

function getAllSearchablePosts() {
  const map = (list, category) => list.map(p => ({
    ...p,
    category,
    fullUrl: typeof articleHref === 'function' ? articleHref(p) : ('/' + (p.url || ''))
  }));
  return [...map(learningNotes || [], '学习'), ...map(techPosts || [], '技术'), ...map(fictionPosts || [], '创作'), ...map(animeReviews || [], '动漫')];
}

function highlightText(text, query) {
  text = escapeHtml(text);
  query = escapeHtml(query);
  if (!query.trim() || !text) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return String(text).replace(re, '<mark class="search-hl">$1</mark>');
}

function initGlobalSearch(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const allPosts = getAllSearchablePosts();

  container.innerHTML = `
    <div class="global-search">
      <input type="search" aria-label="全站搜索" id="global-search-input" placeholder="搜索学习笔记、文章、知识点…" autocomplete="off">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <div class="search-dropdown" id="search-dropdown"></div>
    </div>
  `;

  const input = document.getElementById('global-search-input');
  const dropdown = document.getElementById('search-dropdown');

  function renderResults(q) {
    if (!q.trim()) {
      dropdown.classList.remove('open');
      return;
    }
    const query = q.toLowerCase();
    const results = allPosts.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.tags || []).some(t => t.toLowerCase().includes(query)) ||
      (p.searchText || '').includes(query)
    );

    if (!results.length) {
      dropdown.innerHTML = `<div class="search-empty">未发现关于「<strong>${escapeHtml(q)}</strong>」的内容</div>`;
    } else {
      dropdown.innerHTML = results.slice(0, 20).map(p => `
        <a href="${p.fullUrl}" class="search-result-item">
          <p class="search-result-title">${highlightText(p.title, q)}</p>
          <p class="search-result-desc">${highlightText(p.description, q)}</p>
          <div class="search-result-meta">
            <span class="tag">${p.category}</span>
            ${(p.tags || []).slice(0, 3).map(t => `<span class="tag">${highlightText(t, q)}</span>`).join('')}
          </div>
        </a>
      `).join('');
    }
    dropdown.classList.add('open');
  }

  input.addEventListener('input', () => renderResults(input.value));
  input.addEventListener('focus', () => { if (input.value.trim()) dropdown.classList.add('open'); });
  const closeSearch = e => {
    if (!container.contains(e.target)) dropdown.classList.remove('open');
  };
  document.addEventListener('click', closeSearch);
  pageDisposers.push(() => document.removeEventListener('click', closeSearch));
}

/* ===== 内容卡片渲染 ===== */

function renderContentCards(containerId, items, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const base = getBasePath();
  const showStatus = options.showStatus;
  const showRating = options.showRating;
  const externalLink = options.externalLink;

  container.innerHTML = items.map(item => {
    const href = typeof articleHref === 'function' ? articleHref(item) : (externalLink ? item.url : ('/' + (item.url || '')));
    const isExternal = externalLink && item.url && item.url.startsWith('http');
    const target = isExternal ? ' target="_blank" rel="noopener"' : '';
    const extraTag = showStatus && item.status ? `<span class="tag">${item.status}</span>` : '';
    const ratingTag = showRating && item.rating ? `<span class="tag">${item.rating}</span>` : '';

    return `
      <a href="${href}" class="glass-card content-card"${target}>
        <div class="content-card-cover">
          <img src="${assetPath(item.cover || siteConfig.defaultCover)}" alt="${item.title}" loading="lazy">
        </div>
        <div class="content-card-body">
          <div class="content-card-meta">
            ${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
            ${extraTag}${ratingTag}
          </div>
          <h3 class="content-card-title">${item.title}</h3>
          <p class="content-card-desc">${item.description}</p>
          <span class="content-card-date">${formatDate(item.date)}</span>
        </div>
      </a>
    `;
  }).join('');
}

/* ===== 搜索过滤 ===== */

function initSearch(inputId, containerId, items, renderFn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const filtered = q ? items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.tags || []).some(t => t.toLowerCase().includes(q))
    ) : items;
    renderFn(containerId, filtered);
  });
}

/* ===== 画作瀑布流 ===== */

function renderGallery(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item) => {
    const url = assetPath(item.url);
    return `
    <div class="glass-card gallery-item" onclick="openLightbox('${url}')">
      <img src="${url}" alt="${item.caption}" loading="lazy">
      <p class="gallery-caption">${item.caption}</p>
    </div>
  `;
  }).join('');
}

function openLightbox(url) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `<button class="lightbox-close" onclick="closeLightbox()">×</button><img src="" alt="">`;
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = url;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
}

/* ===== 学习进度 ===== */

function renderLearningProgress(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="glass-card progress-item">
      <div class="progress-header">
        <span class="progress-name">${item.name}</span>
        <span class="progress-pct">${item.progress}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${item.progress}%"></div>
      </div>
      <p class="progress-note">${item.note}</p>
    </div>
  `).join('');
}

/* ===== 首页统计 ===== */

function initHomeStats() {
  const stats = {
    learning: learningNotes.length,
    tech: techPosts.length,
    fiction: fictionPosts.length,
    anime: animeReviews.length,
    gallery: galleryItems.length
  };
  Object.entries(stats).forEach(([key, val]) => {
    const el = document.getElementById(`stat-${key}`);
    if (el) el.textContent = val;
  });
}

/* ===== 按路由初始化各页 ===== */

function bootstrapPage() {
  const path = location.pathname;

  // 首页（有云播放器）
  if (document.getElementById('cloud-player')) {
    const avatar = document.getElementById('avatar');
    if (avatar) avatar.src = assetPath(siteConfig.avatarUrl);
    const name = document.getElementById('author-name');
    if (name) name.textContent = siteConfig.authorName;
    const bio = document.getElementById('author-bio');
    if (bio) bio.textContent = siteConfig.bio;
    const gp = document.getElementById('gallery-preview');
    if (gp) gp.src = assetPath(galleryItems[0]?.url) || assetPath(siteConfig.defaultCover);
    document.title = siteConfig.title;
    initHomeStats();
    initDashboard();
    if (document.getElementById('global-search')) initGlobalSearch('global-search');
    initCloudPlayer('cloud-player');
    if (document.getElementById('carousel-tech')) initCarousel('carousel-tech', techPosts, 'Latest Insight');
    if (document.getElementById('carousel-fiction')) initCarousel('carousel-fiction', fictionPosts, '创作');
  }

  // 关于
  if (document.getElementById('about-avatar')) {
    document.getElementById('about-avatar').src = assetPath(siteConfig.avatarUrl);
    document.getElementById('about-name').textContent = siteConfig.authorName;
    document.getElementById('about-bio').textContent = siteConfig.bio;
    const gh = document.getElementById('about-github');
    if (gh) { gh.href = siteConfig.social.github; gh.textContent = siteConfig.social.github; }
    const em = document.getElementById('about-email');
    if (em) { em.href = 'mailto:' + siteConfig.social.email; em.textContent = siteConfig.social.email; }
    initDashboard();
  }

  // 列表页：根据路径选择数据源
  if (document.getElementById('content-list')) {
    if (path.includes('/blog/')) {
      renderContentCards('content-list', techPosts);
      initSearch('search-input', 'content-list', techPosts, renderContentCards);
    } else if (path.includes('/fiction/')) {
      renderContentCards('content-list', fictionPosts);
      initSearch('search-input', 'content-list', fictionPosts, renderContentCards);
    } else if (path.includes('/anime/')) {
      renderContentCards('content-list', animeReviews, { showRating: true });
      initSearch('search-input', 'content-list', animeReviews, (id, items) =>
        renderContentCards(id, items, { showRating: true })
      );
    } else if (path.includes('/projects')) {
      renderContentCards('content-list', projects, { showStatus: true, externalLink: true });
      initSearch('search-input', 'content-list', projects, (id, items) =>
        renderContentCards(id, items, { showStatus: true, externalLink: true })
      );
    }
  }

  if (document.getElementById('gallery-list')) {
    renderGallery('gallery-list', galleryItems);
  }

  if (document.getElementById('learning-library')) initLearningLibrary();
  if (document.getElementById('home-learning')) renderHomeLearning();

  if (document.getElementById('music-page')) {
    initMusicPage();
  }

  if (document.getElementById('article-shell')) {
    initArticlePage();
  }

  if (typeof syncMusicSurfaces === 'function') syncMusicSurfaces();
}

/* ===== 初始化 ===== */

document.addEventListener('DOMContentLoaded', () => {
  initFavicon();
  initTheme();
  initBackground();
  renderNavbar();
  initNavbarScroll();
  updateThemeUI();
  if (typeof initAllEffects === 'function') initAllEffects();
  if (typeof initSoftRouter === 'function') initSoftRouter();
  if (typeof ensureGlobalMusicBar === 'function') ensureGlobalMusicBar();
  bootstrapPage();
});
