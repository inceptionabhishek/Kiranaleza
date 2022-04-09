const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopownersSchema = new Schema({
  name: String,
  shopname: String,
  email: String,
  password: String,
  tagline: String,
  ownerpic: String,
  shoppic: String,
  location: String,
  Lat: String,
  Lng: String,
  city: String,
  totalmoney: String,
  TotalItemsCount: {
    type: Number,
    default: 0,
  },
  listsofitems: [
    {
      productname: String,
      productpic: String,
      productprice: Number,
      productdescription: String,
      productamount: Number,
    },
  ],
  listsoforders: [
    {
      orderid: String,
      orderdate: String,
      orderstatus: String,
      Items: [
        {
          productname: String,
          productpic: String,
          productprice: Number,
        },
      ],
      TotalAmount: Number,
      customername: String,
      customeremail: String,
    },
  ],
  mycustormers: [
    {
      custormername: String,
      custormeremail: String,
    },
  ],
});

module.exports = mongoose.model("shopownersSchema", shopownersSchema);
