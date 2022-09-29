import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()
import tMiddleware from '../../controllers/translate'



export default (app) => {

    app.route('/translate/inserirTodo')
    .post((req, res, next) => {
        console.log('Inserindo de portugues para chokwe e umbuntu!')
        
        next()

    },tMiddleware.insertAll)

    app.route('/translate/universal')
    .get((req, res, next) => {
        console.log('universal para portugues, umbundu e chokwe')
        next()
    },tMiddleware.universal)
    
    
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

>>>>>>> 6dfc5f000af57e82019e90eeb99d467730de3930
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
