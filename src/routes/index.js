
import traducao from './traducao'
import services from './services'
import auth from './authentication'
import usuario from './usuario'


export default (app) => {
    traducao(app)
    services(app)
    usuario(app)
    auth(app)
} 