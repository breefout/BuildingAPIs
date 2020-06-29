const apiRouter = require('./routes');

const express = require('express')
const app = express()
 
app.use('/api', apiRouter);
 
app.listen(3000)