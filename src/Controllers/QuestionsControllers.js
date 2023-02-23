import { Question } from "../Models/QuestionsModel.js";
import { Category } from "../Models/CategoryModel.js";
import { DevelopingLogger } from "../Logger/index.js";
import Boom  from "@hapi/boom";

//get all the questions
const Get = async (req)=>{
    const results = await Question.find();
    if(results.length == 0){
        throw Boom.notFound('There are not questions on the database');
    }
    //res.json(results);
    return results;
}

//get just 10 random unique questions agrupated by level and category
const GetGame1 = async (req)=>{
    const categoryid = await Category.find({'name': "Category 1"}).select("id");

    const counteasy = await Question.count({'level': 'Easy', 'category': categoryid});
    const countnormal = await Question.count({'level': 'Normal', 'category': categoryid});
    const countmedium = await Question.count({'level': 'Medium', 'category': categoryid});
    const counthard = await Question.count({'level': 'Hard', 'category': categoryid});
    
    let results = [];
    let counter = 1;

    if(counteasy<2 || countnormal<2 || countmedium<3 || counthard<3){
        throw Boom.notFound('not enought questions on the database');
    }

    while(counter <= 2){
        let resulteasy = await Question.findOne({'level':'Easy', 'category': categoryid}).skip(Math.floor(Math.random() * counteasy));
        
        let flag = results.map(element=>(element.question == resulteasy.text));

        if (!flag.includes(true)){
            let newanswers = resulteasy.answers.map((element)=>({'id': resulteasy.answers.indexOf(element), 'answer': element.text})).sort(() => {return (Math.random()-0.5)});
            let elementtrue = resulteasy.answers.filter((element)=>(element.correct == true))[0];
            let indextrue = resulteasy.answers.indexOf(elementtrue);
            let object = {
                'question': resulteasy.text,
                'options': newanswers,
                'answer': indextrue,
                'clue': resulteasy.clue
                }
            results.push(object)
            counter++;
        }
        else{
            DevelopingLogger.debug('repeat easy');
        }
    };
    counter = 1;
    while(counter <= 2){
        let resultnormal = await Question.findOne({'level':'Normal', 'category': categoryid}).skip(Math.floor(Math.random() * countnormal));
        
        let flag = results.map(element=>(element.question == resultnormal.text));

        if (!flag.includes(true)){
            let newanswers = resultnormal.answers.map((element)=>({'id': resultnormal.answers.indexOf(element), 'answer': element.text})).sort(() => {return (Math.random()-0.5)});
            let elementtrue = resultnormal.answers.filter((element)=>(element.correct == true))[0];
            let indextrue = resultnormal.answers.indexOf(elementtrue);
            let object = {
                'question': resultnormal.text,
                'options': newanswers,
                'answer': indextrue,
                'clue': resultnormal.clue
                }
            results.push(object);
            counter++;
        }
        else{
            DevelopingLogger.debug('repeat normal');
        }
    };
    counter = 1;
    while(counter <= 3){
        let resultmedium = await Question.findOne({'level':'Medium', 'category': categoryid}).skip(Math.floor(Math.random() * countmedium));
        
        let flag = results.map(element=>(element.question == resultmedium.text));

        if (!flag.includes(true)){
            let newanswers = resultmedium.answers.map((element)=>({'id': resultmedium.answers.indexOf(element), 'answer': element.text})).sort(() => {return (Math.random()-0.5)});
            let elementtrue = resultmedium.answers.filter((element)=>(element.correct == true))[0];
            let indextrue = resultmedium.answers.indexOf(elementtrue);
            let object = {
                'question': resultmedium.text,
                'options': newanswers,
                'answer': indextrue,
                'clue': resultmedium.clue
                }
            results.push(object);
            counter++;
        }
        else{
            DevelopingLogger.debug('repeat medium');
        }
    };
    counter = 1;
    while(counter <= 3){
        let resulthard = await Question.findOne({'level':'Hard', 'category': categoryid}).skip(Math.floor(Math.random() * counthard));
        
        let flag = results.map(element=>(element.question == resulthard.text));
        

        if (!flag.includes(true)){
            let newanswers = resulthard.answers.map((element)=>({'id': resulthard.answers.indexOf(element), 'answer': element.text})).sort(() => {return (Math.random()-0.5)});
            let elementtrue = resulthard.answers.filter((element)=>(element.correct == true))[0];
            let indextrue = resulthard.answers.indexOf(elementtrue);
            let object = {
                'question': resulthard.text,
                'options': newanswers,
                'answer': indextrue,
                'clue': resulthard.clue
                }
            results.push(object);
            counter++;
        }
        else{
            DevelopingLogger.debug('repeat hard');
        }
    }
    
    //res.json(results);
    return (results);
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
    for(let i = 0; i<=req.body.length -1; i++){
        console.log(i);
    const newquestion = new Question({
        'text': req.body[i].text,
        'category': req.body[i].category,
        'clue': req.body[i].clue,
        'level': req.body[i].level,
        'answers': req.body[i].answers
    });
    
        await newquestion.save();
    }
    res.json('completed');
}

const DeleteAllQuestions = async (req, res)=>{
    let result = await Question.remove({});
    res.json(result);
    
}

const QuestionsControllers = {
    'GetGame1': GetGame1,
    'Delete': DeleteAllQuestions,
    //'GetGame2': GetGame2,
    'PostGame1': PostQuestions,
    'Get': Get
}

export {QuestionsControllers};