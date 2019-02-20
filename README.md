# minesweeper-api
1. Start your Prisma server: docker-compose up -d
2. Deploy your Prisma service: prisma deploy
3. Read more about Prisma server:
    http://bit.ly/prisma-server-overview

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