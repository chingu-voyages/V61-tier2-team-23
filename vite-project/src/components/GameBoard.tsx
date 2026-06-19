import { useState } from "react";
import GuessLog from "./GuessLog";
import { Keyboard } from "./Keyboard";
// 
import { getRandomWord } from '../data/words'
import { useWordle } from '../hooks/useWordle';
import type { LetterStatus } from "../types/types";
// import '..App.css'
// 
function Gameboard() {

  // const letterStatuses = {
  //   A: "present",
  //   C: "correct",
  //   E: "absent",
  //   L: "correct",
  //   N: "absent",
  //   S: "absent",
  //   T: "absent",
  // } as const;

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  // Merging Conflicts.
  // 
  // const [history, setHistory] = useState<>
  const [solution] = useState<string>(() => getRandomWord().toUpperCase());
  const { turn, guesses, isCorrect, error, setError, handleGuess } = useWordle(solution);
  const [letterStatuses, setLetterStatuses] = useState<Record<string, LetterStatus>>(
    {
      "Q": "unused",
      "W": "unused",
      "E": "unused",
      "R": "unused",
      "T": "unused",
      "Y": "unused",
      "U": "unused",
      "I": "unused",
      "O": "unused",
      "P": "unused",
      "A": "unused",
      "S": "unused",
      "D": "unused",
      "F": "unused",
      "G": "unused",
      "H": "unused",
      "J": "unused",
      "K": "unused",
      "L": "unused",
      "ENTER": "unused",
      "Z": "unused",
      "X": "unused",
      "C": "unused",
      "V": "unused",
      "B": "unused",
      "N": "unused",
      "M": "unused",
      "BACKSPACE": "unused",
    }
  );


  const gameOver = turn >= 6 || isCorrect;

  const setColors = (guess: string[]) => {
    const solutionLetters = solution.split('');
    const updatedStatuses = { ...letterStatuses };

    // Guess letter is in correct place: Green
    guess.forEach((letter, i) => {
      if (letter === solutionLetters[i]) {
        updatedStatuses[letter] = "correct";
        solutionLetters[i] = '';
      }
    });

    // Guess letter is in the solution but not at the correct position: Yellow
    guess.forEach((letter, i) => {
      if (letter === solutionLetters[i]) {
        return;
      }
      const index = solutionLetters.indexOf(letter);
      if (index !== -1) {
        if (updatedStatuses[letter] !== "correct") {
          updatedStatuses[letter] = "present";
        }
        solutionLetters[index] = '';
      } else {
        if (updatedStatuses[letter] !== "correct" && updatedStatuses[letter] !== "present") {
          updatedStatuses[letter] = "absent";
        }
      }
    });
    setLetterStatuses(updatedStatuses);
  };

  // Merging Conflicts END.
  //

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
      handleGuess(currentGuess.join(''));
      setColors(currentGuess)
      setCurrentGuess([]);
      return;
    }

    if (key === "BACKSPACE") {
      removeLetter();
      return;
    }

    addLetter(key);
  };

  console.log(currentGuess);

  return (
    <div className="h-[90vh] p-8 mt-20 bg-[#f3f3f1]">
      <div className="flex items-center justify-center text-center">
        <h1 className="w-[500px] text-[40px] font-bold border-b border-2px border-gray-300">
          GUESSIFY
        </h1>
      </div>
      <GuessLog currentGuess={currentGuess} />
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
