let mongoose = require('mongoose');

let PickupSchema = new mongoose.Schema({
    ID: {
        type: String,
        trim: true
    },

    Card_ID: {
        type: String,
        trim: true
    },

    User_Mobile: {
        type: String,
        trim: true
    },
    Timestamp: {
        type: String,
        trim: true
    },

   
}, { timestamps: true });

module.exports = mongoose.model("Pickup", PickupSchema); 
