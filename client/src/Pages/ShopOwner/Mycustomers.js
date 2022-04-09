import React from "react";
import "./ShopOwner.css";
import NavbarForshopowner from "./NavbarForshopowner";
import Footer from "../../components/Footer";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComponentofCustomers from "./CardComponentofCustomers";
const api = "http://localhost:5000/api/shopowners/getowner";
function Mycustomers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .post(api, {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data.user.mycustormers);
      });
  }, []);
  return (
    <>
      <NavbarForshopowner />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Your Customers</h1>
          {customers.length > 0 ? (
            customers.map((customer) => {
              return <CardComponentofCustomers customer={customer} />;
            })
          ) : (
            <h1>No Customers</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mycustomers;
