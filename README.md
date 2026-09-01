# ESP Trainer — Tiếng Anh chuyên ngành Thủy văn & Giảm nhẹ thiên tai

Web app học từ vựng tiếng Anh chuyên ngành, dựng cho người chuẩn bị theo học
**GS. Akiyuki Kawasaki** (Department of Civil Engineering, The University of Tokyo).

**Mở nhanh:** nhấp đúp `index.html`. Không cần cài gì, không cần server, không cần mạng.

**Dùng trên điện thoại:** deploy lên GitHub Pages (bên dưới) rồi mở link, chọn "Thêm vào
màn hình chính". App cài được như app thật và **chạy offline** sau lần mở đầu tiên.

## Có gì trong này

- **530 từ / cụm từ** chia 6 chặng: Thủy văn · Lũ lụt · Khí hậu · Thiên tai & Xã hội ·
  GIS-Viễn thám · Tiếng Anh học thuật.
- **523 từ có câu ví dụ thật** trích thẳng từ abstract của 261 bài báo, kèm tên bài nguồn.
- **8 kiểu chơi:** lật thẻ, trắc nghiệm, dịch ngược, nghe từ, xếp chữ, điền vào câu thật,
  nối cặp, chớp nhoáng 45 giây. Chế độ "Học ngay" tự trộn nhiều game trong một phiên.
- **Danh sách từ lọc theo trạng thái:** Tất cả · Cần ôn · Đang học · Đã thuộc · Chưa học,
  mỗi từ có nhãn trạng thái và ngày ôn kế tiếp. Bấm thẳng từ ô thống kê ở trang chủ.
- **Sai là hiện đáp án ngay:** bảng sửa sai có từ, nghĩa, định nghĩa tiếng Anh và câu ví dụ
  thật; người học tự bấm "Tiếp tục" nên không bị cuốn đi khi chưa kịp đọc.
- **Lặp ngắt quãng (SM-2 rút gọn):** từ sai quay lại ngay, từ đúng giãn dần 1→3→7→16→35 ngày.
- **Lộ trình + tiến độ:** vòng tròn phần trăm mỗi chặng, chuỗi ngày học, biểu đồ 14 ngày,
  lịch ôn 7 ngày tới. Tất cả lưu trong localStorage, có nút xuất/nhập để chuyển máy.
- **Cài được như app (PWA):** thêm vào màn hình chính, mở toàn màn hình, chạy offline.

## Nguồn dữ liệu

Google Scholar chặn truy cập tự động, nên hồ sơ được lấy từ bản lưu Wayback Machine
(2023-12-09) để xác định danh tính, sau đó danh mục bài báo lấy qua **API OpenAlex**:

- 30 bài của GS. Kawasaki (nhiều trích dẫn nhất)
- 20 bài cùng chủ đề từ 6 topic chính của ông (flood risk, hydrology & watershed,
  hydrology & drought, disaster management, cyclones, water resources management)

Corpus nằm ở `corpus/corpus.json`. Từ vựng được chọn tay từ bảng tần suất do
`tools/extract_terms.py` in ra; nghĩa tiếng Việt do người viết, câu ví dụ do máy trích.

7/530 từ là thuật ngữ lõi của ngành nhưng không xuất hiện trong 261 abstract này
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
