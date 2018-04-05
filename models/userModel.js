var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    email: { type: String }, // , required: true, unique: true
    password: { type: String }, // 
    firstname: { type: String }, // , required: true, required: true 
    lastname: { type: String }, // , required: true
    height: { type: Number },
    weight: { type: Number },
    bodyFat: { type: Number },
    targets: { type: Object },
    workouts: { type: Array },
});

module.exports = mongoose.model('User', userSchema);

