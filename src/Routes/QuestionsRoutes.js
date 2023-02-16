import express from 'express';
import { QuestionsControllers} from '../Controllers/QuestionsControllers.js';

//Creating the router that we will use to create all the endpoints
//for the Questions entity
const QuestionRoutes = express.Router();

//First get endpoint of the questions model
//this endpoint returns all the questions available on the database
QuestionRoutes.get('/getAll', (req, res)=>{
    QuestionsControllers.GetAll(req, res);
})

//Second get endpoint of the questions model
//this endpoint returns 10 random and unique questions, 2 easy level
//questions, 2 normal level, 3 medium level and 3 hard level
//this endpoint is used for the who wants to be millionaire game
QuestionRoutes.get('/getGame1',(req, res)=>{
    QuestionsControllers.GetGame1(req, res);
})

//Third get endpoint of the questions model
//this endpoint return 10 random and unique question, 2 easy level
//questions, 2 normal level, 3 medium level and 3 hard level
//unlike the previous endpoint this questions just have una answer
//and it is a single word answer, this endpoint is used for the
//hangman game
/*QuestionRoutes.get('/getGame2', (req, res)=>{
    QuestionsControllers.GetGame2(req, res);
})*/

 //First post endpoint of the question model
 //this endpoint save on the data base the questions
QuestionRoutes.post('/postQuestion', (req, res)=>{
    QuestionsControllers.PostGame1(req,res);
})

//First delete endpoint of the question model
//this endpoint delete 
QuestionRoutes.delete('/deleteQuestion', (req,res)=>{
    QuestionsControllers.Delete(req, res);
})

export {QuestionRoutes};