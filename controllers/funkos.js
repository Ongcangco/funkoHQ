const Funko = require('../models/funko');

module.exports = {
    new: newFunko,
    create,
    index,
}

function index(req, res) {
    res.render('funkos/index', {
        funkos: Funko.getAll()
    })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
        await Funko.create(req.body);
        res.redirect('/funkos');
      } catch (err) {
          res.render('funkos/new', { errorMsg: err.message, title: 'My Funko', } );
    
      }
    }

function newFunko(req, res) {
    res.render('funkos/new', { 
        errorMsg: '',
        title: 'My Collection',
    });
}