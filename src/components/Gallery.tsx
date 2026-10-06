import { useState } from "react";

const images = [
  { src: "/images/gallery1.jpg", alt: "Chicken Karahi served in traditional pot" },
  { src: "/images/gallery2.jpg", alt: "Authentic Sindhi Biryani" },
  { src: "/images/gallery3.jpg", alt: "Grilled BBQ platter with kebabs" },
  { src: "/images/gallery4.jpg", alt: "Chai and fresh naan bread" },
  { src: "/images/hero.jpg", alt: "Restaurant interior ambiance" },
  { src: "/images/about-chef.jpg", alt: "Chef grilling kebabs" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Gallery</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">A Feast for the Eyes</h2>
          <p className="mt-4 text-slate-600">A glimpse of our dishes and the warm dining experience we offer.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((img, idx) => (
            <button
              key={img.src + idx}
              onClick={() => setSelected(idx)}
              className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? "col-span-2 row-span-2 sm:col-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-110 ${
                  idx === 0 ? "min-h-[260px] sm:min-h-[360px]" : "min-h-[150px] sm:min-h-[170px]"
                }`}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-3 opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-5 top-5 text-4xl font-light text-white/80 hover:text-white"
          >
            &times;
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
