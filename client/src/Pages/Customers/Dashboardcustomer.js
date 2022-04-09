import React from "react";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Data from "./RandomBuyingQuotes";
import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col,Card,Button } from "react-bootstrap";
function Dashboardcustomer() {
  const random = Math.floor(Math.random() * Data.length);
  const [quote, setQuote] = useState(Data[random]);
  const [loading, setLoading] = useState(true);

  const [cat, setCat] = useState("");
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setCat(data[0].url);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <CustomerNavbar />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Hello, Abhishek Kumar!❤</h1>
          <Container>
            <Row>
              <Col md={6}>
                <p>Here's a random quote for you:</p>
                <div className="Quote-Container">
                  <p className="Quote">{quote.quote}</p>
                </div>
                <div className="Cat-Container">
                  {loading ? (
                    <>
                      <Spinner animation="border" variant="primary" />
                    </>
                  ) : (
                    <>
                      <img src={cat} alt="cat" className="cat" />
                    </>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <div className="Card-Container">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://randomuser.me/api/portraits/men/98.jpg"
                      className="Card-Image"
                    />
                    <Card.Body>
                      <Card.Title>Your Details</Card.Title>
                      <Card.Text>
                        <b> Name : </b>Abhishek kumar
                      </Card.Text>
                      <Card.Text>
                        <b> Location : </b>Kolkata
                      </Card.Text>
                      <Card.Text>
                        <b> Total Bought Items Amount : </b>1600 RS
                      </Card.Text>
                      <Button variant="primary">Edit Profile</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>

          <h2 className="Top-Heading">
            Visit our <Link to="/customer/exploreshops">shops</Link> to see our
            latest products!🍸🌟🍺
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboardcustomer;
