import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Hạt Đác Tươi Ăn Với Gì Ngon? Gợi Ý Kết Hợp",
  description:
    "Hạt đác tươi ăn với gì ngon? Gợi ý các cách kết hợp hạt đác với sữa chua, chè, trái cây và nước cốt dừa cho món giải nhiệt hằng ngày.",
  alternates: { canonical: "/hat-dac-tuoi-an-voi-gi" },
  openGraph: {
    title: "Hạt Đác Tươi Ăn Với Gì Ngon? Gợi Ý Kết Hợp | Đác Tươi",
    description: "Gợi ý các cách kết hợp hạt đác tươi với sữa chua, chè, trái cây, nước cốt dừa.",
    url: "/hat-dac-tuoi-an-voi-gi",
    type: "article",
  },
};

const PAIRINGS = [
  {
    title: "Hạt đác với sữa chua",
    text: "Trộn hạt đác tươi cùng sữa chua và thêm chút trái cây như chanh dây, xoài để tạo món tráng miệng thanh mát, ít ngọt.",
  },
  {
    title: "Hạt đác nấu chè",
    text: "Hạt đác rất hợp nấu chè cùng nước cốt dừa, đậu xanh hoặc hạt sen — món giải nhiệt quen thuộc trong những ngày nóng.",
  },
  {
    title: "Hạt đác rim cùng trái cây",
    text: "Rim hạt đác với đường phèn cùng dứa hoặc chanh dây để có món ăn vặt chua ngọt, thơm mùi trái cây tự nhiên.",
  },
  {
    title: "Hạt đác với nước cốt dừa, đá bào",
    text: "Cho hạt đác vào ly nước cốt dừa cùng đá bào, thêm chút siro hoặc trân châu để có ly giải khát mát lạnh ngày hè.",
  },
];

export default function HatDacTuoiAnVoiGiPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Gợi ý kết hợp"
        title="Hạt đác tươi ăn với gì ngon?"
        intro="Hạt đác tươi có vị thanh, giòn dai và khá 'dễ tính' khi kết hợp với nhiều nguyên liệu khác nhau. Dưới đây là vài gợi ý quen thuộc, dễ làm tại nhà."
        breadcrumb={[{ name: "Hạt đác tươi ăn với gì?", href: "/hat-dac-tuoi-an-voi-gi" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 font-body text-forest-800/90 md:px-8">
          <div className="space-y-8">
            {PAIRINGS.map((item) => (
              <section key={item.title}>
                <h2 className="font-display text-2xl text-forest-900 md:text-3xl">{item.title}</h2>
                <p className="mt-3 leading-relaxed">{item.text}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 border-t border-forest-100 pt-8">
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Xem thêm cách chế biến chi tiết
            </h2>
            <p className="mt-4 leading-relaxed">
              Muốn làm theo từng bước cụ thể, xem{" "}
              <a
                href="/cach-lam-hat-dac-rim-duong-phen"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                cách làm hạt đác rim đường phèn
              </a>{" "}
              hoặc tham khảo thêm hình ảnh các món tại mục{" "}
              <a
                href="/#cach-dung"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                gợi ý cách dùng hạt đác
              </a>{" "}
              trên trang chủ.
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
