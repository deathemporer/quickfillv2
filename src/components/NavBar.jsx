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
          <Navbar.Brand as={Link} to="/home">
            QuickFill
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/wallet">
              Wallet
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
