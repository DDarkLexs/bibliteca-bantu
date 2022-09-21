import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()
import tMiddleware from '../../controllers/translate'



export default (app) => {

    app.route('/translate/inserirTodo')
    .post((req, res, next) => {
        console.log('Inserindo de portugues para chokwe e umbuntu!')
        
        next()

    },tMiddleware.insertAll)

    app.route('/translate/portugueseToUmbunduAndChokwe')
    .get((req, res, next) => {
        console.log('portugues para umbundu e chokwe')
        next()
    },tMiddleware.portugueseToUmbunduAndChokwe)
    

    app.route('/translate/portugueseToUmbundu')
    .get((req, res, next) => {
        console.log('portugues para umbundu')
        next()
    },tMiddleware.portugueseToUmbundu)

    .post((req,res,next) => {
        console.log(`inserir de portuguese para Umbundu`)
        next()
    }, tMiddleware.insertportugueseToUmbundu)

    app.route('/translate/portugueseToChokwe')
    .get((req, res, next) => {
        console.log('portugues para Chokwe')
        next()
    },tMiddleware.portugueseToChokwe)
    .post((req,res,next) => {
        console.log(`inserir de portuguese para Chokwe`)
        next()
    }, tMiddleware.insertportugueseTochokwe)


    

    





} 
