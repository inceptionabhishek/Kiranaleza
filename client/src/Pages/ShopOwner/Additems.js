import React from "react";
import NavbarForshopower from "./NavbarForshopowner";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../../Assets/Images/img.png";
import { Spinner } from "react-bootstrap";
import axios from "axios";
function Additems() {
  const [productname, setProductname] = useState("");
  const [productpic, setProductpic] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productdescription, setProductdescription] = useState("");
  const [productamount, setProductamount] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const handleAdditems = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/shopowners/additem", {
        email: localStorage.getItem("email"),
        item: {
          productname,
          productpic,
          productprice,
          productdescription,
          productamount,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandlerFunction2 = async (e) => {
    e.preventDefault();
    if (productpic === "") {
      alert("Please Select a product image first!");
    } else {
      setUploaded(true);
      const formData = new FormData();
      formData.append("file", productpic);
      formData.append("upload_preset", "CheggClone");
      formData.append("cloud_name", "dkeiewkz6");
      await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setProductpic(data.url);
          console.log(data.url);
          setUploaded(false);
        });
    }
    setUploaded(false);
  };
  return (
    <>
      <NavbarForshopower />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Add Items</h1>
          <Container>
            <Row>
              <Col md={6}>
                <form>
                  <div className="form-group">
                    <label>Item Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Item Name"
                      onChange={(e) => setProductname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Item Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Item Price"
                      onChange={(e) => setProductprice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Item's Quantity"
                      onChange={(e) => setProductamount(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Item Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enter Item Description"
                      onChange={(e) => setProductdescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Item Image</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Enter Item Image"
                      onChange={(e) => setProductpic(e.target.files[0])}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={HandlerFunction2}
                  >
                    Upload Image
                  </button>
                  <br />
                  <br />
                  <br />
                  {uploaded === true ? (
                    <button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </button>
                  ) : (
                    <></>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAdditems}
                  >
                    Submit
                  </button>
                </form>
              </Col>
              <Col md={6}>
                <img src={Image} alt="item" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Additems;
