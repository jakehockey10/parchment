var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('stories', { title: 'Stories' });
});

router.get('/curses', function(req, res, next) {
    res.redirect('/?story=stories/curses.z5');
});

router.get('/troll', function(req, res, next) {
    res.redirect('/?story=stories/troll.z5');
});

router.get('/atightspot.z8', function(req, res, next) {
    res.sendFile('atightspot.z8', { root: path.join(__dirname, '../../stories') });
});

module.exports = router;
