import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/Navbar";
import Team from "./pages/team";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo from "./pages/demo";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
