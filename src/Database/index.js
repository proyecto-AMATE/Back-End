import db from 'mongoose';
import { DevelopingLogger } from '../Logger/index.js';

db.Promise = global.Promise;

//Creating function to connect to the mongo atlas database
function connect(uri){
    db.connect(uri, {
        'useNewUrlParser':true,
        'useUnifiedTopology':true,
    })
    .then(()=>{
        DevelopingLogger.info("[db] connected succesfully");
    })
    .catch(err=>{
        DevelopingLogger.error(err);
    });
}

export {connect};
