let express = require('express')
let states_api = require('./routes/states')

let app = express() 

app.use('/api', states_api)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)   // log for developer to see
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('App running on port', server.address().port)
})

