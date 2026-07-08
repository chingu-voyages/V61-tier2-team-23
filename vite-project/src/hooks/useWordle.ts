import { useState } from 'react';
import type { LetterStatus, History } from "../types/types";
import { isValidWord, getRandomWord } from '../data/words';

export const useWordle = () => {
	const getInitialKeyboard = () => (
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
		  "Z": "unused",
		  "X": "unused",
		  "C": "unused",
		  "V": "unused",
		  "B": "unused",
		  "N": "unused",
		  "M": "unused",
		} as Record<string, LetterStatus>);
		
	const [solution, setSolution] = useState<string>(() => getRandomWord().toUpperCase());
	const [history, setHistory] = useState<History>(new Map());
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [letterStatuses, setLetterStatuses] = useState<Record<string, LetterStatus>>(getInitialKeyboard());
	  
	const turn = history.size;
	const gameOver = turn >= 6 || isCorrect;

	const evaluateGuess = (guess: string[]) => {
		const solutionLetters = solution.split('');
		const rowStatus = new Array<LetterStatus>(5).fill("absent");
		const updatedKeyboard = { ...letterStatuses };
	
      guess.forEach((letter, i) => {
        if (letter === solutionLetters[i]) {
          rowStatus[i] = "correct";
          updatedKeyboard[letter] = "correct";
          solutionLetters[i] = '';
        }
      });

      guess.forEach((letter, i) => {
        if (rowStatus[i] === "correct") return;
        
        const index = solutionLetters.indexOf(letter);
        if (index !== -1) {
          rowStatus[i] = "present";
          if (updatedKeyboard[letter] !== "correct") {
            updatedKeyboard[letter] = "present";
          }
          solutionLetters[index] = '';
        } else {
          if (updatedKeyboard[letter] !== "correct" && updatedKeyboard[letter] !== "present") {
            updatedKeyboard[letter] = "absent";
          }
        }
      });
	  

      return { rowStatus, updatedKeyboard };
    };


	/**
	 * Return True if the guess use all the letter that are revealed (either correct or present)
	 * @param guess 
	 */
	// TODO: Uncomment After after hardmode helper is ready
	
	// const checkKeyUsed = (guess: string) : boolean => {
	// 	return Object.entries(letterStatuses)
	// 		.filter(([, status]) => status === "correct" || status === "present")
	// 		.every(([letter]) => guess.includes(letter));
	// };

	const submitGuess = (currentGuess: string[]) => {
		setError('');
		
		const guessStr = currentGuess.join('');

		if (guessStr.length !== 5) {
			setError('Word must be 5 letters.');
			return false;
		}

		if (!isValidWord(guessStr)) {
			setError('Not in Word List, Try Something Else.');
			return false;
		}

		if (history.has(guessStr)) {
			setError('You Already Guessed This Word, Try Different Word!');
			return false;
		}
		// TODO: Uncomment After after hardmode helper is ready
		// hardMode and !checkKeyUsed
		// if (!checkKeyUsed(guessStr)) {
		// 	setError('Must Use All Revealed Letter In The Guess.');
		// 	return false;
		// }

		const { rowStatus, updatedKeyboard } = evaluateGuess(currentGuess);

		setLetterStatuses(updatedKeyboard);

		setHistory(prev => {
			const nextHistory = new Map(prev);
			nextHistory.set(guessStr, rowStatus);
			return nextHistory;
		});

		if (guessStr === solution) {
			setIsCorrect(true);
			setError('You guessed the word!');
		} else if (turn + 1 >= 6) {
			setError("Game Over! Out of attempts.");
		}
		
		return true;
	};

	const resetGame = () => {
		setSolution(getRandomWord().toUpperCase());
        setHistory(new Map());
        setIsCorrect(false);
        setError('');
        setLetterStatuses(getInitialKeyboard());
	};

	return { 
    history, 
    letterStatuses,
    error, 
    setError, 
    gameOver,
	isCorrect, 
    submitGuess,
	resetGame,
	solution
  };
};
