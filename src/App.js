import React, { useEffect } from 'react'
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords';
import Input from './Input/Input';
import { getSecretWord } from './actions'

// App state before adding redux to it
const App = () => {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, [])

    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <Input success={success}secretWord={secretWord} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }

export default App;
