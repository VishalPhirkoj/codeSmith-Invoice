const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.post("/addcustomer", customerController.addCustomer);
router.post("/getcustomer", customerController.getCustomer);

module.exports = router;
