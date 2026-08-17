import WhatsAppButton from "./WhatsAppButton";

export default function Cart({ cart }) {
  return (
    <div className="content-cart">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      )}
      <WhatsAppButton cart={cart} />
    </div>
  );
}
