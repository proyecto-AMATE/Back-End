import express from 'express';
import { QuestionsControllers} from '../Controllers/QuestionsControllers.js';

//Creating the router that we will use to create all the endpoints
//for the Questions entity
const QuestionRoutes = express.Router();

//First get endpoint of the questions
QuestionRoutes.get('/getquestion', (req, res)=>{
    console.log('hola');
    QuestionsControllers.GetGame1(req, res);
})

QuestionRoutes.post('/postquestion', (req, res)=>{
    QuestionsControllers.PostGame1(req,res);
})

export {QuestionRoutes};