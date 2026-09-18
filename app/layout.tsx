import type { Metadata } from "next";
import "./globals.css";

const fraunces = { variable: "--font-fraunces" };

const beVietnam = { variable: "--font-be-vietnam" };

const SITE_URL = "https://hatdac.shop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hạt Đác Tươi | Mua hạt đác tươi ngon, giao tận nơi",
    template: "%s | Đác Tươi",
  },
  description:
    "Hạt đác tươi nguyên chất, giòn dai tự nhiên, không chất bảo quản. Đặt hạt đác tươi ngon hôm nay, giao tận nơi tại TPHCM nhanh chóng.",
  keywords: [
    "hạt đác tươi",
    "hạt đác",
    "hạt đác tươi ngon",
    "mua hạt đác tươi",
    "hạt đác tươi giá bao nhiêu",
    "hạt đác rim",
  ],
  openGraph: {
    title: "Hạt Đác Tươi | Tinh túy từ thiên nhiên",
    description:
      "Hạt đác tươi nguyên chất, giòn dai tự nhiên, không chất bảo quản. Đặt hàng ngay hôm nay.",
    url: SITE_URL,
    siteName: "Đác Tươi",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Hạt đác tươi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hạt Đác Tươi | Tinh túy từ thiên nhiên",
    description: "Hạt đác tươi nguyên chất, giòn dai tự nhiên, không chất bảo quản.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Đác Tươi",
      url: SITE_URL,
      inLanguage: "vi-VN",
    },
    {
      "@type": "LocalBusiness",
      name: "Đác Tươi",
      description: "Cửa hàng chuyên cung cấp hạt đác tươi nguyên chất.",
      image: `${SITE_URL}/images/og-cover.jpg`,
      telephone: "+84378259987",
      priceRange: "50.000₫–55.000₫ / kg",
      areaServed: {
        "@type": "City",
        name: "Thành phố Hồ Chí Minh",
      },
      address: {
        "@type": "PostalAddress",
        // Từ 1/7/2025, TP.HCM đã bỏ cấp Quận/Huyện — Phường Tân Chánh Hiệp và
        // Trung Mỹ Tây (Quận 12 cũ) đã sáp nhập thành phường Trung Mỹ Tây,
        // trực thuộc thẳng TP. Hồ Chí Minh. Địa chỉ dưới đây phản ánh đơn vị
        // hành chính hiện hành; vui lòng đối chiếu lại với hồ sơ Google
        // Business Profile thật trước khi public.
        streetAddress: "Công viên phần mềm Quang Trung (QTSC)",
        addressLocality: "Phường Trung Mỹ Tây",
        addressRegion: "Thành phố Hồ Chí Minh",
        addressCountry: "VN",
      },
      url: SITE_URL,
    },
    {
      "@type": "Product",
      name: "Hạt đác tươi",
      description: "Hạt đác tươi nguyên chất, giòn dai tự nhiên, không chất bảo quản.",
      brand: {
        "@type": "Brand",
        name: "Đác Tươi",
      },
      image: [
        `${SITE_URL}/images/product/macro-hat-dac.jpg`,
        `${SITE_URL}/images/product/hat-dac-tren-tay.jpg`,
      ],
      url: `${SITE_URL}/#san-pham`,
      offers: [
        {
          "@type": "Offer",
          name: "Hạt đác tươi — size trung",
          priceCurrency: "VND",
          price: "50000",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#san-pham`,
        },
        {
          "@type": "Offer",
          name: "Hạt đác tươi — size lớn",
          priceCurrency: "VND",
          price: "55000",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#san-pham`,
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${fraunces.variable} ${beVietnam.variable}`}>
      <body className="font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
