"use strict";

const fields = {
  nickname: { initalState: undefined },
  numOfRows: { initalState: undefined },
  numOfCols: { initalState: undefined },
  numOfMines: { initalState: undefined },
  squares: { initalState: undefined }
};

const projections = {
  "playing.game.started" (games, event) {
    games.add({
      nickname: event.data.nickname,
      numOfRows: event.data.numOfRows,
      numOfCols: event.data.numOfCols,
      numOfMines: event.data.numOfMines,
      squares: event.data.squares
    });
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