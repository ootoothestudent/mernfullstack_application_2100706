const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

/// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
//app.use ('/mern_a_to_z_client/src/App.js', test);

const port = process.env.PORT || 8082;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('mern_a_to_z_client/build'));
}

app.listen(port, () => console.log(`Server running on port ${port}`));