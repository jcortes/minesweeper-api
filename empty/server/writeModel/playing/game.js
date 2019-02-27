 "use strict";

 const initialState = {
  numOfRows: 10,
  numOfCols: 10,
  numOfMines: 20,
  squares: [
    // {
    //   isMine: false, 
    //   adjacentMines: 2, 
    //   flagged: false, 
    //   revealed: false, 
    //   minesLocation: {
    //     topLeft,
    //     top,
    //     topRight,
    //     right,
    //     bottomRight
    //     bottom,
    //     bottomLeft,
    //     left,
    //   }
    // }
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
  start (game, command) {

  },
  cancel (game, command) {

  },
  revealSquare (game, command) {

  }
 };

 const events = {
  started (game, event) {

  },
  canceled (game, event) {

  },
  squareRevealed (game, event) {

  },
  lost (game, event) {

  },
  won (game, event) {

  },
 };

 module.exports = { initialState, commands, events };