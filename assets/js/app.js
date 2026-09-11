/* app.js — router, cac man hinh, dieu phoi phien hoc.
   Day la NOI DUY NHAT ghi ket qua vao SRS (xem CLAUDE.md muc 5). */
(function () {
  'use strict';
  var UI = window.UI, Data = window.Data, Store = window.Store, SRS = window.SRS;
  var view, session = null;
  var screenTick = 0;        // tang moi lan doi man hinh — chan hieu ung ban muon

  /* ---------- helper ---------- */

  /**
   * Chay mot mieng TRANG TRI (loi chuc, huy hieu, tranh SVG).
   * Art va Celebrate chi ve (CLAUDE.md muc 5b) — mot file khong nap duoc hay mot
   * loi trong do KHONG duoc phep nuot ca man hinh. Da xay ra that: art.js khong
   * nap len duoc thi `Celebrate.cheer` nem loi ngay dong dau cua man Ket qua,
   * nguoi hoc thay mot trang hong rong tron chi con chu "Ket qua".
   * Tra ve null khi hong; nguoi goi tu quyet dinh bo qua.
   */
  function deco(fn) {
    try { return fn(); }
    catch (e) {
      if (window.console && console.error) console.error('phan trang tri hong:', e);
      return null;
    }
  }

  function header(title, backHash, right) {
    var h = UI.el('header', 'topbar');
    if (backHash != null) {
      h.appendChild(UI.btn('‹', 'icon-btn back', function () { location.hash = backHash; }));
    } else {
      h.appendChild(UI.el('span', 'icon-btn ghost'));
    }
    h.appendChild(UI.el('h1', null, title));
    h.appendChild(right || UI.el('span', 'icon-btn ghost'));
    return h;
  }

  function deckStat(deckId) { return SRS.summary(Data.ofDeck(deckId)); }

  /* Bo loc danh sach tu. Dinh nghia phai TRUNG voi SRS.summary:
     moi/dang hoc/da thuoc chia het tap the; "can on" cat ngang ca ba. */
  var FILTERS = [
    { id: 'all',      name: 'Tất cả',   key: 'total',
      test: function () { return true; } },
    { id: 'due',      name: 'Cần ôn',   key: 'due',
      test: function (st) { return SRS.isDue(st); } },
    { id: 'learning', name: 'Đang học', key: 'learning',
      test: function (st) { return !!st && st.seen > 0 && !SRS.isMastered(st); } },
    { id: 'mastered', name: 'Đã thuộc', key: 'mastered',
      test: function (st) { return SRS.isMastered(st); } },
    { id: 'new',      name: 'Chưa học', key: 'fresh',
      test: function (st) { return !st || st.seen === 0; } }
  ];

  function filterOf(id) {
    for (var i = 0; i < FILTERS.length; i++) if (FILTERS[i].id === id) return FILTERS[i];
    return FILTERS[0];
  }

  /** Nhan trang thai chinh cua mot the: moi / dang hoc / da thuoc. */
  function stateOf(st) {
    if (!st || st.seen === 0) return { id: 'new', name: 'Chưa học' };
    if (SRS.isMastered(st)) return { id: 'mastered', name: 'Đã thuộc' };
    return { id: 'learning', name: 'Đang học' };
  }

  function daysTo(st) {
    return Math.ceil((st.due - Date.now()) / 86400000);
  }

  /** Khi nao phai on lai, viet cho nguoi doc. */
  function dueText(st) {
    if (!st || st.seen === 0) return 'chưa học lần nào';
    var d = daysTo(st);
    if (d < 0) return 'quá hạn ' + (-d) + ' ngày';
    if (d <= 0) return 'cần ôn hôm nay';
    if (d === 1) return 'ôn lại ngày mai';
    return 'ôn lại sau ' + d + ' ngày';
  }

  function pct(s) { return s.total ? Math.round(s.mastered / s.total * 100) : 0; }

  /** Thanh tien do trong 1 vong choi — game goi qua App.roundBar. */
  function roundBar(i, total, label) {
    var w = UI.el('div', 'round-bar');
    var top = UI.el('div', 'round-top');
    top.appendChild(UI.el('span', null, label || (session ? session.gameName : '')));
    top.appendChild(UI.el('span', 'round-count', (i + 1) + '/' + total));
    w.appendChild(top);
    w.appendChild(UI.bar(total ? i / total * 100 : 0));
    return w;
  }

  /* ---------- man hinh: trang chu / lo trinh ---------- */

  function screenHome() {
    var s = Store.get();
    var all = SRS.summary(Data.cards);
    UI.clear(view);

    var top = UI.el('div', 'hero');
    top.appendChild(UI.el('p', 'kicker', 'Tiếng Anh chuyên ngành'));
    top.appendChild(UI.el('h1', 'hero-title', 'Kỹ thuật Tài nguyên nước & Giảm nhẹ thiên tai'));
    top.appendChild(UI.el('p', 'hero-sub',
      'Từ vựng rút từ ' + (Data.meta.corpus || 50) + ' bài báo của GS. Akiyuki Kawasaki (Univ. of Tokyo) và các nghiên cứu cùng chủ đề.'));
    view.appendChild(top);

    var stats = UI.el('div', 'stat-row');
    [['🔥', s.streak, 'ngày liên tiếp', null],
     ['✅', all.mastered, 'từ đã thuộc', '#/list/all/mastered'],
     ['⏰', all.due, 'từ cần ôn', '#/list/all/due']].forEach(function (x) {
      var b = UI.el(x[3] ? 'a' : 'div', 'stat' + (x[3] ? ' tap' : ''));
      if (x[3]) b.href = x[3];
      b.appendChild(UI.el('span', 'stat-icon', x[0]));
      b.appendChild(UI.el('b', null, String(x[1])));
      b.appendChild(UI.el('small', null, x[2]));
      stats.appendChild(b);
    });
    view.appendChild(stats);

    var cta = UI.btn(all.due ? 'Ôn ' + all.due + ' từ đến hạn' : 'Học ngay', 'cta', function () {
      location.hash = '#/play/all/mix';
    });
    view.appendChild(cta);

    view.appendChild(UI.el('h2', 'section', 'Lộ trình học'));
    var path = UI.el('div', 'path');
    var nextIdx = recommendedDeck();
    Data.decks.forEach(function (d, idx) {
      var st = deckStat(d.id), p = pct(st);
      var node = UI.el('a', 'path-node' + (idx === nextIdx ? ' focus' : '') + (p === 100 ? ' complete' : ''));
      node.href = '#/deck/' + d.id;

      var dot = UI.el('div', 'path-dot');
      dot.appendChild(UI.el('span', 'path-icon', d.icon));
      dot.appendChild(UI.el('span', 'path-step', 'Chặng ' + (idx + 1)));
      node.appendChild(dot);

      var body = UI.el('div', 'path-body');
      var t = UI.el('div', 'path-title');
      t.appendChild(UI.el('b', null, d.name));
      t.appendChild(UI.el('span', 'chip', st.mastered + '/' + st.total));
      body.appendChild(t);
      body.appendChild(UI.el('p', 'muted', d.desc));
      body.appendChild(UI.bar(p));
      var meta = UI.el('p', 'micro');
      meta.textContent = st.due ? st.due + ' từ đến hạn ôn'
        : (st.fresh ? st.fresh + ' từ chưa học' : 'Đã học hết — chờ tới hạn ôn');
      body.appendChild(meta);
      node.appendChild(body);
      path.appendChild(node);
    });
    view.appendChild(path);

    var bc = deco(function () { return window.Celebrate.counts(); });
    if (bc) {
      view.appendChild(UI.btn('🎀 Huy hiệu đã mở khoá: ' + bc.got + '/' + bc.total, 'wide',
        function () { location.hash = '#/stats'; }));
    }

    var links = UI.el('div', 'row gap');
    links.appendChild(UI.btn('📊 Tiến độ', 'wide', function () { location.hash = '#/stats'; }));
    links.appendChild(UI.btn('⚙️ Cài đặt', 'wide', function () { location.hash = '#/settings'; }));
    view.appendChild(links);
  }

  /** Chang duoc goi y: chang dau tien chua thuoc het. */
  function recommendedDeck() {
    for (var i = 0; i < Data.decks.length; i++) {
      var st = deckStat(Data.decks[i].id);
      if (st.mastered < st.total) return i;
    }
    return 0;
  }

  /* ---------- man hinh: mot chang ---------- */

  function screenDeck(deckId) {
    var d = Data.deck(deckId);
    if (!d) return (location.hash = '#/');
    var cards = Data.ofDeck(deckId), st = SRS.summary(cards);
    UI.clear(view);
    view.appendChild(header(d.name, '#/'));

    var head = UI.el('div', 'deck-head');
    var top2 = UI.el('div', 'deck-top');
    top2.appendChild(UI.ring(pct(st), pct(st) + '%', 'đã thuộc'));
    var info = UI.el('div', 'deck-info');
    info.appendChild(UI.el('p', 'muted', d.desc));
    var chips = UI.el('div', 'chips');
    [['mới', st.fresh, 'new'], ['đang học', st.learning, 'learning'],
     ['đã thuộc', st.mastered, 'mastered'], ['cần ôn', st.due, 'due']]
      .forEach(function (x) {
        var a = UI.el('a', 'chip tap');
        a.href = '#/list/' + deckId + '/' + x[2];
        a.textContent = x[0] + ' ' + x[1];
        chips.appendChild(a);
      });
    info.appendChild(chips);
    top2.appendChild(info);
    head.appendChild(top2);
    view.appendChild(head);

    view.appendChild(UI.btn('Học ngay (trộn nhiều game)', 'cta', function () {
      location.hash = '#/play/' + deckId + '/mix';
    }));

    view.appendChild(UI.el('h2', 'section', 'Chọn kiểu chơi'));
    var grid = UI.el('div', 'game-grid');
    window.Games.all().forEach(function (g) {
      var playable = window.Games.eligible(cards).indexOf(g) > -1;
      var b = UI.el('button', 'game-tile' + (playable ? '' : ' off'));
      b.type = 'button';
      b.appendChild(UI.el('span', 'game-icon', g.icon));
      b.appendChild(UI.el('b', null, g.name));
      b.appendChild(UI.el('small', null, g.desc));
      if (playable) {
        b.addEventListener('click', function () { location.hash = '#/play/' + deckId + '/' + g.id; });
      } else {
        b.disabled = true;
      }
      grid.appendChild(b);
    });
    view.appendChild(grid);

    view.appendChild(UI.btn('📖 Xem toàn bộ ' + cards.length + ' từ', 'wide', function () {
      location.hash = '#/list/' + deckId;
    }));
  }

  /* ---------- man hinh: danh sach tu ---------- */

  function screenList(deckId, filterId) {
    var d = deckId === 'all' ? { name: 'Toàn bộ từ vựng' } : Data.deck(deckId);
    if (!d) return (location.hash = '#/');
    var cards = Data.ofDeck(deckId), st0 = SRS.summary(cards);
    var f = filterOf(filterId);
    UI.clear(view);
    view.appendChild(header(d.name, deckId === 'all' ? '#/' : '#/deck/' + deckId));

    var tabs = UI.el('div', 'filters');
    FILTERS.forEach(function (x) {
      var b = UI.el('a', 'filter' + (x.id === f.id ? ' on' : ''));
      b.href = '#/list/' + deckId + '/' + x.id;
      b.appendChild(UI.el('span', null, x.name));
      b.appendChild(UI.el('b', null, String(st0[x.key])));
      tabs.appendChild(b);
    });
    view.appendChild(tabs);

    var note = UI.el('p', 'micro pad');
    note.textContent = f.id === 'mastered'
        ? 'Đã thuộc = trả lời đúng từ 4 lần trở lên và khoảng ôn đã giãn tới 16 ngày.'
      : f.id === 'due'
        ? 'Cần ôn = đã tới hoặc quá hạn ôn. Đây chính là những từ phiên học lấy ra trước.'
      : f.id === 'learning'
        ? 'Đang học = đã gặp ít nhất một lần nhưng chưa đạt mức thuộc.'
      : f.id === 'new'
        ? 'Chưa học = chưa từng xuất hiện trong phiên nào.'
        : 'Chạm một từ để xem định nghĩa, câu ví dụ thật và lịch ôn của nó.';
    view.appendChild(note);

    var search = UI.el('input', 'search');
    search.type = 'search';
    search.placeholder = 'Tìm từ hoặc nghĩa…';
    view.appendChild(search);

    var list = UI.el('div', 'word-list');
    view.appendChild(list);

    function draw(q) {
      UI.clear(list);
      var ql = (q || '').trim().toLowerCase();
      var shown = cards.filter(function (c) {
        var st = Store.get().cards[c.id];
        if (!f.test(st)) return false;
        return !ql || c.term.toLowerCase().indexOf(ql) > -1 || c.vi.toLowerCase().indexOf(ql) > -1;
      });
      if (f.id === 'new') {
        shown = shown.slice().sort(function (a, b) { return b.freq - a.freq; });
      } else if (f.id !== 'all') {
        shown = shown.slice().sort(function (a, b) {
          return (Store.get().cards[a.id].due) - (Store.get().cards[b.id].due);
        });
      }
      if (!shown.length) {
        list.appendChild(UI.el('p', 'muted pad',
          ql ? 'Không tìm thấy từ nào.' : 'Chưa có từ nào trong nhóm này.'));
        return;
      }
      shown.forEach(function (c) {
        var st = Store.get().cards[c.id];
        var stt = stateOf(st);
        var row = UI.el('details', 'word');
        var sum = UI.el('summary');
        var lvl = UI.el('span', 'level lv' + Math.round(SRS.strength(st) * 5));
        sum.appendChild(lvl);
        var tw = UI.el('span', 'word-main');
        tw.appendChild(UI.el('b', null, c.term));
        tw.appendChild(UI.el('span', 'muted', c.vi));
        var tags = UI.el('span', 'tags');
        tags.appendChild(UI.el('span', 'tag ' + stt.id, stt.name));
        if (SRS.isDue(st)) tags.appendChild(UI.el('span', 'tag due', 'Cần ôn'));
        tw.appendChild(tags);
        sum.appendChild(tw);
        sum.appendChild(UI.el('span', 'chip small', c.pos));
        row.appendChild(sum);

        // Ruot the chi dung khi nguoi hoc mo ra. Danh sach nay co toi 520 dong;
        // dung san ca ruot thi phan lon DOM khong ai nhin toi (do duoc: 11391 node
        // xuong 5200), ma may dien thoai van phai ve.
        var body = UI.el('div', 'word-body');
        var da = false;
        row.addEventListener('toggle', function () {
          if (da || !row.open) return;
          da = true;
          var ph = UI.ipa(c);
          if (ph) body.appendChild(ph);
          body.appendChild(UI.el('p', 'en', c.en));
          if (c.ex) {
            var q2 = UI.el('blockquote', 'ex');
            q2.appendChild(UI.el('span', null, c.ex));
            q2.appendChild(UI.el('cite', null, c.src));
            body.appendChild(q2);
            var g2 = UI.gloss(c);
            if (g2) body.appendChild(g2);
          } else {
            body.appendChild(UI.el('p', 'micro', 'Chưa có câu ví dụ trong corpus.'));
          }
          var meta = UI.el('p', 'micro');
          meta.textContent = st && st.seen
            ? 'Đã gặp ' + st.seen + ' lần · đúng ' + st.correct + ' · ' + dueText(st)
            : 'Chưa học lần nào';
          body.appendChild(meta);
          body.appendChild(UI.btn('🔊 Nghe', 'small-btn', function () { UI.speak(c.term); }));
        });
        row.appendChild(body);
        list.appendChild(row);
      });
    }
    search.addEventListener('input', function () { draw(search.value); });
    draw('');
  }

  /* ---------- phien hoc ---------- */

  var CHUNK = 4;              // so the moi vong o che do tron

  function startSession(deckId, gameId) {
    var all = Data.ofDeck(deckId);
    if (!all.length) { UI.toast('Chặng này chưa có từ nào'); location.hash = '#/'; return; }
    var one = gameId === 'mix' ? null : window.Games.get(gameId);
    if (gameId !== 'mix' && !one) { location.hash = '#/deck/' + deckId; return; }

    // Chi xep vao hang doi nhung the game nay dung duoc, de moi tu duoc phat
    // deu thuc su duoc hoi. Truoc day game tu loc ben trong nen the bi bo am tham.
    var cards = one ? window.Games.usable(one, all) : all;
    if (!cards.length) {
      UI.toast('Không có từ nào hợp với kiểu chơi này', 'bad');
      location.hash = '#/deck/' + deckId;
      return;
    }

    var size = Store.get().sessionSize || 12;
    // Game nao khai bao wantCards (vd chop nhoang 45 giay) thi lay them the cho du dung,
    // neu khong nguoi hoc se bi hoi di hoi lai vai tu. Van la app chon the, khong phai game.
    var need = one && one.wantCards ? Math.max(size, one.wantCards) : size;
    var queue = SRS.queue(cards, need);
    if (!queue.length) queue = Data.shuffle(cards).slice(0, need);

    var rounds = [];
    if (gameId === 'mix') {
      // Game khai bao wantCards (tinh gio, hoi rat nhieu luot) khong vao che do tron:
      // lat 4 the qua mong, no se hoi di hoi lai dung may tu do. Choi rieng thi du the.
      var mixable = function (g) { return !g.wantCards; };
      var pending = queue.slice(), last = null, guard = 0;
      while (pending.length && guard++ < 200) {
        var part = pending.slice(0, CHUNK);
        var fit = window.Games.eligible(part).filter(mixable);
        var ok = fit.filter(function (g) { return g.id !== last; });
        if (!ok.length) ok = fit;
        if (!ok.length) break;                 // khong kieu choi nao hop lat nay
        var g = ok[Math.floor(Math.random() * ok.length)];
        last = g.id;
        var use = window.Games.usable(g, part);
        rounds.push({ game: g, cards: use });
        // The game vua roi khong dung duoc van nam lai, vong sau se hoi — khong mat the.
        pending = pending.filter(function (c) { return use.indexOf(c) === -1; });
      }
    } else {
      rounds.push({ game: one, cards: queue });
    }
    if (!rounds.length) { UI.toast('Chưa đủ từ để chơi'); location.hash = '#/deck/' + deckId; return; }

    session = {
      deckId: deckId, gameId: gameId, rounds: rounds, idx: 0,
      results: [], gameName: rounds[0].game.name, startedAt: Date.now()
    };
    playRound();
  }

  function playRound() {
    if (!session) return;
    if (session.idx >= session.rounds.length) return endSession();
    var r = session.rounds[session.idx];
    session.gameName = r.game.name;

    UI.clear(view);
    view.appendChild(header(r.game.icon + ' ' + r.game.name, null, UI.btn('✕', 'icon-btn', function () {
      if (confirm('Thoát phiên học? Vòng đang chơi dở sẽ không được tính.')) endSession();
    })));
    var stage = UI.el('div', 'stage');
    view.appendChild(stage);

    r.game.mount(stage, r.cards, function (results) {
      // Moi the chi duoc ghi MOT lan mot vong. Game tra trung thi gop lai,
      // sai de len dung — ghi trung se thoi phong khoang on cua SRS.
      var byId = {}, order = [];
      (results || []).forEach(function (x) {
        if (!x || !x.id) return;
        if (byId[x.id]) {
          byId[x.id].correct = byId[x.id].correct && !!x.correct;
          return;
        }
        byId[x.id] = { id: x.id, correct: !!x.correct, ms: x.ms || 0 };
        order.push(x.id);
      });
      order.forEach(function (id) {
        session.results.push(byId[id]);
        Store.record(id, byId[id].correct);   // NOI DUY NHAT ghi SRS
      });
      session.idx++;
      playRound();
    });
  }

  function endSession() {
    var res = session ? session.results : [];
    var deckId = session ? session.deckId : 'all';
    var secs = session ? Math.round((Date.now() - session.startedAt) / 1000) : 0;
    session = null;

    var right = res.filter(function (r) { return r.correct; }).length;
    var acc = res.length ? Math.round(right / res.length * 100) : 0;

    UI.clear(view);
    // Man choi vua roi da bi cuon xuong (bang sua sai cao ~700px). Doi man hinh
    // trong mot phien khong di qua route() nen phai tu keo len, khong thi diem so
    // nam tren dinh trang ma nguoi hoc mo mat ra o giua danh sach tu sai.
    window.scrollTo(0, 0);
    view.appendChild(header('Kết quả', '#/'));
    var joy = deco(function () { return window.Celebrate.cheer(acc, res.length); });
    if (joy) view.appendChild(joy);
    var box = UI.el('div', 'result');
    box.appendChild(UI.ring(acc, acc + '%', 'chính xác'));
    box.appendChild(UI.el('p', 'big', right + '/' + res.length + ' câu đúng'));
    box.appendChild(UI.el('p', 'muted', 'Thời gian ' + secs + ' giây · chuỗi ' + Store.get().streak + ' ngày'));
    view.appendChild(box);

    var wrong = {};
    res.forEach(function (r) { if (!r.correct) wrong[r.id] = true; });
    var wrongIds = Object.keys(wrong);
    if (wrongIds.length) {
      view.appendChild(UI.el('h2', 'section', 'Cần xem lại — ' + wrongIds.length + ' từ'));
      var l = UI.el('div', 'reveal-list');
      wrongIds.forEach(function (id) {
        var c = Data.card(id);
        if (c) l.appendChild(UI.reveal(c, false, true));
      });
      view.appendChild(l);
    }

    var seeAll = UI.el('a', 'btn wide tap');
    seeAll.href = '#/list/' + deckId + '/due';
    seeAll.textContent = '⏰ Xem tất cả từ cần ôn';
    view.appendChild(seeAll);

    var row = UI.el('div', 'row gap');
    row.appendChild(UI.btn('Học tiếp', 'wide primary', function () {
      location.hash = '#/';
      setTimeout(function () { location.hash = '#/play/' + deckId + '/mix'; }, 20);
    }));
    row.appendChild(UI.btn('Về trang chủ', 'wide', function () { location.hash = '#/'; }));
    view.appendChild(row);

    // Moc thanh tich: cham lai mot nhip de nguoi hoc kip nhin diem truoc.
    var fresh = deco(function () {
      return window.Celebrate.check({ total: res.length, acc: acc });
    }) || [];
    if (fresh.length) {
      var tick = screenTick;
      setTimeout(function () {
        if (tick !== screenTick || !view.querySelector('.result')) return;
        deco(function () { window.Celebrate.show(fresh); });
      }, 560);
    }
  }

  /* ---------- man hinh: tien do ---------- */

  function screenStats() {
    var s = Store.get(), all = SRS.summary(Data.cards);
    UI.clear(view);
    view.appendChild(header('Tiến độ', '#/'));

    var top = UI.el('div', 'result');
    top.appendChild(UI.ring(pct(all), all.mastered + '', 'trong ' + all.total + ' từ'));
    top.appendChild(UI.el('p', 'muted', 'Tổng lượt ôn: ' + s.totalReviews + ' · chuỗi ' + s.streak + ' ngày'));
    view.appendChild(top);

    var quick = UI.el('div', 'row gap');
    [['✅ ' + all.mastered + ' từ đã thuộc', '#/list/all/mastered'],
     ['⏰ ' + all.due + ' từ cần ôn', '#/list/all/due']].forEach(function (x) {
      var a = UI.el('a', 'btn wide tap');
      a.href = x[1];
      a.textContent = x[0];
      quick.appendChild(a);
    });
    view.appendChild(quick);

    view.appendChild(UI.el('h2', 'section', '14 ngày gần đây'));
    var chart = UI.el('div', 'chart');
    var max = 1, days = [];
    for (var i = 13; i >= 0; i--) {
      var d = new Date(Date.now() - i * 86400000);
      var k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      var v = (s.days[k] || {}).reviews || 0;
      max = Math.max(max, v);
      days.push({ k: k, v: v, label: d.getDate() });
    }
    days.forEach(function (d) {
      var col = UI.el('div', 'chart-col');
      var b = UI.el('div', 'chart-bar');
      b.style.height = Math.max(3, d.v / max * 100) + '%';
      b.title = d.k + ': ' + d.v + ' lượt';
      col.appendChild(b);
      col.appendChild(UI.el('small', null, String(d.label)));
      chart.appendChild(col);
    });
    view.appendChild(chart);

    view.appendChild(UI.el('h2', 'section', 'Lịch ôn 7 ngày tới'));
    var plan = UI.el('div', 'plan');
    var buckets = [0, 0, 0, 0, 0, 0, 0, 0];
    Data.cards.forEach(function (c) {
      var st = s.cards[c.id];
      if (!st || st.seen === 0) return;
      var days2 = Math.ceil((st.due - Date.now()) / 86400000);
      if (days2 <= 0) buckets[0]++;
      else if (days2 <= 7) buckets[days2]++;
    });
    ['Hôm nay', 'Ngày mai', 'Sau 2 ngày', 'Sau 3 ngày', 'Sau 4 ngày', 'Sau 5 ngày', 'Sau 6 ngày', 'Sau 7 ngày']
      .forEach(function (lb, i2) {
        var r = UI.el('div', 'plan-row');
        r.appendChild(UI.el('span', null, lb));
        r.appendChild(UI.el('b', null, buckets[i2] + ' từ'));
        plan.appendChild(r);
      });
    view.appendChild(plan);

    view.appendChild(UI.el('h2', 'section', 'Theo chặng'));
    var g = UI.el('div', 'plan');
    Data.decks.forEach(function (d) {
      var st = deckStat(d.id);
      var r = UI.el('a', 'plan-row tap');
      r.href = '#/list/' + d.id + '/mastered';
      r.appendChild(UI.el('span', null, d.icon + ' ' + d.name));
      r.appendChild(UI.el('b', null, st.mastered + '/' + st.total));
      g.appendChild(r);
    });
    view.appendChild(g);

    var bc = deco(function () { return window.Celebrate.counts(); });
    var wall = bc && deco(function () { return window.Celebrate.wall(); });
    if (wall) {
      view.appendChild(UI.el('h2', 'section', 'Huy hiệu — ' + bc.got + '/' + bc.total));
      view.appendChild(UI.el('p', 'micro pad',
        'Chạm vào một huy hiệu để xem lời chúc và điều kiện mở khoá.'));
      view.appendChild(wall);
    }

    view.appendChild(UI.btn('📖 Xem toàn bộ từ vựng', 'wide', function () { location.hash = '#/list/all'; }));
  }

  /* ---------- man hinh: cai dat ---------- */

  function screenSettings() {
    var s = Store.get();
    UI.clear(view);
    view.appendChild(header('Cài đặt', '#/'));

    var box = UI.el('div', 'settings');

    var lbl = UI.el('label', 'set-row');
    lbl.appendChild(UI.el('span', null, 'Số từ mỗi phiên'));
    var sel = UI.el('select');
    [6, 8, 12, 16, 20, 30].forEach(function (n) {
      var o = UI.el('option', null, String(n));
      o.value = n;
      if (n === s.sessionSize) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () {
      Store.setSetting('sessionSize', parseInt(sel.value, 10));
      UI.toast('Đã lưu');
    });
    lbl.appendChild(sel);
    box.appendChild(lbl);

    var lbl2 = UI.el('label', 'set-row');
    lbl2.appendChild(UI.el('span', null, 'Đọc phát âm (TTS)'));
    var cb = UI.el('input');
    cb.type = 'checkbox';
    cb.checked = !!s.tts;
    cb.addEventListener('change', function () {
      Store.setSetting('tts', cb.checked);
      if (cb.checked) UI.speak('river basin');
    });
    lbl2.appendChild(cb);
    box.appendChild(lbl2);
    view.appendChild(box);

    view.appendChild(UI.el('h2', 'section', 'Dữ liệu học'));
    var row = UI.el('div', 'row gap');
    row.appendChild(UI.btn('Xuất tiến độ', 'wide', function () {
      var txt = Store.exportJSON();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(function () { UI.toast('Đã copy vào clipboard'); },
          function () { window.prompt('Copy đoạn này để lưu:', txt); });
      } else {
        window.prompt('Copy đoạn này để lưu:', txt);
      }
    }));
    row.appendChild(UI.btn('Nhập tiến độ', 'wide', function () {
      var txt = window.prompt('Dán tiến độ đã xuất:');
      if (!txt) return;
      try { Store.importJSON(txt); UI.toast('Đã khôi phục'); location.hash = '#/'; }
      catch (e) { UI.toast('Không đọc được dữ liệu', 'bad'); }
    }));
    view.appendChild(row);

    view.appendChild(UI.btn('Xoá toàn bộ tiến độ', 'wide danger', function () {
      if (confirm('Xoá sạch tiến độ học? Không khôi phục được.')) {
        Store.reset();
        location.hash = '#/';
        UI.toast('Đã xoá');
      }
    }));

    var about = UI.el('p', 'micro pad');
    about.textContent = 'Nguồn: ' + (Data.meta.author || '') + ' — dữ liệu ' + (Data.meta.source || 'OpenAlex') +
      '. Tiến độ lưu trong localStorage của máy này.';
    view.appendChild(about);
  }

  /* ---------- router ---------- */

  function route() {
    var h = (location.hash || '#/').replace(/^#/, '');
    var p = h.split('/').filter(Boolean);
    screenTick++;
    window.scrollTo(0, 0);
    if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) {} }

    if (p[0] === 'deck' && p[1]) return screenDeck(p[1]);
    if (p[0] === 'list' && p[1]) return screenList(p[1], p[2]);
    if (p[0] === 'play' && p[1] && p[2]) return startSession(p[1], p[2]);
    if (p[0] === 'stats') return screenStats();
    if (p[0] === 'settings') return screenSettings();
    session = null;
    return screenHome();
  }

  window.App = {
    roundBar: roundBar,
    start: function () {
      view = document.getElementById('view');
      window.addEventListener('hashchange', route);
      route();
    }
  };
})();
