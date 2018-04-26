var express = require('express');
var router = express.Router();
var flowers = require('./flowers');
var sendEmail = require('./sendEmail');

router.use(function(req, res, next) {
    console.log(`Processing ${req.method} request for ${req.originalUrl}`);
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'System fetching flower pictures...' });
});

router.route('/flowers').get(flowers.getFlowerPics);
router.post('/send', function(req, res){
    sendEmail.sendMail(req.body);
})

module.exports = router;