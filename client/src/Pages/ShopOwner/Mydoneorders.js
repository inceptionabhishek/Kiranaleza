import React from "react";
import NavbarForShopOwner from "./NavbarForshopowner";
import Footer from "../../components/Footer";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
const api = "http://localhost:5000/api/shopowners/getowner";
function Mydoneorders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .post(api, {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setOrders(res.data.user.listsoforders);
      });
  }, [orders]);
  return (
    <>
      <NavbarForShopOwner />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Your Completed Orders</h1>
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name: </th>
                <th>Items</th>
                <th>Total Amount </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  order.status === "pending" && (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order.customername}</td>
                      <td>
                        <ul>
                          {order.Items.map((item) => {
                            return (
                              <>
                                <li>
                                  {item.productname} : {item.productamount}
                                  <Avatar alt="itempic" src={item.productpic} />
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </td>
                      <td>{order.TotalAmount}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mydoneorders;
