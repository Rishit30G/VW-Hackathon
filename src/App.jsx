import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/Navbar";
import Team from "./pages/team";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo from "./pages/demo";
import About from "./pages/about";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
        <div className="main-content">
        {/* <Footer /> */}
        </div> 
      </Router>
    </>
  );
}

export default App;
