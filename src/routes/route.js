const express = require('express');
const router = express.Router();
const  {getCardStatus}  = require("../Controller/Controller.js");

// Define routes for handling GET and POST requests to /get_card_status
router.get("/get_card_status", getCardStatus); // Handling POST requests

module.exports = router;
