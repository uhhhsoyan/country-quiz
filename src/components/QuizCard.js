import React from 'react';

const QuizCard = () => {
    return (
        <div className="card-container">
            <p className="card-title">COUNTRY QUIZ</p>
            <a href="#" className="card-img"></a>
            <p className="card-question">
                Kuala Lampur is the capital of
            </p>
            <a href="#" className="card-answer">
                <span className="card-answer-letter">A</span>
                <span className="card-answer-country">Vietnam</span>
            </a>
            <a href="#" className="card-answer">
                <span className="card-answer-letter">B</span>
                <span className="card-answer-country">Australia</span>
            </a>
            <a href="#" className="card-answer">
                <span className="card-answer-letter">C</span>
                <span className="card-answer-country">Sri Lanka</span>
            </a>
            <a href="#" className="card-answer">
                <span className="card-answer-letter">D</span>
                <span className="card-answer-country">Djibouti</span>
            </a>
        </div>
    )
}

export default QuizCard;