const express = require('express');
const router = express.Router();

const funkosCtrl = require('../controllers/funkos')

//GET router for collection page
router.get('/new', funkosCtrl.new);

//POST router for /funkos
router.post('/', funkosCtrl.create);

//GET route for /funkos
router.get('/', funkosCtrl.index)

//GET route for comments
router.get('/:name/comments', funkosCtrl.comments) 

// DELETE /funkos
router.delete('/:id', funkosCtrl.delete);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
