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
        email: req.body.email,
        shopLat: req.body.shopLat,
        shopLng: req.body.shopLng,
      });
      location.save().then((location) => res.json(location));
    } else {
      const newLocation = new Locations({
        Nameofcity: req.body.Nameofcity,
        Lat: req.body.Lat,
        Lng: req.body.Lng,
        Shops: [
          {
            Shopname: req.body.Shopname,
            Ownername: req.body.Ownername,
            email: req.body.email,
            shopLat: req.body.shopLat,
            shopLng: req.body.shopLng,
          },
        ],
      });
      newLocation.save().then((location) => res.json(location));
    }
  });
});
// Get shops For a Location city
router.route("/get/shop").post((req, res) => {
  const city = req.body.city;
  Locations.findOne({ Nameofcity: city }).then((location) => {
    res.json(location);
  });
});

module.exports = router;
