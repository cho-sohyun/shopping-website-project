import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div className="banner-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block  banner-img"
            src="/image/carousel-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>S/S 2025</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  banner-img"
            src="/image/carousel-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Festival Look</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
