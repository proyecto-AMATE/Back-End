import { CategoriesControllers } from "../Controllers/CategoriesControllers.js";
import express from "express";

const CategoriesRoutes = express.Router();

//First get endpoint of the categories model
//this endpoint gets all the categories available on the database
CategoriesRoutes.get('/getAll', (req, res)=>{CategoriesControllers.GetAll(req,res)});

//First get endpoint of the categories model
//this endpoint post one category
CategoriesRoutes.post('/post', (req, res)=>{CategoriesControllers.PostCategory(req, res)});

export {CategoriesRoutes};