import ScrollReveal from "./ScrollReveal";

const STEPS = [
  { n: "01", title: "Chọn sản phẩm", text: "Chọn size trung hoặc size lớn theo nhu cầu." },
  { n: "02", title: "Điền thông tin", text: "Cho chúng tôi biết nơi gửi hạt đác tươi đến." },
  { n: "03", title: "Xác nhận đơn hàng", text: "Chúng tôi liên hệ lại để xác nhận trong ngày." },
  { n: "04", title: "Nhận hạt đác tươi", text: "Giao tận nơi, tươi nguyên khi đến tay bạn." },
];

export default function OrderProcess() {
  return (
    <section className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="max-w-lg">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Quy trình đặt hàng
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={0.08 * i} className="relative">
              <span className="font-display text-4xl text-forest-200">{s.n}</span>
              <h3 className="mt-3 font-display text-lg text-forest-900">{s.title}</h3>
              <p className="mt-1 font-body text-sm text-forest-700/80">{s.text}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-20px] top-3 hidden h-px w-10 bg-forest-200 lg:block" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
