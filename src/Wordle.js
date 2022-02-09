class Wordle {
    word;
    guess;
    constructor(word) {
        this.word = Array.from(word.toUpperCase());
        this.attempts = [];
    }
    getWord() {
        return this.word;
    }
    getAttempts() {
        return this.attempts;
    }
    setGuess(guess) {
        this.guess = Array.from(guess.toUpperCase());
    }
    makeGuess(guess) {
        this.setGuess(guess);
        this.attempts.push(this.guess);
    }
    compareLetters(guess) {
        let correctLetters = [];
        for(let i=0; i<guess.length; i++) {

            if (this.word.includes(guess[i])) {
                correctLetters.push(guess[i]);
            }
        }
        return correctLetters
    }

    comparePositions(guess) {
        let correctPositions = [];
        for (let i=0; i<guess.length; i++ ) {
            if (guess[i] === this.word[i]) {
                correctPositions.push(guess[i]);
            }
        }
        return correctPositions;
    }
}

module.exports = Wordle;