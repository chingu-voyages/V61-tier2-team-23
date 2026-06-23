import { useState } from "react";
import GuessLog from "./GuessLog";
import { Keyboard } from "./Keyboard";
import { getRandomWord } from '../data/words'
import { useWordle } from '../hooks/useWordle';


function Gameboard() {

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [solution] = useState<string>(() => getRandomWord().toUpperCase());

  const { 
    history, 
    letterStatuses, 
    error, 
    setError, 
    gameOver, 
    submitGuess
  } = useWordle(solution);

  const addLetter = (letter: string) => {
    setCurrentGuess((prev) => {
      if (prev.length >= 5) return prev; // max 5 letters
      return [...prev, letter];
    });
  };

  const removeLetter = () => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  const handleKeyPress = (key: string) => {
      if (key === "ENTER") {
        if (submitGuess(currentGuess)) {
          setCurrentGuess([]);
        }
        return;
      }

      if (key === "BACKSPACE") {
        removeLetter();
        return;
      }

      addLetter(key);
    };


  return (
    <div className="h-[90vh] p-8 mt-20 bg-[#f3f3f1]">
      <div className="flex items-center justify-center text-center">
        <h1 className="w-[500px] text-[40px] font-bold border-b border-2px border-gray-300">
          GUESSIFY
        </h1>
      </div>

      <GuessLog currentGuess={currentGuess} prevState={history} />
      <Keyboard onKeyPress={handleKeyPress} letterStatuses={letterStatuses} />

      {error && (
        <div className="error-modal">
          <div className="error-modal-content">
            <p>{error}</p>
            <button onClick={() => setError('')}>OK</button>
          </div>
        </div>
      )}

      {gameOver && (
        <p>
          Game Over.
        </p>
      )}
    </div>
  );
}

export default Gameboard;
