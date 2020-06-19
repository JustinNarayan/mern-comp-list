/// Enable the server

const express = require('express');
const bodyParser = require('body-parser');

// Define Routes
const comps = require('./routes/api/compRoute');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json()); 

// Use Routes
app.use('/api/comps', comps)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));