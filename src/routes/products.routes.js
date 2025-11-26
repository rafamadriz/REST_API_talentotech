import express from 'express'
const router = express.Router()

import { authentication } from '../middleware/authentication.js'

import {
    getAllProducts,
    getProductById,
    saveProduct,
    deleteProduct,
} from '../controllers/products.controller.js'

router.get('/products', authentication, getAllProducts)
router.get('/products/:id', authentication, getProductById)
router.post('/products/create', authentication, saveProduct)
router.delete('/products/:id', authentication, deleteProduct)

export default router
