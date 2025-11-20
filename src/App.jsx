import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import ScrollSections from './components/ScrollSections'

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <ScrollSections />
        <footer className="py-16 border-t border-white/10 bg-black/30">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-400">© {new Date().getFullYear()} Vape & Play</p>
            <div className="flex items-center gap-4 text-slate-300">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
