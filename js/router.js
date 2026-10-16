/* ===== 站内软跳转：切页不刷新，音乐继续播 ===== */

function normalizePageUrl(href) {
  const url = new URL(href, window.location.href);
  let path = url.pathname;
  if (path.endsWith('/')) path += 'index.html';
  if (!path.includes('.')) path = path.replace(/\/?$/, '/index.html');
  return path + url.search + url.hash;
}

function isInternalPageLink(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
    return false;
  }
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const u = new URL(href);
      return u.origin === location.origin && (u.pathname.endsWith('.html') || u.pathname.endsWith('/'));
    } catch {
      return false;
    }
  }
  return href.includes('.html') || href.endsWith('/') || href.includes('article.html');
}

/** 软跳转不会重新执行 <script>，这里强制重新拉取生成好的数据文件 */
async function reloadGeneratedData() {
  const files = [
    'js/posts-data.js',
    'js/gallery-data.js',
    'js/music-data.js',
    'js/learning-data.js'
  ];
  await Promise.all(files.map(async (src) => {
    const res = await fetch(assetPath(src) + '?t=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('reload failed: ' + src);
    const code = await res.text();
    // 重新执行 const techPosts / galleryItems / musicList 等声明
    (0, eval)(code);
  }));
}

async function navigateTo(href, opts = {}) {
  const { replace = false, fromPop = false } = opts;
  const path = normalizePageUrl(href);

  try {
    const res = await fetch(path, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const nextMain = doc.querySelector('main.page');
    const curMain = document.querySelector('main.page');
    if (!nextMain || !curMain) {
      window.location.href = path;
      return;
    }

    // 音乐页专属模糊背景
    let blur = document.getElementById('music-bg-blur');
    const nextBlur = doc.getElementById('music-bg-blur');
    if (nextBlur && !blur) {
      blur = document.createElement('div');
      blur.id = 'music-bg-blur';
      blur.className = 'music-bg-blur';
      document.body.insertBefore(blur, document.body.firstChild);
    } else if (!nextBlur && blur) {
      blur.remove();
    }

    disposePage();
    curMain.replaceWith(nextMain);
    document.title = doc.title || siteConfig.title;

    if (!fromPop) {
      if (replace) history.replaceState({ soft: true }, '', path);
      else history.pushState({ soft: true }, '', path);
    }

    // 关闭移动菜单
    document.getElementById('mobile-menu')?.classList.remove('open');

    try {
      await reloadGeneratedData();
    } catch (e) {
      console.warn('[router] reload data failed', e);
    }

    renderNavbar();
    bootstrapPage();
    window.scrollTo(0, 0);

    if (typeof syncMusicSurfaces === 'function') syncMusicSurfaces();
  } catch (err) {
    console.warn('[router] soft nav failed, fallback', err);
    window.location.href = path;
  }
}

function initSoftRouter() {
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = a.getAttribute('href');
    if (!isInternalPageLink(href)) return;
    e.preventDefault();
    navigateTo(href);
  });

  window.addEventListener('popstate', () => {
    navigateTo(location.pathname + location.search + location.hash, { fromPop: true });
  });
}
