import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Hạt Đác Tươi Là Gì? Đặc Điểm Và Nguồn Gốc",
  description:
    "Hạt đác tươi là gì, mọc từ cây nào, mùa nào ngon nhất và cách phân biệt với hạt thốt nốt — giải thích chi tiết, dễ hiểu.",
  alternates: { canonical: "/hat-dac-tuoi-la-gi" },
  openGraph: {
    title: "Hạt Đác Tươi Là Gì? Đặc Điểm Và Nguồn Gốc | Đác Tươi",
    description:
      "Hạt đác tươi là gì, mọc từ cây nào, mùa nào ngon nhất và cách phân biệt với hạt thốt nốt.",
    url: "/hat-dac-tuoi-la-gi",
    type: "article",
  },
};

export default function HatDacTuoiLaGiPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Tìm hiểu về hạt đác"
        title="Hạt đác tươi là gì?"
        intro="Hạt đác tươi là loại hạt quen thuộc trong các món giải nhiệt của người Việt, nhưng không phải ai cũng biết hạt đác mọc từ cây gì và vì sao lại có vị giòn dai đặc trưng như vậy."
        breadcrumb={[{ name: "Hạt đác tươi là gì?", href: "/hat-dac-tuoi-la-gi" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Hạt đác mọc từ cây gì?
            </h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác là hạt của cây đác (còn gọi là cây báng) — loài cây thân gỗ mọc tự nhiên,
              tập trung nhiều ở khu vực Nam Trung Bộ như Khánh Hòa, Phú Yên. Mỗi buồng đác cho ra
              nhiều quả nhỏ mọc thành chùm, tương tự buồng dừa; bên trong mỗi quả thường có
              khoảng 3–4 hạt màu trắng trong, đây chính là phần được thu hoạch để chế biến thành
              hạt đác tươi.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Mùa nào hạt đác tươi ngon nhất?
            </h2>
            <p className="mt-4 leading-relaxed">
              Đác thường được thu hoạch rộ vào khoảng tháng 4 đến tháng 6 hằng năm — đây là giai
              đoạn hạt đạt độ mềm, bùi và thơm ngon nhất. Nếu thu hoạch muộn hơn, hạt có xu hướng
              già và cứng hơn, ăn kém giòn.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Phân biệt hạt đác và hạt thốt nốt
            </h2>
            <p className="mt-4 leading-relaxed">
              Hai loại hạt này rất hay bị nhầm lẫn vì hình dáng khá giống nhau. Điểm khác biệt dễ
              nhận thấy nhất là hạt đác thường trong và giòn dai hơn, trong khi hạt thốt nốt (từ
              cây thốt nốt, phổ biến ở khu vực Nam Bộ và An Giang) có màu trắng đục ngả vàng, kết
              cấu mềm hơn. Nguồn gốc thực vật của hai loại cây này cũng khác nhau, nên hương vị và
              cách chế biến thường không hoàn toàn giống nhau.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Hạt đác tươi khác gì hạt đác khô, đóng hộp?
            </h2>
            <p className="mt-4 leading-relaxed">
              Hạt đác tươi được sơ chế ngay sau khi thu hoạch, không qua sấy khô hay đóng hộp bảo
              quản dài ngày, nên giữ được độ giòn tự nhiên và không cần dùng thêm chất bảo quản.
              Đổi lại, hạt đác tươi cần được dùng trong thời gian ngắn hơn và bảo quản lạnh đúng
              cách để giữ được độ ngon.
            </p>
            <p className="mt-4 leading-relaxed">
              Muốn biết hạt đác tươi mang lại lợi ích gì cho sức khỏe, bạn có thể xem thêm bài{" "}
              <a
                href="/hat-dac-tuoi-co-tac-dung-gi"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                hạt đác tươi có tác dụng gì
              </a>
              , cách{" "}
              <a
                href="/cach-chon-hat-dac-tuoi-ngon"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                chọn hạt đác tươi ngon
              </a>
              , hoặc tham khảo{" "}
              <a
                href="/#san-pham"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                các loại hạt đác tươi đang có tại Đác Tươi
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
