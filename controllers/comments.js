const List = require('../models/list');


module.exports = {
    create,
}

async function create (req, res) {
    console.log(req.body);
    const list = await List.find({name: req.params.name, user: req.user._id});
    console.log(list[0])
    list[0].comments.push(req.body);
    try {
       await list[0].save()  
    } catch (err) {

    }
    res.redirect(`/funkos/${req.params.name}/comments`)
}