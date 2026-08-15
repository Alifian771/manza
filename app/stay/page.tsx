"use client";

import PageHero from "@/components/PageHero";
import BackHome from "@/components/BackHome";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const rooms = [
  {
    number: "01",
    title: "Japanese Suite",
    description:
      "A peaceful Japanese-style room designed around warmth, simplicity, and the surrounding mountain landscape.",
    image: "/images/room-01.jpg",
    detail: "Japanese Style · Mountain View",
  },
  {
    number: "02",
    title: "Mountain Retreat",
    description:
      "Wake up to quiet mountain scenery and settle into an interior inspired by the natural surroundings of Manza.",
    image: "/images/room-02.jpg",
    detail: "Mountain View · Private Space",
  },
  {
    number: "03",
    title: "Manza Residence",
    description:
      "A spacious retreat for a slower stay, combining traditional Japanese atmosphere with modern comfort.",
    image: "/images/room-03.jpg",
    detail: "Spacious · Premium Stay",
  },
];

export default function StayPage() {
  return (
    <main className="bg-[#f7f4ed] text-[#20231f]">

      <BackHome />

      {/* HERO */}

      <PageHero
        eyebrow="Stay at Manza"
        title={
          <>
            Rooms above
            <br />
            <span className="italic">the clouds.</span>
          </>
        }
        description="Quiet rooms, warm interiors, and expansive mountain views create a place to slow down and stay awhile."
        image="/images/mountain-winter.jpg"
      />


      {/* INTRO */}

      <section className="px-5 py-28 md:px-10 md:py-40">

        <div className="container-premium">

          <Reveal>

            <div className="grid gap-12 md:grid-cols-2 md:items-end">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9d793c]">
                  Room Collection
                </p>

                <h2 className="mt-7 text-5xl leading-[0.95] md:text-7xl">
                  A quiet place
                  <br />
                  <span className="italic">
                    to stay.
                  </span>
                </h2>

              </div>

              <p className="max-w-md leading-8 text-[#6e716b]">
                Each room is designed to make the most of Manza's
                mountain setting. Natural materials, calm interiors,
                and thoughtful details create a place to rest after
                a day in the mountains.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* ROOMS */}

      <section className="px-5 pb-32 md:px-10 md:pb-48">

        <div className="container-premium">

          <div className="space-y-32 md:space-y-48">

            {rooms.map((room, index) => (

              <motion.article
                key={room.number}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid gap-10 md:grid-cols-12 md:items-center"
              >

                {/* IMAGE */}

                <div
                  className={`
                    relative
                    h-[65vh]
                    overflow-hidden
                    md:h-[720px]
                    ${
                      index % 2 === 0
                        ? "md:col-span-8"
                        : "md:col-span-8 md:col-start-5"
                    }
                  `}
                >

                  <motion.div
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >

                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-cover transition duration-1000 hover:scale-[1.04]"
                    />

                  </motion.div>


                  {/* IMAGE NUMBER */}

                  <div className="absolute left-7 top-7 text-white">

                    <p className="text-[10px] font-bold tracking-[0.35em]">
                      ROOM {room.number}
                    </p>

                  </div>

                </div>


                {/* TEXT */}

                <div
                  className={`
                    md:col-span-4
                    ${
                      index % 2 === 0
                        ? "md:col-start-9"
                        : "md:col-start-1 md:row-start-1"
                    }
                  `}
                >

                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#9d793c]">
                    {room.detail}
                  </p>

                  <h3 className="mt-6 text-4xl leading-none md:text-5xl">
                    {room.title}
                  </h3>

                  <p className="mt-7 leading-8 text-[#6e716b]">
                    {room.description}
                  </p>

                  <button
                    className="
                      group
                      mt-8
                      flex
                      items-center
                      gap-4
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                    "
                  >

                    Discover Room

                    <span className="h-px w-8 bg-[#20231f] transition-all duration-500 group-hover:w-14" />

                  </button>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#172019] px-5 py-32 text-white md:px-10 md:py-44">

        <div className="container-premium text-center">

          <Reveal>

            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d0aa60]">
              Your stay awaits
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              Make the mountains
              <br />
              <span className="italic">
                your destination.
              </span>
            </h2>

            <button
              className="
                mt-12
                border
                border-white/30
                px-9
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                transition-all
                duration-500
                hover:border-[#b69150]
                hover:bg-[#b69150]
              "
            >
              Book Your Stay
            </button>

          </Reveal>

        </div>

      </section>

    </main>
  );
}