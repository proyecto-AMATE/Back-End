import express from 'express';
import { app } from './app.js';
import {connect} from './db.js';
import { ev } from '../EvModule.js';

connect(`mongodb+srv://${ev.name}:${ev.password}@proyectoamate.wmubqsd.mongodb.net/?retryWrites=true&w=majority`);

//Initializing the server in the port 3000
app.listen(3000);

console.log('Server running on port 3000');
