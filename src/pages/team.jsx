import { Container, Row, Col } from "react-bootstrap";
import BasicCardExample from "../components/Card";

const Team = () => {
  return (
    <>
      <Container className="my-5">
        <h1>Our Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis perspiciatis possimus nisi fuga aspernatur cupiditate debitis maxime nihil iusto, reprehenderit quo maiores et explicabo est, totam, hic obcaecati esse expedita architecto? Placeat voluptate impedit, tenetur hic amet nihil eveniet sequi! At ducimus dicta dolorum non quasi laboriosam excepturi consequatur magnam voluptatibus. Ullam incidunt sequi, voluptates consectetur fuga accusamus aliquid eaque!</p>
      </Container>
      <Container className="mt-4">
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <BasicCardExample
            title="Piyush Jena"
            text="Incoming SDE Intern at XYZ"
            link="https://google.com"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Shubham Chandel"
            text="Incoming SDE Intern at XYZ"
            link="https://google.com"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Sahil Rout"
            text="Incoming SDE Intern at XYZ"
            link="https://google.com"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Rishit Gupta"
            text="Incoming SDE Intern at XYZ"
            link="https://google.com"
          />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Team;
