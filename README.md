# minesweeper-api
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

Debe haber un reloj con maximo de tiempo
```
timer aggregate:
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
game aggregate:
  numberOfRows
  numberOfCols
  numberOfMines
  squares: [
    {
      isMine: false, 
      adjacentMines: 2, 
      flagged: false, 
      revealed: false, 
      minesLocation: {
        topLeft,
        top,
        topRight,
        right,
        bottomRight
        bottom,
        bottomLeft,
        left,
      }
    },
    ...
  ]
  commands: [start, cancel, revealSquare]
  events: [started, canceled, squareRevealed, lost, won]
```

Capacidad para soportar varios usuarios / cuentas
```
Take a look at auth0 service
```

