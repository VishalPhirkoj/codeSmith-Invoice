const Invoice = require("../models/invoice.model");
require("../db/conn.js");

const getAutoInvoiceNo = async (req, res) => {
  const getInvoiceNo = await Invoice.find()
    .sort({ invoiceNo: -1 })
    .limit(1)
    .select("invoiceNo");
  res.json({ InvoiceNoAuto: getInvoiceNo });
};

const addInvoice = async (req, res) => {
  try {
    const data = new Invoice(req.body);
    const response = await data.save();
    res.json({
      message: "Invoice added",
      resp: response._id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAutoInvoiceNo, addInvoice };
