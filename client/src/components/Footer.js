import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from "../Assets/Images/Logo.jpeg";
import "./Compo.css";
import { Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { textAlign } from "@mui/system";
function Footer() {
  return (
    <MDBFooter color="blue" className="Footer font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title">Kiranaलेज़ा </h4>
            <p>
              Online Local Grocery Shop. It is a platform where you can order
              your favourite items from your favourite local shop.
            </p>
            <h2 className="title">Connect with Us</h2>
            <div className="Icons-Connect">
              <Stack direction="row" spacing={2}>
                <InstagramIcon style={{ fontSize: 50 }} />
                <FacebookIcon style={{ fontSize: 50 }} />
                <LinkedInIcon style={{ fontSize: 50 }} />
              </Stack>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Connect With us :</h5>
            <ul>
              <li className="links list-unstyled">
                <Link to="/locationinfo/kolkata" className="links">
                  Kolkata
                </Link>
              </li>
              <li className=" list-unstyled">
                <Link to="/locationinfo/delhi" className="links">
                  Delhi
                </Link>
              </li>
              <li className="links list-unstyled">
                <Link to="/locationinfo/benguluru" className="links">
                  Benguluru
                </Link>
              </li>
              <li className="links list-unstyled">
                <Link to="/locationinfo/chennai" className="links">
                  Chennai
                </Link>
              </li>
              <li className="links list-unstyled">
                <Link to="/locationinfo/gujarat" className="links">
                  Gujarat
                </Link>
              </li>
              <li className="links list-unstyled">
                <Link to="/locationinfo/rajasthan" className="links">
                  Rajasthan
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            style={{
              color: "white",
            }}
            href="https://www.kiranaLeza.com"
          >
            {" "}
            Kiranaलेज़ा.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
