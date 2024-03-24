import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) =>{
    console.log(request);
    return response.status(200).send(`Welcome to my Page`);
});

app.use('/books', booksRoute);




mongoose.connect(mongoDBURL)
.then(() =>{
        console.log(`App connected to database`);
        app.listen(PORT, ()=>{
            console.log(`Server is running on port : ${PORT}`);
        });
})
.catch((error) => {
    console.log(error);
});