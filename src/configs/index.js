import md5 from "md5"
import jwt from "jsonwebtoken"

const secretKey = md5("bibliotecaBantu")

export function gerarSimboloDeAcesso(usuario) {

    const simbolo = jwt.sign(usuario, secretKey, { expiresIn: "1800s" })

    return simbolo
}

export function UsuarioAutenticacao(req, res, next) {
    try {

        const auth = req.headers["User-token"]

        const token = auth

        if (token == "false") throw 401

        jwt.verify(token, secretKey, (err, user) => {

            if (err) throw 403

            req.usuario = user


        })

    } catch (errorCode) {

        return res.sendStatus(errorCode)

    }
}