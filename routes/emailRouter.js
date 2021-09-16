const express = require('express');
const emailRouter = express.Router();

emailRouter.route('/email')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('/email')
})
.post((req, res) => {
    res.render('email', {
       data: req.body, 
       errors: {
           message: {
               msg: 'A message is required' 
           },
           email: {
               msg: "That email doesn't look right"
           }
       }
    })
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /email')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /email')
});

module.exports = emailRouter;