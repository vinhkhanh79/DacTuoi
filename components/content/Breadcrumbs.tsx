const SITE_URL = "https://hatdac.shop";

export type Crumb = {
  name: string;
  href: string;
};

/**
 * Hiển thị breadcrumb + gắn BreadcrumbList Schema tương ứng.
 * `items` không bao gồm "Trang chủ" — component tự thêm vào đầu.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const fullTrail: Crumb[] = [{ name: "Trang chủ", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullTrail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="font-body text-sm text-forest-700/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullTrail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === fullTrail.length - 1 ? (
                <span className="text-forest-800" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <a href={crumb.href} className="hover:text-forest-900 hover:underline">
                  {crumb.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
