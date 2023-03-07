import { DevelopingLogger } from "../Logger/index.js";

const errorhandler = (err, req, res, next)=>{
    
    if(err.isBoom){
        const {output} = err;
        
        res.status(output.statusCode).json(output.payload);
    }
    else{
        res.status(300).json(err.details[0].message);
    }
}

export default errorhandler;