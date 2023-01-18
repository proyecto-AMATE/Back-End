import express from 'express';
import { app } from './app.js';
import {connect} from './db.js';
//import {routes} from './Routes/mainroutes.js'



//Initializing the server in the port 3000
app.listen(3000);

console.log('Server running on port 3000');
