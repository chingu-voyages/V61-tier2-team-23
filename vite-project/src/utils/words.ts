const words = [
  "about",
  "above",
  "abuse",
  "actor",
  "acute",
  "admit",
  "adopt",
  "adult",
  "after",
  "again",
  "agent",
  "agree",
  "ahead",
  "alarm",
  "album",
  "alert",
  "alike",
  "alive",
  "allow",
  "alone",
  "along",
  "alter"
]

/**
 * Provides a random word from the list.
 * @returns {string}
 */

export function getRandomWord() {
    const randIndex = Math.floor(Math.random() * words.length)
    return words[randIndex]
}