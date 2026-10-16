/* ===== 音乐播放器（BufferSource：声音 + 可视化同一条链路）=====
 * 不用 createMediaElementSource，避免 AudioContext 挂起导致静音。
 * 流程：用户点击 → resume → fetch/decode → BufferSource → Analyser → 扬声器
 */

let currentMusicIndex = -1;
let audioCtx = null;
let analyser = null;
let freqData = null;
let gainNode = null;
let currentSource = null;
let vizRAF = null;

/** 已解码的 AudioBuffer 缓存 */
const bufferCache = {};
/** 当前曲目是否认为在播放 */
let isPlaying = false;
/** 起播时的 AudioContext.currentTime */
let startedAtCtx = 0;
/** 起播时曲目内的偏移（秒） */
let startedAtOffset = 0;
/** 当前曲目总时长 */
let songDuration = 0;
let progressTimer = null;

function formatMusicTime(sec) {
  if (!sec || isNaN(sec)) return '00:00';
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function nowCover(index) {
  const song = musicList[index];
  return song ? assetPath(song.cover) : '';
}

function getPlaybackTime() {
  if (!audioCtx || !isPlaying) return startedAtOffset;
  return Math.min(songDuration, startedAtOffset + (audioCtx.currentTime - startedAtCtx));
}

async function ensureCtx() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) throw new Error('浏览器不支持 Web Audio');
  if (!audioCtx) {
    audioCtx = new AC();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.72;
    freqData = new Uint8Array(analyser.frequencyBinCount);
    gainNode = audioCtx.createGain();
    gainNode.gain.value = 1;
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    startVisualizer();
  }
  if (audioCtx.state === 'suspended') await audioCtx.resume();
  return audioCtx;
}

async function loadBuffer(index) {
  if (bufferCache[index]) return bufferCache[index];
  const song = musicList[index];
  const url = assetPath(song.file);
  showToast('正在加载音频…');
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const raw = await res.arrayBuffer();
  const buf = await audioCtx.decodeAudioData(raw.slice(0)); // slice 复制，兼容部分浏览器
  bufferCache[index] = buf;
  return buf;
}

function stopSourceKeepOffset() {
  if (currentSource) {
    try { currentSource.onended = null; currentSource.stop(); } catch (_) {}
    try { currentSource.disconnect(); } catch (_) {}
    currentSource = null;
  }
}

function startProgressTimer() {
  if (progressTimer) clearInterval(progressTimer);
  progressTimer = setInterval(syncMusicProgress, 200);
}

function syncMusicProgress() {
  const t = getPlaybackTime();
  const dur = songDuration || 0;
  const pct = dur ? (t / dur) * 100 : 0;
  document.querySelectorAll('.cloud-progress, .music-progress').forEach(el => {
    el.value = pct;
    el.style.background = `linear-gradient(to right, #818cf8 ${pct}%, rgba(148,163,184,0.35) ${pct}%)`;
  });
  document.querySelectorAll('.cloud-time-cur, .music-time-cur').forEach(el => {
    el.textContent = formatMusicTime(t);
  });
  document.querySelectorAll('.cloud-time-dur, .music-time-dur').forEach(el => {
    el.textContent = formatMusicTime(dur);
  });
}

function startVisualizer() {
  if (vizRAF) return;
  const loop = () => {
    drawVisualizer();
    vizRAF = requestAnimationFrame(loop);
  };
  vizRAF = requestAnimationFrame(loop);
}

function drawVisualizer() {
  const canvas = document.getElementById('music-viz');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const bars = 48;
  const gap = 4;
  const barW = (w - (bars - 1) * gap) / bars;
  const levels = new Array(bars).fill(0.06);

  if (analyser && freqData && isPlaying) {
    analyser.getByteFrequencyData(freqData);
    const usable = Math.floor(freqData.length * 0.7);
    const step = Math.max(1, Math.floor(usable / bars));
    let sum = 0;
    for (let i = 0; i < bars; i++) {
      const v = freqData[Math.min(i * step, freqData.length - 1)] / 255;
      levels[i] = Math.max(0.1, Math.pow(v, 0.65));
      sum += v;
    }
    const avg = sum / bars;
    document.querySelectorAll('.music-console-glow.playing, .cloud-player-glow.playing').forEach(el => {
      el.style.transform = `scale(${1 + avg * 0.7})`;
      el.style.opacity = String(0.35 + avg * 0.65);
    });
  }

  for (let i = 0; i < bars; i++) {
    const barH = levels[i] * h;
    const x = i * (barW + gap);
    const y = h - barH;
    const grad = ctx.createLinearGradient(0, h, 0, y);
    grad.addColorStop(0, '#6366f1');
    grad.addColorStop(1, '#e879f9');
    ctx.fillStyle = grad;
    const r = Math.min(barW / 2, 6);
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.lineTo(x + barW - r, y);
    ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
    ctx.lineTo(x + barW, h);
    ctx.closePath();
    ctx.fill();
  }
}

function updateMusicUI(index, playing) {
  const song = musicList[index];
  if (!song) return;
  const cover = nowCover(index);

  document.querySelectorAll('.vinyl-disc, .music-big-disc').forEach(el => {
    el.classList.toggle('playing', playing);
  });
  document.querySelectorAll('.cloud-player-glow, .music-console-glow').forEach(el => {
    el.classList.toggle('playing', playing);
    if (!playing) { el.style.transform = ''; el.style.opacity = ''; }
  });

  document.querySelectorAll('.cloud-btn-play svg, .cloud-btn-play .play-icon, .gmusic-play svg').forEach(svg => {
    svg.innerHTML = playing
      ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  });

  document.querySelectorAll('.cloud-cover').forEach(el => { el.src = cover; });
  document.querySelectorAll('.music-big-disc img').forEach(el => { el.src = cover; });

  document.querySelectorAll('.cloud-title, .player-title, .music-now-title, .gmusic-title').forEach(el => {
    el.textContent = song.title;
  });
  document.querySelectorAll('.cloud-artist, .player-artist, .music-now-artist, .gmusic-artist').forEach(el => {
    el.textContent = song.artist;
  });

  document.querySelectorAll('.playlist-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
    const waves = el.querySelector('.playlist-waves');
    if (waves) waves.style.display = (i === index && playing) ? 'flex' : 'none';
  });

  const bgBlur = document.getElementById('music-bg-blur');
  if (bgBlur) bgBlur.style.backgroundImage = `url(${cover})`;

  updateMusicPlayerBar(song);
  updateGlobalMusicBar();
}

/** 切页后同步首页云播放器 / 音乐页 / 底部常驻条 */
function syncMusicSurfaces() {
  if (document.getElementById('cloud-player') && !document.querySelector('#cloud-player .cloud-title')) {
    initCloudPlayer('cloud-player');
  }
  if (document.getElementById('music-page') && !document.getElementById('music-playlist')) {
    initMusicPage();
  } else if (document.getElementById('music-playlist')) {
    ensureMusicPlaylistLockStyle();
  }
  if (currentMusicIndex >= 0) {
    updateMusicUI(currentMusicIndex, isPlaying);
    syncMusicProgress();
  }
  updateGlobalMusicBar();
  startVisualizer();
}

function ensureGlobalMusicBar() {
  if (document.getElementById('global-music-bar')) return;
  const bar = document.createElement('div');
  bar.id = 'global-music-bar';
  bar.className = 'global-music-bar';
  bar.innerHTML = `
    <button type="button" class="gmusic-main" onclick="typeof navigateTo==='function'?navigateTo(assetPath('music.html')):location.href=assetPath('music.html')">
      <img class="gmusic-cover" src="" alt="">
      <div class="gmusic-info">
        <p class="gmusic-title">未播放</p>
        <p class="gmusic-artist">—</p>
      </div>
    </button>
    <div class="gmusic-controls">
      <button type="button" class="cloud-btn" onclick="prevMusic()"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
      <button type="button" class="cloud-btn-play gmusic-play" style="width:2.5rem;height:2.5rem" onclick="toggleMusicPlay()">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <button type="button" class="cloud-btn" onclick="nextMusic()"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
    </div>
  `;
  document.body.appendChild(bar);
  updateGlobalMusicBar();
}

function updateGlobalMusicBar() {
  const bar = document.getElementById('global-music-bar');
  if (!bar) return;
  const onMusicPage = location.pathname.includes('/music');
  const visible = currentMusicIndex >= 0 && !onMusicPage;
  bar.classList.toggle('show', visible);
  if (currentMusicIndex < 0) return;
  const song = musicList[currentMusicIndex];
  bar.querySelector('.gmusic-cover').src = nowCover(currentMusicIndex);
  bar.querySelector('.gmusic-title').textContent = song.title;
  bar.querySelector('.gmusic-artist').textContent = song.artist;
}

async function playFromOffset(index, offset) {
  await ensureCtx();
  const buf = await loadBuffer(index);
  songDuration = buf.duration;

  stopSourceKeepOffset();

  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  src.connect(analyser);
  src.onended = () => {
    // 只有自然播完才切下一首；手动 stop 时我们会清 onended
    if (!isPlaying) return;
    const reachedEnd = getPlaybackTime() >= songDuration - 0.15;
    if (reachedEnd) {
      isPlaying = false;
      startedAtOffset = 0;
      const next = (index + 1) % musicList.length;
      playMusic(next, true);
    }
  };

  const startOff = Math.max(0, Math.min(offset || 0, Math.max(0, buf.duration - 0.05)));
  src.start(0, startOff);
  currentSource = src;
  startedAtCtx = audioCtx.currentTime;
  startedAtOffset = startOff;
  isPlaying = true;
  currentMusicIndex = index;

  updateMusicUI(index, true);
  startProgressTimer();
  syncMusicProgress();
}

async function playMusic(index, auto = false) {
  const song = musicList[index];
  if (!song?.file) return;

  // 同曲二次点击 → 暂停
  if (!auto && currentMusicIndex === index && isPlaying) {
    pauseMusic();
    return;
  }

  try {
    const offset = (!auto && currentMusicIndex === index) ? startedAtOffset : 0;
    // 切到新歌从 0 开始
    const startOffset = (currentMusicIndex === index) ? offset : 0;
    await playFromOffset(index, auto ? 0 : startOffset);
  } catch (err) {
    console.error('[music]', err);
    isPlaying = false;
    updateMusicUI(index, false);
    showToast('播放失败：请用 http://localhost:5500 打开页面后再点播放');
  }
}

function pauseMusic() {
  if (!isPlaying) return;
  startedAtOffset = getPlaybackTime();
  isPlaying = false;
  stopSourceKeepOffset();
  if (currentMusicIndex >= 0) updateMusicUI(currentMusicIndex, false);
  syncMusicProgress();
}

async function toggleMusicPlay() {
  if (currentMusicIndex < 0) {
    await playMusic(0);
    return;
  }
  if (isPlaying) {
    pauseMusic();
  } else {
    try {
      await playFromOffset(currentMusicIndex, startedAtOffset);
    } catch (err) {
      showToast('播放失败，请再点一次');
    }
  }
}

function prevMusic() {
  const idx = currentMusicIndex <= 0 ? musicList.length - 1 : Math.max(0, currentMusicIndex - 1);
  startedAtOffset = 0;
  playMusic(idx, false);
}

function nextMusic() {
  const idx = currentMusicIndex < 0 ? 0 : (currentMusicIndex + 1) % musicList.length;
  startedAtOffset = 0;
  playMusic(idx, false);
}

function seekMusic(e) {
  if (!songDuration) return;
  const pct = Number(e.target.value) / 100;
  const offset = pct * songDuration;
  startedAtOffset = offset;
  if (isPlaying && currentMusicIndex >= 0) {
    playFromOffset(currentMusicIndex, offset);
  } else {
    syncMusicProgress();
  }
}

function updateMusicPlayerBar(song) {
  const bar = document.getElementById('music-player');
  if (!bar) return;
  if (!song) {
    bar.style.display = 'none';
    return;
  }
  bar.style.display = 'flex';
  const idx = musicList.indexOf(song);
  bar.querySelector('.player-cover').src = idx >= 0 ? nowCover(idx) : assetPath(song.cover);
  bar.querySelector('.player-title').textContent = song.title;
  bar.querySelector('.player-artist').textContent = song.artist;
}

function stopMusic() {
  pauseMusic();
  startedAtOffset = 0;
}

function initCloudPlayer(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !musicList.length) return;

  const idx = currentMusicIndex >= 0 ? currentMusicIndex : 0;
  const song = musicList[idx];
  el.innerHTML = `
    <div class="cloud-player-glow"></div>
    <div class="cloud-player-top">
      <div class="vinyl-disc ${isPlaying && currentMusicIndex === idx ? 'playing' : ''}">
        <img class="cloud-cover" src="${assetPath(song.cover)}" alt="">
        <div class="vinyl-hole"></div>
      </div>
      <div style="overflow:hidden;flex:1">
        <span class="cloud-badge">Cloud Music</span>
        <h3 class="cloud-title">${song.title}</h3>
        <p class="cloud-artist">${song.artist}</p>
      </div>
    </div>
    <p class="cloud-lyric" id="cloud-lyric"></p>
    <div class="cloud-controls" onclick="event.stopPropagation()">
      <div class="cloud-progress-wrap">
        <span class="cloud-time-cur">00:00</span>
        <input type="range" class="cloud-progress" min="0" max="100" value="0" oninput="seekMusic(event)">
        <span class="cloud-time-dur">00:00</span>
      </div>
      <div class="cloud-btns">
        <button class="cloud-btn" type="button" onclick="event.stopPropagation();prevMusic()">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
        </button>
        <button class="cloud-btn-play" type="button" onclick="event.stopPropagation();toggleMusicPlay()">
          <svg class="play-icon" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button class="cloud-btn" type="button" onclick="event.stopPropagation();nextMusic()">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
        </button>
      </div>
    </div>
  `;

  el.addEventListener('click', (e) => {
    if (e.target.closest('.cloud-controls')) return;
    if (typeof navigateTo === 'function') navigateTo(assetPath('music.html'));
    else window.location.href = assetPath('music.html');
  });

  if (currentMusicIndex >= 0) {
    updateMusicUI(currentMusicIndex, isPlaying);
    syncMusicProgress();
  }
}

function ensureMusicPlaylistLockStyle() {
  let style = document.getElementById('music-playlist-lock-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'music-playlist-lock-style';
    document.head.appendChild(style);
  }
  style.textContent = `
    @media (min-width: 768px) {
      .music-page-layout { align-items: stretch !important; }
      .music-console,
      .music-panel {
        height: 38rem !important;
        max-height: 38rem !important;
        min-height: 38rem !important;
        align-self: stretch !important;
      }
      .music-console { justify-content: center !important; }
      .music-panel {
        display: flex !important;
        flex-direction: column !important;
        overflow: hidden !important;
      }
      #music-playlist {
        flex: 1 1 auto !important;
        min-height: 0 !important;
        height: auto !important;
        max-height: none !important;
        overflow-y: auto !important;
      }
      #music-playlist .playlist-item {
        flex: 0 0 auto !important;
        height: 3.75rem !important;
        min-height: 3.75rem !important;
        max-height: 3.75rem !important;
        box-sizing: border-box !important;
      }
    }
  `;
}

function initMusicPage() {
  const layout = document.getElementById('music-page');
  if (!layout || !musicList.length) return;

  ensureMusicPlaylistLockStyle();

  const idx = currentMusicIndex >= 0 ? currentMusicIndex : 0;
  const song = musicList[idx];
  layout.innerHTML = `
    <div class="glass-card music-console">
      <div class="music-console-glow"></div>
      <div class="music-big-disc ${isPlaying ? 'playing' : ''}">
        <img src="${assetPath(song.cover)}" alt="">
        <div class="vinyl-hole" style="width:2.5rem;height:2.5rem"></div>
      </div>
      <canvas id="music-viz" class="music-viz-bars" width="640" height="120"></canvas>
      <h2 class="music-now-title" style="font-size:1.5rem;font-weight:900;margin:0 0 0.25rem;text-align:center">${song.title}</h2>
      <p class="music-now-artist" style="color:var(--text-secondary);font-weight:600;margin:0 0 1.5rem">${song.artist}</p>
      <div class="cloud-progress-wrap" style="width:100%;max-width:22rem">
        <span class="music-time-cur cloud-time-cur">00:00</span>
        <input type="range" class="music-progress cloud-progress" min="0" max="100" value="0" oninput="seekMusic(event)">
        <span class="music-time-dur cloud-time-dur">00:00</span>
      </div>
      <div class="cloud-btns" style="margin-top:1.25rem">
        <button class="cloud-btn" type="button" onclick="prevMusic()"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
        <button class="cloud-btn-play" type="button" style="width:4rem;height:4rem" onclick="toggleMusicPlay()">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button class="cloud-btn" type="button" onclick="nextMusic()"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
      </div>
    </div>
    <div class="glass-card music-panel">
      <div class="music-tabs"><span class="music-tab active">歌单</span></div>
      <div class="music-playlist" id="music-playlist"></div>
    </div>
  `;

  document.getElementById('music-playlist').innerHTML = musicList.map((s, i) => `
    <button class="playlist-item ${i === idx ? 'active' : ''}" type="button" onclick="playMusic(${i})">
      <img class="playlist-cover" src="${assetPath(s.cover)}" alt="">
      <div class="playlist-info">
        <p class="playlist-title">${s.title}</p>
        <p class="playlist-artist">${s.artist}</p>
      </div>
      <div class="playlist-waves" style="display:${i === idx && isPlaying ? 'flex' : 'none'}"><span></span><span></span><span></span></div>
    </button>
  `).join('');

  startVisualizer();
  if (currentMusicIndex >= 0) {
    updateMusicUI(currentMusicIndex, isPlaying);
    syncMusicProgress();
  }
  updateGlobalMusicBar();
}
