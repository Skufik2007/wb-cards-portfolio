// Рендер слайдов 900x1200 из данных PRODUCTS.
(function () {
  function lum(hex) {
    const n = parseInt(hex.slice(1), 16);
    const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }

  // CSS-переменные слайда. dark = темный фон слайда.
  function vars(p, dark) {
    const t = p.t;
    const lightAccent = lum(t.a) > 0.3;
    return [
      `--bg:${t.bg}`, `--a:${t.a}`, `--d:${t.d}`, `--l:${t.l}`, `--x:${t.x}`,
      `--onA:${lightAccent ? t.d : '#fff'}`,
      `--aT:${dark ? (lum(t.a) < 0.18 ? t.x : t.a) : (lightAccent ? t.d : t.a)}`,
    ].join(';');
  }

  const art = (p) => window.renderArt(p.art, p.t);

  function cover(p) {
    const c = p.cover;
    const dark = p.v === 'dark';
    return `<div class="slide cover ${p.v}" style="${vars(p, dark)}">
      ${p.v === 'split' ? '<div class="split-top"></div>' : ''}
      ${dark ? '<div class="glow"></div>' : ''}
      <div class="brand">${p.brand}</div>
      <h3>${c.h}</h3>
      <div class="art">${art(p)}</div>
      <div class="badge"><b>${c.badge[0]}</b><span>${c.badge[1]}</span></div>
      <div class="chips">${c.chips.map(([b, s]) => `<div class="chip"><b>${b}</b>${s}</div>`).join('')}</div>
    </div>`;
  }

  function benefits(p) {
    const dark = p.v !== 'dark';
    return `<div class="slide benefits ${dark ? 'is-dark' : 'is-light'}${p.wide ? ' wide' : ''}" style="${vars(p, dark)}">
      <h3>${p.benefitsTitle}</h3>
      <div class="panel"><div class="art">${art(p)}</div></div>
      <ul>${p.benefits.map(([b, s], i) => `<li><i>0${i + 1}</i><b>${b}</b><span>${s}</span></li>`).join('')}</ul>
    </div>`;
  }

  function details(p) {
    const d = p.details;
    const tiles = (list) => `<div class="tiles">${list.map(([b, s]) => `<div><b>${b}</b>${s}</div>`).join('')}</div>`;
    let body = '';
    if (d.type === 'dims') {
      body = `
        <div class="art dims-art">${art(p)}</div>
        <div class="vline"></div><div class="dim vdim">${d.h}</div>
        <div class="hline"></div><div class="dim hdim">${d.w}</div>
        ${tiles(d.tiles)}`;
    } else if (d.type === 'specs') {
      body = `
        <div class="art corner-art">${art(p)}</div>
        <div class="rows">${d.rows.map(([k, v]) => `<div class="row"><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
    } else if (d.type === 'steps') {
      body = `
        <div class="art steps-art">${art(p)}</div>
        <div class="steps">${d.steps.map((s, i) => `<div class="step"><i>${i + 1}</i><span>${s}</span></div>`).join('')}</div>`;
    }
    return `<div class="slide details ${d.type}" style="${vars(p, false)}">
      <div class="brand">${p.brand}</div>
      <h3>${d.title}</h3>${body}
    </div>`;
  }

  window.renderSlide = function (p, n) {
    return [cover, benefits, details][n - 1](p);
  };
  window.findProduct = (id) => window.PRODUCTS.concat(window.TEMPLATES || []).find((p) => p.id === id);
})();
