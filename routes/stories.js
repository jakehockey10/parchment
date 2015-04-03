var express = require('express');
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
    res.sendFile('stories/atightspot.z8', { route: '.' });
});

module.exports = router;
