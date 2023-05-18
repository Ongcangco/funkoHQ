const Funko = require('../models/funko');
const User = require('../models/user')
const List = require('../models/list')

module.exports = {
    new: newFunko,
    create,
    index,
    delete: deleteFunko,
    comments,
  
};

async function comments(req, res) {
    let comments = (await List.find({name: req.params.name})).map(lists => lists.comments);
    comments = comments.flat();
    res.render('funkos/comments', {title: "Buy/Sell/Trade Chat", comments, name: req.params.name});
}


async function deleteFunko(req, res) {
  await Funko.deleteOne({ _id: req.params.id})
   res.redirect('/funkos')
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
        const user = await User.findById(req.user._id)
        req.body.user = user;
        try {
        await Funko.create(req.body);
        res.redirect('/funkos');
        } catch (err) {
          res.render('funkos/new', { errorMsg: err.message, title: 'My Funko', } );
    
      }
    }
    
    
    
async function index(req, res) {
    res.render('funkos/index', {
        title: 'My Collection',
        funkos: await Funko.find({})
        })
    }


function newFunko(req, res) {
    res.render('funkos/new', { 
        errorMsg: '',
        title: 'My Collection',
    });
}
