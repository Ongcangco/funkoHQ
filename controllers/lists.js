const List = require('../models/list');

module.exports = {
    new: newList,
    create,
    delete: deleteList
   
};

async function deleteList(req, res) {
    await List.deleteOne({ _id: req.params.id})
     res.redirect('/lists/new')
  }

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    lists.push(req.body);
    try {
        req.body.list = await List.create(req.body)
        res.redirect('/new') 
    } catch (err) {}    
}

async function newList(req, res) {
    res.render('lists/new', {
                errorMsg: '',
                title: "My Wish List",
                lists: await List.find({})
            })
        }


