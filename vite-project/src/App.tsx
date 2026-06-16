import { useState } from 'react';
import './App.css'
import { getRandomWord } from './data/words'
import { useWordle } from './hooks/useWordle';

function App() {
  const solution = getRandomWord().toUpperCase();
  const { turn, guesses, isCorrect, error, setError, handleGuess } = useWordle(solution);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const onSubmit = (e) => {
    e.preventDefault();
    handleGuess(currentGuess.toUpperCase());
    setCurrentGuess(currentGuess);
  };
  const gameOver = turn>=6 && !isCorrect;
  return (
    <>
      <form onSubmit={onSubmit}>
				<input
					value={currentGuess}
					onChange={(e) => setCurrentGuess(e.target.value)}
					maxLength={5}
				/>
				<button type="submit">Guess</button>
			</form>

      {error && (
        <div className="error-modal">
          <div className="error-modal-content">
            <p>{error}</p>
            <button onClick={() => setError('')}>OK</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
