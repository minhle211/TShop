import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart, Tag, Star, ChevronRight } from 'lucide-react';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Colors from your palette
  const darkTeal = "#005461";
  const accentTeal = "#3BC1A8";

  useEffect(() => {
    // Fetch real data from your Java Backend
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Backend connection failed:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      
      {/* 1. HERO SECTION */}
      <section className="relative text-white py-20 px-10" style={{ backgroundColor: darkTeal }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <span className="bg-[#3BC1A8] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
              New Arrival
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              TShop <br/> Essentials.
            </h1>
            <p className="text-teal-50 text-lg opacity-80 max-w-md">
              High-quality gear for the 2026 semester. Secure your essentials with the best teal-themed shop in town.
            </p>
            <button className="flex items-center bg-white text-[#005461] px-8 py-4 rounded-2xl font-black transition hover:scale-105 active:scale-95">
              Shop Now <ChevronRight className="ml-2" />
            </button>
          </div>
          {/* Decorative element for Hero */}
          <div className="hidden md:block w-72 h-72 rounded-full border-8 border-white/10 absolute right-60 top-16"></div>
        </div>
      </section>

      {/* 2. CATEGORY BAR */}
      <div className="bg-white border-b py-4">
        <div className="max-w-6xl mx-auto px-6 flex space-x-8 text-sm font-bold text-slate-500 overflow-x-auto whitespace-nowrap">
          <button className="text-[#005461] border-b-2 border-[#3BC1A8] pb-1">All Products</button>
          <button className="hover:text-[#005461]">Apparel</button>
          <button className="hover:text-[#005461]">Accessories</button>
          <button className="hover:text-[#005461]">Tech</button>
        </div>
      </div>

      {/* 3. PRODUCT GRID */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Featured Gear</h2>
          <div className="text-slate-400 font-bold">{products.length} Items Found</div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BC1A8]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => (
              <div key={p.id} className="bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-2xl transition-all duration-300 group relative border border-transparent hover:border-teal-50">
                {/* Product Image Placeholder */}
                <div className="bg-slate-100 h-56 rounded-[1.5rem] mb-5 flex items-center justify-center relative overflow-hidden">
                  <Tag className="absolute top-4 left-4 text-[#3BC1A8]" size={20} />
                  <span className="text-slate-300 font-black text-2xl">TSHOP</span>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-lg text-slate-800 leading-tight">{p.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-slate-400 text-xs ml-1">(5.0)</span>
                  </div>
                </div>

                <p className="text-2xl font-black mb-6" style={{ color: darkTeal }}>
                  ${p.price.toFixed(2)}
                </p>

                <button className="w-full flex items-center justify-center bg-[#F1F5F9] group-hover:bg-[#3BC1A8] group-hover:text-white py-4 rounded-xl font-bold transition-all duration-300 active:scale-95">
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;