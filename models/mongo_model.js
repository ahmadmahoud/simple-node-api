const mongoose = require('mongoose');


const modelStudent = mongoose.Schema({
    name:String,
    age:Number
});

module.exports = mongoose.model('student',modelStudent);