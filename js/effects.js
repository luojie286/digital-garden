/* ===== 视觉特效（参考 Xinghui Blog）===== */

function initPageTransition() {
  const page = document.querySelector('.page, .page-enter');
  if (page) page.classList.add('page-enter');
}

function initSakura(count = 35) {
  if (document.getElementById('sakura-layer')) return;
  const layer = document.createElement('div');
  layer.id = 'sakura-layer';
  document.body.appendChild(layer);

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    const size = 8 + Math.random() * 12;
    petal.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size * 1.2}px;
      animation-duration: ${6 + Math.random() * 8}s;
      animation-delay: ${Math.random() * -15}s;
    `;
    layer.appendChild(petal);
  }
}

function initClickRipple() {
  if (document.getElementById('click-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'click-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let ripples = [];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  class Ripple {
    constructor(x, y) {
      this.x = x; this.y = y;
      this.r = 0; this.opacity = 0.6; this.velocity = 2.5;
    }
    update() {
      this.r += this.velocity;
      this.velocity *= 0.96;
      this.opacity -= 0.015;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(129, 140, 248, ${this.opacity})`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(129, 140, 248, 0.5)';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${this.opacity * 0.3})`;
      ctx.fill();
    }
  }

  window.addEventListener('click', e => ripples.push(new Ripple(e.clientX, e.clientY)));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ripples = ripples.filter(r => {
      r.update();
      r.draw();
      return r.opacity > 0;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

function initAllEffects() {
  initPageTransition();
  initSakura();
  initClickRipple();
}
