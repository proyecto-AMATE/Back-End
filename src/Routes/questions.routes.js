import express from 'express';
import { QuestionsControllers} from '../controllers/questions.controllers.js';
import { DevelopingLogger } from '../logger/index.js';
import { game1, getquestiongame1, updatequestiongame1} from '../dot/questions.dot.js';
import { validationhandler, validatearray } from '../middleware/validation.handler.js';

//Creating the router that we will use to create all the endpoints
//for the Questions entity
const QuestionRoutes = express.Router();

/**********************Traditional Routes ********************************/

//First get endpoint of the questions model
//this endpoint returns all the questions available on the database
QuestionRoutes.get('/', 
async (req, res, next)=>{
    try{
        const questions = await QuestionsControllers.Get(req);
        res.json(questions);
    }
    catch(err){
        //res.status(err.output.statusCode).json(err.output.payload);
        next(err);
    }  
})

 //First post endpoint of the question model
 //this endpoint save on the data base the questions
 QuestionRoutes.post('/postQuestion',
 validationhandler(game1.post , 'body'),
 async (req, res, next)=>{
    DevelopingLogger.debug('hola2');
    try{
        const questions = await QuestionsControllers.PostGame1(req);
        res.json(questions);
    }
    catch(err){
        //DevelopingLogger.error(err.message);
        //res.status(err.output.statusCode).json(err.output.payload);
        next(err);
    }
    
});

/*This endpoint delete a determinated question based in an id*/
QuestionRoutes.delete('/deleteByIdQuestion',
validationhandler(getquestiongame1,'query'),
async (req,res, next)=>{
    try{
        const result = await QuestionsControllers.DeleteById(req);
        res.json(result);
    }
    catch(err){
        DevelopingLogger.error(err.message);
        /*DevelopingLogger.error(err.message);
        res.status(500).json(err.message);*/
        next(err)
    }
    
})

/*This endpoint is for updating one question based on the id*/
QuestionRoutes.patch('/updateByIdQuestion', 
validatearray(),
validationhandler(game1.update, 'body'),
async (req, res, next)=>{
    try{

        const result = await QuestionsControllers.Update(req);
        res.json(result);
    }
    catch(err){
        DevelopingLogger.debug('hola');
        //res.status(500).json(err.message);*/
        next(err);
    }
})

/*************************Personalized routes****************************/

//Second get endpoint of the questions model
//this endpoint returns 10 random and unique questions, 2 easy level
//questions, 2 normal level, 3 medium level and 3 hard level
//this endpoint is used for the who wants to be millionaire game
QuestionRoutes.get('/getTriviaHangman/:slug',
async (req, res, next)=>{
    try{
        const questions = await QuestionsControllers.GetTriviaHangman(req);
        DevelopingLogger.debug(questions);
        res.json(questions);
    }
    catch(err){
        /*DevelopingLogger.error('hola');
        res.status(500).json(err);*/
        next(err);
    }    
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


//First delete endpoint of the question model
//this endpoint delete all the questions on the database
QuestionRoutes.delete('/deleteQuestion',
async (req,res, next)=>{
    try{
        const result = await QuestionsControllers.Delete(req);
        res.json(result);
    }
    catch(err){
        //DevelopingLogger.debug('hola');
        next(err)
    }
    
})

export {QuestionRoutes};