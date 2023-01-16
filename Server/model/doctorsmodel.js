const mongoose = require('mongoose');

//title blogs image createdAt

const DocSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    specialization:{
        type:String,
        required: true
       
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('anxdocs',DocSchema);