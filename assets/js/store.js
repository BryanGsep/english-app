/* store.js — doc/ghi localStorage. Khoa duy nhat: esp-trainer/v1 */
(function () {
  'use strict';
  var KEY = 'esp-trainer/v1';
  var SCHEMA = 1;

  function blank() {
    return {
      v: SCHEMA,
      cards: {},                 // id -> { reps, ease, interval, due, lapses, seen, correct, last }
      days: {},                  // 'YYYY-MM-DD' -> { reviews, correct }
      streak: 0,
      lastDay: '',
      totalReviews: 0,
      sessionSize: 12,
      tts: true,
      startedAt: Date.now()
    };
  }

  var state = null;

  function load() {
    if (state) return state;
    try {
      var raw = localStorage.getItem(KEY);
      state = raw ? JSON.parse(raw) : blank();
    } catch (e) {
      state = blank();
    }
    if (!state || state.v !== SCHEMA) state = migrate(state);
    return state;
  }

  function migrate(old) {
    var s = blank();
    if (old && old.cards) s.cards = old.cards;   // giu tien do khi len schema moi
    return s;
  }

  var pending = null;
  function save() {
    if (pending) return;
    pending = setTimeout(function () {
      pending = null;
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    }, 120);
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
           '-' + String(d.getDate()).padStart(2, '0');
  }

  function dayDiff(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  }

  window.Store = {
    KEY: KEY,
    get: load,
    save: save,
    today: today,

    card: function (id) {
      var s = load();
      if (!s.cards[id]) {
        s.cards[id] = { reps: 0, ease: 2.3, interval: 0, due: 0, lapses: 0, seen: 0, correct: 0, last: 0 };
      }
      return s.cards[id];
    },

    /** Ghi nhan mot luot tra loi va cap nhat chuoi ngay hoc. */
    record: function (id, correct) {
      var s = load(), c = this.card(id);
      c.seen++;
      if (correct) c.correct++;
      c.last = Date.now();
      window.SRS.grade(c, correct);

      var t = today();
      if (!s.days[t]) s.days[t] = { reviews: 0, correct: 0 };
      s.days[t].reviews++;
      if (correct) s.days[t].correct++;
      s.totalReviews++;

      if (s.lastDay !== t) {
        var gap = s.lastDay ? dayDiff(s.lastDay, t) : 999;
        s.streak = gap === 1 ? s.streak + 1 : 1;
        s.lastDay = t;
      }
      save();
      return c;
    },

    setSetting: function (k, v) { load()[k] = v; save(); },

    reset: function () {
      try { localStorage.removeItem(KEY); } catch (e) {}
      state = null;
    },

    exportJSON: function () { return JSON.stringify(load()); },

    importJSON: function (txt) {
      var o = JSON.parse(txt);
      if (!o || typeof o !== 'object' || !o.cards) throw new Error('Tệp không hợp lệ');
      state = o.v === SCHEMA ? o : migrate(o);
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    }
  };
})();
