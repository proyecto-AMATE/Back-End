import { DevelopingLogger } from "../logger/index.js";
import boom from "@hapi/boom";

function validationhandler(schema, property){
    return(req, res, next)=>{
        //DevelopingLogger.debug('hola');
        const data = req[property];
        DevelopingLogger.debug(data);
        const {error} = schema.validate(data);
        if(error){
            res.status(300).json(error);
        }
        else{
            next();
        }
    }
}

export{validationhandler};