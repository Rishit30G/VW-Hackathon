import { Container, Row, Col } from "react-bootstrap";
import BasicCardExample from "../components/Card";

const Team = () => {
  return (
    <>
    <Container fluid>
      <img src="https://picsum.photos/1880/300"/>
    </Container>
<Container className="my-5">
        <h1 className="display-3"> <b>Our Team</b></h1>
        <h4 className="fw-light mt-3">
          Our dynamic team consists of talented computer science undergraduates who have recently secured positions with prestigious multinational companies and innovative startups. With a solid foundation in technology and a passion for driving innovation, we bring a wealth of knowledge and fresh perspectives to the table. 
        </h4>
      </Container>
      <Container className="mt-4">
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        <Col>
          <BasicCardExample
            title="Piyush Jena"
            text="Incoming Analyst at Tradence"
            imgPath="https://i.postimg.cc/kMt8Xyfb/1645034797116.jpg"
            link="https://www.linkedin.com/in/piyush-jena-0799511b8/"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Shubham Chandel"
            text="Incoming SDE Intern at Bharat Pe"
            imgPath="https://i.postimg.cc/mgxPGbJk/Screenshot-2023-11-03-115138.png"
            link="https://www.linkedin.com/in/shubham-chandel-3071aa202/"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Sahil Rout"
            text="Incoming Analyst at Deloitte USI"
            imgPath="https://i.postimg.cc/yxSGYrNd/SAVE-20231031-091052.jpg"
            link="https://www.linkedin.com/in/sahil-rout-b364821b8/"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Rishit Gupta"
            text="Incoming SDE Intern at rtCamp"
            imgPath="https://i.postimg.cc/nh6gkWX6/Screenshot-2023-11-03-115535.png"
            link="https://www.linkedin.com/in/rishit-gupta-4b18841b1/"
          />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Team;
