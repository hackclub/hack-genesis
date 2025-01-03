/*
WASD TO MOVE
AVOID THE INVISIBLE BARRIERS 🚫
REACH THE 🏁 BEFORE THE TIMER ENDS
"i" TO RESTART THE GAME
"k" TO MUTE THE MUSIC


@title: Maze Madness
@author: Flaine
@tags: ['maze', 'music']
@addedOn: 2024-11-17
*/

const player = "p"

const melody = tune`
500: D4^500,
500: C4~500 + D4~500,
500: D4^500,
500: D4~500 + C4~500,
500: E4^500,
500: D4-500,
500: E4^500 + D4^500,
500: D4-500,
500: E4^500 + D4^500,
500: D4-500,
500: D4^500 + E4^500,
500: D4-500 + C4-500,
500: D4-500 + E4-500 + F4-500,
500: E4-500,
500: E4^500 + D4-500,
500: C4-500,
500: D4~500 + E4~500,
500: E4^500,
500: E4~500 + D4~500,
500: F4^500,
500: E4-500,
500: F4^500 + E4^500,
500: E4-500,
500: F4^500 + E4^500,
500: E4-500,
500: F4^500 + E4^500,
500: E4-500 + D4-500,
500: E4-500 + F4-500 + G4-500,
500: F4-500,
500: E4-500 + F4^500,
500: D4-500,
500: C4-500`
const playback = playTune(melody, Infinity)

const bg = "1"
const endpoint = "e"
const killblock = "b"
const hintblock = "h"
const wallblock = "w"
const letterA = "A"
const letterB = "B"
const letterC = "C"
const letterD = "D"
const letterE = "E"
const letterF = "F"
const letterG = "G"
const letterH = "H"
const letterI = "I"
const letterJ = "J"
const letterK = "K"
const letterL = "L"
const letterM = "M"
const letterN = "N"
const letterO = "O"
const letterP = "P"
const letterQ = "Q"
const letterR = "R"
const letterS = "S"
const letterT = "T"
const letterU = "U"
const letterV = "V"
const letterW = "W"
const letterX = "X"
const letterY = "Y"
const letterZ = "Z"
const space = "@"
const dash = "-"
setLegend(
  // Cursor
  [player, bitmap`
2.22.22.22.22.22
2...............
...............2
2..............2
2...............
...............2
2..............2
2...............
...............2
2..............2
2...............
...............2
2..............2
2...............
...............2
22.22.22.22.22.2`],
  // background
  [bg, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
  [endpoint, bitmap`
1111111111111111
1LLL333LLLLL3LL0
1LL33333LLL33LL0
1LL3333333333LL0
1LL3333333333LL0
1LL3333333333LL0
1LL3333333333LL0
1LL333333333LLL0
1LL11LLL333LLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1000000000000000`],
  [endpoint, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LL1144LLLLL4LL0
1LL11444LLL44LL0
1LL1144444444LL0
1LL1144444444LL0
1LL1144444444LL0
1LL1144444444LL0
1LL11LL44444LLL0
1LL11LLL444LLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LL11LLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
  [killblock, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
  [hintblock, bitmap`
1111111111111111
1LLLL333333LLLL0
1LL3333333333LL0
1L333LLLLLL333L0
1L3333LLLLLL33L0
133L333LLLLLL330
133LL333LLLLL330
133LLL333LLLL330
133LLLL333LLL330
133LLLLL333LL330
133LLLLLL333L330
1L33LLLLLL3333L0
1L333LLLLLL333L0
1LL3333333333LL0
1LLLL333333LLLL0
1000000000000000`],

  // Existing legends for other sprites

  // New legends for killblock with the initial bitmap
  [wallblock, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LL5555555555LL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
  [wallblock, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
  [letterA, bitmap`
1111111111111111
1LLLL222222LLLL0
1LLLL222222LLLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22222222LLL0
1LLL22222222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1000000000000000`],
  [letterB, bitmap`
1111111111111111
1LLL222222LLLLL0
1LLL2222222LLLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL2222222LLLL0
1LLL2222222LLLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL2222222LLLL0
1LLL222222LLLLL0
1000000000000000`],
  [letterC, bitmap`
1111111111111111
1LLLL2222222LLL0
1LLL222222222LL0
1LL222LLLLL22LL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL222LLLLL22LL0
1LLL222222222LL0
1LLLL2222222LLL0
1000000000000000`],
  [letterD, bitmap`
1111111111111111
1LLL22222LLLLLL0
1LLL2222222LLLL0
1LLL22LLL222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLL222LLL0
1LLL2222222LLLL0
1LLL22222LLLLLL0
1000000000000000`],
  [letterE, bitmap`
1111111111111111
1LLL22222222LLL0
1LLL22222222LLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL2222222LLLL0
1LLL2222222LLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22222222LLL0
1LLL22222222LLL0
1000000000000000`],
  [letterF, bitmap`
1111111111111111
1LLL22222222LLL0
1LLL22222222LLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL2222222LLLL0
1LLL2222222LLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1000000000000000`],
  [letterG, bitmap`
1111111111111111
1LLLL2222222LLL0
1LLL222222222LL0
1LL222LLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL22LLLL2222LL0
1LL22LLLL2222LL0
1LL22LLLLLL22LL0
1LL222LLLLL22LL0
1LL2222LLL222LL0
1LLL222222222LL0
1LLLL2222222LLL0
1000000000000000`],
  [letterH, bitmap`
1111111111111111
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22222222LLL0
1LLL22222222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1000000000000000`],
  [letterI, bitmap`
1111111111111111
1LLLL222222LLLL0
1LLLL222222LLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLL222222LLLL0
1LLLL222222LLLL0
1000000000000000`],
  [letterJ, bitmap`
1111111111111111
1LLLL222222LLLL0
1LLLL222222LLLL0
1LLLLLLL22LLLLL0
1LLLLLLL22LLLLL0
1LLLLLLL22LLLLL0
1LLLLLLL22LLLLL0
1LLLLLLL22LLLLL0
1LLLLLLL22LLLLL0
1LLLL22L22LLLLL0
1LLLL22L22LLLLL0
1LLLL22L22LLLLL0
1LLLL22222LLLLL0
1LLLL22222LLLLL0
1LLLLL222LLLLLL0
1000000000000000`],
  [letterK, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLL222LL0
1LL22LLLL222LLL0
1LL22LLL222LLLL0
1LL22LL222LLLLL0
1LL22L222LLLLLL0
1LL22222LLLLLLL0
1LL22222LLLLLLL0
1LL22L222LLLLLL0
1LL22LL222LLLLL0
1LL22LLL222LLLL0
1LL22LLLL222LLL0
1LL22LLLLL222LL0
1LL22LLLLLL22LL0
1000000000000000`],
  [letterL, bitmap`
1111111111111111
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22222222LLL0
1LLL22222222LLL0
1000000000000000`],
  [letterM, bitmap`
1111111111111111
1LL222LLLL222LL0
1LL2222LL2222LL0
1LL2222222222LL0
1LL22L2222L22LL0
1LL22LL22LL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1000000000000000`],
  [letterN, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLLL22LL0
1LL2222LLLL22LL0
1LL22222LLL22LL0
1LL22L222LL22LL0
1LL22LL222L22LL0
1LL22LLL22222LL0
1LL22LLLL2222LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1000000000000000`],
  [letterO, bitmap`
1111111111111111
1LLLL222222LLLL0
1LLL22222222LLL0
1LL222LLLL222LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLL222LL0
1LLL22222222LLL0
1LLLL222222LLLL0
1000000000000000`],
  [letterP, bitmap`
1111111111111111
1LLL2222222LLLL0
1LLL22222222LLL0
1LLL22LLL222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLL222LLL0
1LLL22222222LLL0
1LLL2222222LLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1LLL22LLLLLLLLL0
1000000000000000`],
  [letterQ, bitmap`
1111111111111111
1LLLL222222LLLL0
1LLL22222222LLL0
1LLL222LL222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL222LL222LLL0
1LLL22222222LLL0
1LLLL222222LLLL0
1LLLLLLLL222LLL0
1LLLLLLLLL22LLL0
1000000000000000`],
  [letterR, bitmap`
1111111111111111
1LLL2222222LLLL0
1LLL22222222LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22LLLL22LLL0
1LLL22222222LLL0
1LLL2222222LLLL0
1LLL2222LLLLLLL0
1LLL22222LLLLLL0
1LLL22L222LLLLL0
1LLL22LL222LLLL0
1LLL22LLL222LLL0
1LLL22LLLL22LLL0
1000000000000000`],
  [letterS, bitmap`
1111111111111111
1LLL22222222LLL0
1LL2222222222LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLLLLLL0
1LL22LLLLLLLLLL0
1LL222222222LLL0
1LLL222222222LL0
1LLLLLLLLLL22LL0
1LLLLLLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL2222222222LL0
1LLL22222222LLL0
1000000000000000`],
  [letterT, bitmap`
1111111111111111
1LLL22222222LLL0
1LLL22222222LLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1000000000000000`],
  [letterU, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLL222LL0
1LLL22222222LLL0
1LLL22222222LLL0
1000000000000000`],
  [letterV, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLL222LL0
1LLL222LL222LLL0
1LLLL222222LLLL0
1LLLLL2222LLLLL0
1000000000000000`],
  [letterW, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LL22LL22LL0
1LL22LL22LL22LL0
1LL22LL22LL22LL0
1LL22LL22LL22LL0
1LL22LL22LL22LL0
1LL2222222222LL0
1LLL22222222LLL0
1LLLL22LL22LLLL0
1000000000000000`],
  [letterX, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLL222LL0
1LLL222LL222LLL0
1LLLL222222LLLL0
1LLLLL2222LLLLL0
1LLLL222222LLLL0
1LLL222LL222LLL0
1LL222LLLL222LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1000000000000000`],
  [letterY, bitmap`
1111111111111111
1LL22LLLLLL22LL0
1LL22LLLLLL22LL0
1LL222LLLL222LL0
1LLL222LL222LLL0
1LLLL222222LLLL0
1LLLLL2222LLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1LLLLLL22LLLLLL0
1000000000000000`],
  [letterZ, bitmap`
1111111111111111
1LL2222222222LL0
1LL2222222222LL0
1LLLLLLLLLL22LL0
1LLLLLLLLL222LL0
1LLLLLLLL222LLL0
1LLLLLLL222LLLL0
1LLLLLL222LLLLL0
1LLLLL222LLLLLL0
1LLLL222LLLLLLL0
1LLL222LLLLLLLL0
1LL222LLLLLLLLL0
1LL22LLLLLLLLLL0
1LL2222222222LL0
1LL2222222222LL0
1000000000000000`],
  [space, bitmap`
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
  [dash, bitmap`
1111111111111111
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLL22222222LLL0
1LLL22222222LLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1LLLLLLLLLLLLLL0
1000000000000000`],
)
setBackground(bg)

setSolids([player, wallblock, letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ, space])

let level = 0
const levels = [
  map`
wMAZEww
MADNESS
1111111
wp111ew
wREACHw
wwTHEww
weeeeew`,
  map`
@@@
pbb
111
bbe`,
  map`
@@@@
p111
111b
1b11
11be`,
  map`
@@@@@
pb111
1b1b1
1beb1
11b11
1111b`,
  map`
@@@@@@
p111b1
11b111
b1ebb1
1bb111
11b111
b111b1`,
  map`
@@@@@@@
p1b1b11
1b11b11
1b1111b
1b1b1be
111b111
bb1b111
1111111`,
  map`
@@@@@@@@
p1bee111
1bbbbbb1
11b11111
b1b1bb11
11b11bbb
1bbb1b11
11bb1b11
b1111b11`,
  map`
@@@@@@@@@@
pbbbbbbbbb
1b111bb11e
111b1111be
bbbbbbbbbb`,
  map`
@@@@@@@@@@@@
@@@@@@@@@@@@
111b1b1b1111
pb1b1b111bb1
11111b1bb111
11b11b1b11b1
111b1bb11b11
1b1b1eb1b111
111bbbb111b1
b1b111bbbbb1
1111b1111111`,
  map`
@@@
THE
1p1
END`,
  map`
@@@@@@@@@
..YOUp...
..1111...
..LhSE...
.........
.PRESS.I.
.........
TO.RE-TRY`,

]


let isMuted = false; // Variable to track if any melody is muted

onInput("k", () => {
  if (isMuted == false) {
    playback.end(); // Mute all music
    isMuted = true; // Set the isMuted flag to true
  }
})

onInput("i", () => {
  // Set the level back to 0
  level = 0;
  clearText();
  timeLeft = 120;
  // Remove all player sprites
  getAll(player).forEach(sprite => {
    sprite.remove();
  });

  // Spawn a new player sprite at position (0, 0)
  addSprite(1, 2, player);

  // Set the map to the first level
  setMap(levels[level]);
});
// minimum "x" is 0 or 20. maximum "x" is 19 |||||| minimum "Y" is 0. maximum "Y" is 15

let timeLeft = 120; // Set the initial time limit to 120 seconds

// Display the time left on the screen

// Function to update timer every second
const timerInterval = setInterval(() => {
  // Check if the level is 0 and set the timer to 120
  if (level >= 1 && level < 9) {
    timeLeft -= 1; // Decrement time left by 1 second
    // Update the displayed time
    clearText();
    addText(`Time Left: ${timeLeft+1}`, { x: 3, y: 1, color: color`2` })
  }
  if (timeLeft < 0 && level < 9) {
    level = 10; // Set level to 10 if time runs out before reaching level 9
    setMap(levels[level]); // Load level 10
  }
}, 1000); // Update timer every second

setMap(levels[level])

setPushables({
  [player]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("w", () => {
  getFirst(player).y -= 1
})

onInput("d", () => {
  getFirst(player).x += 1
})

onInput("a", () => {
  getFirst(player).x -= 1
})

afterInput(() => {
  const playerSprite = getFirst(player)
  const playerX = playerSprite.x
  const playerY = playerSprite.y
  // Check if player touches killblock
  const touchedKillblock = getTile(playerX, playerY).some(sprite => sprite.type === killblock)
  if (level < 8) {
    if (touchedKillblock) {
      // Set player back to coordinates (0, 0)
      var oldPlayerX = playerSprite.x;
      var oldPlayerY = playerSprite.y
      playerSprite.x = 0;
      playerSprite.y = 1;
      clearTile(oldPlayerX, oldPlayerY);
      addSprite(oldPlayerX, oldPlayerY, hintblock);

    }
  }
  const touchedHintblock = getTile(playerX, playerY).some(sprite => sprite.type === hintblock)
  if (level < 8) {
    if (touchedHintblock) {
      // Set player back to coordinates (0, 0)
      playerSprite.x = 0
      playerSprite.y = 1
    }
  }
  if (level == 8) {
    if (touchedHintblock) {
      // Set player to coordinates (6, 5)
      playerSprite.x = 6;
      playerSprite.y = 5;
    }
    if (touchedKillblock) {
      // Set player back to coordinates (0, 0)
      var oldPlayerX = playerSprite.x;
      var oldPlayerY = playerSprite.y
      playerSprite.x = 6;
      playerSprite.y = 5;
      clearTile(oldPlayerX, oldPlayerY);
      addSprite(oldPlayerX, oldPlayerY, hintblock);
    }
  }
  // Check if player touches endpoint
  const touchedEndpoint = getTile(playerX, playerY).some(sprite => sprite.type === endpoint)
  if (touchedEndpoint) {
    if (level === 0) {
      clearText();
      timeLeft = 120;
    }
    // Condition to reset level to 0 if level is 10
    if (level == 11) {
      level = 0;
      timeLeft = 120;
    } else {
      level += 1;
    }
    // Condition to reset level to 0 if level is 10
    if (level < levels.length) {
      setMap(levels[level])
      // Set player back to coordinates (0, 0) for the new level
      getFirst(player).x = 0
      getFirst(player).y = 1
    }
    if (level == 8) {
      setMap(levels[level])
      getFirst(player).x = 6
      getFirst(player).y = 5
    } else {
      // All levels completed
      console.log("All levels completed!")
      // Add game completion logic here
    }
  }
})
