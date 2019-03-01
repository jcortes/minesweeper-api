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

const getIndex = (cols, x, y) => 
  (x > cols || x <= 0) || (y > cols || y <= 0)
    ? -1
    : cols * (y - 1 ) + x - 1;

const shuffle = arr => {
  const newArr = [...arr];
  for (let idx = 0; idx < newArr.length; idx += 1) {
    const rnd = Math.floor(Math.random() * (idx + 1));
    [newArr[idx], newArr[rnd]] = [newArr[rnd], newArr[idx]];
  }
  return newArr;
};

const commands = {
  start: [
    only.ifNotExists(),
    (game, command) => {
      const { rows, cols, mines } = command.data;
      const numOfSquares = cols * rows;
      const rate = mines / numOfSquares;
      const mineChance = Math.floor(rate * numOfSquares);
      const mineSquares = Array(mines).fill(-1);
      const safeSquares = Array(numOfSquares - mines).fill(0);
      const squares =
        shuffle([...mineSquares, ...safeSquares])
          .map((minesNum, idx, arr) => {
            const isMine = minesNum < 0;
            const x = Math.floor((idx + 1) % cols) || cols;
            const y = Math.ceil((idx + 1) / cols);
            const top = [x, y - 1];
            const bottom = [x, y + 1];
            const topLeft = [x - 1, y - 1];
            const left = [x - 1, y];
            const bottomLeft = [x - 1, y + 1];
            const topRight = [x + 1, y - 1];
            const right = [x + 1, y];
            const bottomRight = [x + 1, y + 1];
            const neighborCords = [
              top, bottom,
              topLeft, left, bottomLeft,
              topRight, right, bottomRight
            ];
            const label =
              !isMine
                ? neighborCords
                    .map(([x, y]) => arr[getIndex(cols, x, y)])
                    .filter(mine => mine)
                    .length
                : minesNum;
            return { mines: label, flagged: false, revealed: false };
          });

      game.events.publish("started", {
        nickname: command.user.token.nickname,
        numOfRows: rows,
        numOfCols: cols,
        numOfMines: mines,
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