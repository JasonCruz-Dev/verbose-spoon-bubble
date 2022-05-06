const mongoose = require('mongoose');

const uri = 'mongodb://174.203.47.114:27017/bc-think'

mongoose
.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('db connected'))
.catch(err => console.log('db connection failed: ', err.message || err));
