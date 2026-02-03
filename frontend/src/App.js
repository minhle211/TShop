import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { Search, ShoppingCart } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* NAVIGATION BAR - Now with Search! */}
      <nav className="sticky top-0 z-50 bg-[#005461] text-white shadow-xl">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-black tracking-tighter hover:text-[#3BC1A8] transition">TSHOP</Link>
          
          {/* RELOCATED SEARCH BAR */}
          <div className="flex-1 max-w-xl relative mx-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 outline-none focus:bg-white focus:text-slate-800 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-6 font-bold">
            <Link to="/" className="hidden md:block hover:text-[#3BC1A8]">Shop</Link>
            <Link to="/add" className="hidden md:block hover:text-[#3BC1A8]">Inventory</Link>
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#3BC1A8] text-white text-[10px] px-1.5 rounded-full">0</span>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;