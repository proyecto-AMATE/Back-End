//import { routes } from '../src/Routes/mainroutes';
import { app } from '../src/app';
import request from 'supertest';

describe('Questions', ()=>{
    describe('Succesfull', ()=>{
        test('should respond with a 200 staus code', async ()=>{
            const response = await request(app).get("/questions/getquestion").send();
            expect(response.statusCode).toBe(200);
        })

    })
    
})