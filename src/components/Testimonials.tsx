import { useEffect, useState } from "react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-emerald-900 py-20 sm:py-28">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Testimonials</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">What Karachi Says About Us</h2>

        <div className="mt-12 rounded-3xl bg-white/5 p-8 backdrop-blur sm:p-12">
          <div className="mb-4 flex justify-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < current.rating ? "★" : "☆"}</span>
            ))}
          </div>
          <p className="font-serif text-xl italic leading-relaxed text-slate-100 sm:text-2xl">
            "{current.quote}"
          </p>
          <p className="mt-6 font-semibold text-amber-300">{current.name}</p>
          <p className="text-sm text-slate-400">{current.area}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-amber-400" : "bg-white/30"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
