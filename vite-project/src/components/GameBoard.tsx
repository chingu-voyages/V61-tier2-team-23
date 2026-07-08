import { useCallback, useEffect, useState } from "react";
import GuessLog from "./GuessLog";
import { Keyboard } from "./Keyboard";
import { useWordle } from '../hooks/useWordle';
import { LoseModal, WinModal } from "./Modal";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

function Gameboard() {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [isLoadingHint, setIsLoadingHint] = useState<boolean>(false);
  const { 
    history, 
    letterStatuses, 
    error, 
    setError, 
    gameOver, 
    isCorrect,
    submitGuess,
    resetGame,
    solution,
    hint,
    setHint
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

  useEffect(() => {
    if (error && !gameOver) {
      Toastify({
        text: error,
        duration: 2000,
        callback: () => {setError('')},
        gravity: "top",
        position: "center",
        offset: {
          y: "40vh",
          x: "0vh"
        },
        style: {
          background: "black",
          color: "white",
          fontWeight: "bold",
          transition: "none"
        }
      }).showToast();
    }
  }, [error, setError, gameOver]);

  async function getHint() {
    try {
      const res = await fetch('/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ solution }),
      });

      const data = await res.json();
      
      if (!res.ok || !data.hint) {
        return "Hint Generation Failed, Please Try Again!";
      }

      return data.hint;

    } catch (err) {
      console.error(err);
      return "Hint Generation Failed, Please Try Again!";
    }
  }

  return (
    <div className="min-h-[90vh] p-8 bg-[#f3f3f1]">
      <div className="flex items-center justify-center text-center">
        <h1 className="w-[500px] text-[40px] font-bold border-b border-2px border-gray-300">
          GUESSIFY
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <button onClick={async () => {
          setIsLoadingHint(true);
          const result = await getHint();
          setHint(result);
          setIsLoadingHint(false);
        }} disabled={isLoadingHint}>
          Hint
        </button>
        {hint && (<h3>
          {isLoadingHint ? "Generating Hint" : hint}
        </h3>)}
      </div>

      <GuessLog currentGuess={currentGuess} prevState={history} />
      <Keyboard onKeyPress={handleKeyPress} letterStatuses={letterStatuses} />

      {gameOver && isCorrect && (
        <WinModal tries={history.size} resetGame={resetGame} />
      )}

      {gameOver && !isCorrect && (
        <LoseModal resetGame={resetGame} solution={solution} />
      )}
    </div>
  );
}

export default Gameboard;
