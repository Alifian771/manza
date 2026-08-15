"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/hero-day.jpg",
    title: "Natural Hot Spring",
    category: "Onsen",
  },
  {
    src: "/images/mountain-winter.jpg",
    title: "Winter Mountain",
    category: "Nature",
  },
  {
    src: "/images/hero-night.jpg",
    title: "Quiet Evening",
    category: "Atmosphere",
  },
  {
    src: "/images/mountain-winter.jpg",
    title: "Mountain Retreat",
    category: "Landscape",
  },
  {
    src: "/images/hero-day.jpg",
    title: "A Moment of Stillness",
    category: "Onsen",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelected(index);
  };

  const closeImage = () => {
    setSelected(null);
  };

  const nextImage = () => {
    if (selected === null) return;

    setSelected((selected + 1) % images.length);
  };

  const previousImage = () => {
    if (selected === null) return;

    setSelected(
      selected === 0 ? images.length - 1 : selected - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selected === null) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow =
      selected !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <main className="min-h-screen bg-[#f7f4ed] text-[#20231f]">

        {/* =========================
            HEADER
        ========================== */}

        <section className="px-5 pb-20 pt-36 md:px-10 md:pb-28 md:pt-48">

          <div className="container-premium">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl"
            >

              <div className="mb-7 flex items-center gap-4">

                <span className="h-px w-10 bg-[#b69150]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9d793c]">
                  Manza Onsen
                </p>

              </div>

              <h1 className="text-[clamp(4rem,8vw,8rem)] leading-[0.88] tracking-[-0.035em]">

                A visual journey

                <span className="block pl-[8vw] italic">
                  through Manza.
                </span>

              </h1>

              <p className="mt-10 max-w-xl text-sm leading-7 text-[#6e716b] md:text-base md:leading-8">
                Discover the landscapes, quiet moments, and timeless
                atmosphere that define a stay in the mountains of Manza.
              </p>

            </motion.div>

          </div>

        </section>


        {/* =========================
            GALLERY
        ========================== */}

        <section className="px-5 pb-32 md:px-10 md:pb-44">

          <div className="container-premium">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">


              {/* MAIN IMAGE */}

              <GalleryImage
                image={images[0]}
                index={0}
                onClick={openImage}
                className="h-[65vh] md:col-span-8 md:h-[760px]"
              />


              {/* SIDE IMAGE */}

              <GalleryImage
                image={images[1]}
                index={1}
                onClick={openImage}
                className="h-[420px] md:col-span-4 md:h-[500px]"
              />


              {/* TEXT BLOCK */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex min-h-[300px] flex-col justify-end bg-[#172019] p-8 text-white md:col-span-4 md:p-10"
              >

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d0aa60]">
                  The spirit of Manza
                </p>

                <h2 className="mt-6 text-4xl leading-[1] md:text-5xl">
                  Moments worth
                  <span className="block italic">
                    remembering.
                  </span>
                </h2>

              </motion.div>


              {/* WIDE IMAGE */}

              <GalleryImage
                image={images[2]}
                index={2}
                onClick={openImage}
                className="h-[420px] md:col-span-8 md:h-[520px]"
              />


              {/* SMALL IMAGES */}

              <GalleryImage
                image={images[3]}
                index={3}
                onClick={openImage}
                className="h-[420px] md:col-span-5 md:h-[560px]"
              />

              <GalleryImage
                image={images[4]}
                index={4}
                onClick={openImage}
                className="h-[420px] md:col-span-7 md:h-[560px]"
              />

            </div>

          </div>

        </section>


        {/* =========================
            FOOTER CTA
        ========================== */}

        <section className="border-t border-black/10 bg-[#f7f4ed] px-5 py-28 md:px-10 md:py-36">

          <div className="container-premium text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9d793c]">
              Experience Manza
            </p>

            <h2 className="mx-auto mt-7 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              Some places are better
              <span className="block italic">
                experienced in person.
              </span>
            </h2>

            <a
              href="/"
              className="mt-10 inline-flex min-h-14 items-center justify-center bg-[#172019] px-9 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b69150]"
            >
              Explore Manza
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          LIGHTBOX
      ========================== */}

      <AnimatePresence>

        {selected !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101410]/95 p-5 md:p-12"
            onClick={closeImage}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeImage}
              className="absolute right-5 top-5 z-20 flex size-12 items-center justify-center border border-white/20 text-white transition hover:bg-white hover:text-black md:right-10 md:top-10"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>


            {/* PREVIOUS */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-4 z-20 flex size-12 items-center justify-center border border-white/20 text-white transition hover:bg-white hover:text-black md:left-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>


            {/* IMAGE */}

            <motion.div
              key={images[selected].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >

              <Image
                src={images[selected].src}
                alt={images[selected].title}
                fill
                sizes="90vw"
                className="object-contain"
              />

            </motion.div>


            {/* NEXT */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-20 flex size-12 items-center justify-center border border-white/20 text-white transition hover:bg-white hover:text-black md:right-10"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>


            {/* CAPTION */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white md:bottom-10">

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/50">
                {images[selected].category}
              </p>

              <p className="mt-2 font-[var(--font-heading)] text-2xl">
                {images[selected].title}
              </p>

              <p className="mt-2 text-[10px] tracking-[0.25em] text-white/40">
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}


/* =================================
   GALLERY IMAGE COMPONENT
================================= */

function GalleryImage({
  image,
  index,
  onClick,
  className,
}: {
  image: {
    src: string;
    title: string;
    category: string;
  };
  index: number;
  onClick: (index: number) => void;
  className: string;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
      }}
      onClick={() => onClick(index)}
      className={`group relative overflow-hidden text-left ${className}`}
    >

      <Image
        src={image.src}
        alt={image.title}
        fill
        sizes="(max-width: 768px) 100vw, 70vw"
        className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />


      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />


      {/* Hover indicator */}

      <div className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/50 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">

        <span className="text-lg font-light">
          +
        </span>

      </div>


      {/* Caption */}

      <div className="absolute bottom-7 left-7 text-white">

        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
          {image.category}
        </p>

        <p className="mt-2 font-[var(--font-heading)] text-2xl">
          {image.title}
        </p>

      </div>

    </motion.button>
  );
}