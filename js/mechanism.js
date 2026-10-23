/* Mechanical Paper: original layered SVG. Audio sampling belongs to the player. */
(() => {
  'use strict';
  let angle = 0, speed = 0, previousTime = 0;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function gearPath(teeth, pitch) {
    const points = [], step = Math.PI * 2 / teeth;
    for (let n = 0; n < teeth; n++) {
      for (const [fraction, radius] of [[-.5,pitch-12.5],[-.35,pitch-12.5],[-.19,pitch+9],[.19,pitch+9],[.35,pitch-12.5],[.5,pitch-12.5]]) {
        const a = (n + fraction) * step;
        points.push(`${(Math.cos(a)*radius).toFixed(2)},${(Math.sin(a)*radius).toFixed(2)}`);
      }
    }
    return `M${points.join('L')}Z`;
  }
  function marks(seed, count, radius) {
    let s = seed;
    const rand = () => ((s = (Math.imul(s,1664525)+1013904223)>>>0)/4294967296);
    return Array.from({length:count}, () => {
      const a=rand()*Math.PI*2, r=Math.sqrt(rand())*radius;
      const x=Math.cos(a)*r, y=Math.sin(a)*r, length=2+rand()*14;
      return `<path d="M${x.toFixed(1)} ${y.toFixed(1)}l${length.toFixed(1)} -1.6" stroke="${rand()>.5?'#eff4e7':'#263533'}" stroke-width="${(.3+rand()*.55).toFixed(2)}" opacity="${(.12+rand()*.2).toFixed(2)}"/>`;
    }).join('');
  }
  function wheel(prefix, teeth, pitch, material, x, y, phase) {
    const outline=gearPath(teeth,pitch), hole=pitch*.2;
    const holes=Array.from({length:teeth===22?5:4},(_,n) => {
      const a=n*Math.PI*2/(teeth===22?5:4), r=pitch*.58;
      return `<circle cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" r="${hole}" fill="#26332f" stroke="#303d38" stroke-width="5"/><circle cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" r="${hole-2}" fill="url(#${prefix}-well)" stroke="#bec2a8" stroke-width="1"/>`;
    }).join('');
    return `<g transform="translate(${x} ${y})"><g class="mechanism-wheel" data-ratio="${teeth===22?1:-22/14}" data-phase="${phase}" transform="rotate(${phase})">
      <path d="${outline}" transform="translate(2 5)" fill="#111e1c" opacity=".8"/>
      <path d="${outline}" fill="url(#${prefix}-${material})" stroke="#253431" stroke-width="3"/>
      <path d="${outline}" fill="none" stroke="#d1d3b9" stroke-width="1.2"/>
      <clipPath id="${prefix}-clip-${teeth}"><path d="${outline}"/></clipPath>
      <g clip-path="url(#${prefix}-clip-${teeth})">
        <circle r="${pitch-17}" fill="none" stroke="#263833" stroke-width="4"/>
        <circle r="${pitch-19}" fill="none" stroke="#d5d5b7" stroke-width="1.4"/>
        ${Array.from({length:14},(_,i)=>`<circle r="${24+i*(pitch-43)/14}" fill="none" stroke="#e3e6d2" stroke-width=".45" opacity=".24"/>`).join('')}
        <rect x="${-pitch-10}" y="${-pitch-10}" width="${2*pitch+20}" height="${2*pitch+20}" fill="#865131" filter="url(#${prefix}-rust)" opacity=".55"/>
        ${marks(teeth*718,65,pitch+7)}
      </g>${holes}
      <circle r="${pitch*.24}" fill="url(#${prefix}-${material})" stroke="#23352f" stroke-width="2"/>
      <circle r="${pitch*.115}" fill="#21332e" stroke="#aab5a2" stroke-width="3"/>
      <circle r="${pitch*.046}" fill="#c9cec0"/>
    </g></g>`;
  }
  window.mechanismMarkup = (id='mechanism') => {
    const p=String(id).replace(/[^a-zA-Z0-9_-]/g,'') || 'mechanism';
    const frame='M360 38L390 38L682 330L682 360L390 652L360 652L68 360L68 330Z M375 145L175 345L375 545L575 345Z';
    return `<svg class="mechanism" data-mechanism viewBox="0 0 750 690" style="display:block;width:100%;height:auto" role="img" aria-labelledby="${p}-title ${p}-description">
      <title id="${p}-title">机械记忆 · 双齿轮传动装置</title><desc id="${p}-description">固定菱形钢框内，二十二齿冷钢主轮与十四齿黄铜从轮反向啮合。转动强弱由音频 RMS 驱动。</desc>
      <defs>
        <linearGradient id="${p}-steel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3b4e4a"/><stop offset=".25" stop-color="#b9c3b8"/><stop offset=".45" stop-color="#88988e"/><stop offset=".73" stop-color="#c2cab9"/><stop offset="1" stop-color="#52685e"/></linearGradient>
        <linearGradient id="${p}-brass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5d503b"/><stop offset=".3" stop-color="#bba276"/><stop offset=".55" stop-color="#917653"/><stop offset=".83" stop-color="#c5ac80"/><stop offset="1" stop-color="#67573f"/></linearGradient>
        <linearGradient id="${p}-frame" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5c7067"/><stop offset=".4" stop-color="#a1ada0"/><stop offset="1" stop-color="#66796e"/></linearGradient>
        <radialGradient id="${p}-well"><stop stop-color="#172722"/><stop offset=".7" stop-color="#263d33"/><stop offset="1" stop-color="#12251e"/></radialGradient>
        <filter id="${p}-rust" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".035 .06" numOctaves="3" seed="21" result="noise"/><feColorMatrix in="noise" type="matrix" values="0 0 0 0 .45 0 0 0 0 .25 0 0 0 0 .12 0 0 9 0 -4.8"/><feComposite in2="SourceGraphic" operator="in"/></filter>
        <clipPath id="${p}-window"><path d="M375 138L168 345L375 552L582 345Z"/></clipPath>
        <clipPath id="${p}-frameclip"><path d="${frame}" fill-rule="evenodd" clip-rule="evenodd"/></clipPath>
      </defs>
      <path d="M375 54L674 353L375 652L76 353Z" fill="#202e29" opacity=".18" transform="translate(1 9)"/>
      <path d="M375 130L160 345L375 560L590 345Z" fill="#1c2d26"/>
      <g clip-path="url(#${p}-window)">
        ${wheel(p,22,110,'steel',280,289,18)}
        ${wheel(p,14,70,'brass',451.1902,344.6231,210.8571429)}
      </g>
      <path d="${frame}" fill-rule="evenodd" fill="url(#${p}-frame)" stroke="#263a31" stroke-width="3"/>
      <g clip-path="url(#${p}-frameclip)"><rect x="60" y="30" width="630" height="630" fill="#895b39" filter="url(#${p}-rust)" opacity=".6"/>
        <g transform="translate(375 345)">${marks(391,200,440)}</g>
      </g>
      <path d="M375 141L171 345L375 549" fill="none" stroke="#a06480" stroke-width="2"/>
      <path d="M375 141L579 345L375 549" fill="none" stroke="#497d82" stroke-width="2"/>
      <path d="M310 100L143 267L143 304L105 342 M318 108L151 275L151 312L113 350 M326 116L159 283L159 320L121 358 M425 578L592 411L592 374L630 336 M433 586L600 419L600 382L638 344 M441 594L608 427L608 390L646 352" fill="none" stroke="#263c32" stroke-width="3"/>
      ${[[375,62],[92,345],[658,345],[375,628]].map(([x,y])=>`<g transform="translate(${x} ${y})"><circle r="11" fill="#253a30"/><circle r="8" fill="url(#${p}-brass)" stroke="#b8c2b1"/><path d="M-4 -3L4 3" stroke="#1d3127" stroke-width="3"/></g>`).join('')}
      <text x="452" y="151" transform="rotate(45 452 151)" font-family="monospace" font-size="12" letter-spacing="2" fill="#273a30">MECHANICAL MEMORY</text>
      <text x="227" y="479" transform="rotate(45 227 479)" font-family="monospace" font-size="19" letter-spacing="2" fill="#263a30">RESONANCE / θ</text>
      <text x="370" y="680" text-anchor="middle" font-family="monospace" font-size="10" fill="#626964" letter-spacing="3">ROTATION UNIT · 22 : 14</text>
    </svg>`;
  };
  window.updateMechanisms = ({playing=false,energy=.25,dt}={}) => {
    const now=performance.now();
    const elapsed=Math.min(.08,Math.max(0,Number.isFinite(dt)?dt:(previousTime?(now-previousTime)/1000:0)));
    previousTime=now;
    if(document.hidden || reduce.matches) { speed=0; return; }
    const rms=Number.isFinite(energy)?Math.min(1,Math.max(0,energy)):.25;
    const target=playing?18*(.45+2.2*rms):0;
    speed+=(target-speed)*(1-Math.exp(-elapsed*3.5));
    angle=(angle+speed*elapsed)%360;
    document.querySelectorAll('[data-mechanism] .mechanism-wheel').forEach(wheel=>{
      wheel.setAttribute('transform',`rotate(${angle*Number(wheel.dataset.ratio)+Number(wheel.dataset.phase)})`);
    });
  };
  document.addEventListener('visibilitychange',()=>{previousTime=0;});
})();
