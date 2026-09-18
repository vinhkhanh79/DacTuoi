import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";
import { PRODUCTS } from "@/components/Products";

export const metadata: Metadata = {
  title: "Hạt Đác Tươi Giá Bao Nhiêu? Bảng Giá Mới Nhất",
  description:
    "Giá hạt đác tươi hiện tại theo từng size, cách chọn size phù hợp và lưu ý khi đặt mua hạt đác tươi giao tận nơi.",
  alternates: { canonical: "/hat-dac-tuoi-gia-bao-nhieu" },
  openGraph: {
    title: "Hạt Đác Tươi Giá Bao Nhiêu? Bảng Giá Mới Nhất | Đác Tươi",
    description: "Giá hạt đác tươi hiện tại theo từng size, cách chọn size phù hợp.",
    url: "/hat-dac-tuoi-gia-bao-nhieu",
    type: "article",
  },
};

export default function HatDacTuoiGiaBaoNhieuPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Bảng giá hạt đác"
        title="Hạt đác tươi giá bao nhiêu?"
        intro="Giá hạt đác tươi thường thay đổi theo size hạt và thời điểm mùa vụ. Dưới đây là mức giá hiện tại tại Đác Tươi để bạn tham khảo trước khi đặt hàng."
        breadcrumb={[{ name: "Hạt đác tươi giá bao nhiêu?", href: "/hat-dac-tuoi-gia-bao-nhieu" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Bảng giá hạt đác tươi hiện tại
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="overflow-hidden rounded-organic border border-forest-100 bg-white/70 shadow-card"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 640px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-forest-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-forest-700/80">{p.tagline}</p>
                    <p className="mt-3 font-display text-xl text-forest-800">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-forest-700/70">
              Giá có thể thay đổi theo thời điểm và mùa vụ. Gọi{" "}
              <a href="tel:0378259987" className="font-medium text-forest-800 hover:underline">
                0378 259 987
              </a>{" "}
              hoặc điền form đặt hàng để được báo giá chính xác nhất tại thời điểm đặt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Vì sao có 2 mức giá khác nhau?
            </h2>
            <p className="mt-4 leading-relaxed">
              Sự chênh lệch giá chủ yếu đến từ kích thước hạt: size lớn được tuyển chọn kỹ hơn,
              hạt to và đều hơn size trung. Cả hai loại đều được hái và sơ chế trong ngày, không
              chất bảo quản.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Đặt hạt đác tươi như thế nào?
            </h2>
            <p className="mt-4 leading-relaxed">
              Bạn có thể đặt hàng trực tiếp qua{" "}
              <a
                href="/#dat-hang"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                form đặt hàng trên trang chủ
              </a>{" "}
              hoặc xem thêm{" "}
              <a
                href="/hat-dac-tuoi-tphcm"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                khu vực và thời gian giao hàng tại TPHCM
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
