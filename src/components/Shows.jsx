import { motion } from "framer-motion";

const shows = [
  {
    title: "Rust Hymnal",
    location: "Cathedral of Switches",
    image:
      "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1974&auto=format&fit=crop",
    blurb:
      "Choral brass and shadow puppetry among humming transformers.",
  },
  {
    title: "Glass Bones",
    location: "Atrium 5, West Mill",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1974&auto=format&fit=crop",
    blurb:
      "Aerial silk rites and mirror mazes in a sunken lobby.",
  },
  {
    title: "Moths & Machinery",
    location: "Dockyard 12",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1974&auto=format&fit=crop",
    blurb:
      "Site-reactive juggling with floodlights and fog horns.",
  },
  {
    title: "Gravities",
    location: "Foundry Annex",
    image:
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1974&auto=format&fit=crop",
    blurb:
      "Slackline cartography suspended over echo chambers.",
  },
];

export default function Shows() {
  return (
    <section id="shows" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider">Immersive Works</h3>
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">Archive & Active</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div>
                  <h4 className="text-lg font-bold">{s.title}</h4>
                  <p className="text-zinc-300 text-sm">{s.location}</p>
                  <p className="mt-2 text-zinc-400 text-xs max-w-[36ch] opacity-0 translate-y-2 transition group-hover:opacity-100 group-hover:translate-y-0">
                    {s.blurb}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'600\\' height=\\'800\\'><filter id=\\'t\\'><feTurbulence baseFrequency=\\'0.02\\' numOctaves=\\'2\\'/><feDisplacementMap scale=\\'2\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23t)\\' opacity=\\'0.7\\'/></svg>')",
              }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
