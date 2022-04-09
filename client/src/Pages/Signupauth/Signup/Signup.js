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
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [allvalues, setAllvalues] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const handleFormSubmit = () => {};
  const HandlerFunction = () => {};
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
                    <label for="exampleInputEmail1">UserName</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your UserName"
                      onChange={(event) => setUsername(event.target.value)}
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
