import React from "react";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "../../components/Footer";
import { Table } from "react-bootstrap";
function History() {
  return (
    <>
      <CustomerNavbar />
      <div className="Full-Width">
        <div className="Myshop container">
          <h1 className="Top-Heading">History</h1>
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name: </th>
                <th>Total Amount </th>
                <th>Items</th>
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
              </tr>
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
              </tr>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default History;
