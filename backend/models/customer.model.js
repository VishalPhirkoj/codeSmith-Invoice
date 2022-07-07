const mongoose = require("mongoose");
require("../db/conn");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  addr: {
    type: String,
    require: true,
  },
});
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
