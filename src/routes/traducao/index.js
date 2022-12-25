import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()
import tMiddleware from '../../controllers/traducao'



export default (app) => {

    app.route('/api/translate/inserirTodo')
    .post((req, res, next) => {
        console.log('Inserindo de portugues para chokwe e umbuntu!')
        
        next()

    },tMiddleware.insertAll)

    app.route('/api/translate/universal')
    .get((req, res, next) => {
      //  console.log('universal para portugues, umbundu e chokwe')
        next()
    },tMiddleware.universal)
    
    
    app.route('/api/translate/portugueseToUmbunduAndChokwe')
    .get((req, res, next) => {
        console.log('portugues para umbundu e chokwe')
        next()
    },tMiddleware.portugueseToUmbunduAndChokwe)
    

    app.route('/api/translate/portugueseToUmbundu')
    .get((req, res, next) => {
        console.log('portugues para umbundu')
        next()
    },tMiddleware.portugueseToUmbundu)

    .post((req,res,next) => {
        console.log(`inserir de portuguese para Umbundu`)
        next()
    }, tMiddleware.insertportugueseToUmbundu)
    app.route('/api/translate/portugueseToChokwe')
    .get((req, res, next) => {
        console.log('portugues para Chokwe')
        next()
    },tMiddleware.portugueseToChokwe)
    .post((req,res,next) => {
        console.log(`inserir de portuguese para Chokwe`)
        next()
    }, tMiddleware.insertportugueseTochokwe)


    

    





} 
