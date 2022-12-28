import asciiColorLog from 'ascii-color-log'
import {usuarioAutenticacao } from '../../configs'
import { getUsuarioData } from '../../controllers/usuario'

const log = new asciiColorLog()



export default (app) => {

    app.route('/api/usuario')
    .get(usuarioAutenticacao, getUsuarioData)


    

    





} 
