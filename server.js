require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const connectdb = require('./database');
const bodyParser = require('body-parser');

const app = express();

connectdb();

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/', adminRouter); // Mount the admin router at the root path

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
