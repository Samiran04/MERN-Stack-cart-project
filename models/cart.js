const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    }
}, {timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;