
import traducao from './traducao'
import services from './services'
import auth from './authentication'


export default (app) => {
    traducao(app)
    services(app)
    auth(app)
} 