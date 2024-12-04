/*
@title: Beyblade Battle
@author: Shweta Shaw
@tags: ['multiplayer']
@addedOn: 2024-12-1

Instructions:

Hit "run" to execute the code and
start the game (you can also press shift+enter).

Controls for Player 1:
  w -> UP
  a -> LEFT
  s -> DOWN
  d -> RIGHT

Controls for Player 2:
  i -> UP
  j -> LEFT
  k -> DOWN
  l -> RIGHT

On Game Over, i to Restart
*/

const player1 = "1";
const player2 = "2";
const image1 = "b";
const image2 = "o";
const image3 = "u";
const image4 = "n";
const image5 = "d";
const image6 = "a";
const image7 = "r";
const image8 = "y";
const image9 = "c";
const image10 = "l";
const image11 = "i";
const image12 = "p";
const a = "x";
const b = "t";
const c = "m";
const d = "z";
const fillWhite = "9";
const fillBlue = "6";

// win bool
let v = 0;
const play1 = tune`
612.2448979591836,
612.2448979591836: C5-612.2448979591836 + B4^612.2448979591836 + A4^612.2448979591836 + D5~612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + A4^612.2448979591836 + G4^612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + E4^612.2448979591836 + F5~612.2448979591836 + E5/612.2448979591836,
612.2448979591836: C5-612.2448979591836 + B4-612.2448979591836 + E4^612.2448979591836 + F5~612.2448979591836 + G5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + E4^612.2448979591836 + F4^612.2448979591836 + G4^612.2448979591836 + G5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + G4^612.2448979591836 + A4^612.2448979591836 + G5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + A4^612.2448979591836 + G4^612.2448979591836 + G5~612.2448979591836 + F5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + C5-612.2448979591836 + G4^612.2448979591836 + F4^612.2448979591836 + F5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + E5~612.2448979591836 + D5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + E4^612.2448979591836 + D5~612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + B4-612.2448979591836 + E4^612.2448979591836 + F4^612.2448979591836 + G4^612.2448979591836,
612.2448979591836: B4-612.2448979591836 + G4^612.2448979591836 + A4^612.2448979591836 + G5~612.2448979591836 + A5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + A4^612.2448979591836 + A5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + C5-612.2448979591836 + A4^612.2448979591836 + G4^612.2448979591836 + A5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + A5~612.2448979591836 + G5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + E4^612.2448979591836 + G5~612.2448979591836 + F5~612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + B4-612.2448979591836 + E4^612.2448979591836 + F4^612.2448979591836 + G4^612.2448979591836,
612.2448979591836: B4-612.2448979591836 + A4^612.2448979591836 + D5~612.2448979591836 + E5~612.2448979591836 + F5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + A4^612.2448979591836 + G4^612.2448979591836 + G5~612.2448979591836 + A5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + C5-612.2448979591836 + G4^612.2448979591836 + F4^612.2448979591836 + A5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + E4^612.2448979591836 + G5~612.2448979591836 + F5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + E4^612.2448979591836 + D4^612.2448979591836 + F5~612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + D4^612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + B4-612.2448979591836 + D4^612.2448979591836 + E5~612.2448979591836,
612.2448979591836: B4-612.2448979591836 + E4^612.2448979591836 + F4^612.2448979591836 + G4^612.2448979591836 + A4^612.2448979591836,
612.2448979591836: B4-612.2448979591836 + A4^612.2448979591836 + A5~612.2448979591836 + D5/612.2448979591836,
612.2448979591836: B4-612.2448979591836 + C5-612.2448979591836 + A4^612.2448979591836 + A5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + A4^612.2448979591836 + G4^612.2448979591836 + G5~612.2448979591836 + F5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + G4^612.2448979591836 + F4^612.2448979591836 + D5~612.2448979591836 + E5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + D5~612.2448979591836 + E5~612.2448979591836 + A5~612.2448979591836,
612.2448979591836: C5-612.2448979591836 + F4^612.2448979591836 + G5~612.2448979591836 + F5~612.2448979591836 + E5~612.2448979591836`;

setLegend(
  [player1, bitmap`
....00000000....
...0000000000...
..000000000000..
.00006666660000.
0000666666660000
0006666666666000
0006663333666000
0006663333666000
0006663333666000
0006663333666000
0006666666666000
0000666666660000
.00006666660000.
..000000000000..
...0000000000...
....00000000....`],
  [player2, bitmap`
....00000000....
...0000000000...
..000000000000..
.00003333330000.
0000333333330000
0003333333333000
0003332222333000
0003332222333000
0003332222333000
0003332222333000
0003333333333000
0000333333330000
.00003333330000.
..000000000000..
...0000000000...
....00000000....`],
  [image1, bitmap`
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
0000000000000000
0000000000000000
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [image2, bitmap`
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666
..........006666`],
  [image9, bitmap`
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........
666600..........`],
  [image3, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
0000000000000000
0000000000000000
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
  [image4, bitmap`
..............00
..............00
............0066
............0066
............0066
............0066
............0066
..........000066
..........000066
..........000066
..........000066
..........006666
..........006666
..........006666
..........006666
..........006666`],
  [image5, bitmap`
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
........00000000
........00000000
..00000000006666
..00000000006666
0066666666666666
0066666666666666`],
  [image6, bitmap`
..........006666
..........006666
..........006666
..........006666
..........006666
..........000066
..........000066
..........000066
............0066
............0066
............0066
............0066
............0066
............0066
..............00
..............00`],
  [image8, bitmap`
0066666666666666
0066666666666666
..00000000066666
..00000000066666
.......000000000
.......000000000
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
  [image7, bitmap`
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
000000000.......
000000000.......
66666000000000..
66666000000000..
6666666666666600
6666666666666600`],
  [image10, bitmap`
00..............
00..............
6600............
6600............
6600............
6600............
6600............
6600............
660000..........
660000..........
660000..........
666600..........
666600..........
666600..........
666600..........
666600..........`],
  [image11, bitmap`
666600..........
666600..........
666600..........
666600..........
666600..........
660000..........
660000..........
660000..........
660000..........
6600............
6600............
6600............
6600............
6600............
00..............
00..............`],
  [image12, bitmap`
6666666666666600
6666666666666600
66666000000000..
66666000000000..
000000000.......
000000000.......
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
  [fillWhite, bitmap`
................
................
................
................
................
................
......2222......
......2222......
......2222......
......2222......
................
................
................
................
................
................`],
  [fillBlue, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [a, bitmap`
6666667777777777
6666667777777777
6666677777777777
6666677777777777
6666777777777777
6677777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [b, bitmap`
7777777777666666
7777777777666666
7777777777766666
7777777777766666
7777777777776666
7777777777777766
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [c, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
6677777777777777
6666777777777777
6666677777777777
6666677777777777
6666667777777777
6666667777777777`],
  [d, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777766
7777777777776666
7777777777766666
7777777777766666
7777777777666666
7777777777666666`],
);

const k = map`
.dbbbbbr.
nx.....tl
o.9...9.c
o.1.9.2.c
o.9...9.c
am.....zi
.yuuuuup.`;
setMap(k);

setSolids([player1, player2]);

let playback = playTune(play1, Infinity);

setBackground(fillBlue);

setPushables({
  [player1]: [player2],
  [player2]: [player1]
});

onInput("w", () => {
  if (v == 0) getFirst(player1).y -= 1;
});
onInput("s", () => {
  if (v == 0) getFirst(player1).y += 1;
});
onInput("a", () => {
  if (v == 0) getFirst(player1).x -= 1;
});
onInput("d", () => {
  if (v == 0) getFirst(player1).x += 1;
});

onInput("i", () => {
  // reset the game if the game is over
  if (v == 1) {
    clearText();
    setMap(k);
    v = 0;
    playback = playTune(play1, Infinity);
    return;
  }
  getFirst(player2).y -= 1
});
onInput("k", () => {
  if (v == 0) getFirst(player2).y += 1;
});
onInput("j", () => {
  if (v == 0) getFirst(player2).x -= 1;
});
onInput("l", () => {
  if (v == 0) getFirst(player2).x += 1;
});

// winning logic
afterInput(() => {
  // player 1 is out of the stadium
  if (getFirst(player1).x == 0 || getFirst(player1).x == 8 || getFirst(player1).y == 0 || getFirst(player1).y == 6) {
    addText("Player2 wins", {
      x: 4,
      y: 7,
      color: color`5`,
    });
    addText("Press i to restart", {
      x: 1,
      y: 9,
      color: color`C`,
    });
    v = 1;
    playback.end();
  }
  // player 2 is out of the stadium
  if (getFirst(player2).x == 0 || getFirst(player2).x == 8 || getFirst(player2).y == 0 || getFirst(player2).y == 6) {
    addText("Player1 Wins", {
      x: 4,
      y: 7,
      color: color`5`
    });
    addText("Press i to restart", {
      x: 1,
      y: 9,
      color: color`C`,
    });
    v = 1;
    playback.end();
  }
});
