const mongoose = require("mongoose");

const { Schema } = mongoose;

//crypto Schema
const GameSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    box_art_url: {
        type: String,
        required: true
    },
    igbd_id: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Game", GameSchema);
