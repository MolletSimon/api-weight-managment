const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    height: { type: Number, required: true },
    startWeight: { type: Number, required: true },
    startIMC: { type: Number, required: true },
    actualWeight: {type: Number },
    actualIMC: {type: Number},
    goalWeight: {type: Number}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);