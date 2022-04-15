const express = require("express");
const router = express.Router();
const customer = require("../models/customers");
// Add A customer:
router.route("/add").post((req, res) => {
  customer
    .findOne({ email: req.body.email })
    .then((customer) => {
      if (customer) {
        res.status(400).send("Customer already exists");
      } else {
        const newCustomer = new customer({
          Name: req.body.Name,
          profilepic: req.body.profilepic,
          email: req.body.email,
          password: req.body.password,
          Address: req.body.Address,
          TotalBoughtItems: req.body.TotalBoughtItems,
          FavouriateShops: req.body.FavouriateShops,
          BuyingHistory: req.body.BuyingHistory,
          MyCart: req.body.MyCart,
        });
        newCustomer
          .save()
          .then((customer) => {
            res.send(customer);
          })
          .catch((err) => {
            res.status(400).send("Unable to save to database");
          });
      }
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

module.exports = router;
