/* ui.js — helper DOM dung chung */
(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }

  var toastTimer = null;
  function toast(msg, kind) {
    var box = document.getElementById('toast');
    box.textContent = msg;
    box.className = 'toast show ' + (kind || '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.className = 'toast'; }, 1600); // eslint-disable-line
  }

  function bar(pct) {
    var w = el('div', 'bar');
    var f = el('div', 'bar-fill');
    f.style.width = Math.max(0, Math.min(100, pct)) + '%';
    w.appendChild(f);
    return w;
  }

  function ring(pct, label, sub) {
    var size = 92, r = 40, c = 2 * Math.PI * r;
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + size + ' ' + size);
    svg.setAttribute('class', 'ring');
    function circle(cls, dash) {
      var ci = document.createElementNS(ns, 'circle');
      ci.setAttribute('cx', size / 2); ci.setAttribute('cy', size / 2);
      ci.setAttribute('r', r); ci.setAttribute('class', cls);
      if (dash != null) {
        ci.setAttribute('stroke-dasharray', c);
        ci.setAttribute('stroke-dashoffset', c * (1 - dash));
      }
      return ci;
    }
    svg.appendChild(circle('ring-bg'));
    svg.appendChild(circle('ring-fg', Math.max(0, Math.min(1, pct / 100))));
    var wrap = el('div', 'ring-wrap');
    wrap.appendChild(svg);
    var mid = el('div', 'ring-mid');
    mid.appendChild(el('b', null, label));
    if (sub) mid.appendChild(el('small', null, sub));
    wrap.appendChild(mid);
    return wrap;
  }

  function btn(text, cls, onClick) {
    var b = el('button', 'btn ' + (cls || ''), text);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
  }

  function haptic(ms) {
    if (navigator.vibrate) { try { navigator.vibrate(ms || 12); } catch (e) {} }
  }

  var voice = null;
  function speak(text) {
    if (!window.Store.get().tts || !window.speechSynthesis) return false;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.9;
      if (!voice) {
        var vs = window.speechSynthesis.getVoices() || [];
        for (var i = 0; i < vs.length; i++) {
          if (/^en[-_]/i.test(vs[i].lang)) { voice = vs[i]; break; }
        }
      }
      if (voice) u.voice = voice;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = function () { voice = null; };
  }

  /** Danh dau dung/sai tren mot nut lua chon. */
  function mark(node, ok) {
    node.classList.add(ok ? 'ok' : 'bad');
    haptic(ok ? 12 : [8, 40, 8]);
  }

  /** Che cum tu trong cau bang ___ (khong phan biet hoa thuong). */
  function blank(sentence, term) {
    var head = term.split(' ').pop();
    var re = new RegExp('(?:\\b\\w+\\s)?\\b' + head.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i');
    var m = sentence.match(new RegExp('\\b' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*\\b', 'i'));
    if (!m) m = sentence.match(re);
    if (!m) return null;
    var text = sentence.replace(m[0], ' _____ ').replace(/\s+/g, ' ')
      .replace(/\s+([,.;:)])/g, '$1').trim();
    return { text: text, answer: m[0] };
  }

  /**
   * Bang sua sai: hien ra khi nguoi hoc tra loi sai.
   * Tra ve node; game tu gan vao root va tu quyet dinh khi nao di tiep.
   * Khong dung SRS/Store — chi ve (xem CLAUDE.md muc 5).
   */
  function reveal(card, label, compact) {
    var box = el('div', 'reveal' + (compact ? ' compact' : ''));
    if (label !== false) box.appendChild(el('p', 'reveal-label', label || 'Đáp án đúng'));

    var head = el('div', 'reveal-head');
    head.appendChild(el('span', 'pos', card.pos));
    head.appendChild(el('h3', 'term', card.term));
    head.appendChild(btn('🔊', 'icon-btn', function () { speak(card.term); }));
    box.appendChild(head);

    box.appendChild(el('p', 'reveal-vi', card.vi));
    if (compact) return box;
    if (card.en) box.appendChild(el('p', 'en', card.en));
    if (card.ex) {
      var q = el('blockquote', 'ex');
      q.appendChild(el('span', null, card.ex));
      q.appendChild(el('cite', null, card.src));
      box.appendChild(q);
    }
    return box;
  }

  /**
   * Dan bang sua sai + nut di tiep vao cuoi man choi.
   * next(): game goi de sang cau ke tiep.
   */
  function correction(root, card, next, label) {
    var box = reveal(card, label);
    root.appendChild(box);
    var go = btn('Tiếp tục →', 'wide primary reveal-next', next);
    root.appendChild(go);
    try { box.scrollIntoView({ block: 'nearest' }); } catch (e) {}
    return box;
  }

  window.UI = {
    el: el, clear: clear, toast: toast, bar: bar, ring: ring, btn: btn,
    speak: speak, haptic: haptic, mark: mark, blank: blank,
    reveal: reveal, correction: correction
  };
})();
