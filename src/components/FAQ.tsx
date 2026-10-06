import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">FAQs</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-slate-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {item.q}
                <span className={`text-xl text-amber-600 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="bg-white px-5 py-4 text-sm leading-relaxed text-slate-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
