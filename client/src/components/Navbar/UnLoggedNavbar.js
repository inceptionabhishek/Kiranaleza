import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import "./Unlogged.css";
import Logo from "../../Assets/Images/Logo.jpeg";
function UnLoggedNavbar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/" className="links">
            <img src={Logo} height="70px" alt="Logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="Scroll-Toggle"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="ml-auto" navbarScroll>
              <Link to="/loginauth" className="links">
                Login
                <VpnKeyIcon />
              </Link>
              <Link to="/signupauth" className="links">
                Signup
                <LockIcon />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UnLoggedNavbar;
