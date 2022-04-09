import React from "react";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "../../components/Footer";
import { Table,Modal,Button } from "react-bootstrap";
import {useState} from 'react'
import PaymentIcon from "@mui/icons-material/Payment";
function Mycart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CustomerNavbar />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">Your Cart</h1>
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name: </th>
                <th>Total Amount </th>
                <th>Items</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <ul>
                    <li>item1 : 12</li>
                    <li>item2 : 1</li>
                    <li>item3 : 34</li>
                    <li>item4 :12</li>
                  </ul>
                </td>
                <td>
                  <button onClick={handleShow} className="btn btn-primary">
                    CheckOut
                  </button>
                  <br />
                  <br />
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Amazon Pay <PaymentIcon />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Total Items : </p>
            <ul>
              <li>item1 : 12</li>
              <li>item2 : 1</li>
              <li>item3 : 34</li>
              <li>item4 :12</li>
            </ul>
            <p>Total Amount(in rupees) :1299 </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default Mycart;
