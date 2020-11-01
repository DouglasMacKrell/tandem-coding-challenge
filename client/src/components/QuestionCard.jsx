import React from 'react'

import './QuestionCard.css'

const QuestionCard = ({ questionNr, totalQuestions, question, choices, userAnswer, callback }) => {
    return (
        <div>
            Hello Question {questionNr}
        </div>
    )
}

export default QuestionCard
