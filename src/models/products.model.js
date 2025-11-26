import { db } from './data.js'
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
    try {
        const productDoc = await getDoc(doc(productsCollection, id))
        if (productDoc.exists()) {
            return productDoc.data()
        } else {
            return null
        }
    } catch (error) {
        console.error(error)
    }
}

async function getAllProducts() {
    try {
        const querySnapshot = await getDocs(productsCollection)
        const products = []
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() })
        })

        return products
    } catch (error) {
        console.error(error)
    }
}

async function saveProduct(data) {
    try {
        return await addDoc(productsCollection, data)
    } catch (error) {
        console.error(error)
    }
}

async function deleteProduct(id) {
    try {
        const productToDelete = await getDoc(doc(productsCollection, id))
        if (productToDelete.exists()) {
            await deleteDoc(doc(productsCollection, productToDelete.id))
            return productToDelete.data()
        } else return null
    } catch (error) {
        console.error(error)
    }
}

export default {
    getProductById,
    getAllProducts,
    saveProduct,
    deleteProduct
}
