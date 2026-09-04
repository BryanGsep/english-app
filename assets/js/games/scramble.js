/* Xep chu — ghep lai tu tu cac o bi xao tron. */
(function () {
  'use strict';
  window.Games.register({
    id: 'scramble', name: 'Xếp chữ', icon: '🧩', minCards: 1,
    desc: 'Ghép các mảnh lại thành từ đúng',
    // Tu qua dai thi xep chu thanh cuc hinh, khong con la bai tap tu vung.
    usable: function (c) { return c.term.replace(/[^a-z]/gi, '').length <= 16; },
    mount: function (root, cards, done) {
      var UI = window.UI, results = [], t0 = 0;
      var pool = cards;
      var i = 0;

      function render() {
        UI.clear(root);
        if (i >= pool.length) return done(results);
        var card = pool[i], t0v = Date.now(); t0 = t0v;

        root.appendChild(window.App.roundBar(i, pool.length));

        var q = UI.el('div', 'prompt');
        q.appendChild(UI.el('h3', 'vi', card.vi));
        q.appendChild(UI.el('p', 'hint', card.term.indexOf(' ') > -1 ? 'Ghép các từ đúng thứ tự' : 'Ghép các chữ cái'));
        root.appendChild(q);

        var multi = card.term.indexOf(' ') > -1;
        var pieces = multi ? card.term.split(' ') : card.term.split('');
        var answer = card.term;

        var slot = UI.el('div', 'slot');
        var tray = UI.el('div', 'tray');
        var picked = [];

        function refresh() {
          UI.clear(slot);
          picked.forEach(function (p, idx) {
            var t = UI.btn(p.txt, 'tile picked', function () {
              picked.splice(idx, 1);
              p.node.classList.remove('used');
              refresh();
            });
            slot.appendChild(t);
          });
          if (!picked.length) slot.appendChild(UI.el('span', 'hint', '…'));
          check.disabled = picked.length !== pieces.length;
        }

        var shuffled = window.Data.shuffle(pieces.map(function (p, idx) { return { txt: p, idx: idx }; }));
        shuffled.forEach(function (p) {
          var b = UI.btn(p.txt, 'tile tray-tile', function () {
            if (b.classList.contains('used')) return;
            b.classList.add('used');
            picked.push({ txt: p.txt, node: b });
            UI.haptic(8);
            refresh();
          });
          p.node = b;
          tray.appendChild(b);
        });

        var check = UI.btn('Kiểm tra', 'wide primary', function () {
          var got = picked.map(function (p) { return p.txt; }).join(multi ? ' ' : '');
          var ok = got.toLowerCase() === answer.toLowerCase();
          results.push({ id: card.id, correct: ok, ms: Date.now() - t0v });
          slot.classList.add(ok ? 'ok' : 'bad');
          UI.haptic(ok ? 12 : 30);
          check.disabled = true;
          if (ok) { setTimeout(function () { i++; render(); }, 500); return; }
          UI.correction(root, card, function () { i++; render(); });
        });
        check.disabled = true;

        root.appendChild(slot);
        root.appendChild(tray);
        root.appendChild(check);
        refresh();
      }
      render();
    }
  });
})();
