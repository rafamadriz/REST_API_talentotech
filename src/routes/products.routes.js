import express from 'express'
const router = express.Router()

import { authentication } from '../middleware/authentication.js'

import {
    getAllProducts,
    getProductById,
    saveProduct,
} from '../controllers/products.controller.js'

router.get('/products', authentication, getAllProducts)
router.get('/products/:id', authentication, getProductById)
router.post('/products', authentication, saveProduct)

export default router
