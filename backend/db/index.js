const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/bc-think'

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

// mongoose.connection
.then(() => console.log('db connected'))
.catch(err => console.log('db connection failed: ', err.message || err));
