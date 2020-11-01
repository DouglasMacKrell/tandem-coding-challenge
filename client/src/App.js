import React, { useState, useEffect } from "react";

import "./App.css";
import Trivia from "./Apprentice_TandemFor400_Data.json";

const App = () => {
  const [trivia, setTrivia] = useState(Trivia);
  const [gameQuestions, setGameQuestions] = useState([])
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const compileTrivia = () => {
    let result = [];
    for (let question of trivia) {
      let questions = question.incorrect;
      let correct = question.correct;
      questions.push(correct);
      let myObj = {
        question: question.question,
        choices: questions,
        correct: question.correct,
      };
      result.push(myObj);
    }
    console.log(result);
    setTrivia(result);
  };

  const selectQuestions = () => {
    let result = []

    for (let i = 0; i < 10; i++) {
      
    }
  }

  useEffect(() => {
    compileTrivia();
  }, []);

  console.log(trivia);
  return (
    <div className="App">
      Hello World
      <br />
      <button>GO</button>
    </div>
  );
};

export default App;
