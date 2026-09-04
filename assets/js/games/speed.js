/* Chop nhoang — 45 giay, cap tu/nghia dung hay sai? */
(function () {
  'use strict';
  window.Games.register({
    id: 'speed', name: 'Chớp nhoáng', icon: '⚡', minCards: 4,
    // 45 giay du suc tra loi ~30 luot, nen xin nhieu the de khong phai lap lai.
    wantCards: 24,
    desc: '45 giây: cặp từ–nghĩa này đúng hay sai?',
    mount: function (root, cards, done) {
      var UI = window.UI, seen = 0, hits = 0, missed = [], missedIds = {};
      var LIMIT = 45000, start = Date.now(), timer = null, tick = null;
      var current = null, t0 = 0, over = false;
      // Moi the mot ket qua duy nhat, du bi hoi lai nhieu lan trong 45 giay.
      var byCard = {}, order = [];
      // Tui rut tham: het tui moi xao lai, nen khong the trung khi chua duyet het.
      var bag = [], lastId = null;

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

      /** Rut mot the chua dung trong luot nay; het luot thi xao lai tui. */
      function draw() {
        if (!bag.length) {
          bag = window.Data.shuffle(cards);
          // Dao de the dau tien cua tui moi khong trung the vua hoi xong.
          if (bag.length > 1 && bag[bag.length - 1].id === lastId) {
            var t = bag[bag.length - 1];
            bag[bag.length - 1] = bag[0];
            bag[0] = t;
          }
        }
        var c = bag.pop();
        lastId = c.id;
        return c;
      }

      function next() {
        var card = draw();
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
        var id = current.card.id, dt = Date.now() - t0;
        var rec = byCard[id];
        if (!rec) { rec = byCard[id] = { id: id, correct: true, ms: dt }; order.push(id); }
        rec.correct = rec.correct && ok;      // sai mot lan la tinh sai ca the
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
        var results = order.map(function (id) { return byCard[id]; });
        if (!missed.length) return done(results);
        // Het gio: diem lai nhung tu da tra loi sai truoc khi sang vong sau.
        UI.clear(root);
        root.appendChild(UI.el('h2', 'section', 'Sửa sai — ' + missed.length + ' từ'));
        root.appendChild(UI.el('p', 'micro pad',
          seen + ' lượt trả lời trên ' + order.length + ' từ khác nhau.'));
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
