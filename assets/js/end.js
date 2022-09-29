/**
 * Declaring constants
 */
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//sets the max amount of highscores to 5
const MAX_HIGH_SCORES = 5;
//sets populates the heading in end.html with the final score
finalScore.innerText = mostRecentScore;

//enables the save button if username has a value
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

/**
 * Save high score function creates the high scores list
 * Credit to James Q Quick youtube
 */
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    //adds highscores to array
    highScores.push(score);
    //sorts the highscores
    highScores.sort((a, b) => b.score - a.score);

    //cuts off after 5th highscore
    highScores.splice(5);
    //updates local storage with highscores an stringifys the highscore
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //goes back home
    window.location.assign("highscores.html");
};