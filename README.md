# Quiz Game / Stranger Things Quiz

Quiz Game is a Stranger Things Quiz that is aimed at viewers of the hit tv series "Stranger Things". 

It is meant as abit of light hearted fun and to test people on their Stranger Things knowledge.

There is a high scores leader board so users can compare their own high scores.


## UX 

The scope of this project was to build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.
Required technologies: HTML, CSS, JavaScript.

### Project Goals


### User Stories

## Features 

In this section I will show and discuss all the features of the site.

### Existing Features

- Home is the first page you see when you open the site. It clearly states the name of the quiz, has one button for Play and one button for Highscores.
    - The play button initiates the start of the quiz.
    - The highscores button brings you to a different page that has the list of high scores.
    - The footer which clearly states the site is built for academic purposes and has a link to the developers GitHub.

![Home Page](assets/images/home-page-features.png)

- Game page. The game starts when you click the play button. You are brought to a different page that has multiple choice questions.
  - There is a question counter in the top left corner to show which question the user is on.
  - There is a score counter in the top right corner that increments by 10 points everytime the user gets a question correct.
  - The question is displayed.
  - Four multiple choice answers are provided.
  - When you hover over a answer there is a hover effect on mouse over.
  - If you select correct or incorrect answers the buttons will highlight with a different colour respectively.


![Game Page](assets/images/game-page-features.png)
![Game Page Capture](assets/images/game-page-capture.gif)

- End page is displayed when all four questions have been answered. This page has total score at the top, four buttons and a footer.
  - Total score at the top of the screen shows what score the user received.
  - Username button allows the user to input a username to show on the high scores list
  - Save button is only available when the user has inputted a username. This allows the user the save their username on the highscore list.
  - Play again button allows the user to play the game again.
  - Go home button allows the user to return to the home page.

![End Game](assets/images/end-page-features.png)

- High Scores page shows a list of the top 5 scores that have been recorded.

![High Scores](assets/images/high-score-page.png)


### Future Features




## Technology Used

  - [HTML5](https://www.w3schools.com/html/)


  - [CSS](https://www.w3schools.com/css/css_intro.asp)

  
  - [JavaScript](https://www.w3schools.com/js/)


  - [GitPod](https://gitpod.io/)


  - [GitHub](https://github.com/)


  - [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)


## Testing 


### Manual Testing




### Validator Testing 
- HTML
  - Index.html no errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-pp2%2F)
  - Game.html showed 2 warnings and 1 error.![w3c-validator warning/errors](assets/images/w3c-validator-error-game.html.png)
   Willing to accept the empty heading warning as this heading will be populated as part of the getNewQuestion() Function. I fixed the error by removing obsolete id's.
   Game.html now showing 1 warning. As pointed out above, willing to accept this warning. [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-pp2%2Fgame.html)
  - End.html showing 1 warning. Willing to accept this warning as the blank space is populated by the end.js file. [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-pp2%2Fend.html)
  - Highscores.html no errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-pp2%2Fhighscores.html)

- CSS
  - Style.css no errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-3.0%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - Highscores.css no errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpauldwyer.github.io%2Fquiz-game-3.0%2Fhighscores.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - 1 Error found in game.css
  ![Game.css Jigsaw validator error](assets/images/game.css-validator-error.png)
  - Game.css error has been fixed and no errors were found when passing through the official [(Jigsaw) validator]()

- JavaScript
  - Accepting these warnings. No erors shown.

    ![Script.js warnings](assets/images/script.js-warnings.png)

  - Accepting these warnings. No errors shown.

    ![High-scores.js warnings](assets/images/high-scores.js-jshint.png)

  - Accepting these warnings. One unused variable sets the max number of highscores to five. One undefined variable adds the score to the an array, sorts the array and splices out the lowest and keeps the array at a length of five. No errors shown.

    ![End.js shint warnings](assets/images/end.js-jshint-warnings.png)


### Unfixed Bugs

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - In settings click the Pages link in the left side bar
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://pauldwyer.github.io/quiz-game-pp2/

## Credits 

[w3schools](https://www.w3schools.com/html/default.asp)

[Flexbox Frogy](https://flexboxfroggy.com/) This game thought me how to use flex box.

### Content 


### Media

