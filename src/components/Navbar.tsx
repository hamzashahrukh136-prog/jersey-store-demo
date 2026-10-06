import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-green-700 text-lg font-bold text-white shadow-md`}
          >
            KK
          </span>
          <span className={`font-serif text-xl font-bold tracking-tight ${scrolled ? "text-emerald-900" : "text-white"}`}>
            Karachi Karahi House
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+922134567890"
            className={`text-sm font-semibold ${scrolled ? "text-emerald-800" : "text-white"}`}
          >
            📞 +92 21 3456 7890
          </a>
          <a
            href="#contact"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-600"
          >
            Book a Table
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled ? "text-emerald-900" : "text-white"
          }`}
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-5 mt-3 rounded-2xl bg-white p-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-slate-700 hover:text-amber-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-amber-500/30"
            >
              Book a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
