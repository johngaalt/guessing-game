class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.currentGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const midpoint = Math.round((this.min + this.max) / 2);
    this.currentGuess = midpoint;
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess;
  }

  greater() {
    this.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
