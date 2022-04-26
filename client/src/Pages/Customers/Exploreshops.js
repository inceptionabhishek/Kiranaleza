import React from "react";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "../../components/Footer";
import "./customers.css";
import { Grid, Box } from "@mui/material";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Exploreshops() {
  const location = localStorage.getItem("location");
  const email = localStorage.getItem("email");
  const [shops, setshops] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/get/shop", {
        city: location,
      })
      .then((res) => {
        console.log(res.data);
        setshops(res.data.Shops);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CustomerNavbar />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Explore Shops in {location}</h1>
          {shops.map((shop) => {
            return (
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
                      src="https://i.ibb.co/DwjkYRq/kirana.jpg"
                      alt="Benguluru"
                      width="200px"
                    />
                    <br />
                    <p>{shop.Shopname} Local Shop</p>
                    <p>
                      <b>Owner</b>: {shop.Ownername}
                    </p>
                    <p>
                      Location : somewhere in {location} <LocationOnIcon />
                    </p>
                    <Button className="Button">Visit Shop</Button>
                    <br />
                    <Button className="Button">Add to Favourite Shop</Button>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Exploreshops;
/*
            
*/
