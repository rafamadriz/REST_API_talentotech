import express from 'express'
import cors from 'cors'

import productsRouter from './src/routes/products.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', productsRouter)

app.use((req, res) => {
    res.status(400).send('Recurso no encontrado')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
