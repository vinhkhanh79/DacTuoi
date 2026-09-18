"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryFull() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} className="relative flex min-h-[70vh] items-center overflow-hidden bg-forest-900">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/nature/cay-dac-buong-ngang.jpg"
          alt="Buồng trái đác trong vườn"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-forest-900/55" />

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center font-display text-3xl leading-snug text-ivory-50 md:text-5xl"
      >
        Đơn giản từ nguyên liệu,
        <br />
        trọn vẹn trong từng món ăn.
      </motion.p>
    </section>
  );
}
