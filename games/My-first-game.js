/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: My first game
@author: Nicolò Tarter
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

setLegend(
  [ player, bitmap`
................
................
.......000......
.......0.0......
......0..0......
......0...0.0...
....0003.30.0...
....0.0...000...
....0.05550.....
......0...0.....
.....0....0.....
.....0...0......
......000.......
......0.0.......
.....00.00......
................` ]
)

setSolids([])

let level = 0
const levels = [
  map`
p.
..`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  getFirst(player).y -= 1
})

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

afterInput(() => {
  console.log("So I can move!")
  console.log("Make my run! It's so fun!")
})