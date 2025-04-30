import React from 'react';

function QuizCard({ question }) {
    return (
        <div className="quiz-card">
            <h3>{question.question}</h3>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
}

export default QuizCard;