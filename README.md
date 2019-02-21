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

Esta seria la lista de items a tener en cuenta de la mas importante 
a la menos importante:

Cuando una celda sin minas a los lados es descubierta,
las celdas a los lados serán descubiertas tambien

Capacidad de ponerle un flag a la celda ya sea con un signo de pregunta o
una bandera roja

Detectar cuando el juego se haya terminado

Debe haber un reloj con maximo de tiempo

Capacidad de comenzar un nuevo juego, guardar juegos sin terminar y poder
jugar donde uno los guardó

Capacidad par configurar el juego con parametros como:
* numero de filas
* numero de columnas
* numero de minas

Capacidad para soportar varios usuarios / cuentas

