import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import QuizCard from './QuizCard';

const Quiz = ({ questionCount, questionTypes }) => {
    const [correctCounter, setCorrectCounter] = useState(0);
    //const [questionIdx, setQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState(null);

    // Fetch data, initialize subject countries and word bank
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
        if (correct) {
            console.log('It was correct!')
            setCorrectCounter(correctCounter + 1)
        } 
    }

    const renderCards = () => {
        return (
            <div className="render-cards">
                {questions.map(q => <QuizCard question={q} nextQuestion={nextQuestion} />)}
            </div>
        )
    }
    
    console.log(questions)
    
    return (
        <div>
            {questions ? renderCards() : null}
        </div>
    )
}



export default Quiz;