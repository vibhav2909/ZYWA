
let mongoose = require('mongoose');

let Delivered = new mongoose.Schema({
    ID: {
        type: String,
       
    },

    Card_ID: {
        type: String,
      
        trim: true
    },

    User_Mobile: {
        type: String,
        trim: true
    },
    Comment: {
        type: String,
        trim: true
    },
    Timestamp: {
        type: Date,
        trim: true
    },

   
}, { timestamps: true });

module.exports = mongoose.model("delivered", Delivered); 
