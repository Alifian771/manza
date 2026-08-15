import { Mountain, Soup, Waves } from "lucide-react";

const experiences = [
  {
    number: "01",
    icon: Mountain,
    title: "Mountain Sanctuary",
    description:
      "A quiet retreat where changing seasons, fresh mountain air, and sweeping landscapes set the pace.",
  },
  {
    number: "02",
    icon: Waves,
    title: "Restorative Onsen",
    description:
      "Slow down and reconnect in soothing hot spring baths surrounded by the calm of nature.",
  },
  {
    number: "03",
    icon: Soup,
    title: "Seasonal Cuisine",
    description:
      "Thoughtful Japanese dishes inspired by the season and prepared with carefully selected ingredients.",
  },
];

export default function Features() {
  return (
    <section
      id="dining"
      className="bg-[#f7f4ed] py-24 text-[#20231f] md:py-32 lg:py-40"
    >
      <div className="container-premium">
        <div className="grid gap-10 border-b border-black/15 pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b69150]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#9d793c]">
                The Manza experience
              </p>
            </div>

            <h2 className="max-w-[760px] text-5xl font-normal leading-[0.94] tracking-[-0.025em] sm:text-6xl lg:text-7xl">
              A place shaped by
              <span className="block italic">nature and stillness.</span>
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="text-sm leading-7 text-[#6e716b] sm:text-base sm:leading-8">
              Manza is an invitation to pause. Spend your days between quiet
              rooms, warm baths, mountain views, and meals made for the season.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative py-12 md:min-h-[390px] md:px-8 md:py-14 lg:px-12 ${
                  index !== experiences.length - 1
                    ? "border-b border-black/15 md:border-r md:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold tracking-[0.28em] text-[#9d793c]">
                    {item.number}
                  </span>

                  <Icon
                    strokeWidth={1.3}
                    className="size-9 text-[#b69150] transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </div>

                <div className="mt-20 md:mt-28">
                  <h3 className="text-3xl font-normal leading-none sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-[350px] text-sm leading-7 text-[#6e716b]">
                    {item.description}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#b69150] transition-all duration-500 group-hover:w-full md:left-8 lg:left-12" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}