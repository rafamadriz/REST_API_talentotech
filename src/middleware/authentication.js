import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret_key = process.env.JWT_SECRET_KEY

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || (!authHeader.startsWith("Basic ") && !authHeader.startsWith("Bearer "))) {
        return res.status(401).json({ message: "Token no proporcionado" })
    }

    try {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, secret_key, (err) => {
            if (err) return res.status(403).send("Autenticacion no valida")
            next()
        })
    } catch {
        res.status(401).send("Autenticacion inexistente")
        return
    }
}
