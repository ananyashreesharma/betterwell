const mongoose = require('mongoose');

//title blogs image createdAt

const BlogsSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    username:{
        type:String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('blogs',BlogsSchema);