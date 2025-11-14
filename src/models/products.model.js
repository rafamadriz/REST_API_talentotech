import { db } from '../data.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const productsCollection = collection(db, 'products')

async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id))
    if (productDoc.exists()) {
        return productDoc.data()
    } else {
        return null
    }
}

async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection)
    const products = []
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
    })

    return products
}

async function saveProduct(product) {
    return await addDoc(productsCollection, product)
}

async function deleteProduct(product) {
    await deleteDoc(doc(productsCollection, product.id))
}

const deleteTests = () => {
    getAllProducts().then(async products => {
        for (const product of products) {
            if (product.name === "test" && product.id) {
                deleteProduct(product)
            }
        }
    })
}

// deleteTests()

export default {
    getProductById,
    getAllProducts,
    saveProduct,
    deleteProduct
}
