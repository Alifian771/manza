"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HotSpring() {
  return (
    <section
      id="onsen"
      className="bg-[#172019] py-32 text-white overflow-hidden"
    >

      <div className="container-premium">


        {/* Title */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:1
          }}

          className="mb-20"
        >

          <p className="
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#d1aa5b]
          ">
            Natural Hot Spring
          </p>


          <h2 className="
            mt-8
            text-6xl
            leading-none
            md:text-8xl
          ">

            The healing
            <br/>

            <span className="italic">
              power of water.
            </span>

          </h2>


        </motion.div>





        {/* Image + Text */}

        <div className="
          grid
          gap-12
          lg:grid-cols-12
          lg:items-center
        ">


          {/* Image */}

          <motion.div

            initial={{
              opacity:0,
              x:-80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:1
            }}

            className="
              relative
              h-[550px]
              lg:col-span-7
            "
          >

            <Image

              src="/images/hero-day.jpg"

              alt="Manza Onsen"

              fill

              className="
                object-cover
              "

            />


            <div className="
              absolute
              inset-0
              bg-black/20
            "/>


          </motion.div>




          {/* Text */}

          <motion.div

            initial={{
              opacity:0,
              x:80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:1
            }}

            className="
              lg:col-span-4
              lg:col-start-9
            "

          >


            <p className="
              leading-8
              text-white/70
            ">

              Surrounded by volcanic mountains,
              Manza's famous sulfur hot springs
              offer a peaceful retreat where body
              and mind can reconnect with nature.

            </p>



            <button
              className="
                mt-10
                border
                border-white/40
                px-8
                py-4
                text-xs
                tracking-[0.25em]
                uppercase
                transition
                hover:bg-white
                hover:text-black
              "
            >

              Explore Onsen

            </button>


          </motion.div>



        </div>


      </div>


    </section>
  );
}