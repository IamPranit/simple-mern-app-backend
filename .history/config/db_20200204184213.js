const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect("mongodb+srv://pociko:<password>@resources-qp501.mongodb.net/test?retryWrites=true&w=majoritymongodb+srv://pociko:qHmHYL#ZlFIg@resources-qp501.mongodb.net/resources?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;