import React from 'react';
import { ShoppingCart, Search, User, ArrowRight } from 'lucide-react';

function App() {
  // Your specific Palette Colors
  const darkTeal = "#005461";
  const mediumTeal = "#0C7779";
  const accentTeal = "#3BC1A8";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 shadow-lg text-white" style={{ backgroundColor: darkTeal }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter">TSHOP</h1>
          
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#" className="hover:text-teal-300 transition">New Arrivals</a>
            <a href="#" className="hover:text-teal-300 transition">Collections</a>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <Search size={18} className="mr-2 text-teal-200" />
              <input type="text" placeholder="Search gear..." className="bg-transparent outline-none placeholder-teal-200 text-sm w-40" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <User size={24} className="cursor-pointer hover:text-teal-300" />
            <div className="relative cursor-pointer hover:text-teal-300">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-white text-teal-900 text-[10px] font-bold px-1.5 rounded-full border border-teal-900">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="py-24 text-center text-white px-6" style={{ background: `linear-gradient(135deg, ${darkTeal} 0%, ${mediumTeal} 100%)` }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Elevate Your <br/>Campus Life</h2>
          <p className="text-teal-50 mb-10 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Premium tech and apparel for the badminton players. Designed for players, by students.
          </p>
          <button className="px-10 py-4 rounded-full font-bold shadow-2xl transition hover:scale-105 flex items-center mx-auto" style={{ backgroundColor: accentTeal }}>
            Explore Collection <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </header>

      {/* 3. PRODUCT GRID */}
      <main className="container mx-auto py-20 px-6">
        <div className="flex justify-between items-end mb-12 border-b-2 border-slate-200 pb-6">
          <div>
            <h3 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Featured Gear</h3>
            <div className="h-1.5 w-16 mt-2 rounded-full" style={{ backgroundColor: accentTeal }}></div>
          </div>
          <button className="font-bold text-sm hover:underline" style={{ color: mediumTeal }}>Browse All Products</button>
        </div>

        {/* This grid makes it look like a real website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-300">
              <div className="bg-slate-100 h-64 w-full rounded-2xl animate-pulse mb-6 overflow-hidden">
                {/* Image placeholder */}
              </div>
              <div className="h-4 w-3/4 bg-slate-200 rounded-full mb-3"></div>
              <div className="h-4 w-1/4 bg-slate-200 rounded-full mb-6"></div>
              <button className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-transform active:scale-95 shadow-md" style={{ backgroundColor: mediumTeal }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="py-16 bg-slate-900 text-slate-500 text-center text-sm">
        <div className="container mx-auto px-6">
          <p className="mb-2">© 2026 TCU E-commerce Project. Fort Worth, TX.</p>
          <p className="opacity-50">Connected to MongoDB Atlas | Built with Spring Boot & React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;