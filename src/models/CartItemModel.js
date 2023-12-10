const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    product: { type: mongoose.Schema.Types.ObjectId,  required: true },
    quantity: { type: Number, required: true, min: 1 }
});
const CartItemModel = mongoose.model('cartitems',DataSchema);
module.exports = CartItemModel;