import React from 'react';

const ResultsCard = ({ results, tryAgain }) => {
    return (
        <div className="results-container">
            <p className="card-title">COUNTRY QUIZ</p>
            <span className="results-img"/>
            <p className="results-title">Results</p>
            <p className="results-text">You got <b>{results}</b> correct answers</p>
            <a href="country-quiz-ee.netlify.app" onClick={tryAgain} className="try-again-btn">New quiz</a>
        </div>
    )
}

export default ResultsCard;