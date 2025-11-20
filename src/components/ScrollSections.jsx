import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollSections() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 0.35])

  return (
    <section ref={ref} id="story" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute -top-40 right-10 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(217,70,239,0.35), transparent 60%)' }} />
      <div className="absolute -bottom-40 left-10 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(56,189,248,0.35), transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div style={{ rotate, y }} className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-fuchsia-600/30 to-cyan-500/30 border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1400&auto=format&fit=crop" className="h-full w-full object-cover mix-blend-screen opacity-90"/>
          </div>
          <div className="absolute -inset-6 rounded-[2rem] -z-10" style={{ boxShadow: `0 0 80px rgba(168,85,247,${glow})` }} />
        </motion.div>

        <div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Scroll that shimmers</h3>
          <p className="mt-4 text-slate-300">
            Subtle parallax and motion give each section a tactile, immersive feel. The deeper you scroll, the more the interface comes alive — without getting in your way.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300/90">
            <li>• Smooth, hardware-accelerated transitions</li>
            <li>• Micro‑interactions on hover and scroll</li>
            <li>• Tasteful glow accents that never overpower</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
