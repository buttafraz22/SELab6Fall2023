const mongoose = require('mongoose');
const Invoice = require('../models/invoice');

async function getAllInvoices(req, res) {
    try {
      const invoices = await Invoice.find().exec();
      res.status(200).json(invoices);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

async function createInvoice(req, res) {
    try {
        const invoice = new Invoice({
        userId: req.body.userId,
        productIds: req.body.productIds,
        });
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

module.exports = {getAllInvoices, createInvoice}