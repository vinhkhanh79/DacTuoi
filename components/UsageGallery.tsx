import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Dish = {
  name: string;
  span: string;
  image?: string;
  from?: string;
  to?: string;
};

const DISHES: Dish[] = [
  {
    name: "Hạt đác rim dứa",
    span: "row-span-2",
    image: "/images/gallery/rim-dua.jpg",
  },
  {
    name: "Chè hạt đác",
    span: "",
    image: "/images/gallery/che-hat-dac.jpg",
  },
  {
    name: "Hạt đác rim đường phèn",
    span: "",
    image: "/images/gallery/cach-lam-hat-dac-rim-duong.webp",
  },
  {
    name: "Sữa chua hạt đác",
    span: "",
    image: "/images/gallery/sua-chua-hat-dac-6.jpg",
  },
  // 2 ô dưới đây tạm quay lại dùng khối màu gradient thay vì ảnh: ảnh cũ
  // (vn-11134207-...jpg và cach-lam-sua-chua-hat-dac.jpg) không rõ nguồn gốc
  // thật, một ảnh trong đó README của dự án đã tự cảnh báo là ảnh
  // thiết kế/thương hiệu của shop khác. Thay bằng ảnh tự chụp khi có.
  {
    name: "Hạt đác rim chanh dây",
    span: "",
    from: "from-gold-300",
    to: "to-forest-300",
  },
  {
    name: "Trái cây hạt đác",
    span: "",
    from: "from-forest-200",
    to: "to-gold-400",
  },
];

export default function UsageGallery() {
  return (
    <section id="cach-dung" className="bg-forest-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="max-w-lg">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Gợi ý cách dùng
          </h2>
          <p className="mt-4 font-body text-forest-700/90">
            Hạt đác tươi kết hợp được với rất nhiều món quen thuộc trong bếp Việt. Xem{" "}
            <a
              href="/cach-lam-hat-dac-rim-duong-phen"
              className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
            >
              cách làm hạt đác rim đường phèn
            </a>{" "}
            chi tiết từng bước.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid auto-rows-[160px] gap-4 sm:grid-cols-3">
          {DISHES.map((d, i) => (
            <ScrollReveal
              key={d.name}
              delay={0.05 * i}
              className={`group relative overflow-hidden rounded-organic-sm ${d.span}`}
            >
              {d.image ? (
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div
                  className={`h-full w-full bg-gradient-to-br ${d.from} ${d.to} transition-transform duration-500 group-hover:scale-110`}
                />
              )}
              {/* Remaining tiles use a color placeholder until real photos of those dishes are available — see README */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <span className="absolute bottom-3 left-4 font-body text-sm font-medium text-ivory-50">
                {d.name}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
