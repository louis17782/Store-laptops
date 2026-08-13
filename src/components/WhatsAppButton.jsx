export default function WhatsAppButton({ cart }) {
  const phoneNumber = "+584127924818"; // tu número en formato internacional
  const message = cart.map(item => item.title).join(", ");
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button>Enviar al WhatsApp</button>
    </a>
  );
}
