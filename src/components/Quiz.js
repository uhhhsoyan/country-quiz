import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import QuizCard from './QuizCard';

const Quiz = () => {
    const [correctCounter, setCorrectCounter] = useState(0);
    const [questionIdx, setQuestionIdx] = useState(0);
    const [questions, setQuestions] = useState(null);
    
    const questionTypes = ['capital', 'flag'];
    const questionCount = 10;

    // Fetch data, initialize subject countries and word bank
    useEffect(() => {
        const search = async () => {
            const { data } = await restcountries.get('/all', {
                params: {
                    fields: 'name;capital;flag'
                }
            })
            const nameBank = shuffle(data.map(d => d.name));
            for (var i = 0; i < questionCount; i++) {
                let q = {}
                q.qType = questionTypes[Math.round(Math.random()) * (questionTypes.length - 1)]
                q.correct = nameBank.pop()
                q.qTerm = data.filter(e => e.name === q.correct)[0][q.qType]
                q.answerBank = shuffle(nameBank.splice(0,3).concat(q.correct))
                !questions ? setQuestions([q]) : setQuestions(questions.push(q))
            }
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
        return array
    }

    const renderCards = () => {

    }

    const nextQuestion = (correct) => {
        setQuestionIdx(1);
        if (correct) {
            console.log('It was correct!')
            setCorrectCounter(correctCounter + 1)
        } 
        console.log(`Question index: ${questionIdx}`)
    }
    console.log(`Correct counter: ${correctCounter}`)
    return (
        <div>
            {questions ? <QuizCard question={questions[questionIdx]} nextQuestion={nextQuestion}/> : null}
        </div>
    )
}


export default Quiz;