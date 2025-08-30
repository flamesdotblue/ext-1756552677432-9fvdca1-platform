import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.08]" style={{
        background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 2px, transparent 2px, transparent 6px)",
      }} />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider">
              Our Manifesto
            </h2>
            <p className="mt-5 text-zinc-300 leading-relaxed">
              We trespass politely. We illuminate the dust. We honor the geometry of broken windows and the stories that echo between them. Our circus is not a stage—it is the corridor, the stairwell, the atrium of a sleeping factory. We bind aerial silk to steel beams and whisper lullabies to feral pigeons.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Every performance re-maps a ruin. We invite you to wander without a map, to let brass and breath lead the way. Bring your curiosity and a small flashlight.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/30">
              <img
                src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?q=80&w=1935&auto=format&fit=crop"
                alt="Aerial silks in an abandoned theater"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{
                backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\'><filter id=\\'g\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.012\\' numOctaves=\\'3\\'/><feColorMatrix type=\\'saturate\\' values=\\'0\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23g)\\'/></svg>')",
              }} />
            </div>
            <div className="absolute -inset-6 -z-10 pointer-events-none" style={{
              background: "radial-gradient(600px 200px at 10% 10%, rgba(255,0,122,0.12), transparent 60%), radial-gradient(600px 200px at 100% 90%, rgba(0,180,255,0.12), transparent 60%)",
              maskImage: "radial-gradient(closest-side, black, transparent)",
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
