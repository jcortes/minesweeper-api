"use strict";

const fields = {
  nickname: { initalState: undefined },
  rows: { initalState: undefined },
  cols: { initalState: undefined },
  mines: { initalState: undefined },
  squares: { initalState: undefined }
};

const projections = {
  "playing.game.started" (games, event) {
    const { nickname, rows, cols, mines, squares } = event.data;
    games.add({ nickname, rows, cols, mines, squares });
  },
  "playing.game.canceled" (games, event) {

  },
  "playing.game.squareRevealed" (games, event) {
    const { squares } = event.data;
    const { id } = event.aggregate;
    games.update({
      where: { id },
      set: { squares }
    });
  },
  "playing.game.squareFlagged" (games, event) {
    const { squares } = event.data;
    const { id } = event.aggregate;
    games.update({
      where: { id },
      set: { squares }
    });
  },
  "playing.game.lost" (games, event) {

  },
  "playing.game.won" (games, event) {

  }
};

module.exports = { fields, projections };