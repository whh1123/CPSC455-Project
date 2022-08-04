import Product from '../model/productSchema.js';


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
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
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

export const getProductsSeller = async (request, response) => {
    try {
        const id = request.params.id;
        
        const seller = await Product.findOne({ 'id':id }).populate('sellerID');
        response.json(seller);
    }catch (error) {
        console.log(error)
    }
}