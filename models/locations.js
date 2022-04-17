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
      Lat: Number,
      Lng: Number,
    },
  ],
});

module.exports = mongoose.model("locationschema", locationschema);
