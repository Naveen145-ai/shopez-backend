const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        caetItems:Array,
        amount: String,
        status: String,
        createdAt: Date
    }
)

const orderModel = mongoose.model('Order',orderSchema);

module.exports = orderModel;

