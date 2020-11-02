import React, { useState, useEffect } from "react";

import "./App.css";
import Trivia from "./Apprentice_TandemFor400_Data.json";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [trivia, setTrivia] = useState(Trivia);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const compileTrivia = () => {
    let result = [];
    let counter = 0;
    for (let question of trivia) {
      let questions = question.incorrect;
      let correct = question.correct;
      questions.push(correct);
      let myObj = {
        question: question.question,
        choices: questions,
        correct: question.correct,
        id: counter,
      };
      result.push(myObj);
      counter += 1;
    }
    console.log(result);
    setTrivia(result);
  };

  const getRandom = (limit) => {
    let random = Math.floor(Math.random() * limit);
    return random;
  };

  const randomizeChoices = (arr) => {
    let result = [];
    let random = 0;

    const checkResult = (str) => {
      let found = false;
      for (let choice of result) {
        if (choice === str) {
          found = true;
        }
      }
      return found;
    };

    for (let i = 0; i < arr.length; i++) {
      let random = getRandom(arr.length);
      while (checkResult(arr[random])) {
        random = getRandom(arr.length);
      }
      result.push(arr[random])
    }
    return result
  };

  const selectQuestions = () => {
    let result = [];
    let random = 0;

    const checkResult = (id) => {
      let found = false;
      for (let question of result) {
        if (id === question.id) {
          found = true;
        }
      }
      return found;
    };

    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      random = getRandom(21);
      while (checkResult(random)) {
        random = getRandom(21);
      }
      let selection = trivia[random];
      selection.choices = randomizeChoices(selection.choices)

      result.push(selection);
    }
    setGameQuestions(result);
  };

  const startTrivia = () => {
    setLoading(true);
    setGameOver(false);
    selectQuestions();
    setScore(0);
    setUserAnswers([]);
    setRound(0);
    setLoading(false);
  };

  const checkAnswer = (e) => {
    if (!gameOver) {
      //user's answer
      const answer = e.currentTarget.value;
      //check answer against correct value
      const correct = gameQuestions[round].correct === answer;
      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //save answer in array of user answers
      const answerObject = {
        question: gameQuestions[round].question,
        answer,
        correct,
        correctAnswer: gameQuestions[round].correct,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move on to the next question (if not the last)
    const nextQuestion = round + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setRound(nextQuestion);
    }
  };

  useEffect(() => {
    compileTrivia();
  }, []);

  console.log(trivia);
  console.log(gameQuestions);
  return (
    <div className="App">
      <h1>DOUG'S QUIZ CITY</h1>
      <br />
      {gameOver || userAnswers.length === 10 ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={round + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={gameQuestions[round].question}
          choices={gameQuestions[round].choices}
          userAnswer={userAnswers ? userAnswers[round] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === round + 1 &&
      round !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
