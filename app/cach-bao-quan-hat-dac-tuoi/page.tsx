import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/content/ArticleHeader";
import ArticleCTA from "@/components/content/ArticleCTA";

export const metadata: Metadata = {
  title: "Cách Bảo Quản Hạt Đác Tươi Được Lâu, Không Mất Độ Giòn",
  description:
    "Hướng dẫn cách bảo quản hạt đác tươi trong tủ lạnh, ngăn đá hoặc ngâm nước để giữ được độ giòn lâu nhất, không cần chất bảo quản.",
  alternates: { canonical: "/cach-bao-quan-hat-dac-tuoi" },
  openGraph: {
    title: "Cách Bảo Quản Hạt Đác Tươi Được Lâu, Không Mất Độ Giòn | Đác Tươi",
    description: "Cách bảo quản hạt đác tươi trong tủ lạnh, ngăn đá hoặc ngâm nước.",
    url: "/cach-bao-quan-hat-dac-tuoi",
    type: "article",
  },
};

export default function CachBaoQuanHatDacTuoiPage() {
  return (
    <main>
      <Navbar />
      <ArticleHeader
        kicker="Mẹo bảo quản"
        title="Cách bảo quản hạt đác tươi được lâu"
        intro="Vì không dùng chất bảo quản, hạt đác tươi cần được cất giữ đúng cách để giữ được độ giòn và vị thanh mát lâu nhất có thể. Dưới đây là vài cách bảo quản đơn giản, dễ làm tại nhà."
        breadcrumb={[{ name: "Cách bảo quản hạt đác tươi", href: "/cach-bao-quan-hat-dac-tuoi" }]}
      />

      <article className="bg-ivory-50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-5 font-body text-forest-800/90 md:px-8">
          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Bảo quản trong ngăn mát hoặc ngăn đá tủ lạnh
            </h2>
            <p className="mt-4 leading-relaxed">
              Rửa hạt đác thật sạch cho hết nhớt, để ráo nước rồi cho vào hộp đậy kín. Nếu để
              ngăn mát, hạt đác thường giữ được độ ngon trong khoảng vài tuần; nếu cần trữ lâu hơn,
              có thể chuyển sang ngăn đá — cách này giúp kéo dài thời gian bảo quản hơn nhưng nên
              rã đông tự nhiên trước khi dùng để hạt không bị bở.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Bảo quản bằng cách ngâm nước
            </h2>
            <p className="mt-4 leading-relaxed">
              Với lượng dùng trong thời gian ngắn, bạn có thể ngâm hạt đác trong nước sạch hoặc
              nước muối loãng, để ở nhiệt độ thường hoặc ngăn mát. Cách này giúp hạt đác giữ được
              độ ẩm và giòn tự nhiên, nhưng nên thay nước mỗi ngày để tránh hạt bị chua hoặc có
              mùi lạ.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">
              Vài lưu ý khi bảo quản hạt đác tươi
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              <li>Luôn để hạt đác ráo nước trước khi cho vào hộp kín, tránh đọng nước gây nhớt.</li>
              <li>Không để hạt đác ở nhiệt độ phòng quá lâu, đặc biệt vào ngày nóng.</li>
              <li>Nếu thấy hạt đác có mùi chua, nhớt bất thường hoặc đổi màu, nên bỏ đi, không nên dùng.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest-900 md:text-3xl">Dùng ngay khi còn tươi ngon</h2>
            <p className="mt-4 leading-relaxed">
              Cách bảo quản tốt nhất vẫn là dùng trong thời gian ngắn sau khi mua. Tham khảo{" "}
              <a
                href="/cach-lam-hat-dac-rim-duong-phen"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                cách làm hạt đác rim đường phèn
              </a>{" "}
              hoặc xem{" "}
              <a
                href="/hat-dac-tuoi-an-voi-gi"
                className="font-medium text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-900"
              >
                hạt đác tươi ăn với gì ngon
              </a>{" "}
              để dùng hết hạt đác khi còn tươi mới nhất.
            </p>
          </section>
        </div>
      </article>

      <ArticleCTA />
      <Footer />
    </main>
  );
}
