import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';


function ExampleCarouselImage({ text, src }) {
  return (
    <img
      className="d-block mx-auto" // Center the image
      src={src}
      alt={text}
      style={{ width: '100%', height: 'auto' }} // Make image responsive
    />
  );
}
 

function ControlledCarousel() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='mt-5'>
      <Carousel className="mx-auto" style={{ maxWidth: '700px' }} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/L4zsqZS5/Screenshot-2023-10-31-072457.png" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <h3>Want to learn driving ?</h3>
  </div>
</Carousel.Item>
<Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/L4zsqZS5/Screenshot-2023-10-31-072457.png" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <div>
       <h3>Have an infortainment </h3>
       <h3>system in car ?</h3>
    </div>
  </div>
</Carousel.Item>
<Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/L4zsqZS5/Screenshot-2023-10-31-072457.png" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <div>
      <h3>Learn it through a </h3>
      <h3>personalized system!</h3>
      <Button variant="primary" size="lg" className="mt-3" onClick={handleClick}>
        Get Started
      </Button>
    </div>
  </div>
</Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
