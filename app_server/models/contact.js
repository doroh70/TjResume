// import mongoose
const mongoose = require('mongoose');

// define schema for a Contact Message
var contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    message: {
        type: String,
        required: 'Message is required'
    }
})

// make public
module.exports = mongoose.model('Contact', contactSchema);