"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MountainExperience() {
  return (
    <section 
    id="experience"
    className="bg-[#f7f4ed] py-32 overflow-hidden">

      <div className="container-premium">


        {/* HEADER */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{
            duration:1
          }}
          className="max-w-4xl"
        >

          <motion.div
            initial={{width:0}}
            whileInView={{width:50}}
            viewport={{once:true}}
            transition={{duration:1}}
            className="h-px bg-[#b69150]"
          />


          <p className="mt-6 text-xs tracking-[0.45em] uppercase text-[#b69150]">
            The Manza Experience
          </p>


          <h2 className="
            mt-8
            text-6xl
            leading-[0.95]
            md:text-8xl
          ">

            Where mountains
            <br/>

            <span className="italic">
              meet tranquility.
            </span>

          </h2>


        </motion.div>




        {/* IMAGE */}

        <motion.div

          initial={{
            opacity:0,
            y:80
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true,
            margin:"-100px"
          }}

          transition={{
            duration:1.2
          }}

          className="
            relative
            mx-auto
            mt-24
            h-[55vh]
            max-w-6xl
            overflow-hidden
            md:h-[70vh]
          "

        >


          <motion.div

            initial={{
              scale:1.15
            }}

            whileInView={{
              scale:1
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:2
            }}

            className="absolute inset-0"

          >

            <Image

              src="/images/mountain-winter.jpg"

              alt="Manza winter mountain"

              fill

              className="object-cover"

            />

          </motion.div>



          <div className="
            absolute
            inset-0
            bg-black/10
          "/>



          {/* Overlay Text */}

          <motion.div

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
              delay:.5,
              duration:1
            }}

            className="
              absolute
              bottom-10
              left-10
              text-white
              md:left-16
              md:bottom-16
            "

          >

            <p className="
              text-xs
              tracking-[0.4em]
              uppercase
            ">

              Gunma, Japan

            </p>


            <h3 className="
              mt-4
              text-4xl
              md:text-6xl
            ">

              1800 meters
              <br/>
              above sea level

            </h3>


          </motion.div>


        </motion.div>





        {/* DESCRIPTION */}

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
            delay:.2,
            duration:1
          }}

          className="
            mt-20
            grid
            gap-10
            md:grid-cols-2
          "

        >

          <p className="
            text-xs
            tracking-[0.4em]
            text-[#b69150]
          ">

            1800 METERS ABOVE SEA LEVEL

          </p>



          <p className="
            leading-8
            text-gray-600
          ">

            Located high in the mountains of Gunma,
            Manza offers a rare escape surrounded by
            pristine landscapes, fresh alpine air,
            and timeless Japanese hospitality.

          </p>


        </motion.div>


      </div>

    </section>
  );
}