"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#172019] text-white">

    <motion.div
      className="absolute inset-0"
      animate={{
        scale: [1, 1.04, 1],
        x: [0, -8, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={image}
        alt={eyebrow}
        fill
        priority
        className="object-cover"
      />

    <motion.div
  className="absolute inset-0 bg-black/45"
  animate={{
    opacity: [0.42, 0.5, 0.42],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
    </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[85vh] items-end">

        <div className="container-premium w-full pb-20 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">

              <span className="h-px w-10 bg-[#d0aa60]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d0aa60]">
                {eyebrow}
              </p>

            </div>

            {/* Title */}
            <motion.h1
            initial={{
                opacity: 0,
                y: 35,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(4rem,9vw,9rem)] leading-[0.86] tracking-[-0.04em]"
            >
            {title}
            </motion.h1>

            {/* Description */}
            <motion.p
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 max-w-xl text-sm leading-7 text-white/75 md:text-base md:leading-8"
            >
            {description}
            </motion.p>
          </motion.div>

          <motion.div
              className="mt-16 flex items-center gap-4"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/70">
                Scroll
              </span>

              <motion.span
                className="h-8 w-px bg-white/50"
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

        </div>

      </div>

    </section>
  );
}