import { motion } from "framer-motion";

const dates = [
  { date: "Oct 31", city: "Detroit, MI", venue: "Packard Plant — East Wing" },
  { date: "Nov 08", city: "Philadelphia, PA", venue: "Delaware Power Station" },
  { date: "Nov 22", city: "Providence, RI", venue: "Dye House 3" },
  { date: "Dec 13", city: "Buffalo, NY", venue: "Grain Elevator 7" },
];

export default function Tour() {
  return (
    <section id="tour" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider">Upcoming Encounters</h3>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {dates.map((d, i) => (
                <motion.li
                  key={d.date + d.city}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-fuchsia-200/90 font-bold tracking-wide w-16">{d.date}</span>
                    <div>
                      <div className="font-semibold">{d.city}</div>
                      <div className="text-zinc-400 text-sm">{d.venue}</div>
                    </div>
                  </div>
                  <a
                    href="mailto:booking@nightcaravan.art?subject=Tickets%20Inquiry"
                    className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition"
                  >
                    Tickets
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40">
              <div className="aspect-[5/6] relative">
                <img
                  src="https://images.unsplash.com/photo-1557431177-36141475c676?q=80&w=2070&auto=format&fit=crop"
                  alt="Torchlight performance in a derelict hall"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-zinc-200 text-sm leading-relaxed">
                    We work site-first. If you hold keys to a ruin that wants to sing, speak to us.
                  </p>
                  <a
                    href="mailto:booking@nightcaravan.art?subject=Host%20an%20Immersive%20Show"
                    className="mt-3 inline-flex px-4 py-2 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 hover:bg-emerald-400/30 hover:border-emerald-400/60 transition"
                  >
                    Host a Show
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
