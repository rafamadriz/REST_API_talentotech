import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY

export const authentication = (req, res, next) => {
    let token
    try {
        token = req.headers['authorization'].split(" ")[1]
    } catch {
        res.status(401).send("Autenticacion inexistente")
        return
    }

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.status(403).send("Autenticacion no valida")
        next()
    })
}
