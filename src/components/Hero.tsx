export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-24 text-center text-white">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300">
          <span>📍</span> Karachi's Favourite Desi Restaurant Since 2008
        </div>
        <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Authentic Pakistani Flavours, <br className="hidden sm:block" />
          Served with <span className="text-amber-400">Love</span> in Karachi
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          From sizzling karahi to smoky charcoal BBQ and aromatic Sindhi biryani — experience the true taste of
          Karachi, crafted fresh every single day.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/40 transition hover:bg-amber-600 sm:w-auto"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full rounded-full border-2 border-white/60 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900 sm:w-auto"
          >
            View Our Menu
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">
          {[
            { value: "15+", label: "Years of Taste" },
            { value: "120+", label: "Signature Dishes" },
            { value: "50K+", label: "Happy Customers" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl font-bold text-amber-400 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/80"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
