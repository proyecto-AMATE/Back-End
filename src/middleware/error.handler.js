import { DevelopingLogger } from "../Logger/index.js";

const errorhandler = (err, req, res, next)=>{
    
    /* 
    DevelopingLogger.info(err.output);
    //DevelopingLogger.error(err);
    //res.status(404).json(err);
    if(err.isBoom){
        DevelopingLogger.error(err.output.payload.message);
        const {output} = err;
        
        res.status(output.statusCode).json(output.payload);
    } */
}

export default errorhandler;