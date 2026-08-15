import PageHero from "@/components/PageHero";
import BackHome from "@/components/BackHome";
import Reveal from "@/components/Reveal";

export default function OnsenPage() {
  return (
    <main className="bg-[#f7f4ed]">
      <BackHome />
      <PageHero
        eyebrow="Natural Hot Spring"
        title={
          <>
            The healing
            <br />
            <span className="italic">
              power of water.
            </span>
          </>
        }
        description="Immerse yourself in Manza's famous sulfur hot springs, surrounded by mountains, fresh alpine air, and complete silence."
        image="/images/hero-day.jpg"
      />

<section className="bg-[#172019] py-28 text-white md:py-40">

  <div className="container-premium">

    <div className="grid gap-16 md:grid-cols-2">

      <Reveal>

        <h2 className="text-5xl leading-[0.95] md:text-7xl">
          Natural.
          <br />
          <span className="italic">
            Restorative.
          </span>
        </h2>

      </Reveal>

      <Reveal delay={0.15}>

        <div>

          <p className="leading-8 text-white/65">
            Rich in natural sulfur, Manza's hot spring
            waters have been enjoyed for generations.
            Step into the bath and let the surrounding
            landscape become part of the experience.
          </p>

          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-[#d0aa60]">
            Manza Onsen · Gunma · Japan
          </p>

        </div>

      </Reveal>

    </div>

  </div>

</section>

    </main>
  );
}