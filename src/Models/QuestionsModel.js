import mongoose from 'mongoose';
//import { CategorySchema } from './CategoryModel';

//Creating a new schema for the Questions model
//defining the different atributes
const Schema = mongoose.Schema;
const myschema = new Schema({
    'text': {
        'type': String,
        'required': true
    },
    'category': {
        'type': Schema.Types.ObjectId,
        'ref': 'Category'
    },
    'clue':{
        'type':String,
        'required':true
    },
    'level':{
        'type':String,
        'required':true
    },
    'answers':[{
        'text':{
            'type':String,
            'requeired':true
        },
        'correct':{
            'type':Boolean,
            'requeired':true
        }
    }]
});

//Creating the model based on the questions schema
const Question = mongoose.model('Question', myschema);

export {Question};