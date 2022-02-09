# Wordle Copycat Challenge

This is my attempt at recreating the Wordle browser game.

| Objects | Properties                     | Messages                             | Outputs               |
| ------- | ------------------------------ | ------------------------------------ | --------------------- |
| Wordle  | word @Array[@char]             | getWord()                            | @Array[@char]         |
|         | guess @Array[@char]            | getGuess()                           | @Array[@char]         |
|         |                                | setGuess(@String)                    |                       |
|         | attempts @Array[@Array[@char]] | getAttempts()                        | @Array[@Array[@char]] |
|         |                                | makeGuess(@Array[@char])             |                       |
|         |                                | compareLetter(@Array[@char])         | @@Array[@char]        |
|         |                                | comparePositions(@Array[@char])      | @@Array[@char]        |
|         |                                | isAttemptLimitReached(@Array[@char]) | @boolean              |
|         |                                | printAttempts()                      | @undefined            |
