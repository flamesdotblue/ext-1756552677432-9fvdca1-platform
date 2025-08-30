import { useEffect } from "react";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Shows from "./components/Shows";
import Tour from "./components/Tour";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-zinc-100 relative overflow-hidden">
      {/* Background gradients + vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 70% -10%, rgba(122,0,38,0.18), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(0,74,122,0.2), transparent 60%), radial-gradient(700px 400px at 100% 30%, rgba(70,0,122,0.18), transparent 55%)",
        }}
      />

      {/* Subtle grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1400\\' height=\\'800\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.6\\'/></svg>')",
          backgroundSize: "cover",
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-widest uppercase text-sm text-zinc-200">The Night Caravan</div>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <a href="#manifesto" className="hover:text-white/90 transition">Manifesto</a>
            <a href="#shows" className="hover:text-white/90 transition">Shows</a>
            <a href="#tour" className="hover:text-white/90 transition">Tour</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Manifesto />
        <Shows />
        <Tour />
      </main>

      <footer className="mt-24 border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} The Night Caravan — Immersive Circus in Forgotten Spaces
      </footer>
    </div>
  );
}
