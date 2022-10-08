import asciiColorLog from 'ascii-color-log'
const log = new asciiColorLog()



export default (app) => {

    app.route('/api/calendar')
    .get((req, res, next) => {
        const calendar = new Date()

        res.json(calendar)

    })


    

    





} 
