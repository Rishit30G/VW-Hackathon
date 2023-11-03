import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Money, Timer, User, UsersThree } from "@phosphor-icons/react";
import { Row, Col } from "react-bootstrap";
import AboutCard from "../components/AboutCard";

const About = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/demo');
  };

  return (
    <div>
        <Container fluid> 
          <img src="https://picsum.photos/1880/300"/>
        </Container>
        <Container className="mt-5">
          <h1 className="display-5"> <b>Our Vision 🔭</b> </h1>
        </Container>
        <Container className="mt-3 p-3" style={{ borderLeft: '5px solid orange', position: 'relative' }}>
    <h5 className="text-muted fst-italic">
        This project is dedicated to transforming the journey of learning to drive into a seamless and enjoyable experience for users. 🚀
    </h5>
</Container>

      <Container className="mt-5">
        <h1 className="my-3 display-5"> <b>Project Idea 🗺️</b></h1>
        <ul>
        <li>
          <h5 className="fw-normal">
          In India, where road traffic conditions are complex and diverse, there
          is a pressing need for innovative and accessible driver education. 
          </h5>
        </li>
        <li>
        <h5 className="fw-normal">
        Our
          application aims to address this by providing an interactive learning
          experience directly through the car's infotainment screen.
        </h5> 
        </li>
        <li>
        <h5 className="fw-normal">
          Utilizing
          AI and machine learning, the application offers personalized lessons,
          real-time feedback, and scenario-based training, ensuring that
          learners are well-prepared for on-road driving. 
          </h5>
        </li>
        <li> 
        <h5 className="fw-normal">
        The application's
          content is tailored to Indian road conditions, traffic norms, and
          driving etiquette, making it highly relevant and effective.
        </h5> 
        </li>
        </ul>
      </Container>

      <Container className="mt-5">
      <h1 className="my-3 display-5"> <b>USP🤳🏻</b> </h1>
      <Row className="justify-content-center align-items-center g-4" xs={1} sm={2} md={2} lg={4} xl={4}>
        <Col>
          <AboutCard heading="Accessibility" text="Easily accessible to individuals with cars" Icon={UsersThree} color="#017ADF"/>
        </Col>
        <Col>
          <AboutCard heading="Cost Effective" text="Avoid spending hefty bucks in driving schools" Icon={Money} color="#1CD000"/>
        </Col>
        <Col>
          <AboutCard heading="Time Saving" text="Saves travelling time and is convinient" Icon={Timer} color="red"/>
        </Col>
        <Col>
          <AboutCard heading="Personalization" text="Curated to individual's learning curve" Icon={User} color="orange"/>
        </Col>
      </Row>
      </Container>
      <Container className='text-center mt-5'>
        <Button variant="dark" size="lg" className="mt-3" onClick={handleClick}>
           Chekout the demo 🪧
        </Button>
    </Container>
    </div>

  );
};

export default About;
