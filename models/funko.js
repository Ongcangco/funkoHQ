const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const commentSchema = new Schema ({
    content: {type: String}, 
    }, {
    timestamps: true
    })

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
    comments: [commentSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {

    timestamps: true,  
});


module.exports = mongoose.model('Funko', funkoSchema);
    