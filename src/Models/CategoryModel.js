import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    'name':{
        'type':String,
        'required': true
    },
    'description':{
        'type': String,
        'required': true
    }
})

const Category = mongoose.model('Category',CategorySchema);

export {Category};