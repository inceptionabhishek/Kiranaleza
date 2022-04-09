import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Grid, Box, Stack } from "@mui/material";
import Logo from "../../Assets/Images/Logo.jpeg";
import Basket from "../../Assets/Images/Basket.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Product from "../../Assets/Images/img.png";
import Benguluru from "../../Assets/Images/Benguluru-Pic-min.jpg";
import Delhi from "../../Assets/Images/Delhi-Pic-min.jpg";
import Kolkata from "../../Assets/Images/Kolkata-Pic-min.jpg";
import Rajasthan from "../../Assets/Images/Rajasthan-Pic-min.jpg";
import Gujarat from "../../Assets/Images/Gujarat-Pic-min.jpg";
import Chennai from "../../Assets/Images/Chennai-Pic-min.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Customer1 from "../../Assets/Images/Customer-1.jpg";
import Customer2 from "../../Assets/Images/Customer-2.jpg";
import Customer3 from "../../Assets/Images/Customer-3.jpg";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <div className="Main-Logo-Display-Div">
        <div className="Logo-Display">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <div className="Div-Divider "></div>
        <div className="Display-Content-1 ">
          <br />
          <br />
          <Container>
            <Row>
              <Col sm={6}>
                <div className="Display-Content-1-left ">
                  <h1 className="Display-Content-1-left-text">
                    Connect
                    <br />
                    with Local <br />
                    Kirana <br /> Shop
                    <br /> Owners.
                  </h1>
                </div>
              </Col>
              <Col sm={6}>
                <div className="Display-Content-1-right">
                  <img src={Basket} alt="Basket" className="Basket" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Display-Content-2">
          <br />
          <br />
          <br />
          <h1 className="Display-Context-2-header">THIS IS WHAT WE DO</h1>
          <br />
          <br />
          <Container>
            <Row>
              <Col sm={4}>
                <div className="Display-Content-2-left">
                  <ShoppingCartIcon style={{ fontSize: 70 }} />
                  <h3>Product Collections</h3>
                  <p className="Do-Desc">
                    We provide you the Collections of items present in Your
                    favourite Kirana Shop.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="Display-Content-2-left">
                  <OnlinePredictionIcon style={{ fontSize: 70 }} />
                  <h3>Order Online</h3>
                  <p className="Do-Desc">Order Your Grocery Items Online.</p>
                </div>
              </Col>
              <Col sm={4}>
                <div className="Display-Content-2-left">
                  <AttachMoneyIcon style={{ fontSize: 70 }} />
                  <h3>Discount</h3>
                  <p className="Do-Desc">
                    We will do the negotiation with the Shop Owner XD
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="Display-Content-3">
        <h1 className="Display-Content-3-left-text">
          We are Available here
          <LocationOnIcon style={{ fontSize: 70 }} />
        </h1>
        <div className="Cities-Desc">
          <img
            src="https://media.giphy.com/media/lSbJWe7IMInss7r22B/giphy.gif"
            alt="india"
            className="India-Travel"
          />
        </div>
        <div className="container">
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
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/vZHY4Xq/Benguluru-Pic-min.jpg"
                  alt="Benguluru"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Benguluru ಕೋಲ್ಕತ್ತಾ </h3>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/zfSwHZC/Delhi-Pic-min.jpg"
                  alt="Delhi"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Delhi दिल्ली </h3>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/P6xDB29/Kolkata-Pic-min.jpg"
                  alt="Kolkata"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Kolkata কলকাতা </h3>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/jzy5fKT/Chennai-Pic-min.jpg"
                  alt="Chennai"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Chennai சென்னை </h3>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/3M6Cj73/Rajasthan-Pic-min.jpg"
                  alt="Rajasthan"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Rajasthan राजस्थानी </h3>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                height="300px"
                bgcolor="rgb(240, 214, 68)"
                boxShadow={3}
                borderRadius="20px"
              >
                <img
                  src="https://i.ibb.co/hFvmcK4/Gujarat-Pic-min.jpg"
                  alt="Gujarat"
                  className="City-Image"
                />
                <br />
                <h3 className="City-Title">Gujarat ગુજરાત </h3>
              </Box>
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
      </div>
      <div className="Customers-Review">
        <h1 className="Display-Content-3-left-text-2">
          Reviews
          <br />
          <br />
        </h1>
        <div className="Customer-Rewiew-Content">
          <Container>
            <Row>
              <Col sm={4}>
                <Stack direction="column">
                  <img
                    src={Customer1}
                    alt="Customer1"
                    className="Customer-Image"
                  />
                  <h1 className="Customer-Name">Rajesh</h1>
                  <p className="review">
                    Kiranaलेज़ा provided me with the best prices for the items
                    that I had in my cart. I am very happy with the service.
                  </p>
                </Stack>
              </Col>
              <Col sm={4}>
                <Stack direction="column">
                  <img
                    src={Customer2}
                    alt="Customer1"
                    className="Customer-Image"
                  />
                  <h1 className="Customer-Name">Sukhvinder</h1>
                  <p className="review">
                    It provided me the correct Infromation about the items that
                    currently present in my favourite kirana shop, So, that i
                    dont need to check every time.
                  </p>
                </Stack>
              </Col>
              <Col sm={4}>
                <Stack direction="column">
                  <img
                    src={Customer3}
                    alt="Customer1"
                    className="Customer-Image"
                  />
                  <h1 className="Customer-Name">Rohini</h1>
                  <p className="review">
                    Kiranaलेज़ा helped me to connect with my Customers. My
                    business gradually increased with the help of Kiranaलेज़ा.
                  </p>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
      </div>
      <div className="Display-Content-4">
        <h1 className="Display-Content-3-left-text-2">
          Let
          <br />
          Us be
          <br />
          Your Kirana wale Bhaiya{" "}
          <Link to="/decide">
            <Button
              className="Button-Get-started"
              color="sucess"
              onClick={window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth",
              })}
            >
              Get Started
            </Button>
          </Link>
        </h1>
        <div className="Image-Footed-Products">
          <img src={Product} alt="Product" className="Product-Image" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

/*



*/
