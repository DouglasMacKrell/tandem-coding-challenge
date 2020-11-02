import React, { useState, useEffect } from 'react'

import './QuestionCard.css'

const QuestionCard = ({ questionNr, totalQuestions, question, choices, userAnswer, callback }) => {
    // const [status, setStatus] = useState(null)

    // const changeStatus = (choice) => {
    //     if (userAnswer) {
    //         if (userAnswer.correctAnswer === choice) {
    //             setStatus("correct-answer")
    //         } else if (userAnswer.correctAnswer !== choice && userAnswer.answer === choice) {
    //             setStatus
    //         }
    //     }
    // }

    return (
      <div className="question-card">
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div className="multi-container">
          {choices.map((choice) => (
            <div
              key={choice}
              correct={userAnswer?.correctAnswer === choice}
              userClicked={userAnswer?.answer === choice}
            >
              <button
                disabled={userAnswer ? true : false}
                value={choice}
                onClick={callback}
                className={
                  userAnswer
                    ? userAnswer.correctAnswer === choice
                      ? "multiple-choice-btn correct"
                      : userAnswer.correctAnswer !== choice &&
                        userAnswer?.answer === choice
                      ? "multiple-choice-btn wrong"
                      : "multiple-choice-btn"
                    : "multiple-choice-btn"
                }
              >
                <span dangerouslySetInnerHTML={{ __html: choice }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default QuestionCard
