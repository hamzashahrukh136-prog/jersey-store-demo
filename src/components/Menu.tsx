import { useState } from "react";
import { menuData } from "../data/content";

export default function Menu() {
  const [active, setActive] = useState(menuData[0].id);
  const activeCategory = menuData.find((c) => c.id === active) ?? menuData[0];

  return (
    <section id="menu" className="bg-[#0f1f16] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Our Menu</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Crafted with Passion, Served with Pride
          </h2>
          <p className="mt-4 text-slate-300">
            Explore our signature categories — every dish made fresh to order using authentic Pakistani spices.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === cat.id
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-400/40 hover:bg-white/10"
            >
              <div>
                <p className="font-serif text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.description}</p>
              </div>
              <p className="whitespace-nowrap font-serif text-lg font-bold text-amber-400">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-600"
          >
            Order Now / Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}
