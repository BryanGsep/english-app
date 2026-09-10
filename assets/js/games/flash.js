/* Flashcard — lat the, tu danh gia. Nen tang cua SRS. */
(function () {
  'use strict';
  window.Games.register({
    id: 'flash', name: 'Lật thẻ', icon: '🃏', minCards: 1,
    desc: 'Xem từ, tự nhớ nghĩa rồi lật kiểm tra',
    mount: function (root, cards, done) {
      var UI = window.UI, i = 0, results = [], t0 = 0;

      function render() {
        UI.clear(root);
        if (i >= cards.length) return done(results);
        var card = cards[i];
        t0 = Date.now();

        root.appendChild(window.App.roundBar(i, cards.length));

        var scene = UI.el('div', 'flip');
        var inner = UI.el('div', 'flip-inner');

        var front = UI.el('div', 'flip-face card-face');
        front.appendChild(UI.el('span', 'pos', card.pos));
        front.appendChild(UI.el('h2', 'term', card.term));
        var fp = UI.ipa(card);
        if (fp) front.appendChild(fp);
        var sp = UI.btn('🔊', 'icon-btn', function (e) { e.stopPropagation(); UI.speak(card.term); });
        front.appendChild(sp);
        front.appendChild(UI.el('p', 'hint', 'Chạm để lật'));

        var back = UI.el('div', 'flip-face flip-back card-face');
        back.appendChild(UI.el('h3', 'vi', card.vi));
        back.appendChild(UI.el('p', 'en', card.en));
        if (card.ex) {
          var q = UI.el('blockquote', 'ex');
          q.appendChild(UI.el('span', null, card.ex));
          q.appendChild(UI.el('cite', null, card.src));
          back.appendChild(q);
        }
        var g = UI.gloss(card);
        if (g) back.appendChild(g);
        inner.appendChild(front); inner.appendChild(back);
        scene.appendChild(inner);

        // Mat sau co the cao gan 500px, day hai nut xuong sat day man 640px. Cho chung
        // nam co dinh o day — vua khong bao gio khuat, vua dung tam ngon cai.
        var actions = UI.el('div', 'row gap stick hidden');
        actions.appendChild(UI.btn('Chưa nhớ', 'wide danger', function () { grade(false); }));
        actions.appendChild(UI.btn('Nhớ rồi', 'wide primary', function () { grade(true); }));
        var pad = UI.el('div', 'stick-pad hidden');

        var flipped = false;
        scene.addEventListener('click', function () {
          if (flipped) return;
          flipped = true;
          // Mat sau dai hon mat truoc (them ban dich cau) nen phai noi khung ra cho vua,
          // khong thi chu bi nhet vao o cao ~230px roi phai cuon BEN TRONG the.
          // Do bang cach tha mat sau ve dong chay trong mot nhip: luc dang bi
          // dinh vao khung cu thi scrollHeight con bi flex ep, do bao nhieu cung thieu.
          back.style.position = 'static';
          var can = back.offsetHeight;
          back.style.position = '';
          if (can > inner.offsetHeight) inner.style.height = can + 'px';
          scene.classList.add('is-flipped');
          actions.classList.remove('hidden');
          pad.classList.remove('hidden');
          UI.haptic();
        });

        root.appendChild(scene);
        root.appendChild(actions);
        root.appendChild(pad);
        UI.speak(card.term);
      }

      function grade(ok) {
        results.push({ id: cards[i].id, correct: ok, ms: Date.now() - t0 });
        i++;
        render();
      }
      render();
    }
  });
})();
