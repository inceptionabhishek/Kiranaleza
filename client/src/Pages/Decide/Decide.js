import React from "react";
import UnloggedNavbar from "../../components/Navbar/UnLoggedNavbar";
import Footer from "../../components/Footer";
import { Grid, Box } from "@mui/material";
import "./Decide.css";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function Decide() {
  return (
    <>
      <UnloggedNavbar />
      <div className="Decide ">
        <h1 className="Top-Heading">Select Login/Signup</h1>
        <div className="container">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            padding="2px"
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="black"
                borderRadius="10px"
                boxShadow={3}
              >
                <LoginIcon style={{ fontSize: 130 }} />
                <Link to="/loginauth" className="links">
                  <h2 className="Top-Heading">LOGIN</h2>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="black"
                borderRadius="10px"
                boxShadow={3}
              >
                <LockOpenIcon style={{ fontSize: 130 }} />
                <Link to="/signupauth" className="links">
                  <h2 className="Top-Heading">SIGNUP</h2>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Decide;
