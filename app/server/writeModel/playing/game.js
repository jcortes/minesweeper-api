"use strict";

const { only } = require("wolkenkit-command-tools");

const initialState = {
  nickname: undefined,
  numOfRows: 4,
  numOfCols: 4,
  numOfMines: 4,
  squares: [
    // -1 means there is a mine
    // 0 means there are no adjacent mines
    // n means the number of adjacent mines
    // { mines: -1 | 0 | n, flagged: false,  revealed: false }
  ],
  isAuthorized: {
    commands: {
      start: { forAuthenticated: true },
      cancel: { forAuthenticated: true },
      revealSquare: { forAuthenticated: true }
    },
    events: {
      started: { forAuthenticated: true },
      canceled: { forAuthenticated: true },
      squareRevealed: { forAuthenticated: true },
      lost: { forAuthenticated: true },
      won: { forAuthenticated: true }
    }
  }
};

const commands = {
  start: [
    only.ifNotExists(),
    (game, command) => {
      const squares = [
        { mines: 2, flagged: false, revealed: false },
          { mines: -1, flagged: false, revealed: false },
            { mines: 2, flagged: false, revealed: false },
              { mines: -1, flagged: false, revealed: false },
        { mines: -1, flagged: false, revealed: false },
          { mines: 2, flagged: false, revealed: false },
            { mines: 3, flagged: false, revealed: false },
              { mines: 2, flagged: false, revealed: false },
        { mines: 1, flagged: false, revealed: false },
          { mines: 1, flagged: false, revealed: false },
            { mines: 1, flagged: false, revealed: false },
              { mines: -1, flagged: false, revealed: false },
        { mines: 0, flagged: false, revealed: false },
          { mines: 0, flagged: false, revealed: false },
            { mines: 1, flagged: false, revealed: false },
              { mines: 1, flagged: false, revealed: false }
      ];
      game.events.publish("started", {
        nickname: command.user.token.nickname,
        numOfRows: command.data.rows,
        numOfCols: command.data.cols,
        numOfMines: command.data.mines,
        squares
      });
    }
  ],
  cancel: [
    (game, command) => {

    }
  ],
  revealSquare: [
    (game, command) => {

    }
  ]
};

const events = {
  started(game, event) {
    game.setState({
      nickname: event.data.nickname,
      numOfRows: event.data.numOfRows,
      numOfCols: event.data.numOfCols,
      numOfMines: event.data.numOfMines,
      squares: event.data.squares
    });
  },
  canceled(game, event) {

  },
  squareRevealed(game, event) {

  },
  lost(game, event) {

  },
  won(game, event) {

  },
};

module.exports = { initialState, commands, events };