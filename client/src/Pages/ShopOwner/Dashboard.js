import React from "react";
import NavbarForshopowner from "./NavbarForshopowner";
import Footer from "../../components/Footer";
import "./ShopOwner.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid } from "@mui/material";
import CardComponentofItems from "./CardComponentofItems";
import { useState, useEffect, useRef } from "react";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
const api = "http://localhost:5000/api/shopowners/getowner";


function Dashboard() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(88.363892);
  const [mapLatitude, setMapLatitude] = useState(22.572645);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const [owner, setOwner] = useState([]);
  useEffect(() => {
    axios
      .post(api, {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setOwner(res.data.user);
        setMapLongitude(res.data.user.Lng);
        setMapLatitude(res.data.user.Lat);
        updateMap();
       
      });
  }, []);

  useEffect(() => {
    let map = tt.map({
      key: "RpTpj8X957oUyvRp2OAimvyUAO2KmCdG",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    setMap(map);
    
    return () => map.remove();
  }, []);
  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };
  return (
    <>
      <NavbarForshopowner />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Welcome, {owner.name} !</h1>
          <Container>
            <Row>
              <Col sm={6} md={6}>
                <div className="Temp">
                  <img src={owner.ownerpic} alt="Logo" className="Avatar" />
                </div>
              </Col>
              <Col sm={6} md={6}>
                <div className=" Temp">
                  <Box sx={{ minWidth: 280 }}>
                    <React.Fragment>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          Your Details
                        </Typography>
                        <Typography variant="h5" component="div">
                          <Chip label="Shop Name" /> : {owner.name}'s Shop
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Tag Line : </b> {owner.tagline}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b> Email :</b> {owner.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          <b>Location of Shop :</b> {owner.location}
                        </Typography>
                        <Typography variant="body2">
                          <b>
                            <i>Total Orders Done : {owner.totalorders}</i>
                          </b>
                        </Typography>
                        <Typography variant="body2">
                          <b>
                            <i>Total Money Earned : {owner.totalmoney}</i>
                          </b>
                        </Typography>
                        <Typography variant="body2">
                          <b>
                            <i>Total Items in the shop : {owner.totalitems}</i>
                          </b>
                        </Typography>
                      </CardContent>
                      <Typography variant="body2">
                        <b>
                          <i>City Name : {owner.city}</i>
                        </b>
                      </Typography>
                      <CardActions>
                        <Button size="small">Edit Profile</Button>
                      </CardActions>
                    </React.Fragment>
                  </Box>
                </div>
              </Col>
            </Row>
          </Container>
          <h1 className="Top-Heading">Lists Of Items in Your Shop</h1>

          {owner.TotalItemsCount > 0 ? (
            <>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                padding="2px"
              >
                {owner.listsofitems.map((item) => (
                  <CardComponentofItems
                    image={item.productpic}
                    name={item.productname}
                    desc={item.productdescription}
                    amount={item.productprice}
                    Quantity={item.productamount}
                  />
                ))}
              </Grid>
            </>
          ) : (
            <>
              <p className="No-items">
                You have not added any items in your shop. Please add items
              </p>
            </>
          )}

          <h1 className="Top-Heading">Your Shop Location</h1>
          <div ref={mapElement} className="container mapDiv" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;

/*

<CardComponentofItems
              image="https://i.ibb.co/rMT2Y2g/download.jpg"
              name="Kurkure"
              desc="This is a description of the item"
              amount="Rs.100"
            />
            */
