import React from 'react';
import './Game.css';
import { useState, useEffect } from 'react';

const Game = () => {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  let intervalId;

  useEffect(() => {
    if (running) {
      intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setCounter(0);
    setRunning(false);
  };

  return (
    <div className='game'>
      <div className='ctr'>
        <h1>{counter}</h1> 
      </div>
      <div className='buttons'>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Game;
