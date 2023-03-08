import React, { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result'
import './index.scss';
import questions from './data/questions.json'


function App() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(0);
  const numberOfCards = questions.length;

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (questions[step].correct === index) setResult(result + 1);
  }

  const startGame = () => {
    setStep(0);
    setResult(0);
  }

  return (
    <div className="App">
      {step < numberOfCards ?
        <Game questions={questions} step={step} onClickVariant={onClickVariant} /> :
        <Result result={result} numberOfCards={numberOfCards} startGame={startGame} />
      }
    </div>
  );
}

export default App;
