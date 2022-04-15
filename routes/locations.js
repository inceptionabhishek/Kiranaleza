const express = require("express");
const router = express.Router();
const locationschema = require("../models/locations");

// Add New shop in given location
router.post("/location/add", (req, res) => {
  locationschema
    .findOne({
      Nameofcity: req.body.NameofPlace,
    })
    .then((city) => {
      if (city) {
        city.Shops.push(req.body.shopinfo);
        city.save();
        res.status(200).send({
          message: "Shop Added",
          city: city,
        });
      } else {
        res.status(404).send({
          message: "City not found",
        });
      }
    });
});

// Shops for a specific location
router.post("/locationinfo", async (req, res) => {
  const CityName = req.body.CityName;
  await locationschema
    .findOne({ NameofPlace: CityName })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
