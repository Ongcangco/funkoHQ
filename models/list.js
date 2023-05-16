const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    name: {type: String, required: true},
    code: {type: Number, required: true},
    releaseYear: {
        type: Number, 
        default: function() {
            return new Date().getFullYear();
        } 
    },
}, {
    timestamps: true,  
});
