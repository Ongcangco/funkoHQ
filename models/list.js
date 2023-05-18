const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    content: {type: String}, 
    }, {
    timestamps: true
    })


const listSchema = new Schema ({
    name: {type: String, required: true},
    code: {type: Number, required: true},
    releaseYear: {
        type: Number, 
        default: function() {
            return new Date().getFullYear();
        } 
    },
    comments: [commentSchema],    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true,  
});

module.exports = mongoose.model('List', listSchema);