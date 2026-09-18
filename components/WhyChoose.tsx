import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  { icon: "🌿", title: "Tự nhiên", text: "Không chất bảo quản, không tẩy trắng." },
  { icon: "🥥", title: "Giòn dai", text: "Kết cấu đặc trưng, ăn là mê." },
  { icon: "💧", title: "Thanh mát", text: "Vị thanh nhẹ, không gắt." },
  { icon: "🍃", title: "Dễ chế biến", text: "Rim, nấu chè, ăn cùng sữa chua đều hợp." },
  { icon: "🍓", title: "Kết hợp linh hoạt", text: "Hoà quyện tốt với trái cây, siro." },
  { icon: "📦", title: "Đóng gói cẩn thận", text: "Giữ tươi trong suốt quá trình vận chuyển." },
];

export default function WhyChoose() {
  return (
    <section id="loi-ich" className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="max-w-lg">
          <h2 className="font-display text-[2rem] text-forest-900 md:text-[2.375rem]">
            Vì sao chọn hạt đác?
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <ScrollReveal key={b.title} delay={0.06 * i}>
              <div className="h-full rounded-organic-sm border border-forest-100 bg-white/60 p-6 transition-colors hover:border-forest-300">
                <div className="text-2xl">{b.icon}</div>
                <h3 className="mt-3 font-display text-[1.1875rem] text-forest-900">{b.title}</h3>
                <p className="mt-1 font-body text-[0.9375rem] text-forest-700/80">{b.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
