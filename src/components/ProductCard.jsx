import ProductSlider from "./ProductSlider";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <ProductSlider images={product.images} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Ordenar</button>
    </div>
  );
}
