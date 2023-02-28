import express from "express";
import {Category} from "../models/category.model.js";

//get all the categories on the database
const GetAllCategories = async (req, res)=>{
    const results = await Category.find();
    res.json(results);
}

//post a category on the database
const PostCategory = async (req, res)=>{
    const newcategory = new Category({
        'name': req.body.name,
        'description': req.body.description
    });
    
    const result = await newcategory.save();
    return(result);
}

const CategoriesControllers = {
    'GetAll': GetAllCategories,
    'PostCategory': PostCategory
}

export {CategoriesControllers};