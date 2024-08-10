import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from "cors";
import { config } from 'dotenv';
config(); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server Running on Port ${port}`);
});

mongoose.connect("mongodb+srv://shleshawork:shleshaworks@cluster0.s0bpj.mongodb.net/?retryWrites=true").then(() => console.log('Connected to mongodb successfully.')).catch(err => console.log(err));
