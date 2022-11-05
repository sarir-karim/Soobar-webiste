import React from "react";
import {Carousel} from 'react-bootstrap'
import SliderIMG from "./img/carousel.png";
import "./CarouselStyles.css";
const BootstrapCarousel = () => {
  return (
    <>
      <Carousel className="carousel__wrapper">
        <Carousel.Item className="slide__1">
          <img className="d-block w-100" src={SliderIMG} alt="First slide" />
          <Carousel.Caption className="carousel__content">
            <h3>Find Anything in Somalia with Sobaar.com</h3>
            <p>Earning starts when shopping on the service and buy goods for them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide__2">
          <img className="d-block w-100" src={SliderIMG} alt="Second slide" />
          <Carousel.Caption className="carousel__content">
          <h3>Find Anything in Somalia with Sobaar.com</h3>
            <p>Earning starts when shopping on the service and buy goods for them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide__3">
          <img className="d-block w-100" src={SliderIMG} alt="Third slide" />
          <Carousel.Caption className="carousel__content">
          <h3>Find Anything in Somalia with Sobaar.com</h3>
            <p>Earning starts when shopping on the service and buy goods for them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide__4">
          <img className="d-block w-100" src={SliderIMG} alt="Fourth slide" />
          <Carousel.Caption className="carousel__content">
          <h3>Find Anything in Somalia with Sobaar.com</h3>
            <p>Earning starts when shopping on the service and buy goods for them</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default BootstrapCarousel;