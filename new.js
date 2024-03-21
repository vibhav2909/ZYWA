const fs = require('fs');
const csvParser = require('csv-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://vibhav29bansal:vibhav2909@zywa.t1v5nlr.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDBbbb'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a Mongoose schema for the combined data
const cardSchema = new mongoose.Schema({
    cardID: String,
    mobile: String,
    statuses: [
        {
            status: String,
            timeStamp: String,
            comment: String
        }
    ]
});

// Create a Mongoose model for the combined schema
const CardModel = mongoose.model('Card', cardSchema);

// Function to combine CSV data and save it to MongoDB
function combineAndSaveToMongoDB(pickupData, deliveryData, deliveredData, returnedData) {
    const combinedData = {};

    // Combine data from pickup CSV
    pickupData.forEach(pickup => {
        const cardID = pickup['Card ID'];
        if (!combinedData[cardID]) {
            combinedData[cardID] = {
                cardID: cardID,
                mobile: pickup['User Mobile'],
                statuses: []
            };
        }
        combinedData[cardID].statuses.push({
            status: 'PICKUP',
            timeStamp: pickup.Timestamp,
            comment: ''
        });
    });

    // Combine data from delivery CSV
    deliveryData.forEach(delivery => {
        const cardID = delivery['Card ID'];
        if (!combinedData[cardID]) {
            combinedData[cardID] = {
                cardID: cardID,
                mobile: delivery['User contact'],
                statuses: []
            };
        }
        combinedData[cardID].statuses.push({
            status: 'DELIVERY',
            timeStamp: delivery.Timestamp,
            comment: delivery.Comment
        });
    });

    // Combine data from delivered CSV
    deliveredData.forEach(delivered => {
        const cardID = delivered['Card ID'];
        if (!combinedData[cardID]) {
            combinedData[cardID] = {
                cardID: cardID,
                mobile: delivered['User contact'],
                statuses: []
            };
        }
        combinedData[cardID].statuses.push({
            status: 'DELIVERED',
            timeStamp: delivered.Timestamp,
            comment: delivered.Comment
        });
    });

    // Combine data from returned CSV
    returnedData.forEach(returned => {
        const cardID = returned['Card ID'];
        if (!combinedData[cardID]) {
            combinedData[cardID] = {
                cardID: cardID,
                mobile: returned['User contact'],
                statuses: []
            };
        }
        combinedData[cardID].statuses.push({
            status: 'RETURNED',
            timeStamp: returned.Timestamp,
            comment: ''
        });
    });

    // Convert combined data to an array
    const combinedDataArray = Object.values(combinedData);

    // Save combined data to MongoDB
    CardModel.insertMany(combinedDataArray)
        .then(() => console.log('Combined data has been successfully saved to MongoDB.'))
        .catch((error) => console.error('Error saving combined data to MongoDB:', error));
}

// Function to read CSV file and convert to JSON
function readCSV(csvFilePath, callback) {
    const jsonArray = [];
    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
            jsonArray.push(data);
        })
        .on('end', () => {
            callback(jsonArray);
        })
        .on('error', (error) => {
            console.error('Error occurred while processing CSV:', error);
        });
}

// Read data from CSV files and call the combineAndSaveToMongoDB function
const pickupFilePath = '/Users/vibhavbansal/Downloads/Pickupp.csv';
const deliveryFilePath = '/Users/vibhavbansal/Downloads/Deliveryy.csv';
const deliveredFilePath = '/Users/vibhavbansal/Downloads/Deliveredd.csv';
const returnedFilePath = '/Users/vibhavbansal/Downloads/Returnedd.csv';

readCSV(pickupFilePath, (pickupData) => {
    readCSV(deliveryFilePath, (deliveryData) => {
        readCSV(deliveredFilePath, (deliveredData) => {
            readCSV(returnedFilePath, (returnedData) => {
                combineAndSaveToMongoDB(pickupData, deliveryData, deliveredData, returnedData);
            });
        });
    });
});


