import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This calls your Java Backend
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-black mb-8" style={{ color: '#005461' }}>Featured Gear</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white p-6 rounded-xl shadow-md border-b-4" style={{ borderColor: '#3BC1A8' }}>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-600">${p.price}</p>
            <button className="mt-4 w-full py-2 rounded text-white font-bold" style={{ backgroundColor: '#0C7779' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;