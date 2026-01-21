const mongoose = require("mongoose");

const ContsctSchema = new mongoose.Schema({
    name: String,
    phone : String,
    email : String,
});

module.exports = mongoose.model("contact",ContsctSchema);