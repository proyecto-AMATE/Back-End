import { Question } from "../Models/QuestionsModel.js";

//First controller for the questions model
//get all the questions
const GetAllQuestions = async (req, res)=>{
    try{
        const results = await Question.find();
        res.json(results);
    }
    catch(error){
        
        res.json(error);
    }
}

//get just 10 random unique questions
const GetGame1Questions = async (req, res)=>{
    const count = await Question.count();
    let array1 = [];
    let counter = 1;

    while(counter <= 10){
        let result = await Question.findOne().skip(Math.floor(Math.random() * count));
        let flag = array1.map(element=>(element.id == result.id));

        if (!flag.includes(true)){
            array1.push(result);
            counter++;
        }
        else{
            console.log('repeat');
        }
    }

    res.json(array1);
}

//add a new question
const PostQuestions = async (req, res)=>{
    const newquestion = new Question({
        'text': req.body.text,
        'category': req.body.text,
        'clue': req.body.clue
    });
    
    const results = await newquestion.save();
    res.json(results);
}

const QuestionsControllers = {
    'GetGame1': GetGame1Questions,
    'PostGame1': PostQuestions,
    'GetAll': GetAllQuestions
}

export {QuestionsControllers};