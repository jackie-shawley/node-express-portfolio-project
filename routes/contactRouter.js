const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/contact')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req, res) => {
    res.end('/contact')
})
.post((req, res) => {
    res.render('contact', {
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
    res.end('PUT operation not supported on /contact')
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /contact')
});

module.exports = contactRouter;