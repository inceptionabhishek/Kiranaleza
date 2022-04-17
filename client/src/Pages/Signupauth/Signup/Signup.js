import React from "react";
import "./Signup.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import UnLoggedNavbar from "../../../components/Navbar/UnLoggedNavbar";
import Footer from "../../../components/Footer";
import Cat from "../../../Assets/Images/SignupCar.png";


function Signup() {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [allvalues, setAllvalues] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [City, setCity] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || Image === "" || password === "") {
      setAllvalues(true);
    } else {
      axios
        .post("http://localhost:5000/customers/register", {
          Name: name,
          profilepic: Image,
          email: email,
          password: password,
          Address: address,
          City: City,
          TotalBoughtItems: 0,
          FavouriateShops: [],
          BuyingHistory: [],
          MyCart: [],
        })
        .then((res) => {
          if (res.data.message === "User Created") {
            localStorage.setItem("TypeofUser", "Customer");
            localStorage.setItem("email", email);
            localStorage.setItem("login", true);
            window.location.href = "/customer/dashboard";
          } else {
            console.log(res.data);
          }
        });
    }
  };
  const citychangehandle = (e) => {
    setCity(e.target.value);
  };
  const HandlerFunction = async () => {
    if (Image === "") {
      setAllvalues(true);
    } else {
      setUploaded(true);
      const formData = new FormData();
      formData.append("file", Image);
      formData.append("upload_preset", "CheggClone");
      formData.append("cloud_name", "dkeiewkz6");
      await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
          console.log(data.url);
          setUploaded(false);
        });
    }
    setUploaded(false);
  };
  return (
    <div className="Signup">
      <UnLoggedNavbar />
      <br />
      <br />
      <div>
        <div className="container">
          <div class="row">
            <div class="col-md-4 col-lg-3"></div>
            <div class="col-md-8 col-lg-6">
              <h1 className="Top-Heading">Sign Up Customer</h1>
              <div className="login-Cat">
                <img src={Cat} alt="Login Cat" className="Login-Cat" />
              </div>
              <div class="demo-content bg-alt">
                <form onSubmit={handleFormSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your UserName"
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email </label>
                    <input
                      type="email"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your UserName"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Address"
                      aria-describedby="Address"
                      placeholder="Enter Your Address"
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="examplePassword"
                      aria-describedby="passwordHelp"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div class="form-check">
                    <p className="details-desciptions-text">
                      Please Add Your Profile Image
                      <AssignmentIndIcon />
                    </p>
                    <input
                      type="file"
                      onChange={(event) => setImage(event.target.files[0])}
                    />
                    <Button variant="primary" onClick={HandlerFunction}>
                      Upload Image to database
                    </Button>

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
                  </div>
                  <label>Select Your City</label>
                  <Form.Control as="select" custom onChange={citychangehandle}>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Benguluru">Benguluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </Form.Control>
                  {allvalues === true ? (
                    <>
                      <div class="alert">
                        <span
                          class="closebtn"
                          onClick={() => setAllvalues(false)}
                        >
                          &times;
                        </span>
                        <strong>Please!</strong> Fill all the values
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <br />
                  <br />

                  <button
                    onClick={handleFormSubmit}
                    type="submit"
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Signup;
