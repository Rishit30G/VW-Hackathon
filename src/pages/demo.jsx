import React from "react";
import CarScreen from "../components/CarScreen";
import { Container } from "react-bootstrap";

const Demo = () => {
  return (
    <>
      <Container className="mt-5">
        <h1 className="display-6"> Demo </h1>
        <p className="text-muted">
        This demo showcases the car's infotainment screen capabilities, with upcoming features including interactive elements and talkback for enhanced accessibility.
        </p>
      </Container>
      <CarScreen />
    </>
  );
};

export default Demo;
