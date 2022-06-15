import { init } from "../engine/gamelab_functions.js";

const canvas = document.querySelector(".twoButNotThree");

const {
  setScreenSize,
  setLegend, 
  setMap, 
  getCell,
  addSprite, 
  clearTile, 
  setSolids,
  setPushables, 
  replace, 
  onInput,
  afterInput, 
  getGrid,
  getAllTiles, 
  clear, 
  setZOrder, 
  sprite,
  swap,
  match,
  setBackground
} = init(canvas);


setScreenSize(500, 500)

setLegend({
  r: sprite(`
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
rrrrrrrrrrrrrrrr
  `),
  g: sprite(`
................
............r...
....rr......r...
.....rr....r....
......rggggrg...
.....grr..r.gg..
....gg.rr.r..g..
....g...r.r..g..
....g....rr..g..
....g....rr..g..
....g........g..
....gg.......g..
.....gg.....gg..
.......gggggg...
................
................
  `),
    1: sprite(`
................
................
................
....0000000.....
....0.....0000..
....0...0....0..
....0...0....0..
....0...0...00..
....0000000.0...
....0...0...0...
....0...0...0...
....0...0...0...
....000000000...
................
................
................
  `),
  2: sprite(`
................
................
................
....0000000.....
....0.....0000..
....0...0....0..
....0...0....0..
....0...0...00..
....0000000.0...
....0...0...0...
....0...0...0...
....0...0...0...
....000000000...
................
................
................
  `),
  p: sprite(`
................
................
................
................
.....000000.....
....00....00....
....0..0.0.0....
....00.....0....
.....0....0.....
.....000000.....
......0..00.....
.....00...0.....
.....0..........
................
................
................
  `),
  "w": sprite(`
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
gggggggggggggggg
  `)
})

setSolids(["p", "r"])

setZOrder(["p","r", "2"]);

// setBackground("g")

// setPushables({
//   "2": ["p"]
// })

let level = 0;
let maxMoves = 4;
let moveHistory = [];
let movesMade = 0;

const levels = [
  `
    rrrrrrrrrr
    r........r
    r..111...r
    r...11...r
    r..11....r
    rp.....g.r
    rrrrrrrrrr
  `,
  `
    rrrrrrrrrr
    r.p2.rrrrr
    rrrr....gr
    rrrrrrrrrr
  `,
]

setSolids(["p", "1", "r"])

setPushables({
  "p": ["1"],
  "1": ["1"]
})


setMap(levels[level])

// get vs getAll vs getFirst
let player = () => getAllTiles("p")[0];

const upPattern = `1
                   1
                   1
                   p
                   `
const downPattern = `p
                     1
                     1
                     1
                     `

onInput("up", _ => {
  if (match(upPattern).length) return;

  // getFirst("p").y -= 1;
  player().y -= 1;
})

onInput("down", _ => {
  if (match(downPattern).length) return;
  player().y += 1;
})

onInput("left", _ => {
  if (matchPattern("111p").length) return;
  player().x -= 1;


})

onInput("right", _ => {
  if (matchPattern("p111").length) return;

  player().x += 1;


})


afterInput(_ => {

})

