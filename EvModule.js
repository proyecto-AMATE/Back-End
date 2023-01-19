import dotenv from 'dotenv';

//initialize the enviroment variables
dotenv.config();

const ev = {
    'name': process.env.USER_NAME,
    'password': process.env.PASSWORD
}

export {ev}