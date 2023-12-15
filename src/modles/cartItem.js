const mongoose = require('mongoose');

const cartSchema =new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        required: true,

    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        required: true,
    }],
    size: {
        type: String,
        required:true,
    },
    quantity: {
        type: Number,
        required:true,
        default:1,
    },
    price: {
        type: Number,
        required:true,
    },
    discountedPrice: {
        type: Number,
        required:true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },

});

const cartItem = mongoose.model('cartItem',cartItemSchema);

module.exports= CartItem;