import React from 'react'
import { Sparkles, Cpu, Zap, Palette } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Iridescent Finishes',
    desc: 'Electroplated bodies with holographic sheens that glow under low light.',
  },
  {
    icon: Cpu,
    title: 'Smart Draw Sensor',
    desc: 'Adaptive airflow + coil management for consistent vapor and flavor.',
  },
  {
    icon: Zap,
    title: 'Rapid Charge',
    desc: 'USB‑C 30‑minute quick top-up with thermal safety and auto‑balance.',
  },
  {
    icon: Palette,
    title: 'Neon Aesthetic',
    desc: 'Bold typography, cyber glow accents, and a timeless dark mode.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(217,70,239,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Engineered for play</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Everything is tuned for a smooth pull and a smoother vibe.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-500 grid place-items-center text-white shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-bold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
