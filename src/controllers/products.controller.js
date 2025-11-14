import productsModel from '../models/products.model.js'

export const getAllProducts = async (req, res) => {
    productsModel.getAllProducts().then(value => {
        res.status(200).send(value)
    })
}

export const getProductById = async (req, res) => {
    const id = req.params.id
    const product = productsModel.getProductById(id)
    product
        .then(value => {
            if (value) {
                res.status(200).json(value)
            } else {
                res.status(400).send("Product not find")
            }
        })
        .catch(error => console.error(error.message))
}

export const saveProduct = async (req, res) => {
    const name = req.body.name
    const price = req.body.price
    productsModel.saveProduct({name, price}).then(async docRef => {
        const pro = await productsModel.getProductById(docRef.id)
        res.status(200).json(pro)
    })
}
