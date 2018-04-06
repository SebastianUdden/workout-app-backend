var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userRegistrySchema = mongoose.Schema({
    userModelId: { type: String },
    email: { type: String },
    password: { type: String }    
});

module.exports = mongoose.model('UserRegistry', userRegistrySchema);
