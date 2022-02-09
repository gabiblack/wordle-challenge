const Wordle = require(`../src/Wordle`);

describe(`Wordle Tests: `, () => {
    it(`Wordle instance turns input String into char array: `, () => {
        const wordle = new Wordle(`drive`);
        let word = wordle.getWord();
        expect(word).toEqual([`D`, `R`, `I`, `V`, `E`]);
    });
    it(`Attempt array is empty upon creation: `, () => {
        const wordle = new Wordle(`drive`);
        let attempts = wordle.getAttempts();
        expect(attempts).toHaveSize(0);
    });
    it(`When a guess is made it is added to attempts: `, () => {
        const wordle = new Wordle(`drive`);
        let guess = `worse`;
        wordle.makeGuess(guess);
        let attempts = wordle.getAttempts();
        expect(attempts).toHaveSize(1);
    });
    it(`check if guess has any letters in word: `, () => {
        const wordle = new Wordle(`drive`);
        let guess = Array.from(`worse`.toUpperCase());
        let letters = wordle.compareLetters(guess);
        expect(letters.join(``)).toEqual(`RE`);
    });
    it(`check if guess has any letters in correct position in word: `, () => {
        const wordle = new Wordle(`drive`);
        let guess = Array.from(`worse`.toUpperCase());
        let positions = wordle.comparePositions(guess);
        expect(positions).toEqual([`E`]);
    });
})