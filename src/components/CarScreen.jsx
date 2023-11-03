import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
//Import css file
import "../styles/styles.css";
import { useState } from "react";

function ExampleCarouselImage({ text, src }) {
  return (
    <img
      className="d-block mx-auto" // Center the image
      src={src}
      alt={text}
      style={{ width: "100%", height: "auto" }} // Make image responsive
    />
  );
}

function CarScreen() {

  const [activeIndex, setActiveIndex] = useState(0);

  const descriptions = [
    'Familiarize yourself with the foot pedals.', 
    'Adjust the seat so that your feet comfortably reach both pedals.',
    "Adjust your car's mirrors so that you can see through them clearly and effectively.",
    'Get familiar with the pedals',
    'Know where the parking brake is and what it does.', 
    'Get a feel of the gear stick',
    'Understand the basic dashboard controls/symbols.' ,
    'Put on your seatbelt', 
    'Turn on the engine and release the parking brake,',
    "Learn how to back your car out.",
    "When you're ready to move your car forwards, come to a complete stop and put the car into 'Drive'.", 
    "Hold both hands on the steering wheel at the 9 and 3 o'clock position", 
    "Use your blinkers", 
    "Turn the car using the hand over hand method.", 
    "Use your blinkers while turning", 
    "Adhere to the speed limit.",
  ];

  const handleSelect = (x) =>{
    setActiveIndex(x);
  }

  return (
    <Container className="mt-5">
      <Carousel className="mx-auto" style={{ maxWidth: "750px" }} slide={false} onSelect={handleSelect}>
        
        <Carousel.Item interval={null}>
          <ExampleCarouselImage src="https://i.postimg.cc/Ss5vLMgn/Screenshot-2023-11-01-133914.png" />
          
        </Carousel.Item>
         
        
        <Carousel.Item interval={null}>
          <ExampleCarouselImage src="https://www.wikihow.com/images/thumb/8/84/Drive-a-Car-Step-1-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-1-Version-2.jpg" />
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
        <ExampleCarouselImage
            text="First slide"
            src="https://www.wikihow.com/images/thumb/f/f1/Drive-a-Car-Step-3-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-3-Version-2.jpg.webp"
          />
        <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
        </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
        
           <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
        <video style={{ width: '100%', height: '100%', position: 'absolute' }} autoPlay muted loop>
          <source src="https://www.wikihow.com/video/7/78/Drive%20a%20Car%20Step%202.360p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage
            text="First slide"
            src="https://www.wikihow.com/images/thumb/b/b9/Drive-a-Car-Step-4-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-4-Version-2.jpg.webp"
          />
           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage
            text="First slide"
            src="https://www.wikihow.com/images/thumb/4/44/Drive-a-Car-Step-5-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-5-Version-2.jpg.webp"
          />
           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage
            text="First slide"
            src="https://www.wikihow.com/images/thumb/8/83/Drive-a-Car-Step-6-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-6-Version-2.jpg.webp"
          />
           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/4/4d/Drive%20a%20Car%20Step%207.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
        <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/3/3e/Drive%20a%20Car%20Step%209.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>



           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/1/15/Drive%20a%20Car%20Step%2010.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/6/60/Drive%20a%20Car%20Step%2011.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <ExampleCarouselImage
            text="First slide"
            src="https://wikihow.com/images/thumb/2/23/Drive-a-Car-Step-12-Version-2.jpg/aid3755-v4-728px-Drive-a-Car-Step-12-Version-2.jpg.webp"
          />
           <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
       
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/8/86/Drive%20a%20Car%20Step%2013.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/e/ea/Drive%20a%20Car%20Step%2014.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "56.25%",
              position: "relative",
            }}
          >
            <video
              style={{ width: "100%", height: "100%", position: "absolute" }}
              autoPlay
              muted
              loop
            >
              <source
                src="https://www.wikihow.com/video/e/e7/Drive%20a%20Car%20Step%2015.360p.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item> 
        <Carousel.Item interval={null}>
          <ExampleCarouselImage src="https://www.wikihow.com/images/thumb/6/68/Drive-a-Car-Step-20-Version-2.jpg/v4-460px-Drive-a-Car-Step-20-Version-2.jpg" />
          <div className="mt-5">
          <h4 className="text-center mt-3">
            {descriptions[activeIndex]}
          </h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>


  );
}
export default CarScreen;
