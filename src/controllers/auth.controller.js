import { generateToken  } from "../utils/token-generator.js";
import bcrypt from "bcrypt"
import { createUser, findUserByEmail } from "../models/users.model.js";

export const register = async (req, res) => {
    if (!req.body) return res.status(422).json({message: "No existe body"})

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({message: "Email y contraseña requeridos"})
    }

    const existingUser = await findUserByEmail(email)

    if (existingUser) {
        return res.status(409).json({ message: "El usuario ya existe" })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await createUser(email, passwordHash)
    if (!user) {
        return res.sendStatus(503)
    }

    return res.status(200).json({ id: user.id, email: user.email})
}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(422).json({message: "Email y contraseña requeridos"})
    }

    const user = await findUserByEmail(email)
    if (!user) {
        return res.status(401).json({message: "Credenciales invalidas"})
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
        return res.status(401).json({message: "Credenciales invalidas"})
    }

    const token = generateToken({ id: user.id, email: user.email })
    return res.json({ token })
}
