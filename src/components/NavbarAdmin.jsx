import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import MapLoader from "./MapLoader";
// import Wallet from "./Wallet";
// import Login from "./Login";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className="navclass">
        <Container>
          <Navbar.Brand as={Link} to="/addStation">
            QuickFill
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/addStation">
              Add Station
            </Nav.Link>
            <Nav.Link as={Link} to="/deleteStation">
              Delete Station
            </Nav.Link>
            <Nav.Link as={Link} to="/updateStation">
              Update Station
            </Nav.Link>
            <Nav.Link as={Link} to="/viewStation">
              View Station
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{color:"red"}}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
