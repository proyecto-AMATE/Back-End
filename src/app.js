import express from "express";
import bodyParser from 'body-parser';
import {Routes} from './Routes/mainroutes.js';
import cors from 'cors';
import helmet from 'helmet';
import {morganMiddleware } from "./Logger/index.js";
import errorhandler from "./middleware/error.handler.js";

//Creating the server
const app = express();

//security middleware
app.use(helmet());

//cors middleware
app.use(cors());

//morgan middleware
app.use(morganMiddleware);
    
//Middleware to convert the data to Json formate
app.use(bodyParser.json());


//Creating the routes to each components
Routes(app);

//cabeceras de seguridad, logger, express validator o joi, error handler, manejar 404
//sustituir console log por una libreria de log

//Error handler middleware
app.use(errorhandler);

export {app};