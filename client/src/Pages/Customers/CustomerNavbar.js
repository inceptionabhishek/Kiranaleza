import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../../Assets/Images/Logo.jpeg";
import "./customers.css";
function CustomerNavbar() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/customer/dashboard" className="links">
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
              <Link to="/customer/exploreshops" className="links">
                Exploreshops
              </Link>
              <Link to="/customer/favouriteshops" className="links">
                FavouriteShops
              </Link>
              <Link to="/customer/history" className="links">
                ViewHistory
              </Link>
              <Link to="/customer/mycart" className="links">
                MyCart
              </Link>
              <Button>
                <VpnKeyIcon />
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomerNavbar;
