const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('server is listening at https://localhost:3000/')
});

let goodAnswers = 0;
let callToAFriend = false;
let questionToTheCrowd = false;
let halfOnHalf = false;

const questions = [
    {
        question: ' co tam ?',
        answers: ['spoko','cool','jakos leci','niezle'],
        correctAnswer: 0,
    },
    {
        question: ' jak leci ?',
        answers: ['bien','wysoko','ok','good'],
        correctAnswer: 1,
    },
    {
        question: ' palisz ?',
        answers: ['tak','nie','co ? ','pewka'],
        correctAnswer: 0,
    },
];

app.get('/question', (req, res) => {
    
})