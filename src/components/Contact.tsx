import { FormEvent, useState } from "react";

interface FormState {
  name: string;
  phone: string;
  guests: string;
  date: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", guests: "2", date: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!form.date) newErrors.date = "Please choose a reservation date.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Contact & Reservation</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">Visit Us or Book a Table</h2>
          <p className="mt-4 text-slate-600">
            We'd love to host you. Reach out for reservations, catering enquiries, or just to say salaam!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="flex items-start gap-3 text-slate-700">
                <span className="text-xl">📍</span>
                <span>
                  <span className="block font-semibold text-slate-900">Our Location</span>
                  Shop 12, Khayaban-e-Ittehad, Phase 6, DHA, Karachi, Pakistan
                </span>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="flex items-start gap-3 text-slate-700">
                <span className="text-xl">📞</span>
                <span>
                  <span className="block font-semibold text-slate-900">Call Us</span>
                  <a href="tel:+922134567890" className="hover:text-amber-600">+92 21 3456 7890</a> ·{" "}
                  <a href="tel:+923001234567" className="hover:text-amber-600">+92 300 1234567</a>
                </span>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="flex items-start gap-3 text-slate-700">
                <span className="text-xl">⏰</span>
                <span>
                  <span className="block font-semibold text-slate-900">Opening Hours</span>
                  Everyday: 12:00 PM – 1:00 AM
                </span>
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="flex items-start gap-3 text-slate-700">
                <span className="text-xl">✉️</span>
                <span>
                  <span className="block font-semibold text-slate-900">Email</span>
                  <a href="mailto:info@karachikarahihouse.pk" className="hover:text-amber-600">
                    info@karachikarahihouse.pk
                  </a>
                </span>
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md">
              <iframe
                title="Karachi Karahi House Location Map"
                src="https://www.google.com/maps?q=DHA%20Phase%206%20Karachi%20Pakistan&output=embed"
                width="100%"
                height="230"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
              {submitted && (
                <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  🎉 Thank you! Your reservation request has been received. We'll call you shortly to confirm.
                </div>
              )}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 ${
                      errors.name ? "border-red-400" : "border-slate-300"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="03XX XXXXXXX"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 ${
                      errors.phone ? "border-red-400" : "border-slate-300"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Reservation Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 ${
                      errors.date ? "border-red-400" : "border-slate-300"
                    }`}
                  />
                  {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Number of Guests</label>
                  <select
                    value={form.guests}
                    onChange={(e) => handleChange("guests", e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "10+"].map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Message (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  placeholder="Any special requests?"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-700/30 transition hover:bg-emerald-800 sm:w-auto"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
