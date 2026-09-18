import ScrollReveal from "./ScrollReveal";
import { FAQ_ITEMS } from "@/lib/faq";

export default function FAQ() {
  return (
    <section id="cau-hoi-thuong-gap" className="bg-ivory-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl text-forest-900 md:text-4xl">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-4 font-body text-forest-700/90">
            Một số thắc mắc khách hàng hay hỏi về hạt đác tươi trước khi đặt hàng.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={item.question} delay={0.05 * i}>
              <details className="group rounded-organic-sm border border-forest-100 bg-white/70 p-5 open:border-forest-300">
                <summary className="cursor-pointer list-none font-display text-lg text-forest-900 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="shrink-0 text-forest-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-forest-700/85">
                  {item.answer}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
