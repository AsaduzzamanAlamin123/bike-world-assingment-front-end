import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import las1 from'../MyImage/las1.jpg'
import las2 from'../MyImage/las2.png.jpg'
import las3 from'../MyImage/las3.jpg';
import las4 from'../MyImage/las4.jpg';
import las5 from'../MyImage/las5.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block  slider"
      src={las1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block slider"
      src={las2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block slider"
      src={las3}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block slider"
      src={las4}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block slider"
      src={las5}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;