import joi from 'joi';

const id = joi.string().id();
const text = joi.string();
const category = joi.string().id();
const clue = joi.string();
const level = joi.string().regex(/(^Easy)|(^Normal)|(^Medium)|(^Hard)$/);
const language = joi.string().regex(/(^English)|(^Español)$/);

const answer = joi.object({
    text: joi.string(),
    correct: joi.boolean()
})


const getquestiongame1 = joi.object({
    id: id
})

const updatequestiongame1 = joi.object({
    id:joi.array().items(id)
}) 

const questiongame1 = joi.object({

    text: text.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    category: category.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    clue: clue.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    level: level.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    language: language.alter({
        post: (questiongame1)=> questiongame1.required(),
        update: (questiongame1)=> questiongame1.optional()
    }),
    answers: joi.array().items(answer).alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    })
});

const questiongame2 = joi.object({
    _id: id.alter({
        //get: (questiongame1) => questiongame1.required(),
        post: (questiongame1) => questiongame1.forbidden(),
        //delete: (questiongame1) => questiongame1.required(),
        update: (questiongame1) => questiongame1.required()
    }),
    text: text.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    category: category.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    clue: clue.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    level: level.alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    }),
    answers: joi.array().items(answer).alter({
        //get: (questiongame1)=> questiongame1.required(),
        post: (questiongame1) => questiongame1.required(),
        //delete: (questiongame1) => questiongame1.forbidden(),
        update: (questiongame1) => questiongame1.optional()
    })
});




//const getquestiongame1array = joi.array().items(questiongame1.tailor('get'));
const postquestiongame1array = joi.array().items(questiongame1.tailor('post'));
const updatequestiongame1array = joi.array().items(questiongame1.tailor('update'));
//const deletequestiongame1array = joi.array().items(questiongame1.tailor('delete'));

const game1 = {
    //'get': getquestiongame1array,
    'post': postquestiongame1array,
    //'delete': deletequestiongame1array,
    'update': updatequestiongame1array
}

export {game1, getquestiongame1, updatequestiongame1};