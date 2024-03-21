const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    status: {
        type: String,
        trim: true
    },
    timeStamp: {
        type: String,
        trim: true
    },
    comment: {
        type: String,
        trim: true
    }
});

const CardSchema = new mongoose.Schema({
    cardID: {
        type: String,
     
        trim: true
    },
    mobile: {
        type: String,
      
        trim: true
    },
    statuses: [StatusSchema]
}, { timestamps: true });

module.exports = mongoose.model("Card", CardSchema);
