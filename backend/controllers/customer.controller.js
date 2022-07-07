const Customer = require("../models/customer.model");
require("../db/conn.js");

const getCustomer = async (req, res) => {
  let name1 = req.body.name;
  console.log(name1);
  const getCustomerName = await Customer.find({
    name: { $regex: `^${req.body.name}.*` },
  });
  res.json({ customerName: getCustomerName });
};

const addCustomer = async (req, res) => {
  try {
    const data = new Customer(req.body);
    console.log(req.body);
    const response = await data.save();
    res.json({
      message: "Customer added",
      resp: response._id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCustomer, addCustomer };
