const products = [
    {
        id: 1,
        name: "Remera",
        price: 500,
    },
    {
        id: 2,
        name: "Pantalon",
        price: 1500,
    }
]

const getAllProducts = () => {
    return products
}

const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id))
}

const createProduct = (product) => {
    const newProduct = {
        id: products.length + 1,
        name: product.name,
        price: product.price,
    }
    products.push(newProduct)

    return newProduct
}

export default {
    getAllProducts,
    getProductById,
    createProduct
}
