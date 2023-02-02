# Back-End
In this guide I'm going to introduce you on how to download, run and interact with this API.

## Clone
first you need to clone the repository, you can do it by clicking on the clone button on the repository page, then you have to copy the url
and paste on your computer console writing the following comand:

`git clone <url>`

after this you will have the repository files on your computer

## Setting the enviroment variables
Before runing the code you have to set your enviromen variables, currently there are two varibles that you must have to specify to run the code, the `USER_NAME` and the `PASSWORD`, these variable have to be written in a new .env file in the Back-End folder, this is because right now we are using a mongo cloud database and you need to provide this information, that means that have to have an mongo atlas account and you have to request for permision to any of the development crew.

## Runing the code
Then you have to write on your cansole the next command:
`npm start`

## Interacting with the API

These are the endpoint that have been implemented in the API till now, more endpoint will be added  in the future:

### GetGame 1
> http://localhost:3000/questions/getGame1

this endpoint is used for the 'Who wants to be millionarie' and the 'Hang man' game , it returns you an array of the objects containing the questions and answers, two of them with easy level, two of normal level, three of medium level and three of hard level, but you have to provide a JSON object containing the category that you want to get the data.

> {"name":"Category1"} or {"name": "Category2"}

### GetAllQuestions
> http://localhost:3000/questions/getAll

this endpoint returns all of the questions on the database

### PostQuestion
> http://localhost:3000/questions/postquestion

this endpoint is used to add a new question on the database

### GetAllCategories
> http://localhost:3000/categories/getAll

this endpoint returns all of the categories on the database

### Post Questions
> http://localhost:3000/categories/post

this endpoint is used to add a new category on the database



#

