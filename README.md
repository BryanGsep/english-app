# ESP Trainer — Tiếng Anh chuyên ngành Thủy văn & Giảm nhẹ thiên tai

Web app học từ vựng tiếng Anh chuyên ngành, dựng cho người chuẩn bị theo học
**GS. Akiyuki Kawasaki** (Department of Civil Engineering, The University of Tokyo).

**Mở nhanh:** nhấp đúp `index.html`. Không cần cài gì, không cần server, không cần mạng.

**Dùng trên điện thoại:** deploy lên GitHub Pages (bên dưới) rồi mở link, chọn "Thêm vào
màn hình chính". App cài được như app thật và **chạy offline** sau lần mở đầu tiên.

## Có gì trong này

- **520 từ / cụm từ** chia 6 chặng: Thủy văn · Lũ lụt · Khí hậu · Thiên tai & Xã hội ·
  GIS-Viễn thám · Tiếng Anh học thuật.
- **513 từ có câu ví dụ thật** trích thẳng từ abstract của 261 bài báo, kèm tên bài nguồn.
- **Phiên âm IPA cho cả 520 từ**, lấy từ CMU Pronouncing Dictionary chứ không đoán máy móc,
  và chọn cách đọc theo từ loại của thẻ — `present` (v) là /priˈzɛnt/ chứ không phải
  /ˈprɛzənt/ của danh từ "món quà".
- **Giải nghĩa tiếng Việt cho từng câu ví dụ:** 357 bản dịch (mỗi câu một lần) và 513 ghi
  chú chỉ rõ từ trọng tâm nằm ở đâu trong câu, đi với từ nào — kể cả những chỗ bẫy như
  `relief` trong câu địa hình không hề mang nghĩa "cứu trợ".
- **8 kiểu chơi:** lật thẻ, trắc nghiệm, dịch ngược, nghe từ, xếp chữ, điền vào câu thật,
  nối cặp, chớp nhoáng 45 giây. Chế độ "Học ngay" tự trộn nhiều game trong một phiên
  (trừ chớp nhoáng — game tính giờ cần nhiều từ nên chỉ chơi riêng, xin 24 từ mỗi lượt).
  Mọi từ được phát trong một phiên đều được hỏi đúng một lần; bộ kiểm tra đo và ép điều này.
- **Danh sách từ lọc theo trạng thái:** Tất cả · Cần ôn · Đang học · Đã thuộc · Chưa học,
  mỗi từ có nhãn trạng thái và ngày ôn kế tiếp. Bấm thẳng từ ô thống kê ở trang chủ.
- **Sai là hiện đáp án ngay:** bảng sửa sai có từ, phiên âm, nghĩa, định nghĩa tiếng Anh,
  câu ví dụ thật và bản dịch của câu đó; người học tự bấm "Tiếp tục" nên không bị cuốn đi
  khi chưa kịp đọc. Riêng "Điền vào câu" thì trả lời đúng cũng dừng lại để đọc nghĩa cả câu.
- **Xếp chữ có nút gợi ý:** mỗi lần bấm mở thêm một chữ cái đúng (và tự trả lại những ô đã
  đặt sai). Đổi lại, từ nào dùng gợi ý thì không được tính là đã nhớ và sẽ quay lại sớm.
- **Lặp ngắt quãng (SM-2 rút gọn):** từ sai quay lại ngay, từ đúng giãn dần 1→3→7→16→35 ngày.
- **Lộ trình + tiến độ:** vòng tròn phần trăm mỗi chặng, chuỗi ngày học, biểu đồ 14 ngày,
  lịch ôn 7 ngày tới. Tất cả lưu trong localStorage, có nút xuất/nhập để chuyển máy.
- **Lời chúc dễ thương sau mỗi bài:** mỗi lần xong một bài là một tranh và một câu chúc
  khác nhau, giọng điệu đổi theo số câu đúng — làm tốt thì được khen, làm chưa tốt thì
  được động viên.
- **23 huy hiệu mốc:** buổi học đầu tiên, chuỗi 3/7/14/30 ngày, thuộc 10/25/50/100/250/tất cả
  từ, 100/500/1000 lượt ôn, xong từng chặng… Mở khoá là hiện lớp chúc mừng có mưa cánh hoa;
  xem lại cả tủ ở màn **Tiến độ**.
- **Giao diện hồng pastel:** toàn bộ 23 nhân vật minh hoạ là SVG viết tay trong `art.js`,
  không tải ảnh từ mạng nên vẫn hiện đủ khi offline.
- **Cài được như app (PWA):** thêm vào màn hình chính, mở toàn màn hình, chạy offline.

## Nguồn dữ liệu

Google Scholar chặn truy cập tự động, nên hồ sơ được lấy từ bản lưu Wayback Machine
(2023-12-09) để xác định danh tính, sau đó danh mục bài báo lấy qua **API OpenAlex**:

- 30 bài của GS. Kawasaki (nhiều trích dẫn nhất)
- 20 bài cùng chủ đề từ 6 topic chính của ông (flood risk, hydrology & watershed,
  hydrology & drought, disaster management, cyclones, water resources management)

Corpus nằm ở `corpus/corpus.json`. Từ vựng được chọn tay từ bảng tần suất do
`tools/extract_terms.py` in ra; nghĩa tiếng Việt do người viết, câu ví dụ do máy trích.

7/520 từ là thuật ngữ lõi của ngành nhưng không xuất hiện trong 261 abstract này
(embankment, overflow, threshold…) — chúng không có câu ví dụ và app ghi rõ điều đó.

## Triển khai lên GitHub Pages

> **Đọc kỹ:** thư mục này đang nằm trong một git repo có gốc là **thư mục home**
> (`/Users/<user>`). **Đừng push repo đó** — nó chứa `.ssh/`, `.aws/`, `.netrc`.
> Các lệnh dưới đây tạo một repo **riêng**, chỉ chứa app.

```bash
cd english-app
bash tools/serve_check.sh          # kiểm tra như GitHub Pages phục vụ thật

git init -b main
git add .
git commit -m "ESP Trainer"
gh repo create english-app --public --source=. --push
```

Rồi bật Pages: **Settings → Pages → Source: GitHub Actions**. Workflow
`.github/workflows/pages.yml` sẽ chạy kiểm tra rồi deploy mỗi lần push lên `main`.
Link có dạng `https://<tài-khoản>.github.io/english-app/`.

Không dùng `gh` thì tạo repo trên web rồi:
`git remote add origin https://github.com/<tài-khoản>/english-app.git && git push -u origin main`.

**Ba thứ tuyệt đối không được vi phạm** (đã có bộ kiểm tra tự bắt, xem `CLAUDE.md` mục 1.7):
đường dẫn phải tương đối, không file nào bắt đầu bằng `_`, và phải giữ `.nojekyll`.

Sau khi deploy, kiểm phần offline bằng tay: mở trên điện thoại → bật chế độ máy bay →
tải lại. App phải vẫn chạy.

## Cấu trúc & quy trình

Xem `CLAUDE.md` — tiêu chuẩn code, hợp đồng dữ liệu, hợp đồng game, quy trình kiểm tra.

```
python3 tools/fetch_corpus.py    # quét lại corpus từ OpenAlex
python3 tools/extract_terms.py   # bảng ứng viên thuật ngữ theo tần suất
python3 tools/build_vocab.py     # seed + corpus -> data/vocab.js
python3 tools/make_icons.py      # sinh lại icon PWA
bash    tools/run_checks.sh      # BẮT BUỘC chạy trước khi coi là xong
bash    tools/serve_check.sh     # thêm bước này khi đụng tới deploy
```

Sửa từ vựng ở `data/vocab.seed.json` rồi chạy `build_vocab.py`.
**Không bao giờ sửa tay `data/vocab.js`.**
