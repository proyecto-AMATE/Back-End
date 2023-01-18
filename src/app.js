import express from "express";
import bodyParser from 'body-parser';
import {Routes} from './Routes/mainroutes.js'

//Creating the server
const app = express();
    
//Middleware to convert the data to Json formate
app.use(bodyParser.json());

//Creating the routes to each components
Routes(app);


export {app};