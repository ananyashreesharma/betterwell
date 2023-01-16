const mongoose = require('mongoose');

//title blogs image createdAt

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required: true
       
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('registration',userSchema);