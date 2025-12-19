import React, { useEffect, useState } from "react";
import "./Product.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-container">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.name} className="product-image" />
          <h3 className="brand">{p.brand}</h3>
          <p className="name">{p.name}</p>
          <p className="price">₹{p.price.toLocaleString()}</p>
          <button className="buy-btn">{p.button_text}</button>
        </div>
      ))}
    </div>
  );
}