const express = require("express");
const router = express.Router();
const customer = require("../models/customers");
// Register a customer
router.post("/register", async (req, res) => {
  try {
    const user = await customer.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).send({ message: "Email already exists" });
    }
    const newUser = new customer({
      Name: req.body.Name,
      profilepic: req.body.profilepic,
      email: req.body.email,
      password: req.body.password,
      Address: req.body.Address,
      City: req.body.City,
      TotalBoughtItems: req.body.TotalBoughtItems,
      FavouriateShops: req.body.FavouriateShops,
      BuyingHistory: req.body.BuyingHistory,
      MyCart: req.body.MyCart,
    });
    await newUser.save();
    res.status(201).send({
      message: "User Created",
      user: newUser,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// Verify a customer
router.post("/verify", async (req, res) => {
  try {
    const user = await customer.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "Email does not exist" });
    }
    if (user.password !== req.body.password) {
      return res.status(200).send({ message: "Wrong Password" });
    }
    res.status(201).send({
      message: "User Verified",
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// Get A customer
router.post("/get", async (req, res) => {
  try {
    const user = await customer.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "Email does not exist" });
    }
    res.status(201).send({
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Get customers data:-
router.route("/getcustomers").post((req, res) => {
  customer.find(
    {
      email: req.body.email,
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});
// Add shop to favourite
router.post("/addfav", async (req, res) => {});

module.exports = router;
