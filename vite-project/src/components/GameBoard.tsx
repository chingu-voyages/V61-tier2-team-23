import { useState } from "react";
import GuessLog from "./GuessLog";
import { Keyboard } from "./Keyboard";

function Gameboard() {
  const letterStatuses = {
    A: "present",
    C: "correct",
    E: "absent",
    L: "correct",
    N: "absent",
    S: "absent",
    T: "absent",
  } as const;

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);

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
      console.log("Submit:", currentGuess.join(""));
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
    </div>
  );
}

export default Gameboard;
