import { useCallback, useEffect, useState } from "react";
import GuessLog from "./GuessLog";
import { Keyboard } from "./Keyboard";
import { useWordle } from '../hooks/useWordle';
import { LoseModal, WinModal } from "./Modal";

function Gameboard() {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);

  const { 
    history, 
    letterStatuses, 
    error, 
    setError, 
    gameOver, 
    isCorrect,
    submitGuess,
    resetGame,
    solution
  } = useWordle();

  const addLetter = (letter: string) => {
    setCurrentGuess((prev) => {
      if (prev.length >= 5) return prev; // max 5 letters
      return [...prev, letter];
    });
  };

  const removeLetter = () => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  const handleKeyPress = useCallback(
    (key: string) => {
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
    },
    [currentGuess, submitGuess],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      } else if (event.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (event.key === "Backspace") {
        event.preventDefault();
        handleKeyPress("BACKSPACE");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="h-[90vh] p-8 bg-[#f3f3f1]">
      <div className="flex items-center justify-center text-center">
        <h1 className="w-[500px] text-[40px] font-bold border-b border-2px border-gray-300">
          GUESSIFY
        </h1>
      </div>

      <GuessLog currentGuess={currentGuess} prevState={history} />
      <Keyboard onKeyPress={handleKeyPress} letterStatuses={letterStatuses} />

      {error && !gameOver && (
        <div className="error-modal">
          <div className="error-modal-content">
            <p>{error}</p>
            <button onClick={() => setError("")}>OK</button>
          </div>
        </div>
      )}
      {gameOver && isCorrect && (
        <WinModal resetGame={resetGame} />
      )}
      {gameOver && !isCorrect && (
       
        <LoseModal resetGame={resetGame} solution={solution} />
        
      )}
    </div>
  );
}

export default Gameboard;
