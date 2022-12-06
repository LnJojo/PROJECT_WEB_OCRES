const mongoose = require("mongoose")
//crypto Schema
const Games = new mongoose.Schema({
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
})
module.exports = mongoose.model("Crypt", Crypt)