import { useRef, useState, useEffect } from "react";

function Carousel({ children }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const firstCard = trackRef.current.children[0];
        if (firstCard) {
          const style = window.getComputedStyle(trackRef.current);
          const gap = parseInt(style.gap) || 0;
          setCardWidth(firstCard.offsetWidth + gap);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = children.length - 1;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev}>
        &#10094;
      </button>

      <div
        className="carousel-track"
        ref={trackRef}
        style={{
          transform: `translateX(-${index * cardWidth}px)`
        }}
      >
        {children}
      </div>

      <button className="carousel-btn next" onClick={next}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;