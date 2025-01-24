/*
@title: the impossible puzzle
@description: "The Impossible Puzzle" is a challenging game where players aim to rearrange the squares by pushing them into the correct positions. Despite its apparent simplicity, completing the puzzle is notoriously difficult, giving the game its name. The objective is to achieve a specific arrangement of pieces.
@author: monish
@tags: ['puzzle']
@addedOn: 2022-11-13

INSTRUCTIONS:
use WASD to move squares next to the empty square.
(for example, S (down) moves the piece above 
the empty square onto the empty square)

goal is to end up with the following:
*/
bitmap`
................
.33333333.......
.33333333.......
.33333333.......
.33333333.......
.3333333333333..
.3333333333333..
.33333333.......
.33333333.......
.33333333.......
.3333333333333..
.3333333333333..
.33333333.......
.33333333.......
.33333333.......
................` // the image will look like this
setLegend(
  [ "1", bitmap`
0000000000000000
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "2", bitmap`
0000000000000000
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "3", bitmap`
0000000000000000
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "4", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
03333333333333.0
03333333333333.0
03333333333333.0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "5", bitmap`
0000000000000000
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
0333333333333330
0333333333333330
0333333333333330
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
0000000000000000` ],
  [ "6", bitmap`
0000000000000000
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0000000000000000` ],
  [ "7", bitmap`
0000000000000000
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0000000000000000` ],
  [ "8", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
03333333333333.0
03333333333333.0
03333333333333.0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "9", bitmap`
0000000000000000
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
0333333333333330
0333333333333330
0333333333333330
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
03333333.......0
0000000000000000` ],
  [ "a", bitmap`
0000000000000000
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0000000000000000` ],
  [ "b", bitmap`
0000000000000000
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0000000000000000` ],
  [ "c", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0000000000000000` ],
  [ "d", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0000000000000000` ],
  [ "e", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0333333333333330
0000000000000000` ],
  [ "f", bitmap`
0000000000000000
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0..............0
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0.......33333330
0000000000000000` ],
  [ "w", bitmap`
0000000000000000
0000000000000000
0080707720208000
0060707020707000
0027706070706000
0007008060802000
0007007670787000
0000000000000000
0000000000000000
0700070707007080
0700070707707080
0807070707677070
0227760608078000
0870720207007020
0000000000000000
0000000000000000` ]
)

const tiles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "."]

let empty = {
  x: 3,
  y: 3
}


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

let puzzle;
let solvable = false;

const isSolvable = (arr) => {
  let inversions = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversions++;
      }
    }
  }
  return inversions % 2 == 0;
}

for (let i = 0; i < 100; i++) {
  puzzle = shuffleArray(Array.from({length: 15}, (_, i) => i + 1))
  if (isSolvable(puzzle)) {
    solvable = true;
    break;
  }
}
if (!solvable) {
  throw new Error("Something went wrong :(")
}


puzzle.push(16);
// console.log(puzzle)

let puzzleIdx = 0;
let mapStr = ""
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    mapStr += tiles[puzzle[puzzleIdx] - 1]
    puzzleIdx++;
  }
  mapStr += "\n";
}
// console.log(mapStr);

setMap(map`${mapStr}`);

let done = false;

onInput("a", () => {
  if (done) return;
  if (empty.x === 0) return;
  // get tile to left of empty
  const t = getTile(empty.x - 1, empty.y)[0];
  t.x += 1;
  empty.x -= 1;
})

onInput("d", () => {
  if (done) return;
  if (empty.x === 3) return;
  // get tile to right of empty
  const t = getTile(empty.x + 1, empty.y)[0];
  t.x -= 1;
  empty.x += 1;
})

onInput("s", () => {
  if (done) return;
  if (empty.y === 3) return;
  // get tile to bottom of empty
  const t = getTile(empty.x, empty.y + 1)[0];
  t.y -= 1;
  empty.y += 1;
})

onInput("w", () => {
  if (done) return;
  if (empty.y === 0) return;
  // get tile to top of empty
  const t = getTile(empty.x, empty.y - 1)[0];
  t.y += 1;
  empty.y -= 1;
})

const sleep = ms => new Promise(r => setTimeout(r, ms));

afterInput(async () => {
  if (done) return;
  let tileIdx = 0;
  for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
      const t = getTile(x, y);
      if (t.length && t[0].type != tiles[tileIdx]) {
        // console.log("got type", t[0].type)
        // console.log('expected', tiles[tileIdx])
        return
      }
      tileIdx++;
    }
  }
  done = true;
  await sleep(500);
  setMap(map`w`);
})

