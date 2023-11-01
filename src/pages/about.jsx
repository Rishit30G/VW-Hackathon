import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/demo');
  };

  return (
    <div>
      <Container className="mt-5">
        <h1 className="my-3 display-6">Project Idea</h1>
        <p>
          In India, where road traffic conditions are complex and diverse, there
          is a pressing need for innovative and accessible driver education. Our
          application aims to address this by providing an interactive learning
          experience directly through the car's infotainment screen. Utilizing
          AI and machine learning, the application offers personalized lessons,
          real-time feedback, and scenario-based training, ensuring that
          learners are well-prepared for on-road driving. The application's
          content is tailored to Indian road conditions, traffic norms, and
          driving etiquette, making it highly relevant and effective.
        </p>
        <h4 className="my-3 text-muted">Advantages of the system</h4>
        <ul>
          <li>
            <b>Accessibility</b>: Learners can practice and learn at their own
            pace, anytime, and anywhere, directly from their car.
          </li>
          <li>
            <b>Personalization</b>: AI-driven adaptive learning ensures that the
            content is tailored to the individual’s learning curve, enhancing
            retention and understanding.
          </li>
          <li>
            <b>Real-Time Feedback</b>: Instant feedback on driving decisions
            helps in correcting mistakes on the spot, promoting safer driving
            practices.
          </li>
          <li>
            <b>Scenario-Based Training</b>: Exposure to various traffic
            scenarios, including challenging Indian road conditions, ensures
            comprehensive training.
          </li>
          <li>
            <b>Cost-Effective:</b> Reduces the need for extensive on-road
            driving lessons, saving time and money for the learner.
          </li>
        </ul>
      </Container>

      <Container className="mt-5">
        <h1 className="display-6">Our Vision</h1>
        <p>
          Our vision is to revolutionize driver education in India, fostering a
          safer, more informed driving community. We aim to leverage
          cutting-edge technology to provide accessible, personalized, and
          comprehensive driving lessons directly through the car's infotainment
          system. By simulating real-world Indian road conditions and traffic
          scenarios, we aspire to prepare learners for the complexities of
          on-road driving, enhancing their confidence and competence. We are
          committed to reducing road accidents and promoting responsible driving
          habits through continuous learning and instant feedback. Our
          application will serve as a catalyst for change, setting new standards
          in driver education, and contributing to safer roads across India.
        </p>
      </Container>

      <Container className='text-center mt-5'>
        <Button variant="primary" size="lg" className="mt-3" onClick={handleClick}>
           Chekout the demo
        </Button>
    </Container>
    </div>

  );
};

export default About;
