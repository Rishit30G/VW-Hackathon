import React from "react";
import { Card, Container } from "react-bootstrap";

const AboutCard = ({ heading, text, Icon, color }) => { // Icon capitalized to follow JSX convention
  return (
    <Card bg="white" style={{ width: "18rem" }}>
      <Container className="text-center mt-3">
        <Card.Body>
          {Icon && <Icon className="mb-4" size={80} color={color} weight="bold" />}
          <h2>{heading}</h2>
          <p className="text-muted">{text}</p>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default AboutCard;
