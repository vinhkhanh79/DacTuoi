import Image from "next/image";
import Blob from "./decor/Blob";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    icon: "🌱",
    title: "Tự nhiên",
    text: "Nguyên liệu thu hoạch từ cây đác trong tự nhiên.",
  },
  {
    icon: "💧",
    title: "Tươi ngon",
    text: "Sơ chế và bảo quản đúng cách ngay trong ngày.",
  },
  {
    icon: "🥥",
    title: "Thanh mát",
    text: "Giòn dai, vị thanh tự nhiên, không gắt.",
  },
];

export default function StoryFromNature() {
  return (
    <section id="thien-nhien" className="relative overflow-hidden bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-2 md:items-center md:px-8">
        <ScrollReveal className="relative order-2 md:order-1">
          <Blob className="absolute -left-10 -top-10 h-72 w-72 opacity-70" color="#E3EBD8" />
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-organic shadow-card">
            <Image
              src="/images/nature/cay-dac-buong-doc.jpg"
              alt="Cây đác với buồng trái trong tự nhiên"
              fill
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ivory-50/85 px-3 py-1 font-body text-xs text-forest-700">
              Cây đác trong tự nhiên
            </span>
          </div>
        </ScrollReveal>

        <div className="order-1 md:order-2">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
              Từ thiên nhiên đến bàn ăn
            </h2>
            <p className="mt-5 max-w-md font-body text-forest-700/90">
              Hạt đác được thu hoạch từ tự nhiên, sơ chế cẩn thận để giữ được độ tươi,
              giòn và vị thanh đặc trưng — không qua tẩy trắng, không chất bảo quản.{" "}
              <a
                href="/hat-dac-tuoi-la-gi"
                className="font-medium text-forest-800 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                Tìm hiểu hạt đác tươi là gì
              </a>
              .
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.1 * (i + 1)}>
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-display text-lg text-forest-900">{f.title}</h3>
                <p className="mt-1 font-body text-sm text-forest-700/80">{f.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
