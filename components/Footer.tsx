const NAV_LINKS = [
  { label: "Trang chủ", href: "/#hero" },
  { label: "Sản phẩm", href: "/#san-pham" },
  { label: "Về chúng tôi", href: "/#thien-nhien" },
  { label: "Vì sao chọn hạt đác", href: "/#loi-ich" },
  { label: "Cách dùng", href: "/#cach-dung" },
  { label: "Đặt hàng", href: "/#dat-hang" },
];

const ARTICLE_LINKS = [
  { label: "Hạt đác tươi là gì?", href: "/hat-dac-tuoi-la-gi" },
  { label: "Hạt đác tươi có tác dụng gì?", href: "/hat-dac-tuoi-co-tac-dung-gi" },
  { label: "Cách chọn hạt đác tươi ngon", href: "/cach-chon-hat-dac-tuoi-ngon" },
  { label: "Cách bảo quản hạt đác tươi", href: "/cach-bao-quan-hat-dac-tuoi" },
  { label: "Cách làm hạt đác rim đường phèn", href: "/cach-lam-hat-dac-rim-duong-phen" },
  { label: "Hạt đác tươi ăn với gì?", href: "/hat-dac-tuoi-an-voi-gi" },
  { label: "Hạt đác tươi giá bao nhiêu?", href: "/hat-dac-tuoi-gia-bao-nhieu" },
  { label: "Hạt đác tươi TPHCM", href: "/hat-dac-tuoi-tphcm" },
];

const CONTACT_LINKS = [
  { label: "0378 259 987", href: "tel:0378259987" },
  { label: "t.me/dactuoi", href: "https://t.me/dactuoi" },
  { label: "zalo.me/0378259987", href: "https://zalo.me/0378259987" },
];

const FOOTER_NOTES = [
  { label: "Liên hệ", href: "/#lien-he" },
  { label: "Chính sách giao hàng", href: "/#chinh-sach-giao-hang" },
  { label: "Hạt tươi sơ chế trong ngày", href: "/#thien-nhien" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 py-16 text-ivory-50 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr_1fr_0.9fr] md:px-8">
        <div>
          <a href="/#hero" className="font-display text-2xl text-ivory-50">
            Đác Tươi
          </a>
          <p className="mt-4 max-w-xs font-body text-base leading-relaxed text-ivory-100/75">
            Hạt đác tươi tự nhiên, thanh mát và dễ chế biến cho bữa ăn mỗi ngày.
          </p>
          <a
            href="/#dat-hang"
            className="mt-6 inline-block rounded-organic-sm bg-gold-400 px-5 py-3 font-body text-sm font-semibold text-forest-900 transition-colors hover:bg-gold-300"
          >
            Đặt hạt đác hôm nay
          </a>
        </div>

        {/*
          Đây là điều hướng phụ trong footer, không phải nội dung chính của
          trang — dùng <p> thay vì <h2> để không tạo thêm heading cấp 2 cạnh
          tranh với các H2 nội dung thật của trang (Sản phẩm, Vì sao chọn
          hạt đác...), giữ cấu trúc heading của trang rõ ràng cho Google.
        */}
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-gold-300">
            Khám phá
          </p>
          <ul className="mt-5 space-y-3 font-body text-base text-ivory-100/80">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-ivory-50">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-gold-300">
            Bài viết hạt đác
          </p>
          <ul className="mt-5 space-y-3 font-body text-base text-ivory-100/80">
            {ARTICLE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-ivory-50">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-gold-300">
            Liên hệ nhanh
          </p>
          <ul className="mt-5 space-y-3 font-body text-base text-ivory-100/80">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-ivory-50">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-ivory-100/60">
            Công viên phần mềm Quang Trung, Phường Trung Mỹ Tây, TP.HCM
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-ivory-50/10 px-5 pt-6 md:px-8">
        <div className="flex flex-col gap-3 font-body text-sm text-ivory-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Đác Tươi. Đã đăng ký bản quyền.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_NOTES.map((note) => (
              <li key={note.label}>
                <a href={note.href} className="transition-colors hover:text-ivory-50">
                  {note.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
