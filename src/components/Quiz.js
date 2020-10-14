import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import QuizCard from './QuizCard';

const Quiz = () => {
    const [correctCounter, setCorrectCounter] = useState(0);
    //const [countryData, setCountryData] = useState([{flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan", capital: "Kabul"}]);
    const [countryData, setCountryData] = useState(null);
    const [countryNames, setCountryNames] = useState([]);
    useEffect(() => {
        const search = async () => {
            const { data } = await restcountries.get('/all', {
                params: {
                    fields: 'name;capital;flag'
                }
            })
            setCountryData(data);
            setCountryNames(shuffle(data.map(d => d.name)));
        }
        search();
    }, [])

    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            const swapIndex = Math.floor(Math.random() * (i + 1))
            const currentEle = array[i]
            const eleToSwap = array[swapIndex]
            array[i] = eleToSwap
            array[swapIndex] = currentEle
        }
        return array
    }
    //console.log(countryData)
    //console.log(countryNames)
    return (
        <div>
            {countryData ? <QuizCard country={countryData[1]} type='capital' /> : null}
            
        </div>
    )
}

export default Quiz;