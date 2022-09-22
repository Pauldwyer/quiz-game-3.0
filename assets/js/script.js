const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
//for targetting the hud
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');

let currentQuestions = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
];

// points per correct question + how many questions does the user get
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

//start game funciton
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// get new question function
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to end page if no questions left
        return window.location.assign("end.html");
    }

    questionCounter++;
    //populates the hud with a question couter
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //iterates through each choice, grabs choice based on data numer and populates text with answer
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //splices question just used from the array
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

//gives a delay, allows selecting answer and gets new question
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //gives choices a class based on correct or incorrect
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //removes the highlight after 1000ms or 1second
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    })
})

//increments the score updates the hud
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

//calls the start game funciton
startGame()