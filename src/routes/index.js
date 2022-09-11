import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()



export default (app) => {

    app.route('/translate/')
    .get((req, res, next) => {


        log.success('rota de traducao')
        res.send('ok')


    })

    





} 