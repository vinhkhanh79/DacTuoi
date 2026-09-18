import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Cách Chọn Hạt Đác Tươi Ngon, Không Bị Chua",
  description:
    "Mẹo nhận biết hạt đác tươi ngon qua màu sắc, mùi và độ giòn, giúp bạn tránh mua nhầm hạt đác cũ hoặc kém chất lượng.",
  alternates: { canonical: "/cach-chon-hat-dac-tuoi-ngon" },
  openGraph: {
    title: "Cách Chọn Hạt Đác Tươi Ngon, Không Bị Chua | Đác Tươi",
    description: "Mẹo nhận biết hạt đác tươi ngon qua màu sắc, mùi và độ giòn.",
    url: "/cach-chon-hat-dac-tuoi-ngon",
    type: "article",
  },
};

export default function CachChonHatDacTuoiNgonPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Mẹo chọn hạt đác"
        title="Cách chọn hạt đác tươi ngon"
        intro="Không phải mẻ hạt đác nào cũng đạt độ ngon như nhau. Vài mẹo nhỏ dưới đây giúp bạn nhận biết hạt đác tươi, tránh chọn nhầm hạt đã để lâu hoặc kém chất lượng."
        breadcrumb={[{ name: "Cách chọn hạt đác tươi ngon", href: "/cach-chon-hat-dac-tuoi-ngon" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Quan sát màu sắc</h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác tươi ngon thường có màu trắng trong hoặc trắng ngà tự nhiên. Nếu hạt ngả
              vàng đậm, xỉn màu hoặc có đốm lạ, khả năng cao hạt đã để lâu hoặc bảo quản không
              đúng cách.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Ngửi mùi</h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác tươi có mùi thơm nhẹ, thanh mát đặc trưng. Nếu ngửi thấy mùi chua, mùi lạ
              hoặc nồng bất thường, đó là dấu hiệu hạt không còn tươi và không nên dùng.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Kiểm tra độ giòn</h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác ngon khi cắn nhẹ sẽ giòn, dai vừa phải, không bị bở nát hay quá cứng. Hạt để
              lâu thường mềm nhũn hoặc mất độ giòn tự nhiên.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Chọn nơi bán uy tín, sơ chế trong ngày
            </h2>
            <p className="mt-4 leading-relaxed">
              Ngoài quan sát bằng mắt, nên ưu tiên chọn mua ở những nơi sơ chế hạt đác trong ngày,
              không tẩy trắng và không dùng chất bảo quản — đây cũng là tiêu chí hạt đác tươi tại{" "}
              <a
                href="/#san-pham"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                Đác Tươi
              </a>{" "}
              đang áp dụng. Sau khi mua về, xem thêm{" "}
              <a
                href="/cach-bao-quan-hat-dac-tuoi"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                cách bảo quản hạt đác tươi
              </a>{" "}
              để giữ được độ giòn lâu nhất.
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
