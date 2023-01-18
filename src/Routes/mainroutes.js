import express  from "express";
import { QuestionRoutes } from "./QuestionsRoutes.js";

//Creating a separated module for the routes
function Routes(app){
    
    //Route to the questions module
    app.use('/questions', QuestionRoutes );
}

export {Routes};