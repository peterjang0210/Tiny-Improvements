const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KudoSchema = new Schema({
    message: {
        type: String,
        required: "message is required"
    },
    sender: {
        type: Schema.type.ObjectId,
        ref: "User"
    },
    receiver: {
        type: Schema.type.ObjectId,
        ref: "User"
    }
});

const Kudo = mongoose.model("Kudo", KudoSchema);

module.exports = Kudo;