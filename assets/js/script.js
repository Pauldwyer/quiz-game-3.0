/**
 * Declaring constants for dom elements
 */
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');

/**
 * Declaring variables
 */
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/**
 * Declares the 4 questions in an array.
 */
let questions = [{
        question: 'What movie theme song does Dustin sing to Suzie at the end of season 3?',
        choice1: 'Never-ending story',
        choice2: 'Die hard',
        choice3: 'Top Gun',
        choice4: 'Tron',
        answer: 1,
    },
    {
        question: 'What is Jim Hoppers job?',
        choice1: 'Plumber',
        choice2: 'Fireman',
        choice3: 'Taxi Driver',
        choice4: 'Police Chief',
        answer: 4,
    },
    {
        question: 'Which character is played by Millie Bobby Brown?',
        choice1: 'Eleven',
        choice2: 'Robin',
        choice3: 'Max',
        choice4: 'Steve Harrington',
        answer: 1,
    },
    {
        question: 'What is the name of the ice cream parlour where Steve and Robin work in season 3?',
        choice1: 'the Hawthorne Grille',
        choice2: 'Lickity Splits',
        choice3: 'The Rovers Return',
        choice4: 'Scoops Ahoy',
        answer: 4,
    }
];

// points per correct question + how many questions does the user get
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

/**
 * start game function for starting the game
 * sets question counter and score to 0 
 * calls new question function
 */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * getNewQuestion is the main function.
 * Gets the questions, populates hud, and iterates through questions and answers.
 * Credit to James Q Quick youtube
 */
getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page if no questions are left
        return window.location.assign("end.html");
    };

    //populates the hud with a question counter 1/4, 2/4, etc.
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //iterates through each choice, grabs choice based on data number and populates text with answer
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //splices question just used from the array
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

/**
 * Gives a delay, allows selecting answer and gets a new question
 */
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

        //removes the highlight after 1000ms or 1second, and calls getNewQuestion function
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

//increments the score updates the hud
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

//calls the start game function
startGame();