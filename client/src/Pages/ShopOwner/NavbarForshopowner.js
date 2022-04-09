import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import Logo from "../../Assets/Images/Logo.jpeg";
import "./ShopOwner.css";
function NavbarForshopowner() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/owner/myshop" className="links">
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
              <Link to="/owner/mycustomer" className="links">
                Mycustomers
              </Link>
              <Link to="/owner/mypendingorders" className="links">
                Mypendingorders
              </Link>
              <Link to="/owner/mydoneorders" className="links">
                Mydoneorders
              </Link>
              <Link to="/owner/additems" className="links">
                Additems
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

export default NavbarForshopowner;
