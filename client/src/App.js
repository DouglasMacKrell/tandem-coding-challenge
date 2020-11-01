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
    let counter = 0
    for (let question of trivia) {
      let questions = question.incorrect;
      let correct = question.correct;
      questions.push(correct);
      let myObj = {
        question: question.question,
        choices: questions,
        correct: question.correct,
        id: counter
      };
      result.push(myObj);
      counter += 1
    }
    console.log(result);
    setTrivia(result);
  };

  const selectQuestions = () => {
    let result = []
    let random = 0

    const getRandom = () => {
      random = Math.floor(Math.random() * 21)
    }

    const checkResult = (id) => {
      let found = false
      for (let question of result) {
        if (id === question.id) {
          found = true
        }
      }
      return found
    }

    for (let i = 0; i < 10; i++) {
      getRandom()
      while (checkResult(random)) {
        getRandom()
      }
      result.push(trivia[random])
    }
    setGameQuestions(result)
  }

  useEffect(() => {
    compileTrivia();
  }, []);

  // useEffect(() => {
  //   selectQuestions()
  // }, [])

  console.log(trivia);
  console.log(gameQuestions)
  return (
    <div className="App">
      Hello World
      <br />
      <button onClick={selectQuestions}>GO</button>
    </div>
  );
};

export default App;
