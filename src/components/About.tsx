const highlights = [
  { icon: "🌿", title: "Fresh, Local Ingredients", text: "Sourced daily from Karachi's best markets for authentic flavour." },
  { icon: "🔥", title: "Charcoal-Fired BBQ", text: "Traditional clay tandoors & charcoal grills for that smoky taste." },
  { icon: "👨‍🍳", title: "Experienced Chefs", text: "Decades of combined experience in authentic Pakistani cuisine." },
  { icon: "🧼", title: "Hygienic Kitchen", text: "Certified food-safety standards you can trust, every single visit." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-4 border-amber-400/70 sm:-left-6 sm:-top-6" />
          <img
            src="/images/about-chef.jpg"
            alt="Chef preparing authentic Pakistani BBQ in Karachi"
            className="relative z-10 h-[420px] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-4 z-20 rounded-2xl bg-emerald-700 px-6 py-4 text-white shadow-xl sm:-right-8">
            <p className="font-serif text-3xl font-bold text-amber-300">15+</p>
            <p className="text-sm">Years Serving Karachi</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            A Taste of Karachi's Streets, Since 2008
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            What started as a small family-run stall in Saddar has grown into one of Karachi's most loved dining
            spots. We blend time-honoured recipes passed down through generations with the warm hospitality
            Karachi is known for. Every karahi is hand-tossed, every kebab is hand-skewered, and every guest is
            treated like family.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:shadow-md">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
