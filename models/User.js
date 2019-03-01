const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "name is required"
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;