const mongoose = require('mongoose');

const weightSchema = mongoose.Schema({
    value: { type: Number, required: true },
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    loss: { type: String, required: true},
});

module.exports = mongoose.model('Weight', weightSchema);