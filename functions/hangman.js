module.exports = (msg) => {
    let game = {
        started: false,
        player: null,
        guessedLetters: [],
        wrongLetters: [],
        strikes: 0,
        maxStrikes: 6,
        currentPuzzle: puzzles[[Math.floor(Math.random() * 19)]],
        blank: [],
        toBlanks: function () {
            let puzzleArray = this.currentPuzzle.title.split('')
            for (let i = 0; i < puzzleArray.length; i++) {
                if (puzzleArray[i] !== ' ') {
                    puzzleArray[i] = '_'
                }
            }
            return puzzleArray
        },
        reset: function () {
            this.started = false
            this.player = null
            this.guessedLetters = []
            this.wrongLetters = []
            this.strikes = 0
            this.currentPuzzle = puzzles[[Math.floor(Math.random() * 19)]]
            this.blank = []
        }
    }
}