const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const funkoSchema = new Schema({
    name: {type: String, required: true},
    code: {type: Number, required: true},
    releaseYear: {
        type: Number, 
        default: function() {
            return new Date().getFullYear();
        } 
    },
    value: {type: Number, required: true},
}, {
    timestamps: true,  
});

// module.exports = {
//     deleteOne,
// }

// function deleteOne(Schema) {
//     Schema = parseInt(Schema);
//     const Schemax = funkos.findIndex (funko => funko.Schema === Schema);
// }
module.exports = mongoose.model('Funko', funkoSchema);
    