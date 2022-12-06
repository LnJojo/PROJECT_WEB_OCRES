const mongoose = require("mongoose");

const {Schema} = mongoose;
//crypto Schema
const streamSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Stream", streamSchema);
