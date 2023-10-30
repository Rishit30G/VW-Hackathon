import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "../components/Carousels"

function Home() {
  return (
    <>
        <ControlledCarousel />
        <Container className="mt-5">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi
            assumenda aut nemo aliquid quo deserunt nobis quis iste iure? Nulla
            aperiam dolores blanditiis numquam totam, ratione similique, maxime
            quidem ipsa inventore accusantium. Natus delectus explicabo autem
            officiis impedit ea possimus veritatis. Repellendus perferendis
            earum odit error asperiores vel quo assumenda natus mollitia
            doloribus. Dolorum at quas quaerat ipsam ut!
          </p>
        </Container>

        <Container className="mt-5">
          <h1>Project Idea</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quas quaerat tempore maiores sint accusamus voluptate ut, eos eaque
            fugit optio corrupti enim voluptatum dolor laborum ea magnam quam
            vitae qui esse? Aperiam voluptatibus unde consectetur quae quos ad
            quo, a accusantium exercitationem atque numquam quisquam laborum
            fuga, natus vitae neque cupiditate molestias labore delectus. Fuga
            commodi assumenda aperiam delectus!
          </p>
        </Container>
    </>
  );
}

export default Home;
