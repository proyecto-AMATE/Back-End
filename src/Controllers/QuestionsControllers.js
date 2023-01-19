import { Question } from "../Models/QuestionsModel.js";

//First controller for the 
const GetGame1Questions = async (req, res)=>{
    try{
        const results = await Question.find();
        res.json(results);
    }
    catch(error){
        
        res.json(error);
    }
}

const PostQuestions = async (req, res)=>{
    const newquestion = new Question({
        'text': req.body.text,
        'category': req.body.text,
        'clue': req.body.clue
    });
    
    const results = await newquestion.save();
    res.json(results);
}

const QuestionsControllers = {
    'GetGame1': GetGame1Questions,
    'PostGame1': PostQuestions ,
}

export {QuestionsControllers};