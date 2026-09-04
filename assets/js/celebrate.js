/* celebrate.js — loi chuc va huy hieu.
   Chi VE va doc/ghi co huy hieu qua Store.award. Khong dung toi SRS.grade,
   khong ghi ket qua bai lam (viec do van la cua app.js — CLAUDE.md muc 5). */
(function () {
  'use strict';
  var UI = window.UI, Art = window.Art, Store = window.Store;

  var PETALS = ['🌸', '💗', '✨', '🎀', '🧁', '💖', '🌷', '⭐', '🍓', '🫧'];

  /* ---------- loi chuc sau moi bai ---------- */

  var CHEERS = {
    perfect: {
      title: 'Hoàn hảo!',
      lines: [
        'Đúng hết luôn, cậu giỏi quá đi mất!',
        'Trọn vẹn 100% — xin một tràng pháo tay nào 👏',
        'Không sai câu nào, đỉnh của chóp!',
        'Full điểm nè, tự thưởng một ly trà sữa thôi 🧋',
        'Chuẩn không cần chỉnh, dễ thương ghê!',
        'Não cậu đang phát sáng đó nha ✨',
        'Điểm tuyệt đối! Giáo sư mà biết chắc gật gù cho xem.'
      ]
    },
    great: {
      title: 'Giỏi quá!',
      lines: [
        'Ngon lành cành đào, sắp trọn vẹn rồi đó!',
        'Chỉ trượt xíu xiu thôi à, giỏi ghê!',
        'Phong độ đỉnh cao, giữ nhịp này nha!',
        'Tuyệt vời ông mặt trời ☀️',
        'Cậu chăm thật đấy, tự hào ghê cơ!',
        'Xuất sắc! Mấy từ còn lại dễ ợt thôi mà.',
        'Đúng gần hết rồi, cố thêm chút xíu nữa nè!'
      ]
    },
    good: {
      title: 'Khá lắm!',
      lines: [
        'Ôn lại vài từ nữa là thuộc ngay thôi!',
        'Ổn áp nha, tiến bộ từng ngày đó cậu.',
        'Được đó! Sai một lần là nhớ lâu hơn mà.',
        'Cứ đà này là thuộc hết cho xem 💪',
        'Không tệ đâu, mai ôn lại là ăn chắc!',
        'Đang đi đúng hướng rồi, cưng cố lên!'
      ]
    },
    keep: {
      title: 'Cố lên nhé!',
      lines: [
        'Không sao đâu, từ chuyên ngành khó mà!',
        'Sai hôm nay để nhớ mãi mai sau nè 🌱',
        'Chậm mà chắc, mình ôn lại nha!',
        'Ai cũng bắt đầu từ đây thôi, cứ từ từ 🍀',
        'Hít thở sâu, làm lại phát nữa là nhớ liền à.',
        'Mỗi lần sai là một lần não ghi nhớ kỹ hơn đó!'
      ]
    }
  };

  var SUBS = [
    'Ngày mai quay lại ôn là nhớ dai lắm nha 🌸',
    'Học đều mỗi ngày hơn học nhiều một hôm nè.',
    'Nghỉ chút rồi học tiếp cũng được, đừng ép mình.',
    'Mỗi từ thuộc là một bước gần Todai hơn 🎓',
    'Uống miếng nước rồi chơi ván nữa nào 💧',
    'Cậu đang làm tốt hơn mình tưởng đó!'
  ];

  function any(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function tierOf(acc, total) {
    if (!total) return CHEERS.good;
    if (acc >= 100) return CHEERS.perfect;
    if (acc >= 80) return CHEERS.great;
    if (acc >= 60) return CHEERS.good;
    return CHEERS.keep;
  }

  /** Rac canh hoa roi vao mot khung (khung phai co position + overflow:hidden). */
  function confetti(host, n) {
    var box = UI.el('div', 'confetti');
    for (var i = 0; i < n; i++) {
      var p = UI.el('span', 'petal', any(PETALS));
      p.style.left = Math.round(Math.random() * 92) + '%';
      p.style.animationDuration = (2.6 + Math.random() * 2.4).toFixed(2) + 's';
      p.style.animationDelay = (Math.random() * 1.8).toFixed(2) + 's';
      p.style.fontSize = (12 + Math.round(Math.random() * 10)) + 'px';
      box.appendChild(p);
    }
    host.appendChild(box);
    return box;
  }

  /**
   * The loi chuc gan vao man ket qua. Moi lan mot tranh + mot cau khac nhau.
   * acc: % dung, total: so cau da lam.
   */
  function cheer(acc, total) {
    var t = tierOf(acc, total);
    var box = UI.el('div', 'cheer');
    confetti(box, 10);
    var art = Art.node(any(Art.names()), 'cheer-art bounce');
    box.appendChild(art);
    box.appendChild(UI.el('h3', 'cheer-title', t.title));
    box.appendChild(UI.el('p', 'cheer-msg', any(t.lines)));
    box.appendChild(UI.el('p', 'cheer-sub', any(SUBS)));
    return box;
  }

  /* ---------- huy hieu ---------- */

  /* id huy hieu la KHOA ON DINH — doi id la nguoi hoc mat huy hieu da mo. */
  var MILESTONES = [
    { id: 'first', art: 'flower', name: 'Bước đầu tiên',
      goal: 'Hoàn thành bài học đầu tiên',
      msg: 'Bắt đầu luôn là phần khó nhất, mà cậu làm được rồi nè!',
      test: function (x) { return x.s.totalReviews >= 1; } },
    { id: 'perfect', art: 'star', name: 'Trọn vẹn',
      goal: 'Một bài đúng 100% (từ 6 câu trở lên)',
      msg: 'Không sai một câu nào — ngôi sao hôm nay là cậu đó!',
      test: function (x) { return !!x.r && x.r.total >= 6 && x.r.acc >= 100; } },

    { id: 'streak3', art: 'heart', name: 'Ba ngày liền',
      goal: 'Học 3 ngày liên tiếp',
      msg: 'Ba ngày rồi đó! Thói quen đang hình thành nè 💗',
      test: function (x) { return x.s.streak >= 3; } },
    { id: 'streak7', art: 'cupcake', name: 'Trọn một tuần',
      goal: 'Học 7 ngày liên tiếp',
      msg: 'Một tuần không nghỉ ngày nào — thưởng cậu cái bánh kem 🧁',
      test: function (x) { return x.s.streak >= 7; } },
    { id: 'streak14', art: 'boba', name: 'Hai tuần bền bỉ',
      goal: 'Học 14 ngày liên tiếp',
      msg: 'Mười bốn ngày liền! Ly trà sữa này cậu xứng đáng lắm 🧋',
      test: function (x) { return x.s.streak >= 14; } },
    { id: 'streak30', art: 'crown', name: 'Nữ hoàng chuyên cần',
      goal: 'Học 30 ngày liên tiếp',
      msg: 'Ba mươi ngày liên tiếp — đội vương miện lên nào 👑',
      test: function (x) { return x.s.streak >= 30; } },

    { id: 'master10', art: 'drop', name: '10 từ đã thuộc',
      goal: 'Thuộc 10 từ',
      msg: 'Mười giọt nước đầu tiên của cả dòng sông đó!',
      test: function (x) { return x.sum.mastered >= 10; } },
    { id: 'master25', art: 'cloud', name: '25 từ đã thuộc',
      goal: 'Thuộc 25 từ',
      msg: 'Hai mươi lăm từ rồi, nhẹ tênh như mây vậy ☁️',
      test: function (x) { return x.sum.mastered >= 25; } },
    { id: 'master50', art: 'rainbow', name: '50 từ đã thuộc',
      goal: 'Thuộc 50 từ',
      msg: 'Năm mươi từ! Sau mưa là cầu vồng mà 🌈',
      test: function (x) { return x.sum.mastered >= 50; } },
    { id: 'master100', art: 'whale', name: '100 từ đã thuộc',
      goal: 'Thuộc 100 từ',
      msg: 'Một trăm từ chuyên ngành — to như cá voi luôn 🐳',
      test: function (x) { return x.sum.mastered >= 100; } },
    { id: 'master250', art: 'rocket', name: '250 từ đã thuộc',
      goal: 'Thuộc 250 từ',
      msg: 'Quá nửa chặng đường rồi, bay thẳng lên thôi 🚀',
      test: function (x) { return x.sum.mastered >= 250; } },
    { id: 'masterAll', art: 'trophy', name: 'Thuộc toàn bộ',
      goal: 'Thuộc hết mọi từ trong app',
      msg: 'Cậu đã thuộc TOÀN BỘ từ vựng. Chiếc cúp này là của cậu 🏆',
      test: function (x) { return x.sum.total > 0 && x.sum.mastered >= x.sum.total; } },

    { id: 'rev100', art: 'book', name: '100 lượt ôn',
      goal: 'Trả lời 100 lượt',
      msg: 'Một trăm lượt ôn rồi đó, chăm chỉ ghê!',
      test: function (x) { return x.s.totalReviews >= 100; } },
    { id: 'rev500', art: 'bear', name: '500 lượt ôn',
      goal: 'Trả lời 500 lượt',
      msg: 'Năm trăm lượt! Ôm cậu một cái nào 🧸',
      test: function (x) { return x.s.totalReviews >= 500; } },
    { id: 'rev1000', art: 'penguin', name: '1000 lượt ôn',
      goal: 'Trả lời 1000 lượt',
      msg: 'Một nghìn lượt ôn — kiên trì như chim cánh cụt vượt băng 🐧',
      test: function (x) { return x.s.totalReviews >= 1000; } },

    { id: 'cat-nap', art: 'cat', name: 'Bài dài hơi',
      goal: 'Làm một bài từ 20 câu trở lên',
      msg: 'Một bài dài mà vẫn xong gọn — nghỉ ngơi thôi nào 🐱',
      test: function (x) { return !!x.r && x.r.total >= 20; } },
    { id: 'bunny-hop', art: 'bunny', name: 'Không sai câu nào 10 lần',
      goal: 'Một bài từ 10 câu trở lên, đúng hết',
      msg: 'Mười câu liền không trượt phát nào, nhanh như thỏ!',
      test: function (x) { return !!x.r && x.r.total >= 10 && x.r.acc >= 100; } }
  ];

  /* Moi chang mot nhan vat rieng, khong trung voi 17 huy hieu o tren. */
  var DECK_ART = {
    hydro: 'boat', flood: 'umbrella', climate: 'sun',
    drr: 'panda', geo: 'map', academic: 'berry'
  };

  /** Huy hieu cho tung chang, sinh tu Data.decks (id chang la khoa on dinh). */
  function deckBadges() {
    return (window.Data ? window.Data.decks : []).map(function (d) {
      return {
        id: 'deck-' + d.id, art: DECK_ART[d.id] || Art.pick(d.id), name: 'Xong chặng ' + d.name,
        goal: 'Thuộc hết từ của chặng ' + d.name,
        msg: 'Cả chặng ' + d.name + ' đã nằm gọn trong đầu cậu rồi ' + d.icon,
        test: function (x) {
          var st = window.SRS.summary(window.Data.ofDeck(d.id));
          return st.total > 0 && st.mastered >= st.total;
        }
      };
    });
  }

  function allBadges() { return MILESTONES.concat(deckBadges()); }

  /**
   * Kiem tra moc vua dat duoc va ghi nhan. Goi SAU khi da ghi ket qua vao SRS.
   * round: { total, acc } cua bai vua xong, co the bo trong.
   * Tra ve mang huy hieu vua mo khoa lan dau.
   */
  function check(round) {
    var x = {
      s: Store.get(),
      sum: window.SRS.summary(window.Data.cards),
      r: round || null
    };
    var fresh = [];
    allBadges().forEach(function (b) {
      if (Store.hasBadge(b.id)) return;
      var hit = false;
      try { hit = !!b.test(x); } catch (e) { hit = false; }
      if (hit && Store.award(b.id)) fresh.push(b);
    });
    return fresh;
  }

  /* ---------- lop phu mo khoa ---------- */

  var pop = null;
  var POP_MAX = 3;          // nhieu hon thi gop lai, khong bat nguoi hoc bam lien tiep

  /**
   * Danh sach the se hien. Mo khoa mot loat (nguoi dung cu vua nang cap, hoac
   * mot phien pha nhieu moc) thi gop thanh MOT the tong ket.
   */
  function queueFor(list) {
    if (!list || list.length <= POP_MAX) return (list || []).slice();
    var names = list.map(function (b) { return b.name; });
    return [{
      id: '_gop', art: 'trophy',
      name: 'Mở khoá ' + list.length + ' huy hiệu!',
      msg: names.slice(0, 3).join(' · ') + ' và ' + (list.length - 3) +
           ' huy hiệu nữa. Xem cả tủ ở màn Tiến độ nhé!'
    }];
  }

  function close() {
    if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
    pop = null;
  }

  /** Hien lan luot cac huy hieu vua mo khoa. */
  function show(list) {
    close();
    list = queueFor(list);
    if (!list.length) return;
    var i = 0;
    pop = UI.el('div', 'pop');
    var card = UI.el('div', 'pop-card');
    confetti(pop, 22);
    pop.appendChild(card);

    function draw() {
      var b = list[i];
      UI.clear(card);
      card.appendChild(UI.el('p', 'pop-kicker', 'Mở khoá huy hiệu'));
      card.appendChild(Art.node(b.art, 'pop-art bounce'));
      card.appendChild(UI.el('h3', 'pop-title', b.name));
      card.appendChild(UI.el('p', 'pop-msg', b.msg));
      if (list.length > 1) {
        card.appendChild(UI.el('p', 'pop-count', (i + 1) + '/' + list.length));
      }
      card.appendChild(UI.btn(i + 1 < list.length ? 'Tiếp →' : 'Tuyệt vời!', 'wide primary',
        function () {
          i++;
          if (i >= list.length) return close();
          draw();
        }));
      UI.haptic(18);
    }

    pop.addEventListener('click', function (e) { if (e.target === pop) close(); });
    draw();
    document.body.appendChild(pop);
  }

  /** Xem lai mot huy hieu bat ky (ke ca chua mo khoa). */
  function preview(b) {
    var got = Store.hasBadge(b.id);
    show([{ id: b.id, art: b.art, name: b.name,
            msg: got ? b.msg : 'Chưa mở khoá — ' + b.goal + '.' }]);
  }

  /** Tu huy hieu cho man Tien do. */
  function wall() {
    var box = UI.el('div', 'badges');
    allBadges().forEach(function (b) {
      var got = Store.hasBadge(b.id);
      var n = UI.el('button', 'badge' + (got ? '' : ' locked'));
      n.type = 'button';
      n.appendChild(Art.node(b.art, 'badge-art'));
      n.appendChild(UI.el('b', null, b.name));
      n.appendChild(UI.el('small', null, got ? 'Đã mở khoá' : b.goal));
      n.addEventListener('click', function () { preview(b); });
      box.appendChild(n);
    });
    return box;
  }

  function counts() {
    var list = allBadges(), got = 0;
    list.forEach(function (b) { if (Store.hasBadge(b.id)) got++; });
    return { got: got, total: list.length };
  }

  /* Doi man hinh thi dong lop phu, khong de no ket lai. */
  window.addEventListener('hashchange', close);

  window.Celebrate = {
    cheer: cheer, check: check, show: show, close: close, queueFor: queueFor,
    wall: wall, counts: counts, badges: allBadges
  };
})();
