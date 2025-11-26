import { generateToken  } from "../utils/token-generator.js";

const defaultUser = {
    id: 1,
    email: "user@example.com",
    password: "hahaha123",
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = { id: 1, email }

    if (email === defaultUser.email && password === defaultUser.password) {
        const token = generateToken(user)
        res.json({ token })
    } else {
        res.sendStatus(401)
    }
}
