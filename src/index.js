import express from 'express';
import { app } from './app.js';
import {connect} from './Database/index.js';
import { ev } from '../EvModule.js';
import { DevelopingLogger} from './Logger/index.js';

connect(`mongodb+srv://${ev.name}:${ev.password}@proyectoamate.wmubqsd.mongodb.net/?retryWrites=true&w=majority`);

//Initializing the server in the port 3000
app.listen(3000);

//./../../../../Downloads/ngrok/ngrok http 3000

DevelopingLogger.info('Server running on port 3000');
