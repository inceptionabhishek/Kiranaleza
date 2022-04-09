import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import UnloggedNavbar from "../../components/Navbar/UnLoggedNavbar";
import Footer from "../../components/Footer";
import { Grid, Box } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
function Loginauth() {
  return (
    <>
      <UnloggedNavbar />
      <div className="Decide ">
        <h1 className="Top-Heading">Login As a ..</h1>
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
                <AddShoppingCartIcon style={{ fontSize: 130 }} />
                <Link to="/loginauth/login" className="links">
                  <h2 className="Top-Heading">Customer</h2>
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
                <AddBusinessIcon style={{ fontSize: 130 }} />
                <Link to="/loginauth/loginowner" className="links">
                  <h2 className="Top-Heading">Shop Owner</h2>
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

export default Loginauth;
