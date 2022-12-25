
import translation from './translate'
import services from './services'
import auth from './authentication'


export default (app) => {
    translation(app)
    services(app)
    auth(app)
} 