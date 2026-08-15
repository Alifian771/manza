"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#172019] py-32 text-white md:py-44">

      {/* Background effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[url('/images/mountain-winter.jpg')] bg-cover bg-center opacity-20"
      />

      <div className="absolute inset-0 bg-[#172019]/80" />


      <div className="container-premium relative z-10 text-center">


        <motion.p
          initial={{
            opacity:0,
            y:20
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.8
          }}
          className="
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-[#d0aa60]
          "
        >
          Your Mountain Escape
        </motion.p>



        <motion.h2
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:1,
            delay:0.2
          }}
          className="
          mx-auto
          mt-8
          max-w-4xl
          text-5xl
          leading-[0.95]
          md:text-8xl
          "
        >
          Reserve your
          <br />

          <span className="italic">
            stay above the clouds.
          </span>

        </motion.h2>



<Link href="/booking">

<motion.button
  initial={{
    opacity:0,
    y:20
  }}
  whileInView={{
    opacity:1,
    y:0
  }}
  className="
  group
  mt-12
  border
  border-white/40
  px-10
  py-5
  text-[10px]
  font-bold
  uppercase
  tracking-[0.3em]
  transition-all
  duration-500
  hover:border-[#d0aa60]
  hover:bg-[#d0aa60]
  "
>

Book Your Stay

<span className="ml-4">
→
</span>

</motion.button>

</Link>

      </div>

    </section>
  );
}