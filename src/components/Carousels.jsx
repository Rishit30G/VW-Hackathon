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
      <Carousel className="mx-auto" style={{ maxWidth: '1000px' }} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/5tcG9100/free-video-3045163.jpg" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <h3 style={{color: 'white'}}>Want to learn driving ?</h3>
  </div>
</Carousel.Item>
<Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/5tcG9100/free-video-3045163.jpg" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <div>
       <h3 style={{color: 'white'}}>Have an infortainment </h3>
       <h3 style={{color: 'white'}}>system in car ?</h3>
    </div>
  </div>
</Carousel.Item>
<Carousel.Item className="text-center">
  <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/5tcG9100/free-video-3045163.jpg" />
  <div className="carousel-caption d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <div>
        <h3 style={{color: 'white'}}>Steer Your Progress,</h3>
        <h3 style={{color: 'white'}}>On your terms.</h3>
        <Button variant="outline-light" size="md" className="mt-3" onClick={handleClick}>
          Learn More
        </Button>
    </div>
  </div>
</Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
