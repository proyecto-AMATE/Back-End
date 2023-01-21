import express from 'express';
import { QuestionsControllers} from '../Controllers/QuestionsControllers.js';

//Creating the router that we will use to create all the endpoints
//for the Questions entity
const QuestionRoutes = express.Router();

//First get endpoint of the questions
QuestionRoutes.get('/getAll', (req, res)=>{
    QuestionsControllers.GetAll(req, res);
})

QuestionRoutes.get('/getGame1',(req, res)=>{
    QuestionsControllers.GetGame1(req, res);
})

QuestionRoutes.post('/postQuestion', (req, res)=>{
    QuestionsControllers.PostGame1(req,res);
})

QuestionRoutes.delete('/deleteQuestion', (req,res)=>{
})

export {QuestionRoutes};