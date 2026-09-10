/* Trac nghiem EN -> VI */
(function () {
  'use strict';

  function build(id, name, icon, desc, ask, optionOf) {
    window.Games.register({
      id: id, name: name, icon: icon, desc: desc, minCards: 1,
      mount: function (root, cards, done) {
        var UI = window.UI, i = 0, results = [], t0 = 0, locked = false;

        function render() {
          UI.clear(root); locked = false;
          if (i >= cards.length) return done(results);
          var card = cards[i];
          t0 = Date.now();

          root.appendChild(window.App.roundBar(i, cards.length));
          root.appendChild(ask(card, UI));

          var opts = window.Data.shuffle(
            [card].concat(window.Data.distractors(card, 3))
          );
          var list = UI.el('div', 'options');
          opts.forEach(function (o) {
            var b = UI.btn(optionOf(o), 'opt', function () { pick(b, o, card, list); });
            list.appendChild(b);
          });
          root.appendChild(list);
        }

        function pick(node, chosen, card, list) {
          if (locked) return;
          locked = true;
          var ok = chosen.id === card.id;
          UI.mark(node, ok);
          results.push({ id: card.id, correct: ok, ms: Date.now() - t0 });
          if (ok) { setTimeout(function () { i++; render(); }, 420); return; }
          // Sai: to sang phuong an dung roi mo bang sua sai, nguoi hoc tu bam di tiep.
          Array.prototype.forEach.call(list.children, function (n) {
            if (n.textContent === optionOf(card)) n.classList.add('ok');
          });
          UI.correction(root, card, function () { i++; render(); });
        }
        render();
      }
    });
  }

  build('quiz', 'Trắc nghiệm', '🎯', 'Chọn nghĩa tiếng Việt đúng',
    function (card, UI) {
      var q = UI.el('div', 'prompt');
      q.appendChild(UI.el('span', 'pos', card.pos));
      q.appendChild(UI.el('h2', 'term', card.term));
      var ph = UI.ipa(card);
      if (ph) q.appendChild(ph);
      q.appendChild(UI.btn('🔊', 'icon-btn', function () { UI.speak(card.term); }));
      return q;
    },
    function (c) { return c.vi; });

  build('reverse', 'Dịch ngược', '🔁', 'Từ nghĩa tiếng Việt chọn từ tiếng Anh',
    function (card, UI) {
      var q = UI.el('div', 'prompt');
      q.appendChild(UI.el('h2', 'vi-big', card.vi));
      q.appendChild(UI.el('p', 'hint', 'Từ tiếng Anh nào mang nghĩa này?'));
      return q;
    },
    function (c) { return c.term; });
})();
