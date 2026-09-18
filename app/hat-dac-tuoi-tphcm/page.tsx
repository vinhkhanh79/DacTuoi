import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";
import { POLICIES } from "@/components/DeliveryPolicy";

export const metadata: Metadata = {
  title: "Hạt Đác Tươi TPHCM — Giao Tận Nơi Nhanh",
  description:
    "Mua hạt đác tươi tại TPHCM, giao tận nơi nội thành trong 1–2 ngày. Xem địa chỉ, số điện thoại đặt hàng và khu vực giao hàng.",
  alternates: { canonical: "/hat-dac-tuoi-tphcm" },
  openGraph: {
    title: "Hạt Đác Tươi TPHCM — Giao Tận Nơi Nhanh | Đác Tươi",
    description: "Mua hạt đác tươi tại TPHCM, giao tận nơi nội thành trong 1–2 ngày.",
    url: "/hat-dac-tuoi-tphcm",
    type: "article",
  },
};

export default function HatDacTuoiTphcmPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Hạt đác tươi tại TP. Hồ Chí Minh"
        title="Mua hạt đác tươi tại TPHCM, giao tận nơi"
        intro="Đác Tươi có địa chỉ tại Phường Trung Mỹ Tây, TP. Hồ Chí Minh, giao hạt đác tươi tận nơi trong nội thành và hỗ trợ giao đến các tỉnh thành khác theo thỏa thuận."
        breadcrumb={[{ name: "Hạt đác tươi TPHCM", href: "/hat-dac-tuoi-tphcm" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Khu vực và thời gian giao hàng
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {POLICIES.map((policy) => (
                <div
                  key={policy.title}
                  className="rounded-organic-sm border border-forest-100 bg-white/70 p-5"
                >
                  <h3 className="font-display text-lg text-forest-900">{policy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700/80">{policy.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Địa chỉ và liên hệ
            </h2>
            <dl className="mt-4 space-y-3 leading-relaxed">
              <div>
                <dt className="font-medium text-forest-500">Địa chỉ</dt>
                <dd>Công viên phần mềm Quang Trung, Phường Trung Mỹ Tây, TP. Hồ Chí Minh</dd>
              </div>
              <div>
                <dt className="font-medium text-forest-500">Điện thoại</dt>
                <dd>
                  <a href="tel:0378259987" className="hover:text-forest-900 hover:underline">
                    0378 259 987
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Đặt hạt đác tươi giao tại TPHCM
            </h2>
            <p className="mt-4 leading-relaxed">
              Xem{" "}
              <a
                href="/hat-dac-tuoi-gia-bao-nhieu"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                giá hạt đác tươi hiện tại
              </a>{" "}
              rồi đặt hàng qua{" "}
              <a
                href="/#dat-hang"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                form đặt hàng trên trang chủ
              </a>{" "}
              — đơn hàng sẽ được gọi xác nhận trước khi giao.
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
