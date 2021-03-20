import './App.css';
import GuessedWords from './GuessedWords'

function App() {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
  ]
  return (
    <div className="App">
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
