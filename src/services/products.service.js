import productsModel from "../models/products.model.js"

const getAllProducts = productsModel.getAllProducts
const getProductById = productsModel.getProductById
const saveProduct    = productsModel.saveProduct
const deleteProduct  = productsModel.deleteProduct

export default {
    getProductById,
    getAllProducts,
    saveProduct,
    deleteProduct
}
