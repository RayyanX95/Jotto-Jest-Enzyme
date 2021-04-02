import React, { Component } from 'react'
import './App.css';
import Congrats from './Congrats'
import GuessedWords from './GuessedWords';

class App extends Component {
  render() {
    const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },

    ]
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export default App;
