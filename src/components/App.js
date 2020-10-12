import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import styles from '../styles/styles.css';

const App = () => {
    const [countryCodes, setCountryCodes] = useState([]);
    useEffect(() => {
        const search = async () => {
            const { data } = await restcountries.get('/all', {
                params: {
                    fields: 'alpha3Code'
                }
            })
            setCountryCodes(data.map(e => e.alpha3Code))
        };
        search();
    }, [])

    return (
        <div>{countryCodes}</div>
    )
}

export default App;