export default function ArticleCTA() {
  return (
    <section className="bg-forest-900 py-16 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="font-display text-2xl text-ivory-50 md:text-3xl">
            Sẵn sàng đặt hạt đác tươi?
          </h2>
          <p className="mt-2 max-w-md font-body text-ivory-100/80">
            Hái và sơ chế trong ngày, giao tận nơi tại TP. Hồ Chí Minh.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/#dat-hang"
            className="rounded-organic-sm bg-gold-400 px-6 py-3 font-body text-sm font-semibold text-forest-900 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Đặt hàng ngay
          </a>
          <a
            href="tel:0378259987"
            className="rounded-organic-sm border border-ivory-100/40 px-6 py-3 font-body text-sm font-medium text-ivory-50 transition-colors hover:bg-ivory-50/10"
          >
            Gọi 0378 259 987
          </a>
        </div>
      </div>
    </section>
  );
}
