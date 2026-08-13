import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import Cart from "./Cart.jsx";
import { products } from "../data/products.js";

export default function Catalog() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}