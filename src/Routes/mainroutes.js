import express  from "express";
import { QuestionRoutes } from "./questions.routes.js";
import { CategoriesRoutes } from "./categories.routes.js";

//Creating a separated module for the routes
function Routes(app){
    
    //Route to the questions module
    //añadir /v1
    app.use('/v1/questions', QuestionRoutes );
    app.use('/v1/categories', CategoriesRoutes);

}

export {Routes};