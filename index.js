import express, { json } from 'express';
import {routes} from './Routes/mainroutes.js'

//Creating the server
function Server(){
    const app = express();
    
    //Middleware to convert the data to Json formate
    app.use(json());

    //Creating the routes to each components
    routes(app);

    //Initializing the server in the port 3000
    app.listen(3000);
}