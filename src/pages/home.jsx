import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "../components/Carousels"
import '../styles/styles.css'

function Home() {
  return (
    <>
    <h1 className="display-3 text-center mt-5" >Digital Car Tutor</h1>
    <h3 className="text-center mt-3">Your Journey to Learning Driving, Redefined.</h3>
        <ControlledCarousel />
   </>
  );
}

export default Home;
