import mongoose from 'mongoose';

//Creating a new schema for the Questions model
//defining the different atributes
const Schema = mongoose.Schema;
const myschema = new Schema({
    'text': {
        'type': String,
        'required': true
    },
    'category_id':{
        'type': Object
    },
    'date': Date,
});

//Creating the model based on the questions schema
const model = mongoose.model('Question', myschema);

export default model;