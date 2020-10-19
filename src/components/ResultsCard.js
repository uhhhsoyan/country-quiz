import React from 'react';

const ResultsCard = ({ results, tryAgain }) => {
    return (
        <div className="results-container">
            <p className="card-title">COUNTRY QUIZ</p>
            <span className="results-img"/>
            <p className="results-title">Results</p>
            <p className="results-text">You got <b>{results}</b> correct answers</p>
            <a onClick={tryAgain} className="try-again-btn">Try again</a>
        </div>
    )
}

export default ResultsCard;