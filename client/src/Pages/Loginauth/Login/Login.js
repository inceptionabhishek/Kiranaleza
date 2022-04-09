import React, { useEffect } from "react";
import { useState } from "react";
import UnLoggedNavbar from "../../../components/Navbar/UnLoggedNavbar";
import Footer from "../../../components/Footer";
import "./Login.css";
import LoginCat from "../../../Assets/Images/LoginCat.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const handleFormSubmit = () => {};
  return (
    <div className="Login">
      <UnLoggedNavbar />
      <div className="login-container">
        <h1 className="Top-Heading">Login Customer</h1>
        <div className="login-Cat">
          <img src={LoginCat} alt="Login Cat" className="Login-Cat" />
        </div>
        <div className="container">
          <div class="row">
            <div class="col-md-4 col-lg-3"></div>
            <div class="col-md-8 col-lg-6">
              <div class="demo-content bg-alt">
                <form onSubmit={handleFormSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>

                    <input
                      type="email"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your email"
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

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
                {alert === true ? (
                  <>
                    <div class="alert">
                      <span class="closebtn" onClick={() => setAlert(false)}>
                        &times;
                      </span>
                      <strong>:( </strong>Wrong Password or Email.
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
