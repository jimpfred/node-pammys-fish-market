const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: String,
    address: String,
    longitude: Number,
    latitude: Number
}, { timestamps: true});

module.exports = mongoose.model('Skill', skillSchema);