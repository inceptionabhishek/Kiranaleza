import React from "react";
import "./Signup.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import UnLoggedNavbar from "../../../components/Navbar/UnLoggedNavbar";
import Footer from "../../../components/Footer";
import Cat from "../../../Assets/Images/SignupCatOwner.png";
function SignupOwner() {
  const [shopName, setShopName] = useState("");
  const [nameOfowner, setNameofowner] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Image, setImage] = useState(
    "https://i.ibb.co/mzttZv4/Avatar-Maker.png"
  );
  const [city, setCity] = useState("Kolkata");
  const [allvalues, setAllvalues] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [tagline, setTagline] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [adress, setAdress] = useState("");
  const [status, setStatus] = useState(null);
  const [cityLat, setCityLat] = useState("22.5726");
  const [cityLng, setCityLng] = useState("88.3639");
  const citychangehandle = (e) => {
    setCity(e.target.value);
    if (e.target.value === "Kolkata") {
      setCityLat("22.5726");
      setCityLng("88.3639");
    } else if (e.target.value === "Delhi") {
      setCityLat("28.7041");
      setCityLng("77.1025");
    } else if (e.target.value === "Mumbai") {
      setCityLat("19.076");
      setCityLng("72.8777");
    } else if (e.target.value === "Bangalore") {
      setCityLat("12.9716");
      setCityLng("77.5946");
    } else if (e.target.value === "Chennai") {
      setCityLat("13.0827");
      setCityLng("80.2707");
    } else if (e.target.value === "Rajasthan") {
      setCityLat("27.0238");
      setCityLng("74.2179");
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      shopName.length > 0 &&
      nameOfowner.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      lat !== null &&
      lng !== null &&
      Thumbnail !== "" &&
      tagline.length > 0
    ) {
      console.log(cityLat, cityLng);

      await axios
        .post("http://localhost:5000/api/shopowners/register", {
          name: nameOfowner,
          shopname: shopName,
          email: email,
          password: password,
          tagline: tagline,
          ownerpic: Image,
          shoppic: Thumbnail,
          location: adress,
          Lat: lat,
          Lng: lng,
          city: city,
          totalmoney: 0,
          listsofitems: [],
          listsoforders: [],
          mycustormers: [],
        })
        .then((res) => {
          if (res.data.message === "User Created") {
            axios
              .post("http://localhost:5000/api/add/shops", {
                Nameofcity: city,
                Lat: cityLat,
                Lng: cityLng,
                Shopname: shopName,
                email: email,
                Ownername: nameOfowner,
                shopLat: lat,
                shopLng: lng,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            localStorage.setItem("TypeofUser", "ShopOwner");
            localStorage.setItem("email", email);
            localStorage.setItem("login", true);
            window.location.href = "/owner/myshop";
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAllvalues(true);
    }
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
  const HandlerFunction2 = async () => {
    if (Thumbnail === "") {
      setAllvalues(true);
    } else {
      setUploaded(true);
      const formData = new FormData();
      formData.append("file", Thumbnail);
      formData.append("upload_preset", "CheggClone");
      formData.append("cloud_name", "dkeiewkz6");
      await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setThumbnail(data.url);
          console.log(data.url);
          setUploaded(false);
        });
    }
    setUploaded(false);
  };
  const GetLocation = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
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
              <h1 className="Top-Heading">SignupOwner</h1>
              <div className="login-Cat">
                <img src={Cat} alt="Login Cat" className="Login-Cat" />
              </div>
              <div className="login-Cat">
                <img src={Image} alt="Profile" className="Profile-Image" />
              </div>
              <div class="demo-content bg-alt">
                <form onSubmit={handleFormSubmit} autoComplete="off">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name Of the shop </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your ShopName"
                      onChange={(event) => setShopName(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Enter Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Enter Your Name"
                      onChange={(event) => setNameofowner(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      Enter Your Shop's Tagline
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Tagline"
                      onChange={(event) => setTagline(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">
                      Enter Your Shop's Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userNameId"
                      aria-describedby="userNameHelp"
                      placeholder="Address"
                      onChange={(event) => setAdress(event.target.value)}
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

                  <label>Select Your City</label>
                  <Form.Control as="select" custom onChange={citychangehandle}>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Benguluru">Benguluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </Form.Control>
                  <br />
                  <br />

                  <div class="form-check">
                    <div className="upload-image-div">
                      <p className="details-desciptions-text">
                        <i> Please Add Your Profile Image = </i>
                      </p>
                      <input
                        type="file"
                        onChange={(event) => setImage(event.target.files[0])}
                      />
                      <Button variant="primary" onClick={HandlerFunction}>
                        Upload
                      </Button>
                    </div>
                  </div>
                  <div class="form-check">
                    <div className="upload-image-div">
                      <p className="details-desciptions-text">
                        <i>Please Add Your Shop Thumbnail = </i>
                      </p>
                      <input
                        type="file"
                        onChange={(event) =>
                          setThumbnail(event.target.files[0])
                        }
                      />
                      <Button variant="primary" onClick={HandlerFunction2}>
                        Upload
                      </Button>
                    </div>
                  </div>
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

                  <Button variant="primary" type="submit" onClick={GetLocation}>
                    Get Location*
                    <AddLocationIcon />
                  </Button>
                  {lat === null ? (
                    <></>
                  ) : (
                    <>
                      <br />
                      <b>
                        Your Location is : latitude = {lat} and longitude ={" "}
                        {lng}
                      </b>
                    </>
                  )}
                  <br />
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

export default SignupOwner;
