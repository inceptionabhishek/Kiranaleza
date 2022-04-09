const express = require("express");
const router = express.Router();
const shopownersSchema = require("../models/shopowners");

router.post("/verify", async (req, res) => {
  try {
    const user = await shopownersSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "Invalid Email or Password" });
    }
    const validPassword = user.password;
    if (validPassword !== req.body.password) {
      return res.status(200).send({ message: "Invalid Email or Password" });
    }
    res.status(200).send({
      message: "Login Successful",
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await shopownersSchema.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).send({ message: "Email already exists" });
    }
    const newUser = new shopownersSchema({
      name: req.body.name,
      shopname: req.body.shopname,
      email: req.body.email,
      password: req.body.password,
      tagline: req.body.tagline,
      ownerpic: req.body.ownerpic,
      shoppic: req.body.shoppic,
      location: req.body.location,
      Lat: req.body.Lat,
      Lng: req.body.Lng,
      city: req.body.city,
      totalmoney: req.body.totalmoney,
      listsofitems: req.body.listsofitems,
      listsoforders: req.body.listsoforders,
      mycustormers: req.body.mycustormers,
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

// Get a shop owner
router.post("/getowner", async (req, res) => {
  try {
    const user = await shopownersSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "User Not Found" });
    }
    return res.status(200).send({
      message: "User Found",
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// Add Items in Shop
router.post("/additem", async (req, res) => {
  const email = req.body.email;
  const items = req.body.item;
  const user = await shopownersSchema.findOne({ email: email });
  if (user) {
    user.listsofitems.push(items);
    user.TotalItemsCount += 1;
    await user.save();
    return res.status(200).send({
      message: "Item Added",
      user: user,
    });
  } else {
    res.status(200).send({
      message: "User Not Found",
    });
  }
});

module.exports = router;
