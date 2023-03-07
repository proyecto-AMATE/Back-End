import { DevelopingLogger } from "../logger/index.js";
import { getquestiongame1, updatequestiongame1} from '../dot/questions.dot.js';
import boom from "@hapi/boom";

function validateid(schema, req, next){

    const {error} = schema.validate(data);

    if(error){
        next(error);
    }
    else{
        next();
    }
}

function validationhandler(schema, property){
    return(req, res, next)=>{

        const data = req[property];

        const {error} = schema.validate(data);

        DevelopingLogger.error(error);
        if(error){
            next(error);
        }
        else{
            next();
        }
    }
}

function validatearray(){
    return(req, res, next)=>{
        DevelopingLogger.debug(req.query.id);
    if(Array.isArray(req.query.id)){
        DevelopingLogger.debug('array');
        try{
        validateid(updatequestiongame1, req, next)();
        }
        catch(error){
            next(error)
        }
    }
    else{
        DevelopingLogger.debug('not array');
        try{
        validateid(getquestiongame1, req, next)();
        }
        catch(error){
            next(error);
        }
    }
}
}

export{validationhandler, validatearray};