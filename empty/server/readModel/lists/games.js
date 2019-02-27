"use strict";

const fields = {
  numOfRows: { initalState: 10 },
  numOfCols: { initalState: 10 },
  numOfMines: { initalState: 20 },
  squares: []
};

const projections = {
  "playing.game.started" (games, event) {

  },
  "playing.game.canceled" (games, event) {

  },
  "playing.game.squareRevealed" (games, event) {

  },
  "playing.game.lost" (games, event) {

  },
  "playing.game.won" (games, event) {

  }
};

module.exports = { fields, projections };