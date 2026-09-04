/* Dien tu vao cau THAT trich tu abstract cua paper. */
(function () {
  'use strict';
  window.Games.register({
    id: 'cloze', name: 'Điền vào câu', icon: '📝', minCards: 1,
    desc: 'Điền từ đúng vào câu thật trong paper',
    // Can cau vi du that VA che duoc cum tu trong do.
    usable: function (c) { return !!c.ex && !!window.UI.blank(c.ex, c.term); },
    mount: function (root, cards, done) {
      var UI = window.UI, results = [], i = 0, locked = false;
      var pool = cards;

      function render() {
        UI.clear(root); locked = false;
        if (i >= pool.length) return done(results);
        var card = pool[i], cut = UI.blank(card.ex, card.term), t0 = Date.now();

        root.appendChild(window.App.roundBar(i, pool.length));

        var q = UI.el('div', 'prompt cloze');
        q.appendChild(UI.el('p', 'sentence', cut.text));
        q.appendChild(UI.el('cite', null, card.src));
        root.appendChild(q);

        // Loai phuong an nhieu da lo ngay trong cau -> tranh doan mo
        var low = cut.text.toLowerCase();
        var noise = window.Data.distractors(card, 12).filter(function (o) {
          return low.indexOf(o.term.toLowerCase()) === -1;
        }).slice(0, 3);
        if (noise.length < 3) {            // hiem: gan het tu deck da nam trong cau
          window.Data.distractors(card, 6).forEach(function (o) {
            if (noise.length < 3 && noise.indexOf(o) === -1) noise.push(o);
          });
        }
        var opts = window.Data.shuffle([card].concat(noise));
        var list = UI.el('div', 'options');
        opts.forEach(function (o) {
          var b = UI.btn(o.term, 'opt', function () {
            if (locked) return;
            locked = true;
            var ok = o.id === card.id;
            UI.mark(b, ok);
            results.push({ id: card.id, correct: ok, ms: Date.now() - t0 });
            if (ok) { setTimeout(function () { i++; render(); }, 450); return; }
            Array.prototype.forEach.call(list.children, function (n) {
              if (n.textContent === card.term) n.classList.add('ok');
            });
            UI.correction(root, card, function () { i++; render(); },
                          'Chỗ trống này là từ nào');
          });
          list.appendChild(b);
        });
        root.appendChild(list);
      }
      render();
    }
  });
})();
