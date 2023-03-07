import { Question } from "../models/questions.model.js";
import { Category } from "../models/category.model.js";
import { DevelopingLogger } from "../logger/index.js";
import Boom  from "@hapi/boom";

/*******************************Trditional Controllers********************************** */

//This controller is going to return all the questions, and in the case that the database is empty
//it will throw an error
const Get = async (req)=>{
    const results = await Question.find();
    if(results.length == 0){
        throw Boom.notFound('There are not questions on the database');
    }
    //res.json(results);
    return results;
}

//This controller is going to add a new question on the database
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
    return('completed');
}

//This controller is going to delete a question from the database based on an id
const DeleteQuestionById = async (req, res)=>{
    DevelopingLogger.debug('hola');
    let result = await Question.deleteOne({'_id':req.query.id});
    if(result.deletedCount == 0){
        throw Boom.notFound('There is not a question with this id');
    }
    return(result);
}

//This controller is going to update the information of a question based on an id
//and the other information
const updateByIdQuestion = async (req, res)=>{
    if(Array.isArray(req.query.id)){
    for(let i=0; i<req.query.id.length; i++){

    let question = await Question.findOne({'_id': req.query.id[i]});

    if(!question){
        throw Boom.notFound('There is not a question with this id on the database');
    }
    else{
        question.text = req.body[i].text;
        question.category = req.body[i].category;
        question.clue = req.body[i].clue;
        question.level = req.body[i].level;
        question.answers = req.body[i].answers;
        await question.save();
    }
    }
    }
    else{
        let question = await Question.findOne({'_id': req.query.id});
        if(!question){
            throw Boom.notFound('There is not a question with this id on the database');
        }
        else{
            question.text = req.body[0].text;
            question.category = req.body[0].category;
            question.clue = req.body[0].clue;
            question.level = req.body[0].level;
            question.answers = req.body[0].answers;
            await question.save();
        }
    }

    return('completed');
}

/********************************Personalized Controllers*****************************/

//get just 10 random unique questions agrupated by level and category
const GetTriviaHangman = async (req)=>{
    //DevelopingLogger.debug(req.params.slug);
    DevelopingLogger.debug(req.query.language);
    const categoryid = await Category.find({'name': req.query.slug}).select("id");

    const counteasy = await Question.count({'level': 'Easy', 'category': categoryid, 'language': req.query.language});
    DevelopingLogger.debug(counteasy);
    const countnormal = await Question.count({'level': 'Normal', 'category': categoryid, 'language': req.query.language});
    DevelopingLogger.debug(countnormal);
    const countmedium = await Question.count({'level': 'Medium', 'category': categoryid, 'language': req.query.language});
    DevelopingLogger.debug(countmedium);
    const counthard = await Question.count({'level': 'Hard', 'category': categoryid, 'language': req.query.language});
    DevelopingLogger.debug(counthard);
    
    let results = [];
    let counter = 1;

    DevelopingLogger.debug(counteasy);

    if(counteasy<2 || countnormal<2 || countmedium<3 || counthard<3){
        throw Boom.notFound('not enought questions on the database');
    }

    while(counter <= 2){
        let resulteasy = await Question.findOne({'level':'Easy', 'category': categoryid, 'language':req.query.language}).skip(Math.floor(Math.random() * counteasy));
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
            results.push(object);
            counter++;
        }
        else{
            DevelopingLogger.debug('repeat easy');
        }
    };
    counter = 1;
    while(counter <= 2){
        let resultnormal = await Question.findOne({'level':'Normal', 'category': categoryid, 'language':req.query.language}).skip(Math.floor(Math.random() * countnormal));
        
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
        let resultmedium = await Question.findOne({'level':'Medium', 'category': categoryid, 'language':req.query.language}).skip(Math.floor(Math.random() * countmedium));
        
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
        let resulthard = await Question.findOne({'level':'Hard', 'category': categoryid, 'language':req.query.language}).skip(Math.floor(Math.random() * counthard));
        
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
    
    DevelopingLogger.debug(results);
    //res.json(results);
    return (results);
}

//This controller delete all the questions o the databe, this controller is
//just for development
const DeleteAllQuestions = async (req)=>{
    const result = await Question.remove({});
    if(result.deletedCount == 0){
        throw Boom.notFound('there are no questions on the database');
    }
    return(result);
   
}

//Object that contains all the controller, this object is exported to the routes file 
const QuestionsControllers = {
    'GetTriviaHangman': GetTriviaHangman,
    'Update': updateByIdQuestion,
    'Delete': DeleteAllQuestions,
    'DeleteById': DeleteQuestionById,
    //'GetGame2': GetGame2,
    'PostGame1': PostQuestions,
    'Get': Get
}

export {QuestionsControllers};