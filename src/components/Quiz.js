import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import QuizCard from './QuizCard';
import ResultsCard from './ResultsCard';

const Quiz = ({ questionCount, questionTypes }) => {
    const [correctCounter, setCorrectCounter] = useState(0);
    const [answeredCounter, setAnsweredCounter] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [retry, setRetry] = useState(false);

    useEffect(() => {
        const search = async () => {
            const { data } = await restcountries.get('/all', {
                params: {
                    fields: 'name;capital;flag'
                }
            })
            const nameBank = shuffle(data.map(d => d.name));
            let tempArr = []
            for (var i = 0; i < questionCount; i++) {
                let q = {}
                q.qType = questionTypes[Math.round(Math.random()) * (questionTypes.length - 1)]
                q.correct = nameBank.pop()
                q.qTerm = data.filter(e => e.name === q.correct)[0][q.qType]
                q.answerBank = shuffle(nameBank.splice(0,3).concat(q.correct))
                tempArr.push(q)
            }
            setQuestions(tempArr)
        }
        search();
    }, []);


    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            const swapIndex = Math.floor(Math.random() * (i + 1));
            const currentEle = array[i];
            const eleToSwap = array[swapIndex];
            array[i] = eleToSwap;
            array[swapIndex] = currentEle;
        }
        return array;
    }

    const nextQuestion = (correct) => {
        setAnsweredCounter(answeredCounter + 1);
        if (correct) {
            setCorrectCounter(correctCounter + 1);
        } 
    }

    const tryAgain = () => {
        setAnsweredCounter(0);
        setCorrectCounter(0);
        setRetry(true);
    }

    const renderCards = () => {
        return (
            <div className="render-cards">
                {answeredCounter === questionCount ? <ResultsCard results={correctCounter} tryAgain={tryAgain} /> : null}
                {questions.map(q => <QuizCard question={q} nextQuestion={nextQuestion} />)}
            </div>
        )
    }
    
    return (
        <div>
            {questions ? renderCards() : null}
            {retry === true ? renderCards() : null}
        </div>
    )
}

export default Quiz;