const mongoose = require('mongoose');

// Skema pengguna
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    },
    age: { type: Number, min: 0 },
});

module.exports = mongoose.model('User', userSchema);