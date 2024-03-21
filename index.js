
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./src/routes/route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes using the cors package
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://vibhav29bansal:vibhav2909@zywa.t1v5nlr.mongodb.net/", { useNewUrlParser: true })
  .then(() => console.log('MongoDB is connected'))
  .catch(error => console.log(error));

// Routes
app.use('/', route);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
// const { getCardStatus } = require("../");
