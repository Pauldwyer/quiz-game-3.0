const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//map takes an array of items and coverts into something else. In this case a list
highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join("");