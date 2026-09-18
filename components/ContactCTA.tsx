import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section id="lien-he" className="bg-forest-50 py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Bạn muốn thưởng thức hạt đác tươi hôm nay?
          </h2>
          <a
            href="#dat-hang"
            className="mt-8 inline-block rounded-organic-sm bg-forest-700 px-8 py-3.5 font-body text-[1.3rem] font-semibold text-ivory-50 shadow-card transition-transform hover:-translate-y-0.5"
          >
            Đặt hàng ngay
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <dl className="mx-auto mt-14 grid max-w-2xl gap-8 font-body text-[1.3rem] text-forest-700 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-forest-500">Điện thoại</dt>
              <dd className="mt-1">
                <a href="tel:0378259987" className="hover:text-forest-800">
                  0378 259 987
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-forest-500">Địa chỉ</dt>
              <dd className="mt-1">
                Công viên phần mềm Quang Trung, Phường Trung Mỹ Tây, TP.HCM
              </dd>
            </div>
            <div>
              <dt className="font-medium text-forest-500">Telegram</dt>
              <dd className="mt-1">
                {/* Thay bằng Telegram liên hệ khách hàng thật (không phải bot nhận đơn nội bộ) */}
                <a href="https://t.me/dactuoi" className="hover:text-forest-800">
                  t.me/dactuoi
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-forest-500">Zalo</dt>
              <dd className="mt-1">
                {/* Thay bằng link Zalo thật khi có */}
                <a href="https://zalo.me/0378259987" className="hover:text-forest-800">
                  zalo.me/0378259987
                </a>
              </dd>
            </div>
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
