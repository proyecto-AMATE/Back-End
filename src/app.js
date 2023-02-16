import express from "express";
import bodyParser from 'body-parser';
import {Routes} from './Routes/mainroutes.js';
import cors from 'cors';

//Creating the server
const app = express();

//cors middleware
app.use(cors());
    
//Middleware to convert the data to Json formate
app.use(bodyParser.json());

//Creating the routes to each components
Routes(app);


export {app};