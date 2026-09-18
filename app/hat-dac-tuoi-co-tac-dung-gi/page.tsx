import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Hạt Đác Tươi Có Tác Dụng Gì? Bao Nhiêu Calo?",
  description:
    "Hạt đác tươi bao nhiêu calo, có những thành phần dinh dưỡng gì và ai nên cân nhắc khi ăn — tổng hợp dễ hiểu, chỉ mang tính tham khảo.",
  alternates: { canonical: "/hat-dac-tuoi-co-tac-dung-gi" },
  openGraph: {
    title: "Hạt Đác Tươi Có Tác Dụng Gì? Bao Nhiêu Calo? | Đác Tươi",
    description:
      "Hạt đác tươi bao nhiêu calo, có những thành phần dinh dưỡng gì và ai nên cân nhắc khi ăn.",
    url: "/hat-dac-tuoi-co-tac-dung-gi",
    type: "article",
  },
};

export default function HatDacTuoiCoTacDungGiPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Dinh dưỡng hạt đác"
        title="Hạt đác tươi có tác dụng gì?"
        intro="Hạt đác tươi được nhiều người chọn làm món ăn vặt giải nhiệt vì ít calo và giòn mát. Dưới đây là những thông tin dinh dưỡng cơ bản để bạn tham khảo trước khi thêm hạt đác vào thực đơn."
        breadcrumb={[{ name: "Hạt đác tươi có tác dụng gì?", href: "/hat-dac-tuoi-co-tac-dung-gi" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Hạt đác tươi bao nhiêu calo?
            </h2>
            <p className="mt-4 leading-relaxed">
              Theo các tổng hợp dinh dưỡng phổ biến, trong khoảng 100g hạt đác tươi có xấp xỉ 27
              calo — mức năng lượng khá thấp so với nhiều loại hạt khác. Bên cạnh đó, hạt đác còn
              chứa một lượng nhỏ chất xơ, canxi và magie tự nhiên.
            </p>
            <div className="mt-6 overflow-x-auto rounded-organic-sm border border-forest-100">
              <table className="w-full text-left text-sm">
                <thead className="bg-forest-50 text-forest-700">
                  <tr>
                    <th className="px-4 py-3 font-medium">Thành phần (ước tính / 100g)</th>
                    <th className="px-4 py-3 font-medium">Giá trị tham khảo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-100">
                  <tr>
                    <td className="px-4 py-3">Năng lượng</td>
                    <td className="px-4 py-3">~27 calo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Carbohydrate</td>
                    <td className="px-4 py-3">~6 g</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Chất xơ</td>
                    <td className="px-4 py-3">~1,6 g</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Canxi</td>
                    <td className="px-4 py-3">~243 mg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Magie</td>
                    <td className="px-4 py-3">~91 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-forest-700/70">
              * Số liệu mang tính tham khảo, có thể chênh lệch tuỳ nguồn gốc và cách sơ chế hạt
              đác thực tế.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Vì sao nhiều người chọn hạt đác tươi?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              <li>Ít calo, phù hợp làm món ăn vặt giải nhiệt thay vì đồ ngọt nhiều đường.</li>
              <li>Có vị thanh, giòn dai tự nhiên, dễ kết hợp với nhiều món tráng miệng.</li>
              <li>Bổ sung thêm canxi và magie tự nhiên vào khẩu phần ăn hằng ngày.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Ai nên cân nhắc khi ăn hạt đác?
            </h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác tươi thường được xem là món ăn nhẹ lành tính, tuy nhiên nếu bạn đang theo
              chế độ ăn kiểm soát đường huyết hoặc có bệnh lý cần chú ý khẩu phần tinh bột/đường tự
              nhiên, nên hỏi ý kiến bác sĩ hoặc chuyên gia dinh dưỡng về lượng dùng phù hợp thay vì
              tự áp dụng theo thông tin chung trên mạng.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Dùng hạt đác tươi như thế nào?
            </h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác tươi có thể ăn trực tiếp, nấu chè, làm sữa chua hạt đác hoặc rim cùng đường
              phèn, trái cây. Xem{" "}
              <a
                href="/cach-lam-hat-dac-rim-duong-phen"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                cách làm hạt đác rim đường phèn
              </a>
              , cách{" "}
              <a
                href="/cach-bao-quan-hat-dac-tuoi"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                bảo quản hạt đác tươi
              </a>{" "}
              hoặc thêm ý tưởng khác tại mục{" "}
              <a
                href="/#cach-dung"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                gợi ý cách dùng hạt đác
              </a>
              .
            </p>
          </section>

          <p className="border-t border-forest-100 pt-6 text-sm text-forest-700/60">
            Thông tin dinh dưỡng trong bài chỉ mang tính chất tham khảo chung, không thay thế cho
            tư vấn y tế hoặc dinh dưỡng chuyên môn.
          </p>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
