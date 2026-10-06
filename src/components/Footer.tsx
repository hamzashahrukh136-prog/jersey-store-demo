export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1710] pt-16 pb-8 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-green-700 text-lg font-bold text-white">
                KK
              </span>
              <span className="font-serif text-lg font-bold text-white">Karachi Karahi House</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Serving authentic Pakistani BBQ, karahi & biryani in the heart of Karachi since 2008.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "ig" },
                { label: "WhatsApp", icon: "wa" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white transition hover:bg-amber-500"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition hover:text-amber-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Shop 12, Khayaban-e-Ittehad, DHA Phase 6, Karachi</li>
              <li>+92 21 3456 7890</li>
              <li>info@karachikarahihouse.pk</li>
              <li>Open daily 12:00 PM – 1:00 AM</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Stay Updated</p>
            <p className="mt-4 text-sm text-slate-400">Subscribe for special offers & new menu items.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-white/20"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Karachi Karahi House. All rights reserved. This is a demo website.</p>
          <p>Made with ❤️ in Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
