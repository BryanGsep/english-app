/* registry.js — so dang ky game. Xem hop dong o CLAUDE.md muc 5. */
(function () {
  'use strict';
  var list = [];
  window.Games = {
    register: function (g) {
      if (!g.id || !g.mount) throw new Error('Game thiếu id hoặc mount');
      list.push(g);
    },
    all: function () { return list.slice(); },
    get: function (id) {
      for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
      return null;
    },

    /**
     * Loc ra nhung the game NAY dung duoc (vd xep chu bo tu qua dai).
     * Game khong duoc tu loc ben trong mount — loc o day thi app biet
     * the nao se bi bo va khong tinh nham vao phien hoc.
     */
    usable: function (g, cards) {
      return g.usable ? cards.filter(g.usable) : cards.slice();
    },

    /** Cac game choi duoc voi tap the nay. */
    eligible: function (cards) {
      return list.filter(function (g) {
        var use = g.usable ? cards.filter(g.usable) : cards;
        if (use.length < (g.minCards || 1)) return false;
        return g.canPlay ? g.canPlay(use) : true;
      });
    }
  };
})();
