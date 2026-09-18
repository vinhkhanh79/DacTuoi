# Hạt Đác Tươi — Website bán hàng

Website giới thiệu và đặt hàng hạt đác tươi, phong cách organic/tropical/premium.
Xây dựng bằng **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
có form đặt hàng gửi thông báo qua **Telegram Bot**, tối ưu để deploy trên **Cloudflare Pages**.

## 1. Cấu trúc dự án

```
app/
  layout.tsx        → metadata, SEO, font, JSON-LD (Product + LocalBusiness)
  page.tsx           → ghép các section lại thành trang chủ
  globals.css        → style nền, hỗ trợ prefers-reduced-motion
  sitemap.ts         → sitemap.xml tự sinh
  robots.ts          → robots.txt tự sinh
  api/order/route.ts → API nhận đơn hàng, validate, gửi Telegram (Edge Function)
components/          → từng section (Hero, Products, OrderForm, ...)
components/decor/    → SVG minh hoạ (lá, hạt đác, blob) — thay bằng ảnh thật khi có
lib/telegram.ts       → hàm build tin nhắn & gửi Telegram
.env.example          → mẫu biến môi trường (KHÔNG chứa giá trị thật)
```

## 2. Cài đặt & chạy thử ở máy local

```bash
npm install
cp .env.example .env.local
# Mở .env.local, điền TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID thật vào đó
npm run dev
```

Mở http://localhost:3000 để xem.

## 3. Tạo Telegram Bot (nếu chưa có)

1. Mở Telegram, tìm **@BotFather**, gõ `/newbot` và làm theo hướng dẫn để lấy **Bot Token**.
2. Nhắn thử một tin bất kỳ cho bot vừa tạo (hoặc thêm bot vào group/kênh bạn muốn nhận thông báo).
3. Lấy **Chat ID**:
   - Cách nhanh: mở `https://api.telegram.org/bot<TOKEN>/getUpdates` sau khi đã nhắn tin cho bot, tìm trường `"chat":{"id": ...}`.
4. Điền `TELEGRAM_BOT_TOKEN` và `TELEGRAM_CHAT_ID` vào `.env.local` (local) hoặc vào Cloudflare Pages (khi deploy — xem mục 5).

> ⚠️ Bot Token là dữ liệu **bí mật**. Không paste vào code, không commit lên Git, không gửi qua tin nhắn/chat công khai.
> Vì bot token đã được nêu trong cuộc trò chuyện với Claude, bạn nên vào lại **@BotFather → /revoke** để tạo token mới trước khi đưa website lên production, để đảm bảo an toàn tuyệt đối.

## 4. Chỉnh nội dung cho đúng thực tế

Các chỗ đang là **placeholder**, cần bạn cập nhật trước khi public:

| Nội dung | File | Ghi chú |
|---|---|---|
| Giá & tên sản phẩm | `components/Products.tsx` (mảng `PRODUCTS`) | Đang để "size trung" 50.000đ/kg, "size lớn" 55.000đ/kg theo thông tin bạn cung cấp — sửa nếu cách phân loại sản phẩm khác |
| Video nền Hero | `components/Hero.tsx` | Đã chừa sẵn khối `<motion.video>` được comment — bỏ comment và trỏ tới `/public/video/hero.mp4` khi có video |
| Số điện thoại, địa chỉ, Facebook, Telegram liên hệ khách hàng | `components/ContactCTA.tsx`, `app/layout.tsx` (JSON-LD) | Số điện thoại/địa chỉ đã điền theo thông tin bạn cung cấp; Facebook & Telegram liên hệ khách hàng vẫn là placeholder — **lưu ý:** đây nên là kênh Telegram công khai để khách chat, khác với bot nội bộ dùng để nhận thông báo đơn hàng |
| Domain | `app/layout.tsx` (`SITE_URL`), `app/sitemap.ts`, `app/robots.ts` | Đang set sẵn `hatdac.shop` |

### Ảnh đã chèn vào web

Các ảnh bạn gửi đã được tối ưu và đưa vào `public/images/`, dùng ở các vị trí sau:

| File | Dùng ở |
|---|---|
| `images/hero-bg.jpg` | Nền Hero (đầu trang) |
| `images/nature/cay-dac-buong-doc.jpg` | Section "Từ thiên nhiên đến bàn ăn" |
| `images/nature/cay-dac-buong-ngang.jpg` | Nền section story lớn "Đơn giản từ nguyên liệu..." |
| `images/product/macro-hat-dac.jpg` | Card sản phẩm "size trung" + ảnh nổi trong Hero |
| `images/product/hat-dac-tren-tay.jpg` | Card sản phẩm "size lớn" |
| `images/gallery/rim-dua.jpg` | Ô "Hạt đác rim dứa" trong gallery cách dùng |
| `images/gallery/che-hat-dac.jpg` | Ô "Chè hạt đác" trong gallery cách dùng |

4 ô còn lại trong gallery (rim đường phèn, sữa chua, rim chanh dây, trái cây hạt đác) chưa có ảnh khớp nội dung nên vẫn đang dùng khối màu gradient — thay bằng ảnh thật trong `components/UsageGallery.tsx` (thêm `image: "/images/..."` vào từng dòng trong mảng `DISHES`) khi có ảnh đúng món.

**Lưu ý về bản quyền ảnh:** một vài ảnh bạn gửi có tên file dạng bài viết/blog khác (ví dụ `hat-dac-co-tac-dung-gi.jpg`, `hat-dac-giup-tang-cuong-suc-de-khang.webp`), nhiều khả năng là ảnh minh hoạ lấy từ bài viết hoặc trang bán hàng khác chứ không phải ảnh chụp gốc của bạn. Trước khi public website chính thức, bạn nên xác nhận lại quyền sử dụng thương mại của các ảnh này, hoặc thay bằng ảnh tự chụp để tránh vi phạm bản quyền. Riêng ảnh `vn-11134207-...jpg` (đồ hoạ có sẵn chữ "HẠT ĐÁC TƯƠI 100% TỰ NHIÊN" và logo) là ảnh thiết kế/branding của một shop khác nên mình **không đưa vào web** — bạn có thể dùng nó làm cảm hứng bố cục nhưng không nên dùng nguyên bản.

## 5. Deploy lên Cloudflare Pages

### Cách 1 — Qua Dashboard (khuyên dùng, đơn giản nhất)

1. Đẩy code lên GitHub (repo riêng tư).
2. Vào **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**, chọn repo.
3. Cấu hình build:
   - **Framework preset:** Next.js
   - **Build command:** `npx @cloudflare/next-on-pages`
   - **Build output directory:** `.vercel/output/static`
4. Vào **Settings → Environment variables**, thêm:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   (thêm cho cả môi trường Production và Preview)
5. Deploy. Sau khi xong, vào **Custom domains** để gắn domain `hatdac.shop`.

### Cách 2 — Qua CLI (wrangler)

```bash
npm run deploy
```

Lệnh này chạy `@cloudflare/next-on-pages` để build rồi `wrangler pages deploy`.
Cần đăng nhập trước bằng `npx wrangler login`, và cấu hình biến môi trường
Telegram trong Cloudflare Dashboard như bước 4 ở trên (biến môi trường
production không truyền qua CLI).

## 6. Kiểm tra luồng hoạt động sau khi deploy

1. Vào website → cuộn tới phần "Đặt hạt đác tươi ngay hôm nay".
2. Điền đầy đủ thông tin hợp lệ → bấm "Gửi đơn hàng".
3. Kiểm tra: nút chuyển sang "Đang gửi...", sau đó hiện thông báo thành công.
4. Kiểm tra Telegram (chat/group đã cấu hình `TELEGRAM_CHAT_ID`) đã nhận được tin nhắn đơn hàng mới.
5. Thử gửi số điện thoại sai định dạng hoặc bỏ trống tên → xác nhận form báo lỗi và **không** gọi API.

## 7. Bảo mật đã áp dụng

- Bot Token & Chat ID chỉ tồn tại ở phía server (biến môi trường), không có trong bundle frontend.
- API `/api/order` validate dữ liệu ở cả client và server.
- Có trường honeypot ẩn (`company`) để chặn bot cơ bản.
- Có rate-limit tạm thời theo IP (best-effort, xem chú thích trong `app/api/order/route.ts`) —
  nếu cần chống spam mạnh hơn, nên thêm Cloudflare Turnstile vào form.

## 8. Việc còn cần bạn làm trước khi public chính thức

- [ ] Revoke & tạo lại Telegram Bot Token mới (vì token cũ đã được chia sẻ trong chat).
- [ ] Bổ sung ảnh/video thật (sản phẩm, cây đác, món ăn).
- [ ] Xác nhận lại cách chia loại/giá sản phẩm (size trung/lớn theo kg, hay theo gói 500g/1kg như ý tưởng ban đầu).
- [ ] Điền link Facebook và kênh Telegram liên hệ khách hàng thật.
- [ ] Gắn domain `hatdac.shop` trong Cloudflare Pages.
