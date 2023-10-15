const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");

router.post("/invoice/createInvoice", invoiceController.createInvoice);
router.get("/invoice/getInvoice", invoiceController.getAllInvoices);

module.exports = router;
