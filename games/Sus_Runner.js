/*
@title: Sus_Runner
@tags: ['endless']
@addedOn: 2023-02-10
@author: Johna
*/

const player = "p";
const treeShort = "s";
const treeTall1 = "t";
const treeTall2 = "u";
const ground1 = "g";
const ground2 = "h";
const dead = "d";

setLegend(
  [player, bitmap`
....000000000...
..003333333300..
..033333333330..
..0333333300000.
.003333330111110
0003333330111110
0303333330111110
030333333300000.
03033333333330..
03033333333330..
03033333333330..
00033300003330..
..03330.033330..
..03330.033330..
..03330.033330..
..0000...0000...`],
  [dead, bitmap`
................
................
................
................
.....11.111.....
.....111111.....
.......11.......
.......11.......
03033333333330..
03033333333330..
03033333333330..
00033300003330..
..03330.033330..
..03330.033330..
..03330.033330..
..0000...0000...`],
  [treeShort, bitmap`
......00........
.....0440.......
.00..04440......
0440.04440...00.
0440.04440..0440
0440.04440..0440
0440.04440..0440
0440.04440..0440
0440004440.04440
0444404440004440
.004404440444400
..0040444044400.
...0004440000...
.....04440......
.....04440......
.....04440......`],
  [treeTall1, bitmap`
04440.044440.000
044400044440.040
0444440444400440
.044440444404440
.004440444404440
...0000444404440
.....00444404400
......044440000.
......044440....
......044440....
......044440....
......044440....
......044440....
......044440....
......044440....
......044440....`],
  [treeTall2, bitmap`
........00......
.......0440.....
......004440....
......044440....
......044440....
......044440....
......044440....
......044440....
......044440....
......044440....
.00...044440....
0440..044440....
04440.044440....
04440.044440....
04440.044440....
04440.044440....`],
  [ground1, bitmap`
0000000000000000
................
.000......00....
......0.........
..00............
............0...
................
................
................
................
................
................
................
................
................
................`],
  [ground2, bitmap`
0000000000000000
........0.......
................
...00.....00....
................
................
................
................
................
................
................
................
................
................
................
................`]
)

/*setSolids([
  player,
  ground1,
  ground2,
  treeShort,
  treeTall1,
  treeTall2
]);*/

const levels = [
  map`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
...p..........................
hghghghghghghghghghghghghghghg`,
];

setMap(levels[0]);

addText("Press W to start", { 
  x: 2,
  y: 6,
})

let started = 0;
onInput("w", () => {
  if (started == 0) {
    started = 1;
    start();
    clearText();
  } else if (started == -1) {
    clearText();
    started = 0;
    setMap(levels[0]);
    addText("Press W to start", { 
      x: 2,
      y: 6,
    })
  }
  jump();
});

function start() {
  let moveTree, addTree;
  let score = 0;
  moveTree = setInterval(function() {
    clearText();
    score += 1;
    getAll(treeShort).forEach(function(e) {
      e.x -= 1;
      clearTile(0, 8);
    })
    getAll(treeTall1).forEach(function(e) {
      e.x -= 1;
      clearTile(0, 8);
    })
    getAll(treeTall2).forEach(function(e) {
      e.x -= 1;
      clearTile(0, 7);
    })
    if (getTile(3, 8).length > 1 || getTile(3, 7).length > 1) {
      started = -1;
      clearInterval(moveTree);
      clearInterval(addTree);
      clearTile(3, 8);
      clearTile(3, 7);
      addSprite(3, 8, dead);
      addText("You Died", { 
        x: 6,
        y: 6,
      });
    }
    addText("" + score, { 
      x: 1,
      y: 5,
    })
  }, 100);
  addTree = setInterval(function() {
    setTimeout(function() {
      let tree = Math.floor(Math.random() * (4 - 1) + 1);
      if (tree == 1 || tree == 2) {
        addSprite(29, 8, treeShort);
      } else {
        addSprite(29, 8, treeTall1);
        addSprite(29, 7, treeTall2);
      }
    }, Math.floor(Math.random() * (700 - 1) + 1))
  }, 1200)
}

function jump() {
  getFirst(player).y = 7;
  setTimeout(function() {
    getFirst(player).y = 6;
  }, 100);
  setTimeout(function() {
    getFirst(player).y = 7;
  }, 300);
  setTimeout(function() {
    getFirst(player).y = 8;
  }, 400);
}