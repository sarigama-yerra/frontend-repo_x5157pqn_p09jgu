import React from 'react'
import { ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Nebula Mini',
    color: 'Fuchsia Fade',
    price: 39,
    image: 'https://images.unsplash.com/photo-1658649509599-94b163b5ffe1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBNaW5pfGVufDB8MHx8fDE3NjM2NjI0OTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Aurora Max',
    color: 'Cyber Cyan',
    price: 59,
    image: 'https://images.unsplash.com/photo-1518544801976-3e160a49b7b6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Cosmo Pod',
    color: 'Ultra Violet',
    price: 45,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(56,189,248,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured collection</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A curation of limited finishes and best‑selling devices.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10">
            <ShoppingBag className="w-4 h-4" />
            View all
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{p.name}</h3>
                    <p className="text-sm text-slate-300">{p.color}</p>
                  </div>
                  <span className="text-cyan-300 font-bold">${p.price}</span>
                </div>
                <button className="mt-4 w-full rounded-lg px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border border-fuchsia-400/30">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
