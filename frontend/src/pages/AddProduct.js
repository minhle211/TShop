import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Connects to your Java Backend on port 8080
      await axios.post('http://localhost:8080/api/products', product);
      alert("Product saved to TShop!");
      navigate('/'); // Redirect to main page
    } catch (err) {
      alert("Could not connect. Is the Java terminal running?");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 border-t-8 border-[#005461]">
        <h2 className="text-3xl font-black mb-6 text-slate-800">TShop Inventory</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input 
            type="text" placeholder="Product Name" required
            className="w-full p-4 border-2 rounded-xl outline-none focus:border-[#3BC1A8]"
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
          <input 
            type="number" placeholder="Price ($)" required
            className="w-full p-4 border-2 rounded-xl outline-none focus:border-[#3BC1A8]"
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />
          <button type="submit" className="w-full bg-[#3BC1A8] text-white font-bold py-4 rounded-xl hover:bg-[#0C7779] transition-all">
            ADD TO TSHOP
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;