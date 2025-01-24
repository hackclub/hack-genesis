/*
@title: Box Pushing Game
@description: The Box Pushing Game is a minimalistic puzzle game where players must navigate various levels to unlock a chest with a key to progress. The game features obstacles like spikes and crates that require strategic movement to solve. Each level presents unique challenges, emphasizing puzzle-solving and careful planning to succeed.
@author: HEHE-HTML
@tags: []
@addedOn: 2024-08-18
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

*/

const player = "p"
const background = "b"
const wall = "w"
const brick = "q"
const crate = "c"
const key = "k"
const door = "d"
const spikeX = "x"
const spike = "s"
const black = "y"
//music
const move = tune`
75: E4^75,
2325`;
const keyEntered = tune`
84.98583569405099,
84.98583569405099: B4~84.98583569405099,
84.98583569405099: A4^84.98583569405099,
84.98583569405099: A4^84.98583569405099 + C5^84.98583569405099,
2379.6033994334275`;
const die = tune`
96.15384615384616: G4/96.15384615384616,
96.15384615384616: F4/96.15384615384616,
96.15384615384616: C4/96.15384615384616,
2788.4615384615386`

let xes = `
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000020000200000
0000002002000000
0000000220000000
0000000220000000
0000002002000000
0000020000200000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`


let spikes = `
0000000000000000
0000000000000000
0000000220000000
0000002002000000
0000002002000000
0000020000200000
0000020000200000
0000200000020000
0000200000020000
0000200000020000
0000022222200000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`

let spikesUp = false
let spikeSprite = xes

setLegend(
  [player, bitmap`
................
................
....22222222....
...2200000022...
..220000000022..
..200000000002..
..200020020002..
..200020020002..
..200000000002..
..200000000002..
..200000000002..
..220000000022..
..022000000220..
..002222222200..
................
................`],
  [crate, bitmap`
................
...2222222222...
..220000000022..
.22000000000022.
2200000000000022
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.
................`],
  [background, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [brick, bitmap`
2222222222222222
2000000000000002
2022222220022202
2022222220022202
2022222220022202
2000000000000002
2000000222222202
2022200222222202
2022200222222202
2022200222222202
2000000000000002
2022222200222202
2022222200222202
2022222200222202
2000000000000002
2222222222222222`],
  [key, bitmap`
................
.00000000000000.
.00002222220000.
.00002222220000.
.00002200220000.
.00002200220000.
.00002222220000.
.00002222220000.
.00000022000000.
.00000022000000.
.00002222000000.
.00002222000000.
.00000022000000.
.00002222000000.
.00000000000000.
................`],
  [wall, bitmap`
2222000220002222
2000000000000002
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
2000000000000002
2222000220002222`],
  [door, bitmap`
0000000000000000
0000000000000000
0000000000000000
0002222222222000
0022000000002200
0020000000000200
0020000220000200
0022222222222200
0020000220000200
0020000000000200
0020000000000200
0020000000000200
0022222222222200
0000000000000000
0000000000000000
0000000000000000`],
  [spikeX, spikeSprite],
  [spike, bitmap`
0000000000000000
0000000000000000
0000000220000000
0000002002000000
0000002002000000
0000020000200000
0000020000200000
0000200000020000
0000200000020000
0000200000020000
0000022222200000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]



)

setSolids([player, brick, crate, key, black])
setBackground(background)

addText("push & peril", {
  x: 4,
  y: 3,
  color: color`2`
})

addText("start", {
  x: 10,
  y: 8,
  color: color`2`
})

addText("wasd to move", {
  x: 4,
  y: 10,
  color: color`2`
})
addText("j to reset", {
  x: 5,
  y: 12,
  color: color`2`
})
let level = 0
const levels = [
  map`
.............
qqqqqqqqqqqqq
q...........q
q...........q
qqqqqqqqqqqqq
.............
.yyyyy.......
.ypkdy.......
.yyyyy.......
.............
.............
.............
.............
.............`,

  map`
qqqqqqqqqqq
...........
...........
.p..k....d.
...........
...........
qqqqqqqqqqq`,
  map`
qqqqqqqqqqq
...........
......c....
.p..k.c..d.
......c....
...........
qqqqqqqqqqq`,
  map`
qq.qqq...qq
q.c.......q
...ww.qq.c.
...q...q...
...q.p.w..q
.d.w...q.k.
...wq.ww...
q.......c.q
qq.qqqqq.qq`,
  map`
d.c..........
..q..........
qwq.......c..
....qqcqq....
....q...q....
....w.p.c....
....q...q....
....wqwwq....
..........qwq
.c........wk.
..........w.q`,
  map`
..c........
.pc.c......
ccq..qwq...
...k...qw..
.c.q....w..
...w....q..
...qq......
......wqq..
......qd...`,
  map`
qqqqqqqqqqq
......x....
......x....
.p..k.x..d.
......x....
......x....
qqqqqqqqqqq`,
  map`
qqqqqqqqqqqqq
q...........q
q.c.......k.q
q....xxx....q
q.s.x...x.s.q
q...x.p.x...q
q...x...x...q
q....xxx..c.q
q........s..q
q...c.d.....q
qqqqqqqqqqqqq`,
  map`
d....c.......
..c.....c....
qqqqqqqqqqxqq
.............
.............
...s..s..s...
.............
..s.qqcqq.s..
....q...q....
....c.k.c....
....q.p.q....`,
  map`
qwwqq...qqqqq
q.....k.....w
w..sssssss..q
q...........w
q.c...x.....q
.....sds.c...
......x......
q............
w...qcccq.c.q
w...s...s...q
qwqqs.p.sqqwq`,
  map`
................
................
....c..qxxq.....
.......q..x..c..
...s...qd.x.....
.......qqqq.....
qqqwqq........s.
q....qq..c......
q.k...q.........
qscs..w.s...qqxq
q.pc..q.....q...
q..s..q.....x...
qqqqqqq.....q...`,
  map`
qqqqqqq
q..d..q
q.....q
qcccccq
q.....q
qcccccq
q.....q
qcckccq
q.....q
q..p..q
qqqqqqq`,

  map`
................
........p.......
................
..c.c..cc..c.c..
..c.c.c..c.c.c..
...c..c..c.c.c..
...c...cc...c...
................
..c.c.c.c.c..c..
..c.c.c.c.cc.c..
..c.c.c.c.c.cc..
...c.c..c.c..c..
................
................`,

]

setMap(levels[level])

setPushables({
  [player]: [crate, key]

})



onInput("w", () => {
  spikesUp = !spikesUp;

  getFirst(player).y -= 1
  if (!tilesWith(door, key).length >= 1) {
    playTune(move)
  }
})
onInput("a", () => {
  spikesUp = !spikesUp;

  getFirst(player).x -= 1
  if (!tilesWith(door, key).length >= 1) {
    playTune(move)
  }
})
onInput("s", () => {
  spikesUp = !spikesUp;

  getFirst(player).y += 1
  if (!tilesWith(door, key).length >= 1) {

    playTune(move)
  }
})
onInput("d", () => {
  if (level == 0) {
    clearText()
  }
  spikesUp = !spikesUp;

  getFirst(player).x += 1
  if (!tilesWith(door, key).length >= 1) {
    playTune(move)
  }
})

onInput("j", () => {
  playTune(die)
  spikesUp = false


  setMap(levels[level])

})
onInput("i", () => {
  clearText()
  level = 0
  setMap(levels[level])
  addText("push & peril", {
  x: 4,
  y: 3,
  color: color`2`
})
addText("start", {
  x: 10,
  y: 8,
  color: color`2`
})

addText("wasd to move", {
  x: 4,
  y: 10,
  color: color`2`
})
addText("j to reset", {
  x: 5,
  y: 12,
  color: color`2`
})
})



afterInput(() => {
  if(level == 12){addText("i to go to menu", {
  x: 2,
  y: 1,
  color: color`L`
})}
  if (!spikesUp) {
    setLegend([player, bitmap`
................
................
....22222222....
...2200000022...
..220000000022..
..200000000002..
..200020020002..
..200020020002..
..200000000002..
..200000000002..
..200000000002..
..220000000022..
..022000000220..
..002222222200..
................
................`],
      [crate, bitmap`
................
...2222222222...
..220000000022..
.22000000000022.
2200000000000022
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.
................`],
      [background, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
      [brick, bitmap`
2222222222222222
2000000000000002
2022222220022202
2022222220022202
2022222220022202
2000000000000002
2000000222222202
2022200222222202
2022200222222202
2022200222222202
2000000000000002
2022222200222202
2022222200222202
2022222200222202
2000000000000002
2222222222222222`],
      [key, bitmap`
................
.00000000000000.
.00002222220000.
.00002222220000.
.00002200220000.
.00002200220000.
.00002222220000.
.00002222220000.
.00000022000000.
.00000022000000.
.00002222000000.
.00002222000000.
.00000022000000.
.00002222000000.
.00000000000000.
................`],
      [wall, bitmap`
2222000220002222
2000000000000002
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
2000000000000002
2222000220002222`],
      [door, bitmap`
0000000000000000
0000000000000000
0000000000000000
0002222222222000
0022000000002200
0020000000000200
0020000220000200
0022222222222200
0020000220000200
0020000000000200
0020000000000200
0020000000000200
0022222222222200
0000000000000000
0000000000000000
0000000000000000`],
      [spikeX, xes],
      [spike, bitmap`
0000000000000000
0000000000000000
0000000220000000
0000002002000000
0000002002000000
0000020000200000
0000020000200000
0000200000020000
0000200000020000
0000200000020000
0000022222200000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
      [black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
    );
  } else {
    setLegend([player, bitmap`
................
................
....22222222....
...2200000022...
..220000000022..
..200000000002..
..200020020002..
..200020020002..
..200000000002..
..200000000002..
..200000000002..
..220000000022..
..022000000220..
..002222222200..
................
................`],
      [crate, bitmap`
................
...2222222222...
..220000000022..
.22000000000022.
2200000000000022
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2000000000000002
2200000000000022
.22222222222222.
................`],
      [background, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
      [brick, bitmap`
2222222222222222
2000000000000002
2022222220022202
2022222220022202
2022222220022202
2000000000000002
2000000222222202
2022200222222202
2022200222222202
2022200222222202
2000000000000002
2022222200222202
2022222200222202
2022222200222202
2000000000000002
2222222222222222`],
      [key, bitmap`
................
.00000000000000.
.00002222220000.
.00002222220000.
.00002200220000.
.00002200220000.
.00002222220000.
.00002222220000.
.00000022000000.
.00000022000000.
.00002222000000.
.00002222000000.
.00000022000000.
.00002222000000.
.00000000000000.
................`],
      [wall, bitmap`
2222000220002222
2000000000000002
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
0000000000000000
0000000000000000
0000000000000000
2000000000000002
2000000000000002
2000000000000002
2222000220002222`],
      [door, bitmap`
0000000000000000
0000000000000000
0000000000000000
0002222222222000
0022000000002200
0020000000000200
0020000220000200
0022222222222200
0020000220000200
0020000000000200
0020000000000200
0020000000000200
0022222222222200
0000000000000000
0000000000000000
0000000000000000`],
      [spikeX, spikes],
      [spike, bitmap`
0000000000000000
0000000000000000
0000000220000000
0000002002000000
0000002002000000
0000020000200000
0000020000200000
0000200000020000
0000200000020000
0000200000020000
0000022222200000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
      [black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`]
    );
  }

  if (tilesWith(player, spikeX).length >= 1 && spikesUp) {
    setMap(levels[level])
    spikesUp = false

    playTune(die)


  }

  if (tilesWith(player, spike).length >= 1) {
    setMap(levels[level])
    spikesUp = false

    playTune(die)
  }
  if (tilesWith(door, key).length >= 1) {
    spikesUp = false

    playTune(keyEntered)
    level += 1
    setMap(levels[level])
  }
  if (spikesUp == false) { spikesUp == true } else {
    spikesUp == false
  }
})
