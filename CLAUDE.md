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
  games/*.js          # mỗi game 1 file, đăng ký vào window.Games
  app.js              # router hash, màn hình chính, khởi động
data/vocab.js         # window.VOCAB — SINH RA, không sửa tay
data/vocab.seed.json  # nguồn sự thật do người viết (term + nghĩa tiếng Việt)
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
`vocab.js → store.js → srs.js → data.js → ui.js → games/registry.js → games/*.js → app.js`

## 3. Quy ước code

- **Namespace toàn cục**, không module: `window.Store`, `window.SRS`, `window.Data`,
  `window.UI`, `window.Games`, `window.App`. Không rò biến ra global ngoài các tên này
  (bọc mỗi file trong IIFE).
- Tên hàm/biến **tiếng Anh**, chuỗi hiển thị cho người dùng **tiếng Việt**.
- Không `innerHTML` với dữ liệu người dùng. Nội dung từ vựng là dữ liệu tĩnh nên
  dùng `textContent` mặc định; chỉ dùng `innerHTML` cho markup do code tự sinh.
- CSS: đặt biến màu ở `:root`. Không viết màu hex rải rác trong file.
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
  src        // tiêu đề bài báo chứa câu ví dụ ("" nếu ex rỗng)
}
```

**Quy tắc `id`:** một khi đã phát hành thì không đổi. Sửa chính tả `term` thì giữ nguyên `id`.

## 5. Hợp đồng game

Mỗi game đăng ký:

```js
window.Games.register({
  id: 'quiz',              // ổn định
  name: 'Trắc nghiệm',
  icon: '🎯',
  desc: 'Chọn nghĩa đúng',
  minCards: 4,             // số thẻ tối thiểu để chơi được
  mount(root, cards, done) // vẽ vào root; gọi done(results) khi xong
});
```

- `cards`: mảng thẻ đã do session chọn sẵn. Game **không** tự chọn thẻ, **không** tự đọc Store.
- `done(results)`: `results = [{ id, correct: bool, ms: number }]`.
  App là nơi duy nhất ghi kết quả vào SRS. Game không được gọi `Store.save` hay `SRS.grade`.
- Game phải tự dọn `setInterval`/listener khi bị unmount (`root` bị xoá).
- **Trả lời sai thì phải hiện đáp án đúng.** Dùng `UI.correction(root, card, next)` (chèn bảng
  sửa sai + nút "Tiếp tục", người học tự bấm đi tiếp) hoặc `UI.reveal(card, label, compact)`
  để dựng danh sách điểm lại cuối vòng. Không được tự động sang câu khác khi đang sai.

→ Thêm game mới = thêm 1 file trong `games/`, thêm 1 dòng `<script>` vào `index.html`.
Không sửa `app.js`.

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

**Quét lại corpus:** `tools/fetch_corpus.py` (OpenAlex) → `tools/extract_terms.py`
(ứng viên thuật ngữ) → thêm term vào seed → `build_vocab.py`.

**Trước khi báo xong bất cứ thay đổi nào:** chạy `bash tools/run_checks.sh`. Phải in
`TAT CA KIEM TRA: DAT`. Script gồm 5 bước:

| # | Bước | Bắt lỗi gì |
|---|------|-----------|
| 1 | `tools/check.py` | id trùng, thiếu `vi`, deck lạ, ví dụ không nguồn, script thiếu/sai thứ tự trong `index.html`, game tự ghi SRS |
| 2 | `node --check` | lỗi cú pháp JS |
| 3 | `tools/sw_test.js` | service worker cache thiếu file, không dọn cache cũ, không đọc được khi mất mạng |
| 4 | `tools/smoke.html` | robot chơi **hết mọi game** + chế độ trộn tới màn kết quả, đếm lượt ghi SRS, xác nhận localStorage đã lưu |
| 5 | `tools/frame.html` | tràn ngang ở bề rộng thật 360px trên mọi màn hình |

Bước 1 còn bắt luôn các hiểm hoạ GitHub Pages ở mục 1.7: file bắt đầu bằng `_`, thiếu
`.nojekyll`, đường dẫn tuyệt đối, và file có trong `index.html` nhưng thiếu trong `sw.js`.

Đụng tới chuyện deploy thì chạy thêm `bash tools/serve_check.sh` (mục 8).

Xem giao diện: `tools/shot.html?<hash>` nhúng app trong khung 360px để chụp ảnh, ví dụ
`open "tools/shot.html?%23/deck/hydro"`.

Bước 4 tự dò game qua `Games.all()` — thêm game mới là nó tự được kiểm tra, không phải sửa gì.

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
