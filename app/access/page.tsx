import PageHero from "@/components/PageHero";
import BackHome from "@/components/BackHome";

export default function AccessPage() {
  return (
    <main className="bg-[#f7f4ed]">
      <BackHome />

      
      <PageHero
        eyebrow="Access"
        title={
          <>
            Find your way
            <br />
            <span className="italic">
              to Manza.
            </span>
          </>
        }
        description="Journey into the mountains of Gunma and discover a retreat far from the noise of everyday life."
        image="/images/mountain-winter.jpg"
      />

      <section className="container-premium py-28 md:py-40">

        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9d793c]">
              From Tokyo
            </p>

            <h2 className="mt-5 text-3xl">
              Approx. 3 hours
            </h2>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9d793c]">
              Location
            </p>

            <h2 className="mt-5 text-3xl">
              Gunma, Japan
            </h2>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9d793c]">
              Destination
            </p>

            <h2 className="mt-5 text-3xl">
              Manza Onsen
            </h2>
          </div>

        </div>

      </section>

    </main>
  );
}