import { useState } from 'react';
import './App.css'
import { getRandomWord } from './data/words'
import { useWordle } from './hooks/useWordle';

function App() {
  // Starting Game State
  const [solution] = useState<string>(() => getRandomWord().toUpperCase());
  const { turn, guesses, isCorrect, error, setError, handleGuess } = useWordle(solution);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGuess(currentGuess.toUpperCase());
    setCurrentGuess('');
  };
  const gameOver = turn>=6 || isCorrect;

  type LetterStatus = "green" | "yellow" | "grey";

  /**
   * Returns color for each letter.
   * @param guess
   * @returns {LetterStatus[]}
   */
  const getColors = (guess:string): LetterStatus[] => {
    const colorStatus: LetterStatus[] = new Array(5).fill("grey");
    const solutionLetters = solution.split('');

    // Guess letter is in correct place: Green
    guess.split('').forEach((letter, i) => {
      if (letter === solutionLetters[i]) {
        colorStatus[i] = "green";
        solutionLetters[i] = '';
      }
    });

    // Guess letter is in the solution but not at the correct position: Yellow
    guess.split('').forEach((letter, i) => {
      if (colorStatus[i] === "green") {
        return;
      }
      const index = solutionLetters.indexOf(letter);
      if (index !== -1) {
        colorStatus[i] = "yellow";
        solutionLetters[index] = '';
      }
    });

    return colorStatus;
  }

  // Created just to test functionality.
  return (
    <>
      {!gameOver && (
        <form onSubmit={onSubmit}>
          <input
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength={5}
          />
          <button type="submit">Guess</button>
        </form>
      )}
      {error && (
        <div className="error-modal">
          <div className="error-modal-content">
            <p>{error}</p>
            <button onClick={() => setError('')}>OK</button>
          </div>
        </div>
      )}
      {
        guesses.map((guess, row) => {
        const colors = getColors(guess);
        return (
          <div key={row} className='guess-row'>
            {guess.split('').map((letter, i) => (
              <span key={i} className={`tile ${colors[i]}`}>{letter}</span>
            ))}
          </div>
        );
      })}
    </>
  )
}

export default App
