const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationschema = new Schema({
  Nameofcity: String,
  Lat: Number,
  Lng: Number,
  Shops: [
    {
      Shopname: String,
      Ownername: String,
      email: String,
      shopLat: Number,
      shopLng: Number,
    },
  ],
});

module.exports = mongoose.model("locationschema", locationschema);
