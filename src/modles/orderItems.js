const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderItemsSchema =new Schema({

    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    sixe:{
        type: String,
    },
    Quantity:{
        type: Number,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true,
    },
    deliveryDate:{
        type: Date,
    },
});

const orderItem =mongoose.model('orderItems', orderItemsSchema);

module.exports = orderItem;