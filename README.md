# Doug's Quiz City

## A fun quiz app created for Tandem's Apprentice Software Engineer Program!

### Live @ [dougs-quiz-city.netlify.app](https://dougs-quiz-city.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb6cfa5f-ed54-4027-be01-bced6053229d/deploy-status)](https://app.netlify.com/sites/dougs-quiz-city/deploys)

[![Doug's Quiz City](https://media.giphy.com/media/IoaUtRNzgX6LHCLsuQ/giphy.gif)](https://dougs-quiz-city.netlify.app/)

**Doug's Quiz City** is a simple quiz app designed with a few prerequisites per Tandem:

Assumptions

* A round of trivia has 10 Questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

Acceptance Criteria

* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

The site is built with React.js with Hooks, and styled with CSS.

[![Douglas MacKrell](https://www.douglasmackrell.com/Doug-Portfolio-Social.png)](https://dougmackrell.com)

## Features

Users are able to:

* Start a new quiz by clicking the 'START' button
* Quiz features 21 randomized multiple choice questions
  * All multiple choices are additionally randomized - so no two games are the same!
* Display showcases how many questions remain in the quiz
* Player's score is immediately updated when a correct answer is selected
* After selection, the correct answer is highlighted in green
* If the wrong answer is selected, it is highlighted in red
* A hover effect was added to help players know which multiple choice their mouse is over

## Future Features

* Sitewide Accessability Enhancements: I would love to add the ability to make selections using a keyboard or non-mouse input, and further aids for the visually impaired 
* The implementation of a back-end server and database to allow users to create simple player accounts, keep track of their history, and monitor a leaderboard of high scores
* Adding User Settings that allow a user to alter the number of questions, site styling, or question difficulty
* Tools for moderators to add or remove questions
* A form for general users to submit a question for consideration

## Technical Milestones

* Parsing the provided json file, and compiling the data
* Leaving the code adaptable through global variables - for example, the number of questions can be changed by updating a single variable at the top of the App.js file
* Randomizing both the question bank and their multiple choice answers
* Targeting changes in CSS styling through ternary feedback after player input
* Displaying and locking components in the virtual DOM through ternary results
* The app is fully responsive and works at any screen width

## Technologies Used

* **Node.js** For loading in the required libraries
* **React.js** For the front-end/client interface of my app
* **CSS3**

## Local Setup

You must install [Node.js](https://nodejs.org) in your computer.

You can check for these dependencies with `node -v` from your shell/terminal. If it doesn't complain and you see version numbers you are good to go.

1. Clone this repo into a folder of your choice:
```
       git clone https://github.com/DouglasMacKrell/tandem-coding-challenge.git
```

2. Install dependencies for the React App (`client` folder):
```
       cd client && npm install
```

3. To launch the React App, inside the `client` folder, run:
```
       npm start
```

4. A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

---

### Please check out my other work at [DouglasMacKrell.com](https://douglasmackrell.com)

---

[![DougTV Social Media](https://dougtv.herokuapp.com/DougTV-Social.png)](https://dougtv.herokuapp.com)

** **

<details>
    <summary>
        Before you leave, please take note:
    </summary>

You're the best! Thank you for visiting - and for this amazing opportunity!

Please give this project a star and be sure to check out my [YouTube Channel](https://youtube.com/BigMacKrell)!

</details>