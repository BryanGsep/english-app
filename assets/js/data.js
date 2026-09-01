/* data.js — index hoa window.VOCAB */
(function () {
  'use strict';
  var V = window.VOCAB || { decks: [], cards: [], meta: {} };
  var byId = {}, byDeck = {};

  V.decks.forEach(function (d) { byDeck[d.id] = []; });
  V.cards.forEach(function (c) {
    byId[c.id] = c;
    (byDeck[c.deck] = byDeck[c.deck] || []).push(c);
  });

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /** Tach nghia tieng Viet thanh tap tu, bo phan trong ngoac. */
  function words(vi) {
    var out = {}, n = 0;
    (vi || '').toLowerCase().replace(/\([^)]*\)/g, ' ')
      .split(/[^0-9a-z\u00c0-\u1ef9]+/).forEach(function (w) {
        if (w.length > 1 && !out[w]) { out[w] = 1; n++; }
      });
    out.__n = n;
    return out;
  }
  var viWords = {};
  V.cards.forEach(function (c) { viWords[c.id] = words(c.vi); });

  /** Hai the co nghia tieng Viet gan trung nhau khong? */
  function tooClose(a, b) {
    var x = viWords[a.id] || words(a.vi), y = viWords[b.id] || words(b.vi);
    if (!x.__n || !y.__n) return false;
    var hit = 0, k;
    for (k in x) { if (k !== '__n' && y[k]) hit++; }
    return hit / Math.min(x.__n, y.__n) >= 0.8;
  }

  window.Data = {
    meta: V.meta || {},
    decks: V.decks,
    cards: V.cards,
    shuffle: shuffle,
    deck: function (id) { return V.decks.filter(function (d) { return d.id === id; })[0]; },
    card: function (id) { return byId[id]; },

    /** id 'all' = toan bo tu vung. */
    ofDeck: function (id) { return id === 'all' ? V.cards : (byDeck[id] || []); },

    /**
     * n phuong an nhieu cung deck (uu tien) khac card.
     * Loai cac the co nghia tieng Viet gan trung — neu khong cau hoi thanh vo nghiem
     * (vi du "levee" va "dike" deu la "de").
     */
    distractors: function (card, n) {
      var same = (byDeck[card.deck] || []).filter(function (c) { return c.id !== card.id; });
      var safe = shuffle(same.filter(function (c) { return !tooClose(card, c); }));
      var pool = safe;
      if (pool.length < n) {
        pool = pool.concat(shuffle(V.cards.filter(function (c) {
          return c.id !== card.id && c.deck !== card.deck && !tooClose(card, c);
        })));
      }
      if (pool.length < n) {   // cung duong: chap nhan ca the gan nghia
        pool = pool.concat(shuffle(same).filter(function (c) {
          return pool.indexOf(c) === -1;
        }));
      }
      return pool.slice(0, n);
    },

    /** The co cau vi du that (dung cho game dien tu). */
    withExample: function (cards) {
      return cards.filter(function (c) { return c.ex && c.ex.length > 40; });
    }
  };
})();
