/* Noi cap — cham tu tieng Anh roi cham nghia tieng Viet.
   Moi bang 6 cap; het bang nay sang bang khac cho den khi dung het the duoc phat. */
(function () {
  'use strict';
  var SIZE = 6;

  window.Games.register({
    id: 'match', name: 'Nối cặp', icon: '🔗', minCards: 4,
    desc: 'Nối từ với nghĩa, càng nhanh càng tốt',
    mount: function (root, cards, done) {
      var UI = window.UI, results = [], queue = cards.slice(), solved = 0;

      function board() {
        if (!queue.length) return done(results);
        var pool = queue.slice(0, SIZE);
        queue = queue.slice(pool.length);

        var t0 = Date.now();
        var left = window.Data.shuffle(pool), right = window.Data.shuffle(pool);
        var sel = null, wrongOnce = {}, remaining = pool.length;

        UI.clear(root);
        root.appendChild(window.App.roundBar(solved, cards.length, 'Nối cặp'));
        root.appendChild(UI.el('p', 'hint', 'Chạm một từ rồi chạm nghĩa của nó'));

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
        if (counter) counter.textContent = solved + '/' + cards.length;

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
            remaining--; solved++;
            if (progress) progress.style.width = (solved / cards.length * 100) + '%';
            if (counter) counter.textContent = solved + '/' + cards.length;
            if (!remaining) setTimeout(function () { finishBoard(pool, wrongOnce); }, 450);
          } else {
            wrongOnce[a.id] = true;
            an.classList.add('bad'); b.classList.add('bad');
            UI.haptic(30);
            setTimeout(function () { an.classList.remove('bad'); b.classList.remove('bad'); }, 450);
          }
        }
      }

      /** Xong mot bang: diem lai nhung tu tung noi nham roi sang bang ke tiep. */
      function finishBoard(pool, wrongOnce) {
        var miss = pool.filter(function (c) { return wrongOnce[c.id]; });
        if (!miss.length) return board();
        UI.clear(root);
        root.appendChild(UI.el('h2', 'section', 'Sửa sai — ' + miss.length + ' từ'));
        var box = UI.el('div', 'reveal-list');
        miss.forEach(function (c) { box.appendChild(UI.reveal(c, false, true)); });
        root.appendChild(box);
        root.appendChild(UI.btn(queue.length ? 'Bảng tiếp theo →' : 'Tiếp tục →',
          'wide primary reveal-next', board));
      }

      board();
    }
  });
})();
