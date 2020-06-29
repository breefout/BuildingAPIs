const { GetChirps, GetChirp, CreateChirp, UpdateChirp, DeleteChirp } = require("../chirpstore");
const express = require('express');

const chirpRouter = new express.Router();
chirpRouter.get('/get', function(req, res) {
    res.send(GetChirps());
});
chirpRouter.get('/get/:id', function(req, res) {
    res.send(GetChirp(req.params.id));
});
chirpRouter.post('/create', function(req, res) {
    CreateChirp(req.body);
});
chirpRouter.put('/update/:id', function(req, res) {
    UpdateChirp(req.params.id, req.body);
});
chirpRouter.delete('/delete/:id', function(req, res) {
    DeleteChirp(req.params.id);
});

module.exports = chirpRouter;