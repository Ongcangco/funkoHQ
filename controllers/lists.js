const List = require('../models/list');

module.exports = {
    new: newList,
};

function newList(req, res) {
    res.render('lists/new', { errorMsg: '', title: "Wish List" });
}