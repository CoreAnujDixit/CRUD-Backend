const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 55,
    },

    description: {
        type: String,
        required: true,
        maxLength: 255,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// Corrected module.exports statement
module.exports = mongoose.model("todozz", todoschema);
