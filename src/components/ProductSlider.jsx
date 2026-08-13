import { useState } from "react";

export default function ProductSlider({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) return null;

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div>
      <img
        src={images[activeIndex]}
        alt={`Imagen ${activeIndex + 1}`}
        style={{ width: "100px" }}
      />
      <div>
        <button type="button" onClick={prev}>
          Anterior
        </button>
        <button type="button" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}