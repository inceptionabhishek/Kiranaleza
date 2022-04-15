const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customer = new Schema({
  Name: String,
  profilepic: String,
  email: String,
  password: String,
  Address: String,
  TotalBoughtItems: Number,
  FavouriateShops: [
    {
      Shopname: String,
      Ownername: String,
    },
  ],
  BuyingHistory: [
    {
      Shopname: String,
      TotalPrice: Number,
      Items: [
        {
          Itemname: String,
          Itemprice: Number,
          Itemquantity: Number,
        },
      ],
    },
  ],
  MyCart: [
    {
      Shopname: String,
      TotalPrice: Number,
      Items: [
        {
          Itemname: String,
          Itemprice: Number,
          Itemquantity: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("customer", customer);
