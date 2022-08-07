import mongoose from 'mongoose';
const { Schema } = mongoose;
import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    genre: String,
    name: String,
    sellerID:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');

const products = mongoose.model('product', productSchema);

export default products;