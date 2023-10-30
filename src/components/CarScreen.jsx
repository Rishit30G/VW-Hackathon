import Carousel from "react-bootstrap/Carousel";
import { Button, Container } from "react-bootstrap";
import { HandPalm } from "@phosphor-icons/react";
//Import css file 
import '../styles/styles.css';

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

function CarScreen() {
 const playSound = () => {
        const utterance = new SpeechSynthesisUtterance("Press the brake gently to slow down the car");
        speechSynthesis.speak(utterance);
  }
  return (
    <Container className="mt-5">
      <Carousel  className="mx-auto" style={{ maxWidth: '700px' }} slide={false}>
      <Carousel.Item interval={null}>
          <ExampleCarouselImage text="First slide" src="https://i.postimg.cc/cHMhckjS/Screenshot-2023-10-30-162754.png" />
          <Carousel.Caption>
                <h3 style={{ color: "black" }}>
                Braking <HandPalm  style={{ animation: 'zoom 2s infinite' }} size={30} color="#000000" weight="bold" />
                </h3>
                <h6 style={{ color: "black" }}>
                Press the brake gently to slow down the car.
                </h6>
                <Button className="mt-3" variant="primary" onClick={playSound}>Play Sound</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage text="First slide" src="https://picsum.photos/700/400?random=1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage text="First slide" src="https://picsum.photos/700/400?random=2" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
}
export default CarScreen;
