/* Nghe va chon tu — dung SpeechSynthesis cua trinh duyet. */
(function () {
  'use strict';
  window.Games.register({
    id: 'listen', name: 'Nghe từ', icon: '🎧', minCards: 1,
    desc: 'Nghe phát âm rồi chọn đúng từ',
    canPlay: function () { return !!window.speechSynthesis; },
    mount: function (root, cards, done) {
      var UI = window.UI, i = 0, results = [], t0 = 0, locked = false;

      function render() {
        UI.clear(root); locked = false;
        if (i >= cards.length) return done(results);
        var card = cards[i];
        t0 = Date.now();

        root.appendChild(window.App.roundBar(i, cards.length));

        var q = UI.el('div', 'prompt');
        var big = UI.btn('🔊', 'speaker', function () { UI.speak(card.term); });
        q.appendChild(big);
        q.appendChild(UI.el('p', 'hint', 'Chạm loa để nghe lại'));
        root.appendChild(q);
        UI.speak(card.term);

        var opts = window.Data.shuffle([card].concat(window.Data.distractors(card, 3)));
        var list = UI.el('div', 'options');
        opts.forEach(function (o) {
          var b = UI.btn(o.term, 'opt', function () {
            if (locked) return;
            locked = true;
            var ok = o.id === card.id;
            UI.mark(b, ok);
            results.push({ id: card.id, correct: ok, ms: Date.now() - t0 });
            if (ok) { setTimeout(function () { i++; render(); }, 420); return; }
            Array.prototype.forEach.call(list.children, function (n) {
              if (n.textContent === card.term) n.classList.add('ok');
            });
            UI.correction(root, card, function () { i++; render(); });
          });
          list.appendChild(b);
        });
        root.appendChild(list);
      }
      render();
    }
  });
})();
