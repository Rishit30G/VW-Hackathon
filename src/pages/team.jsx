import { Container, Row, Col } from "react-bootstrap";
import BasicCardExample from "../components/Card";

const Team = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="display-5">Our Team</h1>
        <p>
        Our dynamic team consists of talented <b>computer science undergraduates</b> who have recently <b>secured positions with prestigious multinational companies and innovative startups </b>. With a solid foundation in technology and a passion for driving innovation, we bring a wealth of knowledge and fresh perspectives to the table. Our expertise spans various domains, enabling us to delve deep into brainstorming and ideation sessions, ensuring the development of a robust and user-centric driving learning application. We are driven by a shared vision of transforming driver education in India, committed to leveraging our skills and experiences to make a meaningful impact.
    </p>
      </Container>
      <Container className="mt-4">
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <BasicCardExample
            title="Piyush Jena"
            text="Incoming SDE at Tradence Analytics"
            imgPath="https://i.postimg.cc/kMt8Xyfb/1645034797116.jpg"
            link="https://www.linkedin.com/in/piyush-jena-0799511b8/"
          />
        </Col>
        <Col>
          <BasicCardExample
            title="Shubham Chandel"
            text="Incoming SDE Intern at Bharat Pe"
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
            imgPath="https://i.postimg.cc/1XP9SPvM/Screenshot-2023-10-20-152323.png"
            link="https://www.linkedin.com/in/rishit-gupta-4b18841b1/"
          />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Team;
