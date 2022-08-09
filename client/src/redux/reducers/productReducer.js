import * as actionTypes from '../constants/productConstant';


export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getGenreProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_GENRE_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_GENRE_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getSellerProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SELLER_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_SELLER_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getKeywordProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_KEYWORD_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_KEYWORD_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}