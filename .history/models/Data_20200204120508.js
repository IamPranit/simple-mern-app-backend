const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        message: {
            type: String,
            maxlength: 100
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Data", DataSchema);