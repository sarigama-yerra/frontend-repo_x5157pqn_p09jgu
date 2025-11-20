import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.35em] text-sm text-fuchsia-300/80">New Drop</p>
          <h1 className="mt-2 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_40px_rgba(217,70,239,0.35)]">
            Vape & Play
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300">
            A cyber-luxe e-commerce experience that fuses vapor tech with retro-futurist play. Glide through neon fog and discover devices that glow with personality.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 text-white font-semibold shadow-[0_0_35px_rgba(56,189,248,0.35)] border border-white/10">
              Shop the Collection
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center z-10">
        <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
