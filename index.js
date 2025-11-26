import express from 'express'
import cors from 'cors'

import productsRouter from './src/routes/products.routes.js'
import authRouter from './src/routes/auth.routes.js'

import { authentication } from './src/middleware/authentication.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/api', authentication, productsRouter)

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
