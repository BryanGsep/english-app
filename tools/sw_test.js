/* sw_test.js — chay sw.js trong mot ServiceWorkerGlobalScope gia lap bang Node,
   kiem tra: cai dat cache du file, don cache cu, va doc duoc khi MAT MANG.
   Chay: node tools/sw_test.js   (xem CLAUDE.md muc 8) */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const ORIGIN = 'https://user.github.io';
const BASE = ORIGIN + '/english-app/';

process.on('unhandledRejection', (e) => {
  console.log('FAIL loi khong bat duoc: ' + (e && e.message));
  console.log('KET QUA: HONG');
  process.exit(1);
});

let fails = 0;
function check(ok, label, extra) {
  console.log((ok ? 'OK   ' : 'FAIL ') + label + (extra ? ' — ' + extra : ''));
  if (!ok) fails++;
}

/* ---- caches API gia lap ---- */
const stores = new Map();
function makeCache(name) {
  const m = new Map();
  return {
    _map: m,
    async addAll(urls) {
      for (const u of urls) {
        const abs = new URL(u, BASE).href;
        const rel = abs.replace(BASE, '');
        if (!fs.existsSync(path.join(ROOT, rel === '' ? 'index.html' : rel))) {
          throw new Error('addAll: khong co file that cho ' + u);
        }
        m.set(abs, { url: abs, status: 200, fromCache: true, clone() { return this; } });
      }
    },
    async put(req, res) { m.set(typeof req === 'string' ? req : req.url, res); },
    async match(req) { return m.get(new URL(typeof req === 'string' ? req : req.url, BASE).href) || undefined; },
    async keys() { return [...m.keys()].map((u) => ({ url: u })); }
  };
}
const caches = {
  async open(n) { if (!stores.has(n)) stores.set(n, makeCache(n)); return stores.get(n); },
  async keys() { return [...stores.keys()]; },
  async delete(n) { return stores.delete(n); },
  async match(req) {
    for (const c of stores.values()) { const hit = await c.match(req); if (hit) return hit; }
    return undefined;
  }
};

/* ---- self gia lap ---- */
let networkUp = true;
const handlers = {};
const self = {
  addEventListener: (t, fn) => { handlers[t] = fn; },
  skipWaiting: async () => {},
  clients: { claim: async () => {} },
  location: { origin: ORIGIN },
  caches
};
const ctx = vm.createContext({
  self, caches, URL, Promise, console,
  fetch: async (req) => {
    if (!networkUp) throw new Error('offline');
    return { url: req.url || req, status: 200, fromCache: false, clone() { return this; } };
  }
});
vm.runInContext(fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8'), ctx);

function evt(waited) {
  return { waitUntil: (p) => { waited.push(p); }, respondWith: (p) => { waited.push(p); } };
}

(async () => {
  check(!!handlers.install && !!handlers.activate && !!handlers.fetch,
    'sw.js dang ky du 3 su kien install/activate/fetch');

  /* install: phai cache het ASSETS, va moi ASSET phai la file that */
  let w = [];
  handlers.install(evt(w));
  await Promise.all(w);
  const cacheName = (await caches.keys())[0];
  const cached = await (await caches.open(cacheName)).keys();
  // Khong so cached voi ASSETS (tu quy chieu, luon dung). So voi thuc te tren dia.
  check(cached.length >= 18, 'install cache duoc so file hop ly', cached.length + ' file');
  for (const must of ['./', './index.html']) {
    const abs = new URL(must, BASE).href;
    check(cached.some((c) => c.url === abs), "cache co muc '" + must + "'");
  }

  /* moi <script>/<link> trong index.html phai nam trong cache */
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const refs = [...html.matchAll(/(?:src|href)="((?!data:|http)[^"]+)"/g)].map((m) => m[1]);
  const missing = refs.filter((r) => !cached.some((c) => c.url.endsWith('/' + r)));
  check(missing.length === 0, 'moi file index.html tham chieu deu duoc cache',
    missing.length ? 'thieu ' + missing.join(', ') : refs.length + ' file');

  /* activate: phai xoa cache phien ban cu */
  stores.set('esp-trainer-v0-cu', makeCache('esp-trainer-v0-cu'));
  w = [];
  handlers.activate(evt(w));
  await Promise.all(w);
  check(!(await caches.keys()).includes('esp-trainer-v0-cu'), 'activate don cache phien ban cu',
    'con lai: ' + (await caches.keys()).join(','));

  /* fetch khi MAT MANG: van phai tra ra ban cache */
  networkUp = false;
  for (const asset of ['index.html', 'data/vocab.js', 'assets/js/app.js', 'assets/css/app.css']) {
    const w2 = [];
    handlers.fetch({ ...evt(w2), request: { method: 'GET', url: BASE + asset } });
    let res = null, err = null;
    try { res = await w2[0]; } catch (e) { err = e; }
    const ok = !!(res && res.status === 200 && res.fromCache);
    check(ok, 'offline van doc duoc ' + asset, ok ? '' :
      (err ? 'sw.js nem loi thay vi tra ban cache: ' + err.message
           : (res ? 'tra ve ban tu mang chu khong phai cache' : 'khong tra ve gi')));
  }

  /* khong duoc chen ngang POST hay request khac origin */
  let w3 = [];
  handlers.fetch({ ...evt(w3), request: { method: 'POST', url: BASE + 'index.html' } });
  check(w3.length === 0, 'khong chen ngang request POST');
  w3 = [];
  handlers.fetch({ ...evt(w3), request: { method: 'GET', url: 'https://example.com/x.js' } });
  check(w3.length === 0, 'khong chen ngang request khac origin');

  /* co mang lai: van tra ket qua, va cap nhat cache ngam */
  networkUp = true;
  const w4 = [];
  handlers.fetch({ ...evt(w4), request: { method: 'GET', url: BASE + 'index.html' } });
  check((await w4[0]).status === 200, 'co mang van tra ket qua binh thuong');

  console.log(fails ? 'KET QUA: HONG (' + fails + ' loi)' : 'KET QUA: DAT');
  process.exit(fails ? 1 : 0);
})();
