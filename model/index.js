const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'enter user name']
    },
    
    email: {
        type: String,
        required: [true, 'enter user email']
    },
    
    password: {
        type: String,
        required: [true, 'enter user password']
    }
});

const userModel = mongoose.model('devex', userSchema, 'devex');
module.exports= {userModel};