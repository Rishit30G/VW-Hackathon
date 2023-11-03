import React from "react";
import CarScreen from "../components/CarScreen";
import { Container } from "react-bootstrap";

const Demo = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="display-4"> <b>Demo</b> </h1>
        <h4 className="fw-light">
         This demo showcases the car's infotainment screen capabilities, with upcoming features including interactive elements and talkback for enhanced accessibility.
        </h4>
      </Container>
      <CarScreen />
    </>
  );
};

export default Demo;
