import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "/photocik6.jpg",
  "/photo1.jpg",
  "/image2.jpg",
  "/photo2.jpg",
  "/photo3.1.jpg",
  "/photocik7.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {

  }, []);

  return (

    <div className="background">
            <h1 id="those" >Those are some pictures of club Members</h1>
    <div className="slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="slider-button left" onClick={prevSlide}>
        ❮
      </button>
      <button className="slider-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
    </div>
  );
};

export default ImageSlider;
