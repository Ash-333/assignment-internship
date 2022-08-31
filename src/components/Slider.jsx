import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/4.jpeg'

const Slider=()=>{
    return(
        <Carousel variant="dark">
        <Carousel.Item>
          <img 
            className="d-block w-100 image-carsouel"
            src={img1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carsouel"
            src={img2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carsouel"
            src={img3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    )
}

export default Slider