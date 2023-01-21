import mongoose from "mongoose";

const schema = new mongoose.Schema({
    'text':{
        'type':String,
        'requeired':true
    },
    'correct':{
        'type':Boolean,
        'requeired':true
    }
});

const AnswerModel = mongoose.model('Answer', schema);

export{AnswerModel};