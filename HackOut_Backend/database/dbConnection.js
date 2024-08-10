// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

// Retrieve the MongoDB URI from environment variables
const mongodburi = "mongodb+srv://shleshawork:shleshaworks@cluster0.s0bpj.mongodb.net/?retryWrites=true";

if (!mongodburi) {
    console.error("Mongo_URI is not defined. Please check your .env file.");
    process.exit(1);
}

export const dbConnection = () => {
    mongoose.connect("mongodb+srv://shleshawork:shleshaworks@cluster0.s0bpj.mongodb.net/?retryWrites=true")
    .then(() => {
        console.log("Connected to the Database Successfully!");
    })
    .catch(err => {
        console.error(`Error connecting to the Database: ${err}`);
    });
};
