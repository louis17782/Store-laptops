export default function ProductSlider({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="product-slider">
      <div className="slider-track">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Imagen ${idx + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}