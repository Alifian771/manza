import PageHero from "@/components/PageHero";
import BackHome from "@/components/BackHome";

export default function DiningPage() {
  return (
    <main className="bg-[#f7f4ed]">
      <BackHome />
      
      <PageHero
        eyebrow="Seasonal Dining"
        title={
          <>
            Taste the
            <br />
            <span className="italic">
              seasons.
            </span>
          </>
        }
        description="Thoughtful Japanese dishes prepared with carefully selected ingredients and inspired by the changing seasons."
        image="/images/mountain-winter.jpg"
      />

      <section className="container-premium py-28 md:py-40">

        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#9d793c]">
              Japanese Cuisine
            </p>

            <h2 className="mt-7 text-5xl leading-[0.95] md:text-7xl">
              A taste of
              <br />
              <span className="italic">
                the mountain.
              </span>
            </h2>

          </div>

          <p className="leading-8 text-gray-600">
            From carefully prepared seasonal dishes to locally
            inspired ingredients, dining at Manza reflects the
            rhythm of the surrounding mountains.
          </p>

        </div>

      </section>

    </main>
  );
}