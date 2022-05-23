// Import all dependencies
const express = require('express');
const cors = require('cors');
const app = express();

// Configure express, cors, mongoose
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// Routes & logic
require('./routes/author.routes')(app);

// Listen to port
app.listen(8000, () => {
    console.log("You are now listening at port 8000")
})