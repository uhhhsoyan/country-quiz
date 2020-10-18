import React, { useState } from 'react';
import QuizButton from './QuizButton';

const QuizCard = ({ question, nextQuestion }) => {
    //const { qType, qTerm, correct, answerBank } = question;
    const [showAnswers, setShowAnswers] = useState(false);
    const [answeredCorrect, setAnsweredCorrect] = useState(null);
    const [hide, setHide] = useState(false);
    const prompt = () => {
        switch (question.qType) {
            case 'capital':
                return <p className="card-question">{question.qTerm || null} is the capital of</p>
            case 'flag':
                return (
                    <div className="card-question-flag">
                        <img src={question.qTerm} className="card-flag-img" alt="country flag"/>
                        <p>Which country does this flag belong to?</p>
                    </div>
                )
            default:
                return ''
        }
    }

    const checkAns = (correct) => {
        setShowAnswers(true);
        setAnsweredCorrect(correct);

    }

    const submitAns = () => {
        setHide(true);
        //setShowAnswers(false);
        nextQuestion(answeredCorrect)
    }

    return (
        <div className="card-container" style={ hide ? { display: 'none' } : { display: '' }}>
            <p className="card-title">COUNTRY QUIZ</p>
            <span className="card-img" />
            
            {prompt(question.qType)}
            <QuizButton
                option="A"
                value={question.answerBank[0]}
                correctAnswer={question.answerBank[0] === question.correct}
                onClick={checkAns}
                showAnswers={showAnswers}  
            />
            <QuizButton
                option="B"
                value={question.answerBank[1]}
                correctAnswer={question.answerBank[1] === question.correct}
                onClick={checkAns}
                showAnswers={showAnswers}
            />
            <QuizButton
                option="C"
                value={question.answerBank[2]}
                correctAnswer={question.answerBank[2] === question.correct}
                onClick={checkAns}
                showAnswers={showAnswers}
            />
            <QuizButton
                option="D"
                value={question.answerBank[3]}
                correctAnswer={question.answerBank[3] === question.correct}
                onClick={checkAns}
                showAnswers={showAnswers}
            />
            {showAnswers ? <a href="#" className="card-btn-next" onClick={() => submitAns()}>Next</a> : null}
        </div>
    )
}

export default QuizCard;