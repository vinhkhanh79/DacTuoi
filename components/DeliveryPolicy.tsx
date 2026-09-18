import ScrollReveal from "./ScrollReveal";

export const POLICIES = [
  {
    title: "Phạm vi giao hàng",
    text: "Nhận giao tận nơi tại TP. Hồ Chí Minh và hỗ trợ các tỉnh thành khác theo thỏa thuận.",
  },
  {
    title: "Thời gian nhận hàng",
    text: "Đơn nội thành dự kiến đến trong 1–2 ngày. Khu vực khác sẽ được báo thời gian cụ thể khi xác nhận.",
  },
  {
    title: "Phí giao hàng",
    text: "Phí vận chuyển được thông báo trước khi chốt đơn, tùy địa chỉ và khối lượng hàng.",
  },
  {
    title: "Đảm bảo độ tươi",
    text: "Hạt đác được sơ chế trong ngày và đóng gói cẩn thận trước khi bàn giao cho đơn vị giao hàng.",
  },
];

export default function DeliveryPolicy() {
  return (
    <section id="chinh-sach-giao-hang" className="bg-forest-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="font-body text-sm font-semibold uppercase tracking-wide text-forest-500">
            Giao hàng rõ ràng
          </p>
          <h2 className="mt-3 font-display text-3xl text-forest-900 md:text-4xl">
            Chính sách giao hàng
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-forest-700/90">
            Chúng tôi sẽ gọi xác nhận đơn, địa chỉ, thời gian nhận và phí giao trước khi gửi hàng. Xem
            chi tiết{" "}
            <a
              href="/hat-dac-tuoi-tphcm"
              className="font-medium text-forest-800 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
            >
              giao hạt đác tươi tại TPHCM
            </a>
            .
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POLICIES.map((policy, index) => (
            <ScrollReveal key={policy.title} delay={0.06 * index}>
              <article className="h-full rounded-organic-sm border border-forest-100 bg-ivory-50 p-6 shadow-card/40">
                <span className="font-display text-2xl text-gold-400">0{index + 1}</span>
                <h3 className="mt-5 font-display text-xl text-forest-900">{policy.title}</h3>
                <p className="mt-2 font-body text-base leading-relaxed text-forest-700/80">
                  {policy.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-4 rounded-organic-sm border border-gold-300/70 bg-gold-300/20 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="font-body text-base text-forest-800">
              Cần hỏi nhanh về phí giao hàng hoặc khu vực nhận đơn?
            </p>
            <a
              href="tel:0378259987"
              className="inline-flex w-fit rounded-organic-sm bg-forest-700 px-5 py-3 font-body text-base font-semibold text-ivory-50 transition-colors hover:bg-forest-800"
            >
              Gọi 0378 259 987
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
