"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Trang chủ", href: "/#hero" },
  { label: "Sản phẩm", href: "/#san-pham" },
  { label: "Về chúng tôi", href: "/#thien-nhien" },
  { label: "Lợi ích", href: "/#loi-ich" },
  { label: "Cách dùng", href: "/#cach-dung" },
  { label: "Câu hỏi", href: "/#cau-hoi-thuong-gap" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="/#hero"
          className={`font-display text-2xl tracking-tight ${
            scrolled ? "text-forest-800" : "text-ivory-50"
          }`}
        >
          Đác Tươi
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-base transition-colors hover:text-forest-500 ${
                  scrolled ? "text-forest-700" : "text-ivory-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:0378259987"
          className={`hidden rounded-organic-sm px-4 py-2.5 text-center font-body text-base font-medium leading-tight transition-transform hover:-translate-y-0.5 md:inline-flex md:flex-col md:items-center ${
            scrolled
              ? "bg-forest-700 text-ivory-50"
              : "bg-ivory-50 text-forest-800"
          }`}
        >
          <span>Đặt hàng</span>
          <span className="text-sm">0378 259 987</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            } ${scrolled || open ? "bg-forest-800" : "bg-ivory-50"}`}
          />
          <span
            className={`h-0.5 w-6 rounded transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            } ${scrolled ? "bg-forest-800" : "bg-ivory-50"}`}
          />
          <span
            className={`h-0.5 w-6 rounded transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            } ${scrolled || open ? "bg-forest-800" : "bg-ivory-50"}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass mx-4 mb-4 rounded-organic border border-forest-100 px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-base text-forest-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:0378259987"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex flex-col items-center rounded-organic-sm bg-forest-700 px-5 py-3 text-center font-body text-base font-medium leading-tight text-ivory-50"
                >
                  <span>Đặt hàng</span>
                  <span className="text-sm">0378 259 987</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
