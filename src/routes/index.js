import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()
import tMiddleware from '../controllers/translate'



export default (app) => {

    app.route('/translate/portugueseToUmbundu')
    .get((req, res, next) => {


        console.log('portugues para umbundu')
        
        next()

    },tMiddleware.portugueseToUmbundu)
    app.route('/translate/portugueseToChokwe')
    .get((req, res, next) => {


        console.log('portugues para Chokwe')
        
        next()

    },tMiddleware.portugueseToChokwe)

    

    





} 