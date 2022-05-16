const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/'

mongoose.connect(uri, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    })

// mongoose.connection
.then(() => console.log('db connected'))
.catch(err => console.log('db connection failed: ', err.message || err));
