import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export const PRODUCTS = [
  {
    id: "size-trung",
    name: "Hạt đác tươi — size trung",
    tagline: "Giòn dai · vừa miệng",
    price: "50.000đ / kg",
    badge: "Bán chạy",
    image: "/images/product/macro-hat-dac.jpg",
    alt: "Hạt đác tươi size trung, cận cảnh",
  },
  {
    id: "size-lon",
    name: "Hạt đác tươi — size lớn",
    tagline: "Hạt to · chọn lọc kỹ",
    price: "55.000đ / kg",
    badge: "Cao cấp",
    image: "/images/product/hat-dac-tren-tay.jpg",
    alt: "Hạt đác tươi size lớn trong tô",
  },
];

export default function Products() {
  return (
    <section id="san-pham" className="bg-forest-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="max-w-lg">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Chọn hạt đác tươi cho hôm nay
          </h2>
          <p className="mt-4 font-body text-forest-700/90">
            Hai loại hạt để bạn chọn theo sở thích — đều được hái và sơ chế trong ngày.{" "}
            <a
              href="/hat-dac-tuoi-gia-bao-nhieu"
              className="font-medium text-forest-800 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
            >
              Xem chi tiết giá hạt đác tươi
            </a>
            .
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.id} delay={0.1 * i}>
              <article className="group relative overflow-hidden rounded-organic bg-ivory-50 p-6 shadow-card transition-transform duration-300 hover:-translate-y-2 md:p-8">
                <span className="absolute right-6 top-6 z-10 rounded-full bg-gold-400/90 px-3 py-1 font-body text-xs font-medium text-forest-900">
                  {p.badge}
                </span>

                <div className="relative aspect-[4/3] overflow-hidden rounded-organic-sm">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 640px) 320px, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl text-forest-900">{p.name}</h3>
                <p className="mt-1 font-body text-sm text-forest-700/80">{p.tagline}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-display text-2xl text-forest-800">{p.price}</span>
                  <a
                    href="#dat-hang"
                    className="rounded-organic-sm bg-forest-700 px-5 py-2.5 font-body text-sm font-medium text-ivory-50 transition-colors hover:bg-forest-800"
                  >
                    Đặt hàng
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
