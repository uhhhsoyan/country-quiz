import React, { useEffect, useState } from 'react';

const QuizButton = ({ option, value, onClick, showAnswers, correct }) => {
    //const [clicked, setClicked] = useState(false);
    const [btnStyle, setBtnStyle] = useState("card-answer")
    
    useEffect(() => {
        if (showAnswers && correct) {
            setBtnStyle("card-answer-correct")
        }
    }, [showAnswers])

    const processClick = () => {
        if (correct) {
            setBtnStyle("card-answer-correct")
            onClick()
        } else {
            setBtnStyle("card-answer-incorrect")
            onClick()
        } 
    }
    
    return (
        <a href="#" className={btnStyle} onClick={() => processClick()}>
            <span className="card-answer-letter">{option}</span>
            <span className="card-answer-country">{value}</span>
        </a>
    )
}

export default QuizButton;