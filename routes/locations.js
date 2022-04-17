const express = require("express");
const router = express.Router();
const Locations = require("../models/locations");
// Add a New Shop in Location
router.route("/add/shops").post((req, res) => {
  Locations.findOne({ Nameofcity: req.body.Nameofcity }).then((location) => {
    if (location) {
      location.Shops.push({
        Shopname: req.body.Shopname,
        Ownername: req.body.Ownername,
        Lat: req.body.Lat,
        Lng: req.body.Lng,
      });
      location.save().then((location) => res.json(location));
    } else {
      const newLocation = new Locations({
        Nameofcity: req.body.Nameofcity,
        Lat: req.body.Lat,
        Lng: req.body.Lng,
        Shops: [req.body.shopinfo],
      });
      newLocation.save().then((location) => res.json(location));
    }
  });
});

module.exports = router;
