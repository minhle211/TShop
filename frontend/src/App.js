import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  const primaryTeal = "#005461";

  return (
    <Router>
      <nav className="shadow-lg text-white" style={{ backgroundColor: primaryTeal }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter">TSHOP</Link>
          <div className="space-x-6 font-semibold">
            <Link to="/" className="hover:text-teal-200 transition">Shop</Link>
            <Link to="/add" className="hover:text-teal-200 transition">Add Product</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;