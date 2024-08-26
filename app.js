const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const studentRouter = require('./router/studentRouter');

app.use(express.json());
app.use(cors());

// Add a leading slash to the route
app.use('/api/student', studentRouter);

module.exports = app;
