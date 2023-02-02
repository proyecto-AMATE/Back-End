import express  from "express";
import { QuestionRoutes } from "./QuestionsRoutes.js";
import { CategoriesRoutes } from "./CategoriesRoutes.js";

//Creating a separated module for the routes
function Routes(app){
    
    //Route to the questions module
    app.use('/questions', QuestionRoutes );
    app.use('/categories', CategoriesRoutes);

}

export {Routes};