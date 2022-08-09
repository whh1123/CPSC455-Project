import Product from '../model/productSchema.js';
import User from '../model/userSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        console.log(products);
        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id }).lean();
        const seller = await User.findOne({'_id': product.sellerID }).lean();
        const newproduct = {...product, sellerID: seller};
        response.json(newproduct);
    }catch (error) {

    }
}

export const getProductsByGenre = async (request, response) => {
    try {
        const genre = request.params.genre;
        const products = await Product.find({ genre: genre });
        response.json(products);
    }catch (error) {
        console.log(error)
    }
}
export const getProductsBySeller = async (request, response) => {
    try {
        const sellerID = request.params.sellerID;
        const products = await Product.find({ seller: sellerID });
        response.json(products);
    }catch (error) {
        console.log(error)
    }
}

export const getProductsByKeyword = async (request, response) => {
    try {
        const keyword = request.params.keyword;
        const regex = new RegExp(keyword, 'ig');
        const products = await Product.find({ name: regex });
        response.json(products);
    }catch (error) {
        console.log(error)
    }
}