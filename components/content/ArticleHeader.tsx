import Breadcrumbs, { Crumb } from "./Breadcrumbs";

type ArticleHeaderProps = {
  kicker: string;
  title: string;
  intro: string;
  breadcrumb: Crumb[];
};

export default function ArticleHeader({ kicker, title, intro, breadcrumb }: ArticleHeaderProps) {
  return (
    <header className="bg-forest-50 pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Breadcrumbs items={breadcrumb} />
        <p className="mt-6 font-body text-sm font-semibold uppercase tracking-wide text-forest-500">
          {kicker}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-forest-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 font-body text-lg leading-relaxed text-forest-700/90">{intro}</p>
      </div>
    </header>
  );
}
