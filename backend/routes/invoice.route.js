const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoice.controller");

router.get("/", invoiceController.getAutoInvoiceNo);
router.post("/addinvoice", invoiceController.addInvoice);

module.exports = router;
