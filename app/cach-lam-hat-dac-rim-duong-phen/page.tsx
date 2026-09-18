import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Cách Làm Hạt Đác Rim Đường Phèn Tại Nhà",
  description:
    "Hướng dẫn cách làm hạt đác rim đường phèn giòn ngon, thơm mùi lá dứa — công thức đơn giản, làm tại nhà chỉ với vài nguyên liệu quen thuộc.",
  alternates: { canonical: "/cach-lam-hat-dac-rim-duong-phen" },
  openGraph: {
    title: "Cách Làm Hạt Đác Rim Đường Phèn Tại Nhà | Đác Tươi",
    description: "Hướng dẫn cách làm hạt đác rim đường phèn giòn ngon, thơm mùi lá dứa.",
    url: "/cach-lam-hat-dac-rim-duong-phen",
    type: "article",
  },
};

const STEPS = [
  {
    name: "Sơ chế hạt đác tươi",
    text: "Rửa sạch hạt đác tươi nhiều lần với nước để hết nhớt, để ráo.",
  },
  {
    name: "Nấu nước đường phèn",
    text: "Đun đường phèn với nước theo tỷ lệ vừa ăn cùng vài lá dứa đã rửa sạch, khuấy đều đến khi đường tan hết.",
  },
  {
    name: "Rim hạt đác",
    text: "Cho hạt đác đã sơ chế vào nồi nước đường, rim ở lửa nhỏ, thỉnh thoảng đảo nhẹ đến khi nước đường sánh lại và bám đều vào hạt đác.",
  },
  {
    name: "Để nguội và bảo quản",
    text: "Tắt bếp, để hạt đác rim nguội hoàn toàn rồi cho vào hộp kín, bảo quản ngăn mát tủ lạnh, dùng dần trong vài ngày.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cách làm hạt đác rim đường phèn",
  description:
    "Hướng dẫn từng bước làm hạt đác rim đường phèn giòn ngon, thơm mùi lá dứa tại nhà.",
  step: STEPS.map((step) => ({
    "@type": "HowToStep",
    name: step.name,
    text: step.text,
  })),
};

export default function CachLamHatDacRimDuongPhenPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Công thức hạt đác rim"
        title="Cách làm hạt đác rim đường phèn"
        intro="Hạt đác rim đường phèn là món giải nhiệt quen thuộc, cách làm khá đơn giản và không mất nhiều thời gian. Dưới đây là công thức cơ bản bạn có thể làm ngay tại nhà."
        breadcrumb={[
          { name: "Cách làm hạt đác rim đường phèn", href: "/cach-lam-hat-dac-rim-duong-phen" },
        ]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 font-body text-forest-800/90 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-organic shadow-card">
            <Image
              src="/images/gallery/cach-lam-hat-dac-rim-duong.webp"
              alt="Hạt đác rim đường phèn thành phẩm"
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Nguyên liệu</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              <li>Hạt đác tươi</li>
              <li>Đường phèn</li>
              <li>Lá dứa (lá nếp)</li>
              <li>Nước lọc</li>
            </ul>
            <p className="mt-3 text-sm text-forest-700/70">
              Lượng nguyên liệu tuỳ khẩu phần và độ ngọt mong muốn — có thể gia giảm cho phù hợp
              khẩu vị gia đình.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Các bước thực hiện</h2>
            <ol className="mt-4 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.name} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-100 font-display text-forest-800">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-forest-900">{step.name}</h3>
                    <p className="mt-1 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Biến tấu khác</h2>
            <p className="mt-4 leading-relaxed">
              Ngoài rim đường phèn, hạt đác tươi còn hợp để rim cùng dứa, chanh dây hoặc kết hợp
              với sữa chua. Xem thêm{" "}
              <a
                href="/hat-dac-tuoi-an-voi-gi"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                gợi ý hạt đác tươi ăn với gì ngon
              </a>{" "}
              hoặc mục{" "}
              <a
                href="/#cach-dung"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                gợi ý cách dùng hạt đác
              </a>
              .
            </p>
            <p className="mt-4 leading-relaxed">
              Cần mua hạt đác tươi sơ chế sẵn để rim ngay? Xem{" "}
              <a
                href="/hat-dac-tuoi-gia-bao-nhieu"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                giá hạt đác tươi hiện tại
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </main>
  );
}
