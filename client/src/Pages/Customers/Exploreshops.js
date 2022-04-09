import React from "react";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "../../components/Footer";
import "./customers.css";
import { Grid, Box } from "@mui/material";
import { Button } from "react-bootstrap";
function Exploreshops() {
  return (
    <>
      <CustomerNavbar />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Explore Shops in kolkata</h1>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            padding="2px"
          >
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="500px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/vZHY4Xq/Benguluru-Pic-min.jpg"
                  alt="Benguluru"
                  width="200px"
                />
                <br />
                <p>Ramesh Local Shop</p>
                <p>
                  <b>Owner</b>: Ramesh sutar
                </p>
                <p>Location : Vip Nagar, Kolkata-700100</p>
                <Button className="Button">Visit Shop</Button>
                <br />
                <Button className="Button">Add to Favourite Shop</Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Exploreshops;
