const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"]
        },
        message: {
            type: String,
            maxlength: [100, "Message cannot be more than 100 characters"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Data", DataSchema);