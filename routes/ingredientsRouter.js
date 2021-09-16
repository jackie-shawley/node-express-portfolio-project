const express = require('express');
const ingredientsRouter = express.Router();

ingredientsRouter.route('/ingredients')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('/ingredients')
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /ingredients')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /ingredients')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /ingredients')
});

module.exports = ingredientsRouter;