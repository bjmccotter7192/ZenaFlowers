var flowersDomain = require('../domain/flowerPicsDomain');

exports.getFlowerPics = (req, res) => {
    var flowersReturned = flowersDomain.getFlowerPics();
    res.send(flowersReturned);
}