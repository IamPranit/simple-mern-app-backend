const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')

// Load Routes
const resources = require('./routes/resources');

//Connect to Database
connectDB();

const app = express();

// Body Parser
app.use(express.json());

//Dev Logging Middleware
app.use(morgan('dev'));

// Mount Routers

app.use("/api/v1/resources", resources);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server is running on ${PORT}`)
);

//Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);
    //Close server and exit process
    server.close(() => process.exit(1));
});