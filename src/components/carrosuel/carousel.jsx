import React, { useState, useEffect } from "react";
import dishOne from "../../../public/assets/images/dishOne.jpg";
import dishTwo from "../../../public/assets/images/dishTWo.jpg";
import dishThree from "../../../public/assets/images/dishThree.jpg";
import "../carrosuel/carousel.css"; 

const Carousel = () => {
  const images = [dishOne, dishTwo, dishThree];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Carousel Image ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
