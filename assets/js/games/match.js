/* Noi cap — cham tu tieng Anh roi cham nghia tieng Viet. */
(function () {
  'use strict';
  window.Games.register({
    id: 'match', name: 'Nối cặp', icon: '🔗', minCards: 4,
    desc: 'Nối từ với nghĩa, càng nhanh càng tốt',
    mount: function (root, cards, done) {
      var UI = window.UI, results = [], t0 = Date.now();
      var pool = cards.slice(0, 6);
      var left = window.Data.shuffle(pool), right = window.Data.shuffle(pool);
      var sel = null, wrongOnce = {}, remaining = pool.length;

      UI.clear(root);
      root.appendChild(window.App.roundBar(0, pool.length, 'Nối cặp'));
      var head = UI.el('p', 'hint', 'Chạm một từ rồi chạm nghĩa của nó');
      root.appendChild(head);

      var grid = UI.el('div', 'match');
      var colA = UI.el('div', 'match-col'), colB = UI.el('div', 'match-col');
      var nodes = {};

      left.forEach(function (c) {
        var b = UI.btn(c.term, 'pair', function () { tapLeft(c, b); });
        nodes['L' + c.id] = b; colA.appendChild(b);
      });
      right.forEach(function (c) {
        var b = UI.btn(c.vi, 'pair vi-pair', function () { tapRight(c, b); });
        nodes['R' + c.id] = b; colB.appendChild(b);
      });
      grid.appendChild(colA); grid.appendChild(colB);
      root.appendChild(grid);

      var progress = root.querySelector('.round-bar .bar-fill');
      var counter = root.querySelector('.round-count');
      if (counter) counter.textContent = '0/' + pool.length;

      /** Xong bang: diem lai nhung tu tung noi nham truoc khi sang vong sau. */
      function finishBoard() {
        var miss = pool.filter(function (c) { return wrongOnce[c.id]; });
        if (!miss.length) return done(results);
        UI.clear(root);
        root.appendChild(UI.el('h2', 'section', 'Sửa sai — ' + miss.length + ' từ'));
        var box = UI.el('div', 'reveal-list');
        miss.forEach(function (c) { box.appendChild(UI.reveal(c, false, true)); });
        root.appendChild(box);
        root.appendChild(UI.btn('Tiếp tục →', 'wide primary reveal-next', function () {
          done(results);
        }));
      }

      function tapLeft(c, b) {
        if (b.classList.contains('done')) return;
        if (sel) nodes['L' + sel.id].classList.remove('sel');
        sel = c; b.classList.add('sel');
        UI.speak(c.term);
      }

      function tapRight(c, b) {
        if (!sel || b.classList.contains('done')) return;
        var a = sel, an = nodes['L' + a.id];
        sel = null; an.classList.remove('sel');
        if (a.id === c.id) {
          an.classList.add('done'); b.classList.add('done');
          UI.haptic(12);
          results.push({ id: c.id, correct: !wrongOnce[c.id], ms: Date.now() - t0 });
          remaining--;
          var did = pool.length - remaining;
          if (progress) progress.style.width = (did / pool.length * 100) + '%';
          if (counter) counter.textContent = did + '/' + pool.length;
          if (!remaining) setTimeout(finishBoard, 450);
        } else {
          wrongOnce[a.id] = true;
          an.classList.add('bad'); b.classList.add('bad');
          UI.haptic(30);
          setTimeout(function () { an.classList.remove('bad'); b.classList.remove('bad'); }, 450);
        }
      }
    }
  });
})();
