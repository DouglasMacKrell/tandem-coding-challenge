import React from 'react'

import './QuestionCard.css'

const QuestionCard = ({ questionNr, totalQuestions, question, choices, userAnswer, callback }) => {
    return (
      <div className="question-card">
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div className="multiple-choice-btn">
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
