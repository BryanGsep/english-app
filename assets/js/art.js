/* art.js — bo tranh de thuong, ve bang SVG thuan.
   Khong tai anh tu mang (CLAUDE.md muc 1.6): moi hinh la markup do chinh code sinh ra,
   nen dat bang innerHTML la an toan (CLAUDE.md muc 3). */
(function () {
  'use strict';

  /* Bang mau RIENG cua tranh minh hoa. Giao dien dung bien o :root, khong dung bang nay. */
  var C = {
    ink: '#5a2f45', line: '#cf7c9a', white: '#ffffff', cream: '#fff2f7',
    pink: '#ffb3ce', pink2: '#ff8fb8', deep: '#ee5f94', rose: '#ff6fa5',
    violet: '#d3aef5', violet2: '#a763e0',
    mint: '#8fdcc4', sky: '#a3d9f7', blue: '#5aa9e6', deepblue: '#3d86c6',
    sun: '#ffd76e', gold: '#f2b53c', peach: '#ffc09f', leaf: '#8fd6a8',
    brown: '#cf9068', grey: '#4a4a5c'
  };

  /* ---- bo phan dung chung ---- */

  function eye(x, y, r) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + C.ink + '"/>' +
           '<circle cx="' + (x + r * 0.34) + '" cy="' + (y - r * 0.38) + '" r="' + (r * 0.34) +
           '" fill="' + C.white + '"/>';
  }
  /** Doi mat: tam cx, cao y, cach nhau 2*dx. */
  function eyes(cx, y, dx, r) { return eye(cx - dx, y, r) + eye(cx + dx, y, r); }

  /** Mat nham hanh phuc (hai cung cong len). */
  function happyEyes(cx, y, dx, w) {
    function arc(x) {
      return '<path d="M' + (x - w) + ' ' + y + ' Q' + x + ' ' + (y - w * 1.25) + ' ' +
             (x + w) + ' ' + y + '" fill="none" stroke="' + C.ink +
             '" stroke-width="3" stroke-linecap="round"/>';
    }
    return arc(cx - dx) + arc(cx + dx);
  }

  function smile(cx, y, w) {
    return '<path d="M' + (cx - w) + ' ' + y + ' Q' + cx + ' ' + (y + w * 1.05) + ' ' +
           (cx + w) + ' ' + y + '" fill="none" stroke="' + C.ink +
           '" stroke-width="3" stroke-linecap="round"/>';
  }

  function blush(cx, y, dx, rx, ry) {
    function b(x) {
      return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + (ry || rx * 0.68) +
             '" fill="' + C.deep + '" opacity=".38"/>';
    }
    return b(cx - dx) + b(cx + dx);
  }

  function sparkle(x, y, s, col) {
    return '<path d="M' + x + ' ' + (y - s) + ' Q' + x + ' ' + y + ' ' + (x + s) + ' ' + y +
           ' Q' + x + ' ' + y + ' ' + x + ' ' + (y + s) +
           ' Q' + x + ' ' + y + ' ' + (x - s) + ' ' + y +
           ' Q' + x + ' ' + y + ' ' + x + ' ' + (y - s) + 'Z" fill="' + (col || C.sun) + '"/>';
  }

  function wrap(inner) {
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" ' +
           'role="img" aria-hidden="true">' + inner + '</svg>';
  }

  /* Nen tron mo phia sau nhan vat cho hinh do "day" hon. */
  function halo(col) {
    return '<circle cx="60" cy="62" r="52" fill="' + (col || C.cream) + '"/>';
  }

  /* ---- 16 nhan vat ---- */

  var ART = {};

  ART.cat = function () {
    return wrap(halo() +
      sparkle(20, 24, 7, C.pink2) + sparkle(102, 34, 6, C.violet) +
      '<path d="M32 52 L30 22 L54 38 Z" fill="' + C.pink + '"/>' +
      '<path d="M88 52 L90 22 L66 38 Z" fill="' + C.pink + '"/>' +
      '<path d="M36 48 L35 30 L50 41 Z" fill="' + C.deep + '" opacity=".5"/>' +
      '<path d="M84 48 L85 30 L70 41 Z" fill="' + C.deep + '" opacity=".5"/>' +
      '<ellipse cx="60" cy="66" rx="35" ry="32" fill="' + C.pink + '"/>' +
      eyes(60, 62, 13, 5.5) +
      '<path d="M55 74 Q60 79 65 74" fill="none" stroke="' + C.ink +
        '" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M60 70 l-4 3 4 3 4-3z" fill="' + C.deep + '"/>' +
      blush(60, 74, 24, 7) +
      '<path d="M18 62 H36 M18 71 H36 M84 62 H102 M84 71 H102" stroke="' + C.line +
        '" stroke-width="2" stroke-linecap="round"/>');
  };

  ART.bunny = function () {
    return wrap(halo() +
      sparkle(100, 30, 7, C.pink2) +
      '<ellipse cx="46" cy="30" rx="9" ry="24" fill="' + C.white + '" stroke="' + C.pink +
        '" stroke-width="3"/>' +
      '<ellipse cx="74" cy="32" rx="9" ry="23" fill="' + C.white + '" stroke="' + C.pink +
        '" stroke-width="3" transform="rotate(12 74 32)"/>' +
      '<ellipse cx="46" cy="30" rx="4" ry="16" fill="' + C.pink + '"/>' +
      '<ellipse cx="75" cy="33" rx="4" ry="15" fill="' + C.pink + '" transform="rotate(12 75 33)"/>' +
      '<ellipse cx="60" cy="74" rx="33" ry="29" fill="' + C.white + '" stroke="' + C.pink +
        '" stroke-width="3"/>' +
      happyEyes(60, 72, 13, 6) +
      '<path d="M60 78 l-4 3 4 3 4-3z" fill="' + C.deep + '"/>' +
      smile(60, 84, 6) +
      blush(60, 82, 23, 7));
  };

  ART.bear = function () {
    return wrap(halo() +
      '<circle cx="30" cy="42" r="13" fill="' + C.brown + '"/>' +
      '<circle cx="90" cy="42" r="13" fill="' + C.brown + '"/>' +
      '<circle cx="30" cy="42" r="6" fill="' + C.pink + '"/>' +
      '<circle cx="90" cy="42" r="6" fill="' + C.pink + '"/>' +
      '<circle cx="60" cy="66" r="35" fill="' + C.brown + '"/>' +
      '<ellipse cx="60" cy="76" rx="19" ry="15" fill="' + C.cream + '"/>' +
      eyes(60, 60, 14, 5.5) +
      '<ellipse cx="60" cy="71" rx="6" ry="4.5" fill="' + C.ink + '"/>' +
      '<path d="M60 75 v4 M60 79 q-6 5 -10 0 M60 79 q6 5 10 0" fill="none" stroke="' + C.ink +
        '" stroke-width="2.6" stroke-linecap="round"/>' +
      blush(60, 70, 27, 7));
  };

  ART.whale = function () {
    return wrap(halo(C.sky) +
      '<path d="M60 30 q-5 -12 4 -18 q-2 12 6 17" fill="none" stroke="' + C.white +
        '" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="52" cy="20" r="5" fill="' + C.white + '"/>' +
      '<circle cx="72" cy="26" r="4" fill="' + C.white + '"/>' +
      '<path d="M24 72 q4 -30 38 -30 q30 0 34 26 q2 14 -12 20 q-24 10 -46 2 q-16 -6 -14 -18Z" ' +
        'fill="' + C.blue + '"/>' +
      '<path d="M96 68 l18 -14 v34 z" fill="' + C.deepblue + '"/>' +
      '<path d="M34 84 q26 12 56 2 q-24 14 -56 -2Z" fill="' + C.white + '" opacity=".55"/>' +
      eyes(52, 66, 12, 5) +
      smile(52, 76, 7) +
      blush(52, 76, 22, 6));
  };

  ART.drop = function () {
    return wrap(halo(C.sky) +
      sparkle(24, 34, 6, C.white) + sparkle(96, 28, 7, C.white) +
      '<path d="M60 18 C36 48 30 62 30 74 a30 30 0 0 0 60 0 c0 -12 -6 -26 -30 -56Z" fill="' +
        C.blue + '"/>' +
      '<path d="M46 78 a14 14 0 0 0 6 14 a20 20 0 0 1 -12 -18Z" fill="' + C.white + '" opacity=".7"/>' +
      eyes(60, 72, 13, 5.5) +
      smile(60, 84, 7) +
      blush(60, 83, 23, 6.5));
  };

  ART.cloud = function () {
    return wrap(
      '<path d="M20 84 a20 20 0 0 1 4 -38 a24 24 0 0 1 46 -8 a19 19 0 0 1 28 12 ' +
        'a17 17 0 0 1 -6 34Z" fill="' + C.white + '" stroke="' + C.pink +
        '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M30 96 q30 -18 60 0" fill="none" stroke="' + C.pink2 +
        '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M34 104 q26 -16 52 0" fill="none" stroke="' + C.sun +
        '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M38 112 q22 -14 44 0" fill="none" stroke="' + C.mint +
        '" stroke-width="6" stroke-linecap="round"/>' +
      happyEyes(59, 60, 14, 6.5) +
      smile(59, 70, 7) +
      blush(59, 70, 25, 7));
  };

  ART.star = function () {
    return wrap(halo(C.cream) +
      sparkle(20, 30, 8, C.violet) + sparkle(100, 84, 7, C.pink2) +
      '<path d="M60 12 L74 47 L112 50 L83 74 L92 111 L60 90 L28 111 L37 74 L8 50 L46 47Z" ' +
        'fill="' + C.sun + '" stroke="' + C.gold + '" stroke-width="3" stroke-linejoin="round"/>' +
      eyes(60, 60, 13, 5.5) +
      smile(60, 72, 7) +
      blush(60, 71, 23, 6.5));
  };

  ART.heart = function () {
    return wrap(halo() +
      sparkle(22, 30, 7, C.pink2) + sparkle(98, 32, 6, C.violet) +
      '<path d="M60 104 C18 76 12 54 24 40 C36 26 54 32 60 46 C66 32 84 26 96 40 ' +
        'C108 54 102 76 60 104Z" fill="' + C.deep + '"/>' +
      '<ellipse cx="42" cy="46" rx="7" ry="10" fill="' + C.white + '" opacity=".5" ' +
        'transform="rotate(-25 42 46)"/>' +
      eyes(60, 62, 13, 5.5) +
      smile(60, 74, 7) +
      blush(60, 73, 23, 6.5, 4.5));
  };

  ART.cupcake = function () {
    return wrap(halo() +
      '<circle cx="60" cy="26" r="8" fill="' + C.deep + '"/>' +
      '<path d="M60 34 q4 -8 12 -10" fill="none" stroke="' + C.leaf + '" stroke-width="3"/>' +
      '<path d="M30 62 a16 16 0 0 1 10 -22 a18 18 0 0 1 34 -8 a15 15 0 0 1 16 30Z" fill="' +
        C.pink + '"/>' +
      '<path d="M28 64 h64 l-9 40 a6 6 0 0 1 -6 5 H43 a6 6 0 0 1 -6 -5Z" fill="' + C.cream +
        '" stroke="' + C.pink2 + '" stroke-width="3"/>' +
      '<path d="M46 66 l-4 42 M60 66 v43 M74 66 l4 42" stroke="' + C.pink2 + '" stroke-width="3"/>' +
      eyes(60, 84, 12, 5) +
      smile(60, 94, 6) +
      blush(60, 93, 21, 6));
  };

  ART.boba = function () {
    return wrap(halo() +
      '<rect x="66" y="14" width="7" height="34" rx="3" fill="' + C.deep +
        '" transform="rotate(14 66 14)"/>' +
      '<path d="M34 36 h52 l-7 66 a7 7 0 0 1 -7 6 H48 a7 7 0 0 1 -7 -6Z" fill="' + C.cream +
        '" stroke="' + C.pink2 + '" stroke-width="3"/>' +
      '<path d="M40 78 h40 l-4 24 a7 7 0 0 1 -7 6 H51 a7 7 0 0 1 -7 -6Z" fill="' + C.brown +
        '" opacity=".55"/>' +
      '<circle cx="50" cy="96" r="5" fill="' + C.ink + '"/>' +
      '<circle cx="62" cy="100" r="5" fill="' + C.ink + '"/>' +
      '<circle cx="74" cy="95" r="5" fill="' + C.ink + '"/>' +
      '<rect x="30" y="30" width="60" height="10" rx="5" fill="' + C.pink + '"/>' +
      eyes(60, 60, 12, 5) +
      smile(60, 70, 6) +
      blush(60, 69, 21, 6));
  };

  ART.flower = function () {
    var p = '';
    for (var i = 0; i < 5; i++) {
      p += '<path d="M60 60 C44 44 44 20 60 14 C76 20 76 44 60 60Z" fill="' + C.pink +
           '" stroke="' + C.pink2 + '" stroke-width="2" transform="rotate(' + (i * 72) +
           ' 60 60)"/>';
    }
    return wrap(halo() + sparkle(22, 26, 7, C.violet) + sparkle(98, 90, 6, C.sun) + p +
      '<circle cx="60" cy="60" r="17" fill="' + C.cream + '" stroke="' + C.pink2 +
        '" stroke-width="2"/>' +
      eyes(60, 57, 7, 3.6) +
      smile(60, 64, 4.5) +
      blush(60, 64, 12, 4));
  };

  ART.penguin = function () {
    return wrap(halo(C.sky) +
      '<ellipse cx="60" cy="68" rx="33" ry="38" fill="' + C.grey + '"/>' +
      '<ellipse cx="60" cy="74" rx="22" ry="30" fill="' + C.white + '"/>' +
      '<ellipse cx="26" cy="70" rx="8" ry="20" fill="' + C.grey + '" transform="rotate(14 26 70)"/>' +
      '<ellipse cx="94" cy="70" rx="8" ry="20" fill="' + C.grey + '" transform="rotate(-14 94 70)"/>' +
      '<path d="M44 108 q-10 6 2 8 q10 1 12 -8Z" fill="' + C.sun + '"/>' +
      '<path d="M76 108 q10 6 -2 8 q-10 1 -12 -8Z" fill="' + C.sun + '"/>' +
      eyes(60, 58, 12, 5) +
      '<path d="M60 66 l-7 6 7 6 7 -6z" fill="' + C.sun + '"/>' +
      blush(60, 70, 23, 6) +
      '<path d="M40 34 h40 l-4 -8 h-32z" fill="' + C.deep + '"/>' +
      '<ellipse cx="60" cy="34" rx="24" ry="5" fill="' + C.deep + '"/>');
  };

  ART.trophy = function () {
    return wrap(halo() +
      sparkle(20, 28, 8, C.sun) + sparkle(100, 26, 7, C.sun) +
      '<path d="M34 22 h52 v22 a26 26 0 0 1 -52 0Z" fill="' + C.sun + '" stroke="' + C.gold +
        '" stroke-width="3"/>' +
      '<path d="M34 28 h-12 a14 14 0 0 0 14 18" fill="none" stroke="' + C.gold + '" stroke-width="4"/>' +
      '<path d="M86 28 h12 a14 14 0 0 1 -14 18" fill="none" stroke="' + C.gold + '" stroke-width="4"/>' +
      '<rect x="52" y="70" width="16" height="16" fill="' + C.gold + '"/>' +
      '<rect x="34" y="86" width="52" height="14" rx="5" fill="' + C.gold + '"/>' +
      '<rect x="28" y="100" width="64" height="12" rx="5" fill="' + C.deep + '"/>' +
      eyes(60, 38, 11, 4.6) +
      smile(60, 47, 6) +
      blush(60, 46, 20, 5.5));
  };

  ART.crown = function () {
    return wrap(halo() +
      sparkle(24, 30, 7, C.violet) +
      '<path d="M22 88 L18 34 L42 54 L60 24 L78 54 L102 34 L98 88Z" fill="' + C.sun +
        '" stroke="' + C.gold + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="20" y="88" width="80" height="14" rx="6" fill="' + C.gold + '"/>' +
      '<circle cx="18" cy="32" r="6" fill="' + C.deep + '"/>' +
      '<circle cx="102" cy="32" r="6" fill="' + C.deep + '"/>' +
      '<circle cx="60" cy="22" r="7" fill="' + C.violet2 + '"/>' +
      eyes(60, 68, 12, 5) +
      smile(60, 78, 6) +
      blush(60, 77, 21, 6));
  };

  ART.book = function () {
    return wrap(halo() +
      sparkle(100, 26, 7, C.sun) +
      '<path d="M14 34 q24 -10 46 2 v62 q-22 -12 -46 -2Z" fill="' + C.pink + '" stroke="' + C.pink2 +
        '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M106 34 q-24 -10 -46 2 v62 q22 -12 46 -2Z" fill="' + C.violet + '" stroke="' +
        C.violet2 + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M24 46 h26 M24 56 h26 M70 46 h26 M70 56 h26" stroke="' + C.white +
        '" stroke-width="3" stroke-linecap="round" opacity=".85"/>' +
      eyes(60, 74, 14, 5) +
      smile(60, 84, 6.5) +
      blush(60, 83, 24, 6));
  };

  ART.rocket = function () {
    return wrap(halo(C.sky) +
      sparkle(22, 34, 7, C.white) + sparkle(98, 40, 6, C.white) +
      '<path d="M60 10 c18 16 24 36 24 54 H36 c0 -18 6 -38 24 -54Z" fill="' + C.cream +
        '" stroke="' + C.pink2 + '" stroke-width="3"/>' +
      '<path d="M36 52 L20 78 h16Z" fill="' + C.deep + '"/>' +
      '<path d="M84 52 L100 78 h-16Z" fill="' + C.deep + '"/>' +
      '<rect x="46" y="64" width="28" height="10" rx="4" fill="' + C.pink + '"/>' +
      '<path d="M48 78 q12 26 24 0 q-6 34 -24 0Z" fill="' + C.sun + '"/>' +
      '<path d="M54 80 q6 16 12 0 q-3 20 -12 0Z" fill="' + C.deep + '"/>' +
      eyes(60, 42, 11, 5) +
      smile(60, 52, 6) +
      blush(60, 51, 20, 5.5));
  };

  ART.rainbow = function () {
    var cols = [C.deep, C.pink, C.sun, C.mint, C.sky, C.violet2], p = '';
    for (var i = 0; i < cols.length; i++) {
      var r = 50 - i * 7;
      p += '<path d="M' + (60 - r) + ' 86 a' + r + ' ' + r + ' 0 0 1 ' + (r * 2) + ' 0" fill="none" ' +
           'stroke="' + cols[i] + '" stroke-width="7"/>';
    }
    return wrap(p +
      '<ellipse cx="26" cy="88" rx="20" ry="13" fill="' + C.white + '"/>' +
      '<ellipse cx="94" cy="88" rx="20" ry="13" fill="' + C.white + '"/>' +
      '<ellipse cx="60" cy="96" rx="26" ry="16" fill="' + C.white + '"/>' +
      eyes(60, 94, 11, 4.6) +
      smile(60, 102, 6) +
      blush(60, 101, 19, 5.5));
  };

  /* --- 6 nhan vat rieng cho 6 chang hoc --- */

  ART.boat = function () {
    return wrap(halo(C.sky) +
      sparkle(100, 26, 6, C.white) +
      '<path d="M60 12 L60 62" stroke="' + C.brown + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M62 16 L92 44 L62 54Z" fill="' + C.deep + '"/>' +
      '<path d="M58 20 L34 46 L58 54Z" fill="' + C.pink + '"/>' +
      '<path d="M18 64 h84 l-14 26 a10 10 0 0 1 -9 6 H41 a10 10 0 0 1 -9 -6Z" fill="' + C.brown + '"/>' +
      '<path d="M10 100 q12 -8 24 0 t24 0 t24 0 t24 0" fill="none" stroke="' + C.blue +
        '" stroke-width="5" stroke-linecap="round"/>' +
      eyes(60, 74, 12, 4.6) +
      smile(60, 82, 6) +
      blush(60, 81, 21, 5.5));
  };

  ART.umbrella = function () {
    return wrap(halo() +
      '<path d="M12 62 a48 40 0 0 1 96 0Z" fill="' + C.deep + '"/>' +
      '<path d="M28 62 a32 40 0 0 1 64 0" fill="' + C.pink + '"/>' +
      '<path d="M44 62 a16 40 0 0 1 32 0" fill="' + C.cream + '"/>' +
      '<path d="M60 62 v34 a10 10 0 0 1 -20 0" fill="none" stroke="' + C.brown +
        '" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="88" cy="86" r="5" fill="' + C.sky + '"/>' +
      '<circle cx="98" cy="102" r="4" fill="' + C.sky + '"/>' +
      eyes(60, 44, 12, 5) +
      smile(60, 53, 6) +
      blush(60, 52, 21, 5.5));
  };

  ART.sun = function () {
    var rays = '';
    for (var i = 0; i < 12; i++) {
      rays += '<rect x="57" y="4" width="6" height="16" rx="3" fill="' + C.gold +
              '" transform="rotate(' + (i * 30) + ' 60 60)"/>';
    }
    return wrap(halo(C.cream) + rays +
      '<circle cx="60" cy="60" r="34" fill="' + C.sun + '" stroke="' + C.gold + '" stroke-width="3"/>' +
      happyEyes(60, 56, 13, 6) +
      smile(60, 68, 7) +
      blush(60, 68, 23, 6.5));
  };

  ART.map = function () {
    return wrap(halo() +
      '<path d="M14 30 L46 20 L74 32 L106 22 V92 L74 102 L46 90 L14 100Z" fill="' + C.cream +
        '" stroke="' + C.pink2 + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M46 20 V90 M74 32 V102" stroke="' + C.pink2 + '" stroke-width="2.5"/>' +
      '<path d="M20 74 q16 -18 34 -8 t30 -10" fill="none" stroke="' + C.mint +
        '" stroke-width="3" stroke-dasharray="5 5" stroke-linecap="round"/>' +
      '<path d="M90 40 a10 10 0 1 0 -20 0 c0 8 10 18 10 18 s10 -10 10 -18Z" fill="' + C.deep + '"/>' +
      '<circle cx="80" cy="40" r="4" fill="' + C.white + '"/>' +
      eyes(42, 56, 10, 4.4) +
      smile(42, 64, 5.5) +
      blush(42, 63, 18, 5));
  };

  ART.berry = function () {
    var seeds = '';
    [[38, 50], [60, 44], [82, 50], [34, 88], [86, 88], [60, 98]].forEach(function (q) {
      seeds += '<ellipse cx="' + q[0] + '" cy="' + q[1] + '" rx="2.6" ry="3.6" fill="' + C.cream + '"/>';
    });
    return wrap(halo() +
      '<path d="M60 26 C34 26 26 46 26 60 C26 84 44 106 60 106 C76 106 94 84 94 60 ' +
        'C94 46 86 26 60 26Z" fill="' + C.deep + '"/>' + seeds +
      '<path d="M60 30 L44 18 L58 22 L60 8 L62 22 L76 18Z" fill="' + C.leaf + '"/>' +
      eyes(60, 66, 14, 5) +
      smile(60, 76, 6.5) +
      blush(60, 76, 25, 6));
  };

  ART.panda = function () {
    return wrap(halo() +
      '<circle cx="28" cy="36" r="14" fill="' + C.ink + '"/>' +
      '<circle cx="92" cy="36" r="14" fill="' + C.ink + '"/>' +
      '<circle cx="60" cy="66" r="36" fill="' + C.white + '" stroke="' + C.line + '" stroke-width="2"/>' +
      '<ellipse cx="44" cy="60" rx="12" ry="14" fill="' + C.ink + '" transform="rotate(-14 44 60)"/>' +
      '<ellipse cx="76" cy="60" rx="12" ry="14" fill="' + C.ink + '" transform="rotate(14 76 60)"/>' +
      '<circle cx="45" cy="60" r="5" fill="' + C.white + '"/>' +
      '<circle cx="75" cy="60" r="5" fill="' + C.white + '"/>' +
      '<ellipse cx="60" cy="76" rx="6" ry="4.5" fill="' + C.ink + '"/>' +
      '<path d="M60 80 v3 M60 83 q-6 5 -10 1 M60 83 q6 5 10 1" fill="none" stroke="' + C.ink +
        '" stroke-width="2.6" stroke-linecap="round"/>' +
      blush(60, 76, 27, 6.5));
  };

  var NAMES = Object.keys(ART);

  /** Chuoi SVG cua mot nhan vat. Ten la, tra ve nhan vat dau tien. */
  function svg(name) { return (ART[name] || ART[NAMES[0]])(); }

  /** Node bao ngoai da co san SVG ben trong. */
  function node(name, cls) {
    var d = document.createElement('div');
    if (cls) d.className = cls;
    d.innerHTML = svg(name);        // markup tinh do code sinh — xem chu thich dau file
    return d;
  }

  /** Chon mot nhan vat theo khoa co dinh (cung khoa -> cung tranh). */
  function pick(key) {
    var h = 0;
    key = String(key || '');
    for (var i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    return NAMES[h % NAMES.length];
  }

  window.Art = { names: function () { return NAMES.slice(); }, svg: svg, node: node, pick: pick };
})();
