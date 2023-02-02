import { Question } from "../Models/QuestionsModel.js";
import { Category } from "../Models/CategoryModel.js";

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

//get just 10 random unique questions agrupated by level and category
const GetGame1 = async (req, res)=>{
    const categoryid = await Category.find({'name': req.body.name}).select("id");

    const counteasy = await Question.count({'level': 'Easy', 'category': categoryid});
    const countnormal = await Question.count({'level': 'Normal', 'category': categoryid});
    const countmedium = await Question.count({'level': 'Medium', 'category': categoryid});
    const counthard = await Question.count({'level': 'Hard', 'category': categoryid});
    
    let results = [];
    let counter = 1;


    if(counteasy<10 || countnormal<10 || countmedium<10 || counthard<10){
        return(res.json('not enought questions on the database'));
    }

    while(counter <= 2){
        let resulteasy = await Question.findOne({'level':'Easy', 'category': categoryid}).skip(Math.floor(Math.random() * counteasy));
        
        let flag = results.map(element=>(element.id == resulteasy.id));

        console.log(flag);
        if (!flag.includes(true)){
            results.push(resulteasy)
            counter++;
        }
        else{
            console.log('repeat');
        }
    };
    counter = 1;
    while(counter <= 2){
        let resultnormal = await Question.findOne({'level':'Normal', 'category': categoryid}).skip(Math.floor(Math.random() * countnormal));
        
        let flag = results.map(element=>(element.id == resultnormal.id));

        console.log(flag);
        if (!flag.includes(true)){
            results.push(resultnormal);
            counter++;
        }
        else{
            console.log('repeat');
        }
    };
    counter = 1;
    while(counter <= 3){
        let resultmedium = await Question.findOne({'level':'Medium', 'category': categoryid}).skip(Math.floor(Math.random() * countmedium));
        
        let flag = results.map(element=>(element.id == resultmedium.id));

        console.log(flag);
        if (!flag.includes(true)){
            results.push(resultmedium);
            counter++;
        }
        else{
            console.log('repeat');
        }
    };
    counter = 1;
    while(counter <= 3){
        let resulthard = await Question.findOne({'level':'Hard', 'category': categoryid}).skip(Math.floor(Math.random() * counthard));
        
        let flag = results.map(element=>(element.id == resulthard.id));

        console.log(flag);
        if (!flag.includes(true)){
            results.push(resulthard);
            counter++;
        }
        else{
            console.log('repeat');
        }
    }

    res.json(results);
}

//get just 10 random unique questions agrupated by level and category
/*const GetGame2 = async (req, res)=>{
    try{
        const categoryid = await Category.find({'name': req.name}).select("id");
        const result = await Question.findOne({'category': categoryid});
        res.json(result);
    }
    catch(error){
        res.json(error);
    }
}*/

//add a new question
const PostQuestions = async (req, res)=>{
    const newquestion = new Question({
        'text': req.body.text,
        'category': req.body.category,
        'clue': req.body.clue,
        'level': req.body.level,
        'answers': req.body.answers
    });
    
    const results = await newquestion.save();
    res.json(results);
}


const QuestionsControllers = {
    'GetGame1': GetGame1,
    //'GetGame2': GetGame2,
    'PostGame1': PostQuestions,
    'GetAll': GetAllQuestions
}

export {QuestionsControllers};