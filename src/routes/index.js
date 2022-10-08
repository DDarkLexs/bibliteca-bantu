
import translation from './translate'
import services from './services'


export default (app) => {
    translation(app)
    services(app)
} 