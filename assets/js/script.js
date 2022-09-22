const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questonCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '5',
        choice4: '66',
        answer: 2,
    },
    {
        question: 'Who is the best?',
        choice1: 'Paul',
        choice2: 'Viv',
        choice3: 'Din',
        choice4: 'Sam',
        answer: 1,
    },
    {
        question: 'Lorem Lipsum',
        choice1: 'is',
        choice2: 'this',
        choice3: 'a',
        choice4: 'placeholder',
        answer: 3,
    },
    {
        question: 'Lorem Lipsum?',
        choice1: 'Si',
        choice2: 'No',
        choice3: 'Yes',
        choice4: 'ok',
        answer: 1,
    }
]