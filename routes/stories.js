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

router.get('/atightspot', function(req, res, next) {
    res.redirect('/?story=stories/atightspot.z8');
});

router.get('/anchor', function(req, res, next) {
    res.redirect('/?story=stories/anchor.z8');
});

module.exports = router;
