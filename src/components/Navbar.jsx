import React, { useEffect, useState } from 'react'
import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-fuchsia-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(217,70,239,0.55)]" />
          <span className="text-white font-black tracking-tight text-xl">
            Vape <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.75)]">&</span> Play
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Products', 'Bundles', 'About', 'Support'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="group px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 flex items-center gap-2 border border-white/10">
            <Search className="w-4 h-4 opacity-80 group-hover:opacity-100" />
            <span className="text-sm">Search</span>
          </button>
          <button className="relative px-3 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border border-fuchsia-400/30 shadow-[0_0_30px_rgba(217,70,239,0.35)]">
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
          </button>
        </div>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {['Products', 'Bundles', 'About', 'Support'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-200 py-2">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
