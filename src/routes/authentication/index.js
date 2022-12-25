import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()
import authObject from '../../controllers/authenticacao'


export default (app) => {

    app.route('/api/usuario/auth')
    .get(authObject.autenticarCliente, authObject.accessGranted)
    
    // app.route('/api/usuario/registrar')
    // .post(authObject.registrar)
    
    app.route('/api/usuario/inscrever')
    .post(authObject.registrar)


    

    





} 
