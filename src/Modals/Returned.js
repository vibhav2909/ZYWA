let mongoose = require('mongoose');

let ReturnedSchema = new mongoose.Schema({
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
        type: Date,
        trim: true
    },

   
}, { timestamps: true });

module.exports = mongoose.model("return", ReturnedSchema); 
