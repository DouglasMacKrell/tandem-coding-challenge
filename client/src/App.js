import React, { useState } from 'react';

import './App.css';
import Trivia from './Apprentice_TandemFor400_Data.json'

const App = () => {
  const [trivia, setTrivia] = useState(Trivia)
  
  const fetchTrivia = () => {
    let result = []
    for (let question of trivia) {
      console.log("gotcha")
    }
  }
  console.log(trivia)
  return (
    <div className="App">
      Hello World
      <button onClick={fetchTrivia}>GO</button>
    </div>
  );
}

export default App;
