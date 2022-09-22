const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices)

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questonCounter = 0;
let availableQuestions = []