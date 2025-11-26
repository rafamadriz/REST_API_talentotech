import productsService from '../services/products.service.js'

export const getAllProducts = async (req, res) => {
    productsService.getAllProducts().then(value => {
        res.status(200).send(value)
    })
}

export const getProductById = async (req, res) => {
    const id = req.params.id
    const product = productsService.getProductById(id)
    product
        .then(data => {
            if (data) {
                res.status(200).json({ id: id, ...data })
            } else {
                res.status(400).send(`Product not found with ID: ${id}`)
            }
        })
        .catch(error => console.error(error.message))
}

export const saveProduct = async (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const categories = req.body.categories
    productsService.saveProduct({ name, price, categories }).then(async docRef => {
        const productData = await productsService.getProductById(docRef.id)
        res.status(200).json({ id: docRef.id, ...productData })
    }).catch(error => {
            res.startus(500).send(error)
        })
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    const product = productsService.deleteProduct(id)
    product
        .then(data => {
            if (data) {
                res.status(200).json({ id: id, ...data })
            } else {
                res.status(400).send(`Product not found with ID: ${id}`)
            }
        })
        .catch(error => console.error(error.message))
}
