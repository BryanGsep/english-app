/* Xep chu — ghep lai tu tu cac o bi xao tron. */
(function () {
  'use strict';
  window.Games.register({
    id: 'scramble', name: 'Xếp chữ', icon: '🧩', minCards: 1,
    desc: 'Ghép các mảnh lại thành từ đúng',
    // Tu qua dai thi xep chu thanh cuc hinh, khong con la bai tap tu vung.
    usable: function (c) { return c.term.replace(/[^a-z]/gi, '').length <= 16; },
    mount: function (root, cards, done) {
      var UI = window.UI, results = [];
      var pool = cards;
      var i = 0;

      /** Dinh nghia tieng Anh, che chinh tu can doan de khong lo dap an. */
      function safeEn(card) {
        if (!card.en) return '';
        var parts = card.term.toLowerCase().split(/\s+/).filter(function (w) { return w.length > 3; });
        var out = card.en;
        parts.forEach(function (w) {
          out = out.replace(new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*', 'gi'), '…');
        });
        return out;
      }

      function render() {
        UI.clear(root);
        if (i >= pool.length) return done(results);
        var card = pool[i], t0v = Date.now();
        var multi = card.term.indexOf(' ') > -1;
        var pieces = multi ? card.term.split(' ') : card.term.split('');
        var answer = card.term;
        var hints = 0;

        root.appendChild(window.App.roundBar(i, pool.length));

        var q = UI.el('div', 'prompt');
        q.appendChild(UI.el('h3', 'vi', card.vi));
        var en = safeEn(card);
        if (en) q.appendChild(UI.el('p', 'en', en));
        q.appendChild(UI.el('p', 'hint', (multi
          ? 'Ghép ' + pieces.length + ' từ đúng thứ tự'
          : 'Ghép ' + pieces.length + ' chữ cái')));
        root.appendChild(q);

        var slot = UI.el('div', 'slot');
        var tray = UI.el('div', 'tray');
        var picked = [];

        function refresh() {
          UI.clear(slot);
          picked.forEach(function (p, idx) {
            var t = UI.btn(p.txt, 'tile picked' + (p.hint ? ' from-hint' : ''), function () {
              picked.splice(idx, 1);
              p.node.classList.remove('used');
              refresh();
            });
            slot.appendChild(t);
          });
          if (!picked.length) slot.appendChild(UI.el('span', 'hint', '…'));
          check.disabled = picked.length !== pieces.length;
          tip.textContent = hints
            ? '💡 Gợi ý (đã dùng ' + hints + ')'
            : (multi ? '💡 Gợi ý — mở 1 từ' : '💡 Gợi ý — mở 1 chữ');
          tip.disabled = picked.length === pieces.length && !wrongPrefix();
        }

        /** Phan da xep co lech so voi dap an khong. */
        function wrongPrefix() {
          for (var k = 0; k < picked.length; k++) {
            if (picked[k].txt.toLowerCase() !== pieces[k].toLowerCase()) return true;
          }
          return false;
        }

        /** Tra lai o dat sai roi mo o dung ke tiep. */
        function giveHint() {
          while (picked.length && picked[picked.length - 1].txt.toLowerCase()
                 !== pieces[picked.length - 1].toLowerCase()) {
            picked.pop().node.classList.remove('used');
          }
          var want = pieces[picked.length];
          if (want != null) {
            for (var k = 0; k < shuffled.length; k++) {
              var t = shuffled[k];
              if (t.txt === want && !t.node.classList.contains('used')) {
                t.node.classList.add('used');
                picked.push({ txt: t.txt, node: t.node, hint: true });
                break;
              }
            }
          }
          hints++;
          UI.haptic(8);
          refresh();
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
          // Dung gợi ý thi chua tinh la nho — the quay lai hang doi som (CLAUDE.md muc 6).
          results.push({ id: card.id, correct: ok && !hints, ms: Date.now() - t0v });
          slot.classList.add(ok ? 'ok' : 'bad');
          UI.haptic(ok ? 12 : 30);
          check.disabled = true;
          tip.disabled = true;
          if (ok && !hints) { setTimeout(function () { i++; render(); }, 500); return; }
          UI.correction(root, card, function () { i++; render(); },
            ok ? 'Đúng — nhưng có gợi ý nên sẽ ôn lại sớm' : 'Đáp án đúng', ok);
        });
        check.disabled = true;

        var tip = UI.btn('💡 Gợi ý', 'wide ghost', giveHint);

        root.appendChild(slot);
        root.appendChild(tray);
        root.appendChild(tip);
        root.appendChild(check);
        refresh();
      }
      render();
    }
  });
})();
