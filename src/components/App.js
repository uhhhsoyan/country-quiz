import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';

const App = () => {
    
    return (
        <div>
            <Quiz questionCount={2} questionTypes={['flag', 'capital']} />
        </div>
    )
}

export default App;