import React, { useEffect, useState } from 'react';

const QuizButton = ({ option, value, correctAnswer, onClick, showAnswers }) => {
    const [btnStyle, setBtnStyle] = useState("card-answer")
    
    useEffect(() => {
        if (showAnswers && correctAnswer) {setBtnStyle("card-answer-correct")}
        if (!showAnswers) {setBtnStyle("card-answer")}
    }, [showAnswers])

    const processClick = () => {
        if (correctAnswer) {
            setBtnStyle("card-answer-correct")
            onClick(true)
        } else {
            setBtnStyle("card-answer-incorrect")
            onClick(false)
        } 
    }
    
    return (
        <a href="#" className={btnStyle} onClick={() => processClick()}>
            <span className="card-answer-letter">{option}</span>
            <span className="card-answer-country">{value}</span>
            <i className="icon"/>
        </a>
    )
}

export default QuizButton;