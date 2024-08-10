import fs from 'fs';
import mongoose from 'mongoose';
import SpaceCraft from '../models/SpaceCraftSchema.js'; 

const importFailedMissions = async () => {
    try {
        // Read the data from data.json
        const data = JSON.parse(fs.readFileSync('../data.json', 'utf8'));

        // Filter out the failed missions
        const failedMissions = data.filter(mission => mission.status === 'FAILURE'); // Ensure status matches 'FAILURE'

        // Insert the failed missions into MongoDB
        await SpaceCraft.insertMany(failedMissions);

        console.log('Failed missions successfully imported into MongoDB');
    } catch (error) {
        console.error('Error while importing:', error);
    } finally {
        // Close the MongoDB connection
        mongoose.connection.close();
    }
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://shleshawork:shleshaworks@cluster0.s0bpj.mongodb.net/?retryWrites=true")
    .then(() => {
        console.log('Connected to MongoDB');
        importFailedMissions(); // Run the import for failed missions
    })
    .catch(err => console.log(err));
