"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "./HeroImage";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-day.jpg",
  },
  {
    image: "/images/hero-night.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
  }, 7000);

  return () => clearInterval(timer);
  }, []);
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[720px] h-[100svh] overflow-hidden bg-[#101711]"
    ><HeroImage />
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 -z-30"
      >
        <AnimatePresence mode="wait">



</AnimatePresence>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-black/35" />

      {/* Gradient supaya teks tetap terbaca */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,10,15,0.75)_0%,rgba(4,10,15,0.32)_58%,rgba(4,10,15,0.42)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Main content */}
      <div className="container-premium flex h-full items-center pt-[90px]">
        <div className="w-full max-w-[1050px] py-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7 flex items-center gap-4 md:mb-9"
          >
            <span className="h-px w-10 bg-[#d4ad62] md:w-12" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-white/90 sm:text-[10px] md:text-xs">
              A Japanese mountain retreat
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[1000px]
              text-[clamp(4rem,8.2vw,8rem)]
              font-normal
              leading-[0.9]
              tracking-[-0.035em]
              text-white
            "
          >
            <span className="block">Escape Above</span>

            <span className="block pt-2 italic sm:pl-[8vw] md:pt-3 lg:pl-32">
              The Clouds
            </span>
          </motion.h1>

          {/* Bottom content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-10
              grid
              max-w-[850px]
              gap-8
              md:mt-12
              md:grid-cols-[1fr_auto]
              md:items-end
              md:gap-12
            "
          >
            <p className="max-w-[530px] text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Leave the everyday behind and experience quiet mountain
              landscapes, restorative hot springs, and thoughtful Japanese
              hospitality.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="/booking"
                className="
                  inline-flex
                  min-h-14
                  min-w-[182px]
                  items-center
                  justify-center
                  bg-[#b9914b]
                  px-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#caa45e]
                "
              >
                Book your stay
              </a>

              <a
                href="#experience"
                className="
                  inline-flex
                  min-h-14
                  min-w-[182px]
                  items-center
                  justify-center
                  border
                  border-white/65
                  px-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-[#20231f]
                "
              >
                Discover Manza
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        aria-label="Scroll to experience section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          text-white
          md:flex
        "
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">
          Scroll
        </span>

        <span className="relative block h-10 w-px overflow-hidden bg-white/30">
          <motion.span
            animate={{ y: [0, 40] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 block h-4 w-px bg-white"
          />
        </span>
      </motion.a>
    </section>
  );
}