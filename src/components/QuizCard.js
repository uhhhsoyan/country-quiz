import React, { useState } from 'react';
import QuizButton from './QuizButton';

const QuizCard = ({ country, type }) => {
    const [showAnswers, setShowAnswers] = useState(false);
    const [correctAns, setCorrectAns] = useState('');
    //const [options, setOptions] = useState('');
    const prompt = (type) => {
        switch (type) {
            case 'capital':
                return <p className="card-question">{country.capital} is the capital of</p>
            case 'flag':
                return <p className="card-question">Which country does this flag belong to?</p>
            default:
                return ''
        }
    }
    
    return (
        <div className="card-container">
            <p className="card-title">COUNTRY QUIZ</p>
            <a href="#" className="card-img"></a>
            {prompt.type === 'flag' ? <img src={country.flag} width="100" height="100" /> : null}
            {prompt(type)}
            <QuizButton
                option="A"
                value="Vietnam"
                onClick={() => setShowAnswers(true)}
                showAnswers={showAnswers}
                correct={false}     
            />
            <QuizButton
                option="B"
                value="Malaysia"
                onClick={() => setShowAnswers(true)}
                showAnswers={showAnswers}
                correct={true}           
            />
            <QuizButton
                option="C"
                value="Sweden"
                onClick={() => setShowAnswers(true)}
                showAnswers={showAnswers}
                correct={false}           
            />
            <QuizButton
                option="D"
                value="Austria"
                onClick={() => setShowAnswers(true)}
                showAnswers={showAnswers}
                correct={false}       
            />
            {showAnswers ? <a href="#" className="card-btn-next" onClick={() => {}}>Next</a> : null}
        </div>
    )
}

export default QuizCard;