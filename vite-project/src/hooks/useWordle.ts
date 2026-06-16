import { useState } from 'react';

export const useWordle = (solution: string) => {
	const [turn, setTurn] = useState<number>(0); // Tracks current attempt (0 - 5)
	const [guesses, setGuesses] = useState<string[]>([]); // array of guessed words
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const handleGuess = (currentGuess: string) => {
		setError('');

		if (currentGuess.length != 5) {
			setError('Word must be 5 letters.');
			return;
		}

		// Adds current guess to end of guesses array
		const updatedGuesses = guesses.concat(currentGuess);
		// Update state of guesses array with new array
		setGuesses(updatedGuesses);

		// Check if the guess matches the secret word
		if (currentGuess === solution) {
			setIsCorrect(true);
			console.log('You guessed the word!');
			return;
		}

		// Else, start the next attempt
		const nextTurn = turn + 1;
		setTurn(nextTurn);

		// Check if player used all 6 attempts
		if (nextTurn >= 6) {
			console.log("Game Over! You've used up all 6 attempts.");
		}
	};

	return { turn, guesses, isCorrect, error, setError, handleGuess };
};
