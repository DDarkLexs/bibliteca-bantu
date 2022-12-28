import md5 from "md5"
import jwt from "jsonwebtoken"
const secretKey = md5("bibliotecaBantu")

export function gerarSimboloDeAcesso(usuario) {

    const simbolo = jwt.sign(usuario, secretKey, { expiresIn: "1800s" })

    return simbolo
}

export function usuarioAutenticacao(req, res, next) {
    try {

        const auth = req.headers["user-token"]

        const token = auth

        if (token == "false") throw { err, errorCode:401 }

       

        jwt.verify(token, secretKey, (err, user) => {

            if (err) throw {err, errorCode:403}

            
            req.usuario = user

            next()

            
        })
        
    } catch ({err,errorCode}) {
        
        console.log(err)
        return res.sendStatus(errorCode)

    }
}