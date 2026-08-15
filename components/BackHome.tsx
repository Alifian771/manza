"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackHome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="absolute left-6 top-28 z-40 md:left-10 md:top-32"
    >
      <Link
        href="/"
        className="
          group
          flex
          items-center
          gap-3
          text-[10px]
          font-bold
          uppercase
          tracking-[0.3em]
          text-[#20231f]
          transition-colors
          duration-300
          hover:text-[#b69150]
        "
      >
        <ArrowLeft
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        <span>Back to Manza</span>
      </Link>
    </motion.div>
  );
}