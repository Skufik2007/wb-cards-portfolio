// Экспорт всех слайдов в PNG 900x1200 через headless Microsoft Edge.
// Запуск: node export.js   (нужен запущенный локальный сервер, см. BASE)
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

global.window = {};
require('./js/data.js');
require('./js/templates.js');

const EDGE = process.env.EDGE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const BASE = process.env.BASE || 'http://localhost:8765/wb-cards';
const out = path.join(__dirname, 'img');
fs.mkdirSync(out, { recursive: true });
const only = process.argv[2];

for (const p of window.PRODUCTS.concat(window.TEMPLATES)) {
  if (only && !p.id.startsWith(only)) continue;
  for (const s of [1, 2, 3]) {
    const file = path.join(out, `${p.id}-${s}.png`);
    if (fs.existsSync(file)) fs.unlinkSync(file);
    execFileSync(EDGE, [
      '--headless=new', '--disable-gpu', `--user-data-dir=${path.join(require('os').tmpdir(), 'edge-wb-export')}`, '--hide-scrollbars', '--force-device-scale-factor=1',
      '--window-size=900,1200', '--virtual-time-budget=4000',
      `--screenshot=${file}`, `${BASE}/slide.html?id=${p.id}&s=${s}`,
    ], { stdio: 'ignore' });
    // Edge может вернуть управление раньше, чем запишет файл: ждем до 15 с
    const t0 = Date.now();
    while (!fs.existsSync(file) && Date.now() - t0 < 15000) execFileSync('node', ['-e', 'setTimeout(()=>{},300)']);
    console.log(fs.existsSync(file) ? 'ok  ' : 'FAIL', path.basename(file));
  }
}
