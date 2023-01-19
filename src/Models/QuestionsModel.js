import mongoose from 'mongoose';

//Creating a new schema for the Questions model
//defining the different atributes
const Schema = mongoose.Schema;
const myschema = new Schema({
    'text': {
        'type': String,
        'required': true
    },
    'category':{
        'type': String,
        'required': true
    },
    'clue':{
        'type':String,
        'required':true
    }
});

//Creating the model based on the questions schema
const Question = mongoose.model('Question', myschema);

export {Question};