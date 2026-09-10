# CLAUDE.md — ESP Trainer (English for Water/Disaster Engineering)

App học **tiếng Anh chuyên ngành** cho sinh viên chuẩn bị theo học GS. **Akiyuki Kawasaki**
(Department of Civil Engineering, The University of Tokyo — disaster risk reduction, climate
adaptation, hydrology, GIS). Từ vựng **không bịa**: rút từ corpus 261 bài báo thật.

---

## 1. Nguyên tắc bất di bất dịch

1. **Không backend.** Chỉ static file. Mở `index.html` bằng `file://` cũng phải chạy.
   → Dữ liệu nạp qua `<script>` gán biến global (`data/vocab.js`), **không** dùng `fetch()`.
   → **Không** dùng `<script type="module">` / `import` (CORS chặn trên `file://`).
2. **Không dependency, không build step.** Vanilla JS + CSS thuần. Không npm, không bundler.
3. **Mobile-first.** Thiết kế cho màn 360×640 trước, desktop sau. Mọi vùng bấm ≥ 44×44px.
   Không hover-only. Không kéo ngang toàn trang.
4. **Tiến độ chỉ ở localStorage.** Một key duy nhất: `esp-trainer/v1`. Mọi ghi đi qua `Store`.
5. **Từ vựng phải truy vết được.** Mỗi thẻ bắt buộc có `src` = tiêu đề bài báo mà câu ví dụ
   được trích ra. Câu ví dụ là câu **thật** từ abstract, không tự chế.
6. **Không thêm thư viện phân tích/telemetry.** App chạy offline, không gọi mạng.
7. **Deploy được lên GitHub Pages.** Ba ràng buộc kéo theo, vi phạm là app chết trắng:
   - **Mọi đường dẫn phải tương đối** (`assets/…`, không `/assets/…`) — project site nằm
     trong thư mục con `https://<user>.github.io/<repo>/`.
   - **Không file/thư mục nào bắt đầu bằng `_`** — Jekyll của GitHub Pages bỏ qua chúng.
     File `.nojekyll` ở gốc là lớp bảo hiểm thứ hai; giữ cả hai.
   - **Chạy được ở cả `file://` lẫn `https://`.** Service worker chỉ đăng ký khi giao thức
     là http(s); mở bằng `file://` app vẫn phải chạy đủ, chỉ mất phần offline.

## 2. Kiến trúc

```
index.html            # shell duy nhất, nạp mọi script theo thứ tự
assets/css/app.css    # toàn bộ style, dùng CSS custom properties
assets/js/
  store.js            # đọc/ghi localStorage, schema + migrate
  srs.js              # thuật toán lặp ngắt quãng (SM-2 rút gọn)
  data.js             # index hoá VOCAB: theo deck, theo id, lấy distractor
  ui.js               # helper DOM (el, toast, tiến trình, nút)
  art.js              # bộ tranh dễ thương vẽ bằng SVG thuần (window.Art)
  celebrate.js        # lời chúc sau mỗi bài + huy hiệu mốc (window.Celebrate)
  games/*.js          # mỗi game 1 file, đăng ký vào window.Games
  app.js              # router hash, màn hình chính, khởi động
data/vocab.js         # window.VOCAB — SINH RA, không sửa tay
data/vocab.seed.json  # nguồn sự thật do người viết (term + nghĩa tiếng Việt)
data/notes.seed.json  # nguồn sự thật do người viết (bản dịch câu + ghi chú từ trọng tâm)
data/ipa.json         # SINH RA bởi tools/build_ipa.py — phiên âm IPA từng term
corpus/cmudict.dict   # TẢI VỀ, không commit — từ điển phát âm CMU
corpus/corpus.json    # 261 tài liệu quét từ OpenAlex
tools/*.py            # pipeline dữ liệu
tools/*.sh|*.html|*.js# bộ kiểm tra (mục 7)

sw.js                 # service worker — cache offline
manifest.webmanifest  # PWA: cài lên màn hình chính
.nojekyll             # chặn Jekyll trên GitHub Pages
assets/icons/*.png    # SINH RA bởi tools/make_icons.py
.github/workflows/pages.yml   # tự deploy khi push lên main
```

**Thứ tự nạp script** trong `index.html` là bắt buộc:
`vocab.js → store.js → srs.js → data.js → ui.js → art.js → celebrate.js →
games/registry.js → games/*.js → app.js`

`tools/smoke.html` nạp lại đúng danh sách này — thêm file vào `index.html` thì phải
thêm vào cả `smoke.html`, nếu không robot kiểm tra sẽ chạy với app thiếu script.

## 3. Quy ước code

- **Namespace toàn cục**, không module: `window.Store`, `window.SRS`, `window.Data`,
  `window.UI`, `window.Games`, `window.App`. Không rò biến ra global ngoài các tên này
  (bọc mỗi file trong IIFE).
- Tên hàm/biến **tiếng Anh**, chuỗi hiển thị cho người dùng **tiếng Việt**.
- Không `innerHTML` với dữ liệu người dùng. Nội dung từ vựng là dữ liệu tĩnh nên
  dùng `textContent` mặc định; chỉ dùng `innerHTML` cho markup do code tự sinh.
- CSS: đặt biến màu ở `:root`. Không viết màu hex rải rác trong file.
  Chủ đề là **hồng pastel nền sáng**. Chữ trên nền sáng dùng `--brand-ink` / `--accent-ink`
  (đủ tương phản), còn `--brand` / `--accent` chỉ để tô nền và viền.
  Bảng màu của tranh minh hoạ nằm riêng ở đầu `art.js`, không trộn vào CSS.
- Không tối ưu sớm. Corpus ~530 từ, duyệt mảng tuyến tính là đủ.

## 4. Hợp đồng dữ liệu

`data/vocab.js` gán `window.VOCAB = { decks: [...], cards: [...] }`.

```js
deck = { id, name, icon, desc }          // id: kebab-case, ổn định vĩnh viễn
card = {
  id,        // slug của term — KHÓA ỔN ĐỊNH, đổi id = mất tiến độ người học
  term,      // cụm tiếng Anh
  pos,       // n | v | adj | adv | phr
  vi,        // nghĩa tiếng Việt (bắt buộc)
  en,        // định nghĩa tiếng Anh ngắn
  deck,      // deck.id
  freq,      // số lần xuất hiện trong corpus (dùng để xếp thứ tự học)
  ex,        // câu ví dụ thật từ abstract ("" nếu không tìm được)
  src,       // tiêu đề bài báo chứa câu ví dụ ("" nếu ex rỗng)
  ipa,       // phiên âm IPA kiểu Mỹ (vắng nếu từ điển không có — code phải chịu được)
  note       // { d: bản dịch câu ex, y: từ trọng tâm nằm ở đâu trong câu } — có thể vắng
}
```

**Ba trường `ipa` / `note` / `freq` là bù thêm.** Mọi chỗ đọc chúng phải chịu được giá trị
vắng mặt (`UI.ipa` và `UI.gloss` trả về `null`), vì thẻ mới thêm chưa kịp có ghi chú.

**Quy tắc `id`:** một khi đã phát hành thì không đổi. Sửa chính tả `term` thì giữ nguyên `id`.

## 4b. Phiên âm & giải nghĩa tiếng Việt

Hai thứ này trả lời đúng một câu hỏi của người học: *đọc thế nào* và *câu này nghĩa là gì*.

- **Phiên âm** sinh bằng `tools/build_ipa.py` từ **CMU Pronouncing Dictionary** — từ điển
  phát âm thật, giấy phép BSD. Không đoán chữ-sang-âm. 19 từ chuyên ngành CMUdict không có
  nằm trong bảng `EXTRA` ngay trong tool, phần lớn ghép từ các từ CÓ trong từ điển
  (`baseflow` = `base` + `flow`), số còn lại lấy theo từ điển Anh chuẩn — mỗi dòng có chú
  thích nguồn. Thêm term mới mà từ điển không có thì **để trống**, đừng bịa.
- **Giải nghĩa** nằm ở `data/notes.seed.json`, do người viết:
  - `dich[<khoá câu>]` — bản dịch tiếng Việt của câu ví dụ. Khoá là `sha1(câu)[:8]`,
    **theo câu chứ không theo thẻ**: 513 thẻ chỉ dùng 357 câu khác nhau, dịch một lần dùng chung.
  - `y[<id thẻ>]` — một câu nói rõ từ trọng tâm nằm ở đâu trong câu đó và đi với từ nào.
    Theo thẻ, vì cùng một câu nhưng mỗi thẻ soi một từ khác nhau.
  - Đây là chỗ duy nhất được nói cái mà bản thân câu tiếng Anh không nói. Nó **giải thích**
    câu thật, không phải chế thêm câu mới — mục 1.5 vẫn nguyên vẹn.
- `python3 tools/notes_todo.py` liệt kê những câu/thẻ còn thiếu ghi chú, gom theo câu.
- Hiển thị: `UI.ipa(card)` và `UI.gloss(card)`; cả hai trả `null` nếu thiếu dữ liệu.
  Bảng sửa sai, mặt sau thẻ lật và danh sách từ đều dùng chung hai hàm này.
- **Điền vào câu dừng lại cả khi trả lời ĐÚNG** để đọc phần dịch — thứ đang học ở kiểu chơi
  đó là nghĩa của cả câu, không phải một từ. Thẻ chưa có bản dịch thì vẫn chạy tiếp như cũ.

## 5. Hợp đồng game

Mỗi game đăng ký:

```js
window.Games.register({
  id: 'quiz',              // ổn định
  name: 'Trắc nghiệm',
  icon: '🎯',
  desc: 'Chọn nghĩa đúng',
  minCards: 4,             // số thẻ tối thiểu để chơi được
  wantCards: 24,           // (tuỳ chọn) số thẻ game muốn được phát — xem bên dưới
  usable(card),            // (tuỳ chọn) thẻ này game dùng được không — xem bên dưới
  mount(root, cards, done) // vẽ vào root; gọi done(results) khi xong
});
```

- `cards`: mảng thẻ đã do session chọn sẵn. Game **không** tự chọn thẻ, **không** tự đọc Store.
- `wantCards`: game tính giờ (chớp nhoáng) trả lời được nhiều lượt hơn số thẻ mặc định,
  nên khai báo số thẻ nó cần. Chơi riêng thì hàng đợi lấy `max(sessionSize, wantCards)`.
  Đổi lại, game khai báo `wantCards` **không vào chế độ trộn** — lát 4 thẻ của chế độ trộn
  quá mỏng, nó sẽ hỏi đi hỏi lại đúng mấy từ đó suốt 45 giây.
  Quyền chọn thẻ vẫn ở app — game chỉ nói mình cần bao nhiêu.
- **Game không được tự lọc thẻ bên trong `mount`.** Kiểu chơi nào chỉ dùng được một số thẻ
  (xếp chữ bỏ từ quá dài, điền vào câu cần có câu ví dụ) thì khai báo `usable(card)`.
  App lọc trước khi phát, nên hàng đợi chỉ gồm thẻ thật sự sẽ được hỏi. Lọc lén bên trong
  làm phiên học hứa 12 từ nhưng chỉ hỏi 5, người học không hề biết.
  Ở chế độ trộn, thẻ mà game này không dùng được **nằm lại hàng chờ** cho vòng sau chứ
  không bị bỏ. `Games.eligible` cũng xét trên tập đã lọc, nên `canPlay` chỉ còn dùng cho
  điều kiện ngoài thẻ (ví dụ máy có `speechSynthesis` không).
- **Không hỏi lại một thẻ khi chưa duyệt hết lượt.** Game lặp thẻ phải rút theo túi đã xáo
  (`Data.shuffle`, rút hết mới xáo lại), không được `cards[random]` — kiểu đó lặp ngay từ
  câu thứ ba và người học chỉ gặp đi gặp lại vài từ.
- `done(results)`: `results = [{ id, correct: bool, ms: number }]`.
  **Mỗi thẻ tối đa một dòng.** Thẻ bị hỏi nhiều lần trong một vòng thì game phải tự gộp,
  sai một lần là tính sai cả thẻ. App vẫn gộp lần nữa như lưới an toàn, nhưng ghi trùng
  sẽ thổi phồng khoảng ôn của SRS (4 lượt đúng trong 45 giây = thẻ bị đánh dấu "đã thuộc").
  App là nơi duy nhất ghi kết quả vào SRS. Game không được gọi `Store.save` hay `SRS.grade`.
- **Gợi ý thì không được tính là nhớ.** Kiểu chơi nào cho mở đáp án dần (xếp chữ) phải trả
  `correct: false` khi người học đã dùng gợi ý, và nói thẳng trên màn hình là từ sẽ quay lại
  sớm. Chấm đúng cho một lượt phải mở chữ mới xong sẽ đẩy thẻ lên bậc SRS cao hơn thực lực.
- Game phải tự dọn `setInterval`/listener khi bị unmount (`root` bị xoá).
- **Trả lời sai thì phải hiện đáp án đúng.** Dùng `UI.correction(root, card, next)` (chèn bảng
  sửa sai + nút "Tiếp tục", người học tự bấm đi tiếp) hoặc `UI.reveal(card, label, compact)`
  để dựng danh sách điểm lại cuối vòng. Không được tự động sang câu khác khi đang sai.

→ Thêm game mới = thêm 1 file trong `games/`, thêm 1 dòng `<script>` vào `index.html`.
Không sửa `app.js`.

## 5b. Lời chúc & huy hiệu

`Art` và `Celebrate` chỉ **vẽ**; chúng không đụng vào SRS.

- `Art.svg(name)` / `Art.node(name, cls)` trả về một trong 23 nhân vật SVG. Tranh là markup
  do code tự sinh nên đặt bằng `innerHTML` là an toàn. **Không tải ảnh từ mạng** (mục 1.6),
  không thêm file ảnh nhị phân — mọi hình đều là SVG viết tay trong `art.js`.
- `Celebrate.cheer(acc, total)` → thẻ chúc mừng gắn vào màn kết quả: mỗi lần một tranh và
  một câu khác nhau, giọng điệu theo % đúng (100 / ≥80 / ≥60 / thấp hơn).
- `Celebrate.check(round)` → mảng huy hiệu **vừa** mở khoá; gọi **sau** khi app.js đã ghi
  xong SRS. Nó tự ghi nhận qua `Store.award`, mỗi huy hiệu chỉ bật một lần.
- `Celebrate.show(list)` mở lớp phủ chúc mừng; `Celebrate.wall()` dựng tủ huy hiệu ở màn
  Tiến độ. Lớp phủ tự đóng khi đổi `hashchange`, đừng để nó kẹt lại giữa các màn.
- **`id` huy hiệu là khoá ổn định** như `id` thẻ: đổi id = người học mất huy hiệu đã mở.
  Huy hiệu theo chặng lấy id `deck-<deck.id>`.
- Trạng thái huy hiệu nằm trong `Store` ở trường `badges` (`id → thời điểm mở khoá`).
  Trường này được **bù thêm** cho bản ghi cũ trong `fill()`, **không** tăng `SCHEMA` —
  tăng schema sẽ khiến `migrate()` vứt mất chuỗi ngày và lịch sử của người học.

## 6. Lặp ngắt quãng (SRS)

SM-2 rút gọn, mỗi thẻ có `{ reps, ease, interval, due, lapses, seen, correct }`.

- Đúng: `reps++`, interval theo bậc `1 → 3 → 7 → 16 → 35 → ×ease` ngày, `ease` +0.1 (trần 2.8).
- Sai: `reps = 0`, `interval = 0` (học lại trong phiên), `lapses++`, `ease` −0.2 (sàn 1.3).
- Thẻ "đã thuộc" (`mastered`) = `reps ≥ 4` **và** `interval ≥ 16`.
- Phiên học chọn theo thứ tự ưu tiên: **quá hạn → đang học → từ mới (freq cao trước)**.

Sửa hằng số SRS thì phải cập nhật mục này cùng lúc.

## 7. Quy trình làm việc

**Đổi từ vựng:** sửa `data/vocab.seed.json` → chạy `python3 tools/build_vocab.py` →
kiểm tra `data/vocab.js` → thử trên trình duyệt. **Không bao giờ sửa tay `data/vocab.js`.**

**Thêm phiên âm / ghi chú:** `python3 tools/build_ipa.py` (sinh `data/ipa.json`, lần đầu tự
tải CMUdict về `corpus/cmudict.dict`) → viết bổ sung vào `data/notes.seed.json` theo danh
sách của `python3 tools/notes_todo.py` → chạy lại `build_vocab.py` để trộn vào `vocab.js`.
`vocab.js` nặng lên gần gấp đôi (242 KB → 445 KB) vì hai trường này; nó nằm trong `ASSETS`
của `sw.js` nên **nhớ tăng `CACHE`**.

**Quét lại corpus:** `tools/fetch_corpus.py` (OpenAlex) → `tools/extract_terms.py`
(ứng viên thuật ngữ) → thêm term vào seed → `build_vocab.py`.

**Trước khi báo xong bất cứ thay đổi nào:** chạy `bash tools/run_checks.sh`. Phải in
`TAT CA KIEM TRA: DAT`. Script gồm 6 bước:

| # | Bước | Bắt lỗi gì |
|---|------|-----------|
| 1 | `tools/check.py` | id trùng, thiếu `vi`, deck lạ, ví dụ không nguồn, script thiếu/sai thứ tự trong `index.html`, game tự ghi SRS |
| 2 | `node --check` | lỗi cú pháp JS |
| 3 | `tools/sw_test.js` | service worker cache thiếu file, không dọn cache cũ, không đọc được khi mất mạng |
| 4 | `tools/upgrade_test.js` | tiến độ của người dùng cũ có sống sót qua bản mới không |
| 5 | `tools/smoke.html` | robot chơi **hết mọi game** + chế độ trộn tới màn kết quả, đếm lượt ghi SRS, xác nhận localStorage đã lưu, và **đo độ phủ thẻ** |
| 6 | `tools/frame.html` | tràn ngang ở bề rộng thật 360px trên mọi màn hình |

Bước 1 còn bắt luôn các hiểm hoạ GitHub Pages ở mục 1.7: file bắt đầu bằng `_`, thiếu
`.nojekyll`, đường dẫn tuyệt đối, và file có trong `index.html` nhưng thiếu trong `sw.js`.

Đụng tới chuyện deploy thì chạy thêm `bash tools/serve_check.sh` (mục 8).

Xem giao diện: `tools/shot.html?<hash>` nhúng app trong khung 360px để chụp ảnh, ví dụ
`open "tools/shot.html?%23/deck/hydro"`.

**Bước 4 (tương thích ngược)** chạy `store.js` + `srs.js` ở `git HEAD` — tức bản người dùng
đang chạy — để sinh dữ liệu thật, rồi nạp chính chuỗi localStorage đó vào code mới và so
từng trường. Nó bắt: mất chuỗi ngày học, mất tiến độ thẻ, đổi id thẻ làm mồ côi tiến độ,
đổi nhãn "đã thuộc", hỏng nút Nhập tiến độ, và mở khoá huy hiệu ồ ạt vào mặt người dùng cũ.
Vì vậy **đụng vào `store.js` hay `data/vocab.js` thì phải chạy lại bước này.**

Bước 5 tự dò game qua `Games.all()` — thêm game mới là nó tự được kiểm tra, không phải sửa gì.

**Đo độ phủ thẻ** (trong bước 4) bọc `mount` của mọi game để đếm: `phát` = số thẻ app đưa,
`hỏi` = số thẻ thật sự có kết quả, `dòng` = số dòng trong `results`. Hai bất biến:

- `dòng == hỏi` — không thẻ nào bị ghi điểm hai lần. Vi phạm là SRS bị thổi phồng.
- `hỏi == phát` — không thẻ nào bị phát rồi bỏ quên. Miễn trừ cho game có `wantCards`
  (tính giờ, hết giờ là dừng, không phủ hết là chuyện bình thường).

Đây là lưới bắt cho đúng hai lỗi đã từng xảy ra: chớp nhoáng rút thẻ có hoàn lại rồi ghi
mỗi lượt một dòng (1496 dòng cho 12 thẻ), và nối cặp chỉ lấy 6 thẻ đầu rồi vứt phần còn lại.

**Không tự ý:** thêm framework, thêm backend, đổi `id` thẻ/deck/game, xoá key localStorage
của người dùng, hay gọi mạng lúc chạy.

## 8. Triển khai lên GitHub Pages

App là static thuần nên chỉ cần đẩy repo lên và bật Pages. `.github/workflows/pages.yml`
chạy `tools/check.py` + `node --check` trước, hỏng thì **không** deploy.

**Cảnh báo:** thư mục này đang nằm trong một git repo có gốc là **thư mục home của người
dùng** (`/Users/<user>`). Tuyệt đối không push repo đó — nó chứa `.ssh/`, `.aws/`, `.netrc`.
Dự án phải có repo riêng khởi tạo **bên trong** `english-app/`.

**Kiểm tra trước khi deploy:** `bash tools/serve_check.sh` — copy dự án ra thư mục tạm,
phục vụ qua HTTP tại `/english-app/` (đúng hình dạng project site), rồi kiểm mã HTTP từng
file, manifest, icon, và chơi thử mọi game qua HTTP.

**Service worker.** Sửa bất kỳ file nào trong `ASSETS` của `sw.js` thì **phải tăng `CACHE`**,
nếu không người dùng cũ giữ bản cũ. Thêm file vào `index.html` mà quên thêm vào `ASSETS` sẽ
bị `tools/check.py` và `tools/sw_test.js` bắt.

Hai giới hạn đã đo được của Chrome headless trên máy này, đừng mất thời gian gỡ lại:
nó **không đăng ký được** service worker (promise treo, không resolve cũng không reject),
và `--headless=new` **dump xong rồi không chịu thoát** — nên mọi lệnh gọi Chrome trong
`tools/*.sh` đều dùng `--headless` cũ kèm watchdog tự giết sau N giây.

Vì vậy logic SW được kiểm bằng `node tools/sw_test.js` — chạy `sw.js` trong một
`ServiceWorkerGlobalScope` giả lập, kiểm cài đặt cache, dọn cache cũ, và đọc được khi mất
mạng. Việc đăng ký thật chỉ xác nhận được bằng tay: mở trên điện thoại, bật chế độ máy bay,
tải lại — app phải vẫn chạy.
