# minesweeper-api

# model
type User {
  id: ID! @unique
  email: String @unique
  name: String!
  games: [Game]
}

type Game {
  id: ID! @unique
  cols: Number,
  rows: Number,
  playingTime: Number,
  mines: Number,
  tiles: [Tile!]!,
  player: User!,
  isDone: Boolean!
}

type Tile {
  id: ID!
  isMine: Boolean!,
  isRevealed: Boolean!,
  row: Number!,
  col: Number!,
  game: Game!
}

# Description
Diseñar un modelo usando conceptos DDD, 
para poder crear un app con el framework Wolkenkit que usa CQRS, 
Event Sourcing y NodeJS.
Se trataria de hacer una api sencilla para el juego
Minsweeper (Busca Minas)

Esta seria la lista de items a tener en cuenta:

Cuando una celda sin minas a los lados es descubierta,
las celdas a los lados serán descubiertas tambien

Capacidad de ponerle un flag a la celda ya sea con un signo de pregunta o
una bandera roja
```
cell aggregate:
  commands: [reveal, flag]
  events: [revealed, flagged]
```

Debe haber un reloj con maximo de tiempo
```
hourglass aggregate:
  commands: [start, stop]
  events: [started, stopped]
```

Detectar cuando el juego se haya terminado
Capacidad de comenzar un nuevo juego, guardar juegos sin terminar y poder
jugar donde uno los guardó
Capacidad par configurar el juego con parametros como:
* numero de filas
* numero de columnas
* numero de minas
```
board aggregate:
  numberOfRows
  numberOfCols
  numberOfMines
  commands: [start, end, save, resume, setRows, setColumns, setMines]
  events: [started, ended, saved, resumed, rowsSet, columnsSet, minesSet]
```

Capacidad para soportar varios usuarios / cuentas
```
user aggregate:
  commands: [register, login]
  events: [registered, loggedin]
```

