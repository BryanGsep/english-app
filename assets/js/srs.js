/* srs.js — SM-2 rut gon. Doi hang so o day thi sua CLAUDE.md muc 6. */
(function () {
  'use strict';
  var STEPS = [1, 3, 7, 16, 35];       // ngay
  var EASE_MIN = 1.3, EASE_MAX = 2.8;
  var DAY = 86400000;

  window.SRS = {
    STEPS: STEPS,

    /** Cap nhat thang trang thai the sau mot luot tra loi. */
    grade: function (c, correct) {
      if (correct) {
        var i = Math.min(c.reps, STEPS.length - 1);
        c.interval = c.reps < STEPS.length ? STEPS[i]
                   : Math.round(c.interval * c.ease);
        c.reps++;
        c.ease = Math.min(EASE_MAX, c.ease + 0.1);
        c.due = Date.now() + c.interval * DAY;
      } else {
        c.reps = 0;
        c.interval = 0;
        c.lapses++;
        c.ease = Math.max(EASE_MIN, c.ease - 0.2);
        c.due = Date.now();          // hoc lai ngay trong phien
      }
      return c;
    },

    isNew:      function (c) { return !c || c.seen === 0; },
    isMastered: function (c) { return !!c && c.reps >= 4 && c.interval >= 16; },
    isDue:      function (c) { return !!c && c.seen > 0 && c.due <= Date.now(); },

    /** Nhan tien do 0..1 cua mot the (dung cho vong tron/thanh muc). */
    strength: function (c) {
      if (!c || c.seen === 0) return 0;
      return Math.min(1, c.reps / 5);
    },

    /**
     * Xep hang doi hoc: qua han -> dang hoc -> tu moi (freq cao truoc).
     * cards: mang the tu Data. n: so luong can lay.
     */
    queue: function (cards, n) {
      var now = Date.now(), due = [], learning = [], fresh = [];
      cards.forEach(function (card) {
        var c = window.Store.get().cards[card.id];
        if (!c || c.seen === 0) { fresh.push(card); return; }
        if (window.SRS.isMastered(c) && c.due > now) return;   // da thuoc, chua toi han
        if (c.due <= now) due.push({ card: card, c: c });
        else learning.push({ card: card, c: c });
      });
      due.sort(function (a, b) { return a.c.due - b.c.due; });
      learning.sort(function (a, b) { return a.c.due - b.c.due; });
      fresh.sort(function (a, b) { return b.freq - a.freq; });

      var out = due.map(function (x) { return x.card; });
      if (out.length < n) out = out.concat(fresh.slice(0, n - out.length));
      if (out.length < n) {
        out = out.concat(learning.map(function (x) { return x.card; }).slice(0, n - out.length));
      }
      return out.slice(0, n);
    },

    /** Tom tat tien do cua mot tap the. */
    summary: function (cards) {
      var s = { total: cards.length, fresh: 0, learning: 0, mastered: 0, due: 0 };
      cards.forEach(function (card) {
        var c = window.Store.get().cards[card.id];
        if (!c || c.seen === 0) { s.fresh++; return; }
        if (window.SRS.isMastered(c)) s.mastered++; else s.learning++;
        if (c.due <= Date.now()) s.due++;
      });
      return s;
    }
  };
})();
