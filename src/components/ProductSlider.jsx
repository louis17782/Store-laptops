import { useRef, useState } from "react";

export default function ProductSlider({ images = [] }) {
  const trackRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  if (!images.length) return null;

  const goToImage = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    track.scrollTo({
      left: nextIndex * track.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="product-slider"
      role="group"
      aria-roledescription="carrusel"
      aria-label="Galería de imágenes del producto"
    >
      <div
        className="slider-track"
        ref={trackRef}
        onScroll={(event) => {
          const track = event.currentTarget;
          if (track.clientWidth) {
            setCurrentImage(Math.round(track.scrollLeft / track.clientWidth));
          }
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Imagen ${idx + 1}`}
            loading="lazy"
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow--previous"
            aria-label="Ver imagen anterior"
            onClick={() => goToImage(currentImage - 1)}
            disabled={currentImage === 0}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow--next"
            aria-label="Ver imagen siguiente"
            onClick={() => goToImage(currentImage + 1)}
            disabled={currentImage === images.length - 1}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}