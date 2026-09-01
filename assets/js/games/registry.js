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
    /** Cac game choi duoc voi tap the nay. */
    eligible: function (cards) {
      return list.filter(function (g) {
        if (cards.length < (g.minCards || 1)) return false;
        return g.canPlay ? g.canPlay(cards) : true;
      });
    }
  };
})();
