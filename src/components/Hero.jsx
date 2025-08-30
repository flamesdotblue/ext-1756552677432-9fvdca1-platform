import { motion } from "framer-motion";

function Wordmark({ className = "" }) {
  // Hand-drawn feel using SVG strokes and turbulence filter
  return (
    <svg
      className={className}
      viewBox="0 0 1200 280"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Night Caravan"
    >
      <defs>
        <filter id="squiggle">
          <feTurbulence baseFrequency="0.015" numOctaves="2" seed="2" type="fractalNoise" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
        <linearGradient id="ink" x1="0" x2="1">
          <stop offset="0%" stopColor="#fef9e7" />
          <stop offset="100%" stopColor="#d1c7ff" />
        </linearGradient>
      </defs>
      <g filter="url(#squiggle)">
        <text
          x="50"
          y="120"
          fontSize="92"
          fontWeight="800"
          fontFamily="'IBM Plex Sans', ui-sans-serif, system-ui"
          letterSpacing="6"
          fill="url(#ink)"
        >
          THE NIGHT
        </text>
        <text
          x="50"
          y="235"
          fontSize="140"
          fontWeight="900"
          fontFamily="'IBM Plex Sans', ui-sans-serif, system-ui"
          letterSpacing="8"
          fill="url(#ink)"
        >
          CARAVAN
        </text>
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full flex items-end justify-start">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1976&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/5490458/5490458-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2930156/2930156-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark veil + vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 200px 80px rgba(0,0,0,0.8)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <Wordmark className="w-full" />
          <p className="mt-6 max-w-2xl text-zinc-300/90">
            An immersive circus collective haunting abandoned spaces with aerial rituals, shadow puppetry, and feral brass. Follow the rusted signs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tour"
              className="px-5 py-2 rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30 hover:bg-fuchsia-500/30 hover:border-fuchsia-400/60 transition"
            >
              Upcoming Tour
            </a>
            <a
              href="#shows"
              className="px-5 py-2 rounded-full bg-zinc-100/10 text-zinc-100 border border-white/10 hover:bg-zinc-100/20 transition"
            >
              Explore Shows
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
