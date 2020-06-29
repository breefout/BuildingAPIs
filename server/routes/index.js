const chirpRouter = require('./chirps');
const express = require('express');

const apiRouter = new express.Router();
apiRouter.use('/chirps', chirpRouter);

module.exports = apiRouter;