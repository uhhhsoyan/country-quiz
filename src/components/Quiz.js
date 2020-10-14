import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import QuizCard from './QuizCard';

const Quiz = () => {
    const [correctCounter, setCorrectCounter] = useState(0);
    const [countryData, setCountryData] = useState([{flag: "https://restcountries.eu/data/afg.svg", name: "Afghanistan", capital: "Kabul"}]);
    const [countryNames, setCountryNames] = useState([])
    useEffect(() => {
        const search = async () => {
            const { data } = await restcountries.get('/all', {
                params: {
                    fields: 'name;capital;flag'
                }
            })
            setCountryData(data)
        };
        search();
    }, [])
    return (
        <QuizCard 
            country={countryData[0]}
            type='capital'
        />
    )
}

export default Quiz;