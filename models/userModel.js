var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    name: { type: String },
    height: { type: Number },
    weight: { type: Number },
    bodyFat: { type: Number },
    targets: { type: Object },
    workouts: { type: Array },
});

module.exports = mongoose.model('User', userSchema);

