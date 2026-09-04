/* upgrade_test.js — tien do cua nguoi dung CU phai song sot nguyen ven qua ban moi.
   Cach lam: chay code o HEAD (ban dang deploy) de sinh du lieu that,
   roi nap chinh chuoi localStorage do vao code moi va so tung truong.
   Khong dung trinh duyet — chay bang node. Xem CLAUDE.md muc 7. */
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var execSync = require('child_process').execSync;

var ROOT = path.join(__dirname, '..');
var log = [], errs = [];

function ok(cond, msg) {
  log.push((cond ? 'OK   ' : 'FAIL ') + msg);
  if (!cond) errs.push(msg);
  return cond;
}

/** Doc mot file o phien ban da commit (ban nguoi dung dang chay). */
function atHead(rel) {
  return execSync('git show HEAD:' + rel, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
}

/** Sandbox gia lap trinh duyet vua du cho store/srs/data/ui/art/celebrate. */
function sandbox(seed) {
  var data = {};
  if (seed != null) data['esp-trainer/v1'] = seed;
  var storage = {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
    setItem: function (k, v) { data[k] = String(v); },
    removeItem: function (k) { delete data[k]; },
    _raw: function () { return data['esp-trainer/v1']; }
  };
  var el = function () {
    return {
      style: {}, className: '', textContent: '', innerHTML: '', type: '',
      classList: { add: function () {}, remove: function () {} },
      appendChild: function () {}, addEventListener: function () {},
      setAttribute: function () {}, removeChild: function () {}
    };
  };
  var ctx = vm.createContext({
    localStorage: storage,
    console: console,
    setTimeout: setTimeout, clearTimeout: clearTimeout,
    setInterval: setInterval, clearInterval: clearInterval,
    navigator: {},
    document: {
      createElement: el,
      createElementNS: el,
      getElementById: function () { return null; }
    }
  });
  ctx.window = ctx;                       // script dung window.X va bien toan cuc lan lon
  ctx.window.addEventListener = function () {};
  ctx.storage = storage;
  return ctx;
}

function load(ctx, src, name) { vm.runInContext(src, ctx, { filename: name }); }
function here(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }

/* ---------- 1. Sinh du lieu bang CHINH ban dang deploy ---------- */

var oldCtx = sandbox(null);
load(oldCtx, here('data/vocab.js'), 'vocab.js');          // du lieu tu vung khong doi
load(oldCtx, atHead('assets/js/store.js'), 'store.js@HEAD');
load(oldCtx, atHead('assets/js/srs.js'), 'srs.js@HEAD');

var ids = oldCtx.window.VOCAB.cards.slice(0, 40).map(function (c) { return c.id; });
oldCtx.window.Store.setSetting('sessionSize', 20);
oldCtx.window.Store.setSetting('tts', false);
ids.forEach(function (id, i) {
  var n = 1 + (i % 5);
  for (var k = 0; k < n; k++) oldCtx.window.Store.record(id, (i + k) % 4 !== 0);
});

/* Nguoi hoc that co lich su nhieu ngay — bia them vao dung hinh dang ban cu ghi. */
var st = oldCtx.window.Store.get();
st.streak = 9;
st.lastDay = oldCtx.window.Store.today();
st.days['2026-08-20'] = { reviews: 31, correct: 25 };
st.days['2026-08-21'] = { reviews: 18, correct: 17 };
oldCtx.window.Store.save();

setTimeout(function () {
  var oldRaw = oldCtx.storage._raw();
  var oldState = JSON.parse(oldRaw);
  ok(!!oldRaw, 'ban cu ghi duoc localStorage (' + oldRaw.length + ' byte)');
  ok(!('badges' in oldState), 'ban cu khong co truong badges (dung nhu du kien)');

  /* ---------- 2. Nap chuoi do vao ban MOI ---------- */

  var neo = sandbox(oldRaw);
  load(neo, here('data/vocab.js'), 'vocab.js');
  load(neo, here('assets/js/store.js'), 'store.js');
  load(neo, here('assets/js/srs.js'), 'srs.js');
  load(neo, here('assets/js/data.js'), 'data.js');
  load(neo, here('assets/js/ui.js'), 'ui.js');
  load(neo, here('assets/js/art.js'), 'art.js');
  load(neo, here('assets/js/celebrate.js'), 'celebrate.js');

  ok(neo.window.Store.KEY === 'esp-trainer/v1', 'khoa localStorage van la esp-trainer/v1');

  var neoState = neo.window.Store.get();

  // Moi truong cu phai con nguyen ven, khong sai mot bit.
  Object.keys(oldState).forEach(function (k) {
    ok(JSON.stringify(neoState[k]) === JSON.stringify(oldState[k]),
       'giu nguyen truong "' + k + '"');
  });
  ok(JSON.stringify(neoState.badges) === '{}', 'them truong badges rong, khong dung toi cai khac');
  ok(neoState.streak === 9, 'chuoi ngay hoc van la 9 (khong bi migrate xoa)');
  ok(Object.keys(neoState.cards).length === ids.length,
     'con du ' + ids.length + ' the co tien do');

  // Tien do khong duoc mo coi: id nao cung phai con trong bo tu vung.
  var live = {};
  neo.window.VOCAB.cards.forEach(function (c) { live[c.id] = 1; });
  var orphan = Object.keys(neoState.cards).filter(function (id) { return !live[id]; });
  ok(orphan.length === 0, 'khong co the mo coi (id doi ten) — ' + orphan.slice(0, 5).join(', '));

  // Muc "da thuoc" phai tinh y het nhu cu.
  var same = 0, diff = [];
  Object.keys(oldState.cards).forEach(function (id) {
    var a = oldCtx.window.SRS.isMastered(oldState.cards[id]);
    var b = neo.window.SRS.isMastered(neoState.cards[id]);
    if (a === b) same++; else diff.push(id);
  });
  ok(diff.length === 0, 'nhan "da thuoc" khong doi tren ca ' + same + ' the');

  /* ---------- 3. Nhap lai ban xuat cua phien ban cu ---------- */

  var fresh = sandbox(null);
  load(fresh, here('data/vocab.js'), 'vocab.js');
  load(fresh, here('assets/js/store.js'), 'store.js');
  load(fresh, here('assets/js/srs.js'), 'srs.js');
  var threw = null;
  try { fresh.window.Store.importJSON(oldRaw); } catch (e) { threw = e; }
  ok(!threw, 'nhap tien do xuat tu ban cu khong loi' + (threw ? ': ' + threw.message : ''));
  var imported = fresh.window.Store.get();
  ok(imported.streak === 9 && Object.keys(imported.cards).length === ids.length,
     'ban nhap giu du chuoi ngay va tien do the');
  ok(JSON.stringify(imported.badges) === '{}', 'ban nhap cung duoc bu truong badges');

  /* ---------- 4. Huy hieu bung ra bao nhieu cai o lan mo dau ---------- */

  var fresh2 = neo.window.Celebrate.check({ total: 12, acc: 92 });
  var counts = neo.window.Celebrate.counts();
  log.push('     nguoi dung cu mo khoa ngay ' + fresh2.length + '/' + counts.total + ' huy hieu o phien dau');
  ok(fresh2.length <= 6, 'khong do ap qua nhieu huy hieu mot luc (' + fresh2.length + ')');
  var twice = neo.window.Celebrate.check({ total: 12, acc: 92 });
  ok(twice.length === 0, 'huy hieu da mo khong bung lai lan hai');

  /* ---------- 4b. Nguoi hoc lau nam: bao nhieu huy hieu bung mot luc ---------- */

  var heavy = sandbox(null);
  load(heavy, here('data/vocab.js'), 'vocab.js');
  load(heavy, here('assets/js/store.js'), 'store.js');
  load(heavy, here('assets/js/srs.js'), 'srs.js');
  load(heavy, here('assets/js/data.js'), 'data.js');
  load(heavy, here('assets/js/ui.js'), 'ui.js');
  load(heavy, here('assets/js/art.js'), 'art.js');
  load(heavy, here('assets/js/celebrate.js'), 'celebrate.js');

  var hs = heavy.window.Store.get();
  hs.streak = 40;
  hs.totalReviews = 2200;
  heavy.window.VOCAB.cards.forEach(function (c, i) {
    if (i >= 300) return;                       // 300 tu da thuoc
    hs.cards[c.id] = { reps: 7, ease: 2.5, interval: 60, due: Date.now() + 6e9,
                       lapses: 0, seen: 9, correct: 9, last: Date.now() };
  });
  var burst = heavy.window.Celebrate.check({ total: 12, acc: 100 });
  var shown = heavy.window.Celebrate.queueFor(burst);
  log.push('     nguoi hoc lau nam mo khoa ' + burst.length + ' huy hieu mot luc');
  ok(burst.length > 6, 'dung la truong hop nang (' + burst.length + ' huy hieu)');
  ok(shown.length === 1,
     'gop lai thanh 1 the thay vi bat ' + burst.length + ' lop phu lien tiep');
  ok(heavy.window.Celebrate.queueFor(burst.slice(0, 2)).length === 2,
     'mo khoa it thi van hien tung cai mot');
  ok(heavy.window.Celebrate.counts().got === burst.length,
     'ca ' + burst.length + ' huy hieu deu duoc ghi nhan, khong mat cai nao');

  /* ---------- 5. Cai dat nguoi dung tu chinh ---------- */

  ok(neoState.sessionSize === 20, 'giu so tu moi phien nguoi dung da chon (20)');
  ok(neoState.tts === false, 'giu lua chon tat doc phat am');

  console.log(log.join('\n'));
  console.log('KET QUA:', errs.length ? 'HONG (' + errs.length + ' loi)' : 'DAT');
  process.exit(errs.length ? 1 : 0);
}, 300);
