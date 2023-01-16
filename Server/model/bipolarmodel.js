const mongoose = require('mongoose');

//title blogs image createdAt

const BidocSchema = new mongoose.Schema({
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

module.exports = mongoose.model('bipolardocs',BidocSchema);