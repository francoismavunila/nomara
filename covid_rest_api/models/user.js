const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    Email:{type: String,required: true},
    Password: {type:String, required: true}  
});

module.exports = mongoose.model('Admins',AdminSchema);