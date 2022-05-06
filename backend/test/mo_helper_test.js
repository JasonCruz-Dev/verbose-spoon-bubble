const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bs-think', {useNewUrlParser: true})

mongoose.connection
    // this is a listener to an event. 
    .once('open', () => console.log('Connected to MongoDB - BS-Think'))
    .on('error', (error) => {
        console.log('ERROR', error)
    })
