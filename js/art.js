// Векторные иллюстрации товаров. Каждая функция получает тему {a: акцент, d: темный, l: светлый, x: доп. цвет}
// и возвращает SVG 400x400. Все рисунки авторские, без чужих изображений.
(function () {
  const shadow = (cx = 200, cy = 372, rx = 110) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="14" fill="#000" opacity=".13"/>`;
  const shine = (x, y, w, h, r = 6, o = 0.22) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#fff" opacity="${o}"/>`;
  const grad = (id, c1, c2, vertical = false) =>
    `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;

  const ART = {
    mug: (t) => `
      <defs>${grad('mg', t.d, '#000')}</defs>
      ${shadow(200, 372, 90)}
      <rect x="140" y="112" width="120" height="252" rx="20" fill="url(#mg)"/>
      ${shine(154, 126, 14, 222, 7, 0.18)}
      <rect x="140" y="160" width="120" height="12" fill="${t.a}"/>
      <rect x="130" y="82" width="140" height="42" rx="14" fill="#2c2f36"/>
      <rect x="165" y="64" width="70" height="24" rx="10" fill="#3a3e47"/>
      <rect x="150" y="96" width="100" height="5" rx="2" fill="#fff" opacity=".12"/>`,

    earbuds: (t) => `
      ${shadow(200, 360, 120)}
      <path d="M100 230 h200 a0 0 0 0 1 0 0 v50 a70 70 0 0 1 -70 70 h-60 a70 70 0 0 1 -70 -70 z" fill="#f7f7f8" stroke="#d9dbe0" stroke-width="3"/>
      <path d="M100 230 v-10 a70 70 0 0 1 70 -70 h60 a70 70 0 0 1 70 70 v10 z" fill="#ececef" stroke="#d9dbe0" stroke-width="3" transform="rotate(-24 100 230)"/>
      <circle cx="200" cy="300" r="5" fill="${t.a}"/>
      <g transform="translate(150 215) rotate(-12)">
        <rect x="-11" y="0" width="22" height="70" rx="11" fill="#fff" stroke="#d9dbe0" stroke-width="3"/>
        <circle cx="0" cy="0" r="30" fill="#fff" stroke="#d9dbe0" stroke-width="3"/><circle cx="-6" cy="-6" r="13" fill="${t.d}"/></g>
      <g transform="translate(250 215) rotate(12)">
        <rect x="-11" y="0" width="22" height="70" rx="11" fill="#fff" stroke="#d9dbe0" stroke-width="3"/>
        <circle cx="0" cy="0" r="30" fill="#fff" stroke="#d9dbe0" stroke-width="3"/><circle cx="6" cy="-6" r="13" fill="${t.d}"/></g>`,

    serum: (t) => `
      ${shadow(200, 368, 80)}
      <ellipse cx="200" cy="92" rx="30" ry="38" fill="${t.d}"/>
      <rect x="168" y="118" width="64" height="62" rx="10" fill="${t.d}"/>
      ${shine(176, 124, 8, 50, 4, 0.2)}
      <rect x="146" y="172" width="108" height="194" rx="24" fill="${t.a}" opacity=".9"/>
      <rect x="146" y="250" width="108" height="116" rx="24" fill="${t.a}"/>
      ${shine(156, 184, 14, 168, 7, 0.3)}
      <rect x="160" y="228" width="80" height="80" rx="8" fill="#fff"/>
      <text x="200" y="266" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="26" fill="${t.d}">VIT C</text>
      <text x="200" y="292" text-anchor="middle" font-family="Manrope,Arial" font-size="13" fill="${t.d}">serum 30 ml</text>`,

    hoodie: (t) => `
      ${shadow(200, 372, 140)}
      <path d="M128 112 Q200 90 272 112 L338 160 Q356 230 362 312 L320 318 L300 214 L304 360 L96 360 L100 214 L80 318 L38 312 Q44 230 62 160 Z" fill="${t.a}"/>
      <path d="M146 116 Q200 40 254 116 Q230 150 200 150 Q170 150 146 116 Z" fill="${t.d}" opacity=".35"/>
      <path d="M160 118 Q200 70 240 118 Q220 136 200 136 Q180 136 160 118Z" fill="${t.d}" opacity=".45"/>
      <line x1="186" y1="138" x2="182" y2="200" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <line x1="214" y1="138" x2="218" y2="200" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
      <path d="M140 268 h120 l10 56 h-140 z" fill="${t.d}" opacity=".18"/>
      <rect x="100" y="344" width="204" height="16" fill="${t.d}" opacity=".2"/>`,

    humidifier: (t) => `
      ${shadow(200, 370, 100)}
      <path d="M150 120 C150 120 154 100 200 100 C246 100 250 120 250 120 L282 340 C282 356 260 364 200 364 C140 364 118 356 118 340 Z" fill="#fafafa" stroke="#dcdcdc" stroke-width="3"/>
      <path d="M126 290 L274 290 L282 340 C282 356 260 364 200 364 C140 364 118 356 118 340 Z" fill="${t.a}" opacity=".85"/>
      <ellipse cx="200" cy="112" rx="22" ry="7" fill="#cfd3d8"/>
      <circle cx="200" cy="326" r="10" fill="#fff" opacity=".8"/>
      <g fill="none" stroke="${t.x}" stroke-width="6" stroke-linecap="round" opacity=".7">
        <path d="M200 96 C180 70 220 56 196 26"/><path d="M178 92 C160 74 184 60 166 40" opacity=".6"/><path d="M222 92 C240 74 216 60 234 40" opacity=".6"/></g>`,

    lamp: (t) => `
      <polygon points="214,170 330,370 140,370" fill="${t.x}" opacity=".25"/>
      ${shadow(150, 372, 90)}
      <ellipse cx="150" cy="356" rx="74" ry="16" fill="${t.d}"/>
      <rect x="76" y="340" width="148" height="16" fill="${t.d}"/>
      <line x1="150" y1="344" x2="120" y2="210" stroke="${t.d}" stroke-width="12" stroke-linecap="round"/>
      <line x1="120" y1="210" x2="206" y2="110" stroke="${t.d}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="120" cy="210" r="13" fill="${t.a}"/>
      <path d="M190 96 L268 130 L240 196 L162 162 Z" fill="${t.a}"/>
      <ellipse cx="216" cy="184" rx="44" ry="10" transform="rotate(23 216 184)" fill="#fff6c8"/>`,

    yogamat: (t) => `
      ${shadow(200, 330, 150)}
      <rect x="110" y="190" width="230" height="130" rx="10" fill="${t.a}"/>
      ${shine(118, 200, 214, 12, 6, 0.25)}
      <circle cx="110" cy="255" r="66" fill="${t.a}"/>
      <circle cx="110" cy="255" r="66" fill="#000" opacity=".1"/>
      <g fill="none" stroke="#fff" stroke-width="3" opacity=".55">
        <circle cx="110" cy="255" r="52"/><circle cx="110" cy="255" r="38"/><circle cx="110" cy="255" r="24"/></g>
      <circle cx="110" cy="255" r="10" fill="${t.d}" opacity=".5"/>
      <rect x="200" y="182" width="22" height="146" rx="4" fill="${t.d}"/>
      <rect x="280" y="182" width="22" height="146" rx="4" fill="${t.d}"/>`,

    backpack: (t) => `
      ${shadow(200, 372, 120)}
      <path d="M170 74 a30 30 0 0 1 60 0" fill="none" stroke="${t.d}" stroke-width="12"/>
      <rect x="104" y="80" width="192" height="288" rx="46" fill="${t.a}"/>
      ${shine(120, 100, 14, 240, 7, 0.18)}
      <rect x="104" y="140" width="192" height="10" fill="${t.d}" opacity=".25"/>
      <rect x="134" y="224" width="132" height="122" rx="26" fill="${t.d}" opacity=".3"/>
      <rect x="134" y="236" width="132" height="6" fill="#fff" opacity=".35"/>
      <rect x="186" y="226" width="28" height="14" rx="4" fill="${t.d}"/>`,

    cubes: (t) => {
      const cube = (x, y, s, c, ch) => `
        <rect x="${x}" y="${y}" width="${s}" height="${s}" rx="10" fill="${c}"/>
        <rect x="${x + 10}" y="${y + 10}" width="${s - 20}" height="${s - 20}" rx="6" fill="#fff" opacity=".9"/>
        <text x="${x + s / 2}" y="${y + s / 2 + s * 0.17}" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="${s * 0.48}" fill="${c}">${ch}</text>`;
      return `${shadow(200, 372, 150)}${cube(64, 246, 120, t.a, 'А')}${cube(206, 246, 120, t.x, 'Б')}${cube(134, 116, 120, t.d, 'В')}<rect x="64" y="362" width="262" height="4" fill="#000" opacity=".05"/>`;
    },

    candle: (t) => `
      ${shadow(200, 370, 100)}
      <ellipse cx="200" cy="80" rx="14" ry="26" fill="#ffb347"/>
      <ellipse cx="200" cy="88" rx="7" ry="13" fill="#fff3c4"/>
      <rect x="198" y="100" width="4" height="26" fill="#333"/>
      <rect x="112" y="118" width="176" height="248" rx="22" fill="${t.x}" opacity=".35"/>
      <rect x="120" y="128" width="160" height="230" rx="16" fill="${t.l}"/>
      <ellipse cx="200" cy="130" rx="80" ry="10" fill="#fff" opacity=".7"/>
      <rect x="136" y="210" width="128" height="96" rx="6" fill="${t.d}"/>
      <text x="200" y="252" text-anchor="middle" font-family="Georgia,serif" font-size="24" fill="#fff">lavender</text>
      <text x="200" y="280" text-anchor="middle" font-family="Manrope,Arial" font-size="12" letter-spacing="3" fill="#fff" opacity=".7">SOY WAX</text>
      ${shine(122, 140, 10, 200, 5, 0.35)}`,

    bottle: (t) => `
      ${shadow(200, 372, 80)}
      <rect x="170" y="44" width="60" height="44" rx="10" fill="${t.d}"/>
      <path d="M228 56 h22 a14 14 0 0 1 14 14 v20 a14 14 0 0 1 -14 14 h-22" fill="none" stroke="${t.d}" stroke-width="10"/>
      <rect x="140" y="84" width="120" height="284" rx="34" fill="${t.a}" opacity=".35"/>
      <rect x="140" y="170" width="120" height="198" rx="34" fill="${t.a}" opacity=".8"/>
      ${shine(152, 98, 12, 250, 6, 0.4)}
      <g font-family="Manrope,Arial" font-size="12" font-weight="700" fill="${t.d}">
        <line x1="226" y1="140" x2="250" y2="140" stroke="${t.d}" stroke-width="3"/><text x="204" y="144" text-anchor="end">9:00</text>
        <line x1="226" y1="200" x2="250" y2="200" stroke="${t.d}" stroke-width="3"/><text x="204" y="204" text-anchor="end">12:00</text>
        <line x1="226" y1="260" x2="250" y2="260" stroke="${t.d}" stroke-width="3"/><text x="204" y="264" text-anchor="end">15:00</text>
        <line x1="226" y1="320" x2="250" y2="320" stroke="${t.d}" stroke-width="3"/><text x="204" y="324" text-anchor="end">18:00</text></g>`,

    powerbank: (t) => `
      ${shadow(200, 362, 110)}
      <rect x="114" y="70" width="172" height="290" rx="26" fill="${t.d}"/>
      ${shine(126, 84, 12, 260, 6, 0.12)}
      <rect x="168" y="62" width="64" height="10" rx="4" fill="#555"/>
      <path d="M210 150 L178 214 H204 L190 270 L226 196 H200 Z" fill="${t.a}"/>
      <g fill="${t.a}"><circle cx="170" cy="318" r="6"/><circle cx="190" cy="318" r="6"/><circle cx="210" cy="318" r="6"/><circle cx="230" cy="318" r="6" opacity=".3"/></g>`,

    socks: (t) => {
      const sock = (dx, c1, c2) => `
        <g transform="translate(${dx} 0)">
          <path d="M0 60 h80 v170 q0 20 20 30 l50 24 q30 16 16 50 q-12 26 -44 16 l-98 -40 q-24 -10 -24 -40 z" fill="${c1}"/>
          <rect x="0" y="60" width="80" height="26" fill="${c2}"/>
          <rect x="0" y="120" width="80" height="12" fill="${c2}" opacity=".6"/>
          <rect x="0" y="150" width="80" height="12" fill="${c2}" opacity=".6"/>
          <path d="M126 274 l24 12 q30 16 16 50 q-12 26 -44 16 l-16 -6 z" fill="${c2}"/></g>`;
      return `${shadow(200, 372, 140)}${sock(80, t.a, t.d)}${sock(170, t.x, t.d)}`;
    },

    pan: (t) => `
      ${shadow(170, 330, 140)}
      <rect x="268" y="196" width="128" height="26" rx="13" fill="${t.d}" transform="rotate(-10 268 209)"/>
      <circle cx="170" cy="210" r="124" fill="#2b2b2e"/>
      <circle cx="170" cy="210" r="108" fill="#3b3c41"/>
      <circle cx="170" cy="210" r="108" fill="url(#pd)" opacity=".5"/>
      <defs><pattern id="pd" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="2" fill="#fff" opacity=".25"/></pattern></defs>
      <path d="M90 150 a100 100 0 0 1 60 -44" stroke="#fff" stroke-width="8" fill="none" opacity=".2" stroke-linecap="round"/>
      <circle cx="170" cy="210" r="40" fill="#ffd34d"/><circle cx="170" cy="210" r="18" fill="#ffae00"/>
      <ellipse cx="170" cy="210" rx="66" ry="56" fill="#fff" opacity=".9" style="mix-blend-mode:normal"/>
      <circle cx="170" cy="210" r="24" fill="#ffb300"/>`,

    shampoo: (t) => `
      ${shadow(200, 372, 90)}
      <rect x="194" y="40" width="70" height="16" rx="6" fill="${t.d}"/>
      <rect x="184" y="44" width="32" height="56" rx="6" fill="${t.d}"/>
      <rect x="170" y="96" width="60" height="30" rx="8" fill="${t.d}"/>
      <path d="M140 140 q0 -18 18 -18 h84 q18 0 18 18 v214 q0 14 -14 14 h-92 q-14 0 -14 -14 z" fill="${t.a}"/>
      ${shine(152, 140, 12, 210, 6, 0.3)}
      <rect x="160" y="190" width="80" height="120" rx="8" fill="#fff" opacity=".92"/>
      <text x="200" y="236" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="20" fill="${t.d}">HAIR</text>
      <text x="200" y="258" text-anchor="middle" font-family="Manrope,Arial" font-size="12" fill="${t.d}">repair</text>
      <path d="M186 282 q14 -22 28 0 q-14 14 -28 0z" fill="${t.x}"/>`,

    petbed: (t) => `
      ${shadow(200, 342, 160)}
      <ellipse cx="200" cy="270" rx="164" ry="74" fill="${t.a}"/>
      <ellipse cx="200" cy="250" rx="164" ry="70" fill="${t.a}"/>
      <ellipse cx="200" cy="250" rx="164" ry="70" fill="#fff" opacity=".12"/>
      <ellipse cx="200" cy="256" rx="112" ry="42" fill="${t.l}"/>
      <ellipse cx="200" cy="262" rx="104" ry="34" fill="${t.d}" opacity=".08"/>
      <g fill="${t.d}" opacity=".85"><ellipse cx="200" cy="248" rx="58" ry="26"/><circle cx="160" cy="232" r="22"/>
        <polygon points="144,218 148,196 162,212"/><polygon points="166,212 178,196 178,218"/>
        <path d="M252 252 q40 10 20 -26" stroke="${t.d}" stroke-width="10" fill="none" stroke-linecap="round"/></g>`,

    watch: (t) => `
      ${shadow(200, 376, 80)}
      <rect x="158" y="24" width="84" height="120" rx="20" fill="${t.a}"/>
      <rect x="158" y="256" width="84" height="120" rx="20" fill="${t.a}"/>
      <g fill="#fff" opacity=".35"><circle cx="200" cy="300" r="5"/><circle cx="200" cy="322" r="5"/><circle cx="200" cy="344" r="5"/></g>
      <rect x="128" y="112" width="144" height="176" rx="40" fill="#1b1c20"/>
      <rect x="140" y="124" width="120" height="152" rx="30" fill="#000"/>
      <rect x="272" y="160" width="10" height="34" rx="4" fill="#3a3a3e"/>
      <text x="200" y="208" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="40" fill="#fff">10:09</text>
      <circle cx="200" cy="244" r="16" fill="none" stroke="${t.x}" stroke-width="5" stroke-dasharray="70 40"/>
      <text x="200" y="164" text-anchor="middle" font-family="Manrope,Arial" font-size="12" fill="${t.x}">♥ 72</text>`,

    containers: (t) => {
      const box = (y, w, h) => `
        <rect x="${200 - w / 2}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" opacity=".85" stroke="#d6dbe0" stroke-width="3"/>
        <rect x="${200 - w / 2 - 6}" y="${y - 14}" width="${w + 12}" height="20" rx="8" fill="${t.a}"/>
        <rect x="${200 - w / 2 - 10}" y="${y - 8}" width="14" height="22" rx="4" fill="${t.d}"/>
        <rect x="${200 + w / 2 - 4}" y="${y - 8}" width="14" height="22" rx="4" fill="${t.d}"/>`;
      return `${shadow(200, 372, 150)}${box(290, 280, 80)}${box(196, 240, 76)}${box(108, 200, 70)}
        <rect x="200" y="310" width="110" height="40" rx="8" fill="${t.x}" opacity=".45"/><circle cx="130" cy="330" r="16" fill="#8bc34a" opacity=".7"/>`;
    },

    pillow: (t) => `
      ${shadow(200, 350, 170)}
      <path d="M36 300 C36 220 70 180 110 196 C150 212 160 240 200 240 C240 240 260 196 310 176 C350 160 368 230 364 300 Q362 336 330 336 H70 Q36 336 36 300 Z" fill="${t.l}" stroke="#d6d9de" stroke-width="3"/>
      <path d="M36 300 C36 220 70 180 110 196 C150 212 160 240 200 240 C240 240 260 196 310 176 C350 160 368 230 364 300" fill="none" stroke="${t.a}" stroke-width="8" opacity=".7"/>
      <g fill="${t.a}" opacity=".18"><circle cx="100" cy="280" r="8"/><circle cx="140" cy="290" r="8"/><circle cx="180" cy="294" r="8"/><circle cx="220" cy="294" r="8"/><circle cx="260" cy="286" r="8"/><circle cx="300" cy="276" r="8"/></g>`,

    umbrella: (t) => `
      ${shadow(200, 372, 70)}
      <path d="M200 60 C110 60 50 120 40 200 Q66 180 93 200 Q120 180 147 200 Q173 180 200 200 Q227 180 253 200 Q280 180 307 200 Q334 180 360 200 C350 120 290 60 200 60 Z" fill="${t.a}"/>
      <path d="M200 60 C170 90 150 140 147 200 Q173 180 200 200 Q227 180 253 200 C250 140 230 90 200 60 Z" fill="${t.d}" opacity=".25"/>
      <rect x="196" y="40" width="8" height="24" rx="3" fill="${t.d}"/>
      <path d="M200 196 V330 a24 24 0 0 1 -48 0" fill="none" stroke="${t.d}" stroke-width="10" stroke-linecap="round"/>
      <g stroke="${t.x}" stroke-width="5" stroke-linecap="round" opacity=".6"><line x1="80" y1="250" x2="70" y2="280"/><line x1="320" y1="240" x2="310" y2="270"/><line x1="290" y1="300" x2="280" y2="330"/><line x1="110" y1="310" x2="100" y2="340"/></g>`,
  };

  // Пустое место под фото товара (для шаблонов)
  ART.placeholder = (t) => `
    <defs><pattern id="ph" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="12" height="24" fill="#000" opacity=".04"/></pattern></defs>
    <rect x="34" y="34" width="332" height="332" rx="36" fill="${t.bg}"/>
    <rect x="34" y="34" width="332" height="332" rx="36" fill="url(#ph)" stroke="${t.a}" stroke-width="4" stroke-dasharray="14 10"/>
    <g fill="none" stroke="${t.a}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".8">
      <rect x="160" y="150" width="80" height="60" rx="10"/><circle cx="200" cy="180" r="16"/><path d="M182 150 l8 -12 h20 l8 12"/></g>
    <text x="200" y="256" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="22" fill="${t.a}">ФОТО ТОВАРА</text>
    <text x="200" y="284" text-anchor="middle" font-family="Manrope,Arial" font-size="15" fill="${t.a}" opacity=".8">PNG без фона</text>`;

  window.renderArt = function (name, theme) {
    const fn = ART[name];
    if (!fn) return '';
    return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${fn(theme)}</svg>`;
  };
})();
