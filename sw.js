/* sw.js — cho phep hoc offline sau lan mo dau tien.
   Chi chay tren http/https (GitHub Pages). Mo bang file:// thi app van chay, khong co SW.
   Doi bat ky file nao trong ASSETS thi PHAI tang CACHE. */
var CACHE = 'esp-trainer-v9';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/app.css',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './data/vocab.js',
  './assets/js/store.js',
  './assets/js/srs.js',
  './assets/js/data.js',
  './assets/js/ui.js',
  './assets/js/art.js',
  './assets/js/celebrate.js',
  './assets/js/games/registry.js',
  './assets/js/games/flash.js',
  './assets/js/games/quiz.js',
  './assets/js/games/listen.js',
  './assets/js/games/scramble.js',
  './assets/js/games/cloze.js',
  './assets/js/games/match.js',
  './assets/js/games/speed.js',
  './assets/js/app.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(ASSETS);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      return k === CACHE ? null : caches.delete(k);
    }));
  }).then(function () { return self.clients.claim(); }));
});

/* stale-while-revalidate: tra ban cache ngay, am tham tai ban moi cho lan sau. */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    // Chi doc DUNG cache cua ban nay. caches.match() do het moi cache con song,
    // nen mot lan tai trang roi vao dung luc nang cap co the nhan nua file ban cu
    // nua file ban moi — app chay voi ui.js cu ma app.js moi thi hong lang le.
    caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (hit) {
        var live = fetch(req).then(function (res) {
          if (res && res.status === 200) c.put(req, res.clone());
          return res;
        }).catch(function () {
          // Mat mang ma cache cung khong co muc nay: van phai tra ve MOT Response.
          // respondWith(undefined) lam trinh duyet bao loi mang, the <script> do
          // khong chay, va app chet nua voi — dung cai lam man "Ket qua" trong tron.
          return hit || new Response('/* khong tai duoc khi mat mang */',
            { status: 504, statusText: 'Offline', headers: { 'Content-Type': 'text/plain' } });
        });
        return hit || live;
      });
    })
  );
});
