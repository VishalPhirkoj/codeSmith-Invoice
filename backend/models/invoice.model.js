const mongoose = require("mongoose");
require("../db/conn");

const invoiceSchema = mongoose.Schema({
  invoiceNo: {
    type: Number,
    require: true,
  },
  invoiceDate: {
    type: Date,
    require: true,
  },
  productName: {
    type: String,
    require: true,
  },
  Qty: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
});
const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
