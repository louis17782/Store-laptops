import { useState } from "react";
import ProductSlider from "./ProductSlider";

export default function ProductCard({ product, addToCart }) {
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = () => {
    addToCart(product);
    setIsOrdered(true);
  };

  return (
    <div className="product-card">
      <ProductSlider images={product.images} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button 
        onClick={handleOrder} 
        className={isOrdered ? "ordered" : ""}
        disabled={isOrdered}
      >
        {isOrdered ? "Ordenado ✓" : "Ordenar"}
      </button>
    </div>
  );
}