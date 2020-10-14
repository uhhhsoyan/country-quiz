import React, { useState, useEffect } from 'react';
import restcountries from '../api/restcountries';
import Quiz from './Quiz';

const App = () => {
    return (
        <div>
            <Quiz/>
        </div>
    )
}

export default App;