/* Chop nhoang — 45 giay, cap tu/nghia dung hay sai? */
(function () {
  'use strict';
  window.Games.register({
    id: 'speed', name: 'Chớp nhoáng', icon: '⚡', minCards: 4,
    desc: '45 giây: cặp từ–nghĩa này đúng hay sai?',
    mount: function (root, cards, done) {
      var UI = window.UI, results = [], seen = 0, hits = 0, missed = [], missedIds = {};
      var LIMIT = 45000, start = Date.now(), timer = null, tick = null;
      var current = null, t0 = 0, over = false;

      UI.clear(root);
      var head = UI.el('div', 'speed-head');
      var clock = UI.el('div', 'clock', '45.0');
      var score = UI.el('div', 'score', '0');
      head.appendChild(clock); head.appendChild(score);
      root.appendChild(head);

      var stage = UI.el('div', 'prompt speed-stage');
      root.appendChild(stage);

      var actions = UI.el('div', 'row gap');
      actions.appendChild(UI.btn('✗ Sai', 'wide danger', function () { answer(false); }));
      actions.appendChild(UI.btn('✓ Đúng', 'wide primary', function () { answer(true); }));
      root.appendChild(actions);

      function next() {
        var card = cards[Math.floor(Math.random() * cards.length)];
        var honest = Math.random() < 0.5;
        var shown = honest ? card : (window.Data.distractors(card, 1)[0] || card);
        current = { card: card, truth: shown.id === card.id };
        UI.clear(stage);
        stage.appendChild(UI.el('span', 'pos', card.pos));
        stage.appendChild(UI.el('h2', 'term', card.term));
        stage.appendChild(UI.el('div', 'divider'));
        stage.appendChild(UI.el('h3', 'vi', shown.vi));
        t0 = Date.now();
      }

      function answer(said) {
        if (over || !current) return;
        var ok = said === current.truth;
        seen++;
        if (ok) hits++;
        score.textContent = String(hits);
        results.push({ id: current.card.id, correct: ok, ms: Date.now() - t0 });
        if (!ok) {
          // Bao dap an ngay ma khong dung dong ho: dung toast, khong chan man hinh.
          UI.toast(current.card.term + ' = ' + current.card.vi, 'bad');
          if (!missedIds[current.card.id]) {
            missedIds[current.card.id] = 1;
            missed.push(current.card);
          }
        }
        stage.classList.remove('flash-ok', 'flash-bad');
        void stage.offsetWidth;
        stage.classList.add(ok ? 'flash-ok' : 'flash-bad');
        UI.haptic(ok ? 8 : 30);
        next();
      }

      function stop() {
        if (over) return;
        over = true;
        clearInterval(tick);
        clearTimeout(timer);
        if (!missed.length) return done(results);
        // Het gio: diem lai nhung tu da tra loi sai truoc khi sang vong sau.
        UI.clear(root);
        root.appendChild(UI.el('h2', 'section', 'Sửa sai — ' + missed.length + ' từ'));
        var list = UI.el('div', 'reveal-list');
        missed.forEach(function (c) {
          list.appendChild(UI.reveal(c, false, true));
        });
        root.appendChild(list);
        root.appendChild(UI.btn('Tiếp tục →', 'wide primary reveal-next', function () {
          done(results);
        }));
      }

      tick = setInterval(function () {
        if (!document.body.contains(root)) { clearInterval(tick); clearTimeout(timer); return; }
        var left = Math.max(0, LIMIT - (Date.now() - start));
        clock.textContent = (left / 1000).toFixed(1);
        if (left <= 0) stop();
      }, 100);
      timer = setTimeout(stop, LIMIT + 200);

      next();
    }
  });
})();
