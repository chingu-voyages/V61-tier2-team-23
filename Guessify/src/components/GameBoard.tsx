import { useCallback, useEffect, useState } from "react";
import GuessLog from "./GuessLog";
import { useUser } from "./context/UserContext";
import { Keyboard } from "./Keyboard";
import { useWordle } from "../hooks/useWordle";
import { LoseModal, WinModal } from "./Modal";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Gameboard() {
  const { user } = useUser();
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
    setHint,
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
        callback: () => {
          setError("");
        },
        gravity: "top",
        position: "center",
        offset: {
          y: "40vh",
          x: "0vh",
        },
        style: {
          background: "black",
          color: "white",
          fontWeight: "bold",
          transition: "none",
        },
      }).showToast();
    }
  }, [error, setError, gameOver]);

  async function getHint() {
    try {
      const res = await fetch("/gemini", {
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
    <div className="min-h-[90vh] p-8 bg-[#f3f3f1] dark:bg-[#121213]">
      <div className="flex items-center justify-center text-center">
        {!user ? (
          <h1 className="w-[500px] text-[30px] md:text-[40px] dark:text-white font-bold border-b border-2px border-gray-300">
            GUESSIFY
          </h1>
        ) : (
          <h1 className="w-[500px] text-[30px] md:text-[40px] dark:text-white font-bold border-b border-2px border-gray-300">
            Welcome, <br></br>
            {user.name}!
          </h1>
        )}
      </div>

      {/* <div className="flex flex-col items-center justify-center text-center dark:text-white">
        <button
          onClick={async () => {
            setIsLoadingHint(true);
            const result = await getHint();
            setHint(result);
            setIsLoadingHint(false);
          }}
          disabled={isLoadingHint}
        >
          Hint
        </button>
        {hint && <h3>{isLoadingHint ? "Generating Hint" : hint}</h3>}
      </div> */}
      <div className="flex flex-col items-center justify-center mt-6 mb-8 min-h-[60px]">
        {!hint && !isLoadingHint && (
          <button
            onClick={async () => {
              setIsLoadingHint(true);
              const result = await getHint();
              setHint(result);
              setIsLoadingHint(false);
            }}
            disabled={isLoadingHint}
            className="px-6 py-2 bg-white dark:bg-[#121213] text-gray-700 dark:text-gray-300 font-semibold rounded-full border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            💡 Need a Hint?
          </button>
        )}
        {isLoadingHint && (
          <div className="text-indigo-500 dark:text-indigo-400 font-medium animate-pulse">
            ⏳ Brainstorming a clue...
          </div>
        )}

        {hint && !isLoadingHint && (
          <div className="px-6 py-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg max-w-md">
            <p className="text-sm text-indigo-900 dark:text-indigo-200 font-medium">
              <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-2">💡 Hint:</span>
              {hint}
            </p>
          </div>
        )}
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
