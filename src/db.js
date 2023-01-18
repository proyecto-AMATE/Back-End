import db from 'mongoose';

db.Promise = global.Promise;

//Creating function to connect to the mongo atlas database
function connect(uri){
    db.connect(uri, {
        'useNewUrlParser':true,
        'useUnifiedTopology':true,
    })
    .then(()=>{
        console.log("[db] connected succesfully");
    })
    .catch(err=>{
        console.log(err);
    });
}

export {connect};
