const mongoose = require('mongoose');

var invoiceSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true
        },
        productIds : []
    },
    {
        timestamps:true,
    }
)

module.exports = mongoose.model("Invoice", invoiceSchema);