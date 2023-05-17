const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, listsCtrl.new);
router.post('/new', ensureLoggedIn, listsCtrl.create);
// router.get('/', listsCtrl.index);


module.exports = router;