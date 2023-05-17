const Funko = require('../models/funko');


module.exports = {
    create,
}

async function create (req, res) {
    const funko = await Funko.findById(req.params.id);
    funko.comments.push(req.body)
    try {
       await funko.save()  
    } catch (err) {

    }
    res.redirect(`/funkos/${funko._id}`)
}