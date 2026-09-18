"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Leaf from "./decor/Leaf";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest-800 md:min-h-screen"
    >
      {/*
        No hero video has been supplied yet. To enable one later, drop an MP4
        at /public/video/hero.mp4 then uncomment the <video> block below and
        remove the <Image> block.
      */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hạt đác tươi trong không gian thiên nhiên"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/55 to-forest-900/40" />
      {/*
      <motion.video
        style={{ y: bgY }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-forest-900/45" />
      */}

      <div className="absolute inset-0 opacity-25">
        <Leaf
          className="absolute -left-4 top-8 h-40 w-24 animate-sway md:h-64 md:w-40"
          color="#7FA65C"
        />
        <Leaf
          className="absolute right-0 top-1/3 h-48 w-28 rotate-[24deg] animate-sway md:h-72 md:w-44"
          color="#4A6B4A"
        />
        <Leaf
          className="absolute bottom-0 left-1/4 h-32 w-20 rotate-[160deg] animate-sway md:h-48 md:w-32"
          color="#345226"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-5 pt-24 md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass inline-flex items-center gap-2 rounded-full border border-ivory-100/20 px-4 py-2 font-body text-xs text-ivory-100 md:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          100% hạt đác tươi, hái trong ngày
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display text-5xl leading-[1.05] text-ivory-50 text-balance md:text-7xl"
        >
          Hạt đác tươi,
          <br />
          tinh túy từ thiên nhiên
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-md font-body text-base text-ivory-100/90 md:text-lg"
        >
          Giòn dai tự nhiên · tươi mỗi ngày · không chất bảo quản
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#dat-hang"
            className="rounded-organic-sm bg-gold-400 px-7 py-3.5 font-body text-sm font-semibold text-forest-900 shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Mua ngay
          </a>
          <a
            href="#san-pham"
            className="rounded-organic-sm border border-ivory-100/40 px-7 py-3.5 font-body text-sm font-medium text-ivory-50 transition-colors hover:bg-ivory-50/10"
          >
            Khám phá hạt đác
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
        className="pointer-events-none absolute -right-6 bottom-0 z-10 hidden w-[300px] md:block lg:w-[360px]"
      >
        <div className="animate-float overflow-hidden rounded-organic bg-ivory-50/95 p-3 shadow-soft">
          <div className="relative aspect-square overflow-hidden rounded-organic-sm">
            <Image
              src="/images/product/macro-hat-dac.jpg"
              alt="Hạt đác tươi cận cảnh"
              fill
              sizes="360px"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
