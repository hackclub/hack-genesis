/*
@title: hex_hubbub
@tags: ['thematic-puzzle']
@img: ""
@addedOn: 2023-01-28
@author: ajs256
*/

/*
Hex Hubbub is a game to practice converting hex to binary.
A hex number will show, and you use A, D, J, and L to flip the bits (the lights at the bottom).
Press I to submit - if you're right, the number will change. If you're wrong,
an L will appear and you need to restart.

Correctly convert all 16 digits to win!
*/

// https://en.wikipedia.org/wiki/Seven-segment_display#Characters
const aOff = 'a';
const aOn = 'A';
const bOff = 'b';
const bOn = 'B';
const cOff = 'c';
const cOn = 'C';
const dOff = "d";
const dOn = "D";
const eOff = "e";
const eOn = "E";
const fOff = "f";
const fOn = "F";
const gOff = "g";
const gOn = "G";

const bg = "z";

const bitOff = "0";
const bitOn = "1";

const lose = "L";
const win = "W";

var locked = false; // we'll set this when you lose or win


setLegend(
  [aOff, bitmap`
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
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [aOn, bitmap`
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
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [bOff, bitmap`
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000`],
  [bOn, bitmap`
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000`],
  [cOff, bitmap`
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000
LLLLLL0000000000`],
  [cOn, bitmap`
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000
3333330000000000`],
  [dOff, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
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
  [dOn, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
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
  [eOff, bitmap`
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL`],
  [eOn, bitmap`
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333`],
  [fOff, bitmap`
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL
0000000000LLLLLL`],
  [fOn, bitmap`
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333
0000000000333333`],
  [gOff, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
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
  [gOn, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
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
  [bitOff, bitmap`
................
....22222222....
...2200000022...
..200000000002..
.22000000000022.
.20000000000002.
.20000000000002.
.20000000000002.
.20000000000002.
.20000000000002.
.20000000000002.
.22000000000022.
..200000000002..
...2200000022...
....22222222....
................`],
  [bitOn, bitmap`
................
....22222222....
...2233333322...
..233333333332..
.22333333333322.
.23333333333332.
.23333333333332.
.23333333333332.
.23333333333332.
.23333333333332.
.23333333333332.
.22333333333322.
..233333333332..
...2233333322...
....22222222....
................`],
  [bg, bitmap`
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
  [lose, bitmap`
3333333333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322233333333333
3322222222222333
3322222222222333
3322222222222333
3333333333333333
3333333333333333`],
  [win, bitmap`
4444444444444444
4444444444444444
4224444444444224
4224444444444224
4224444444444224
4224442224444224
4224442224444224
4224422422444224
4224422422444224
4224422422444224
4224422422244224
4224224442244224
4222224442222224
4222224442222224
4444444444444444
4444444444444444`]
);

setBackground(bg);

setMap(map`
..aa..
.f..b.
.eggc.
..dd..
.0000.`);

var goals = new Array();
for (let i = 0; i < 16; i++) {
  goals[i] = i;
}

// https://stackoverflow.com/a/12646864
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(goals);

var goalI = 0;

var current = 0b0000;

function renderSegments(num) {
  let goal = goals[goalI];

  console.log(goal);
  
  // a: top
  clearTile(2, 0);
  clearTile(3, 0);
  if ([0, 2, 3, 5, 6, 7, 8, 9, 0xA, 0xC, 0xE, 0xF].includes(goal)) {
    addSprite(2, 0, aOn);
    addSprite(3, 0, aOn);
  } else {
    addSprite(2, 0, aOff);
    addSprite(3, 0, aOff);
  }

  // b: right top
  clearTile(4, 1);
  if ([0, 1, 2, 3, 4, 7, 8, 9, 0xA, 0xD].includes(goal)) {
    addSprite(4, 1, bOn);
  } else {
    addSprite(4, 1, bOff);
  }
  
  // c: right bottom
  clearTile(4, 2);

  if ([0, 1, 3, 4, 5, 6, 7, 8, 9, 0xA, 0xB, 0xD].includes(goal)) {
    addSprite(4, 2, cOn);
  } else {
    addSprite(4, 2, cOff);
  }
  

  // d: bottom
  clearTile(2, 3);
  clearTile(3, 3);

  if ([0, 2, 3, 5, 6, 8, 9, 0xB, 0xC, 0xD, 0xE].includes(goal)) {
    addSprite(2, 3, dOn);
    addSprite(3, 3, dOn);
  } else {
    addSprite(2, 3, dOff);
    addSprite(3, 3, dOff);
  }

  // e: left bottom
  clearTile(1, 2);

  if([0, 2, 6, 8, 0xA, 0xB, 0xC, 0xD, 0xE, 0xF].includes(goal)) {
    addSprite(1, 2, eOn);
  } else {
    addSprite(1, 2, eOff);
  }
  
  // f: left top
  clearTile(1, 1);
  if([0, 4, 5, 6, 8, 9, 0xA, 0xB, 0xC, 0xE, 0xF].includes(goal)) {
    addSprite(1, 1, fOn);
  } else {
    addSprite(1, 1, fOff);
  }

  // g: middle
  clearTile(2, 2);
  clearTile(3, 2);
  if([2, 3, 4, 5, 6, 8, 9, 0xA, 0xB, 0xD, 0xE, 0xF].includes(goal)) {
    addSprite(2, 2, gOn);
    addSprite(3, 2, gOn);
  } else {
    addSprite(2, 2, gOff);
    addSprite(3, 2, gOff);
  }
}

function checkLevel() {
  if (current == goals[goalI]) {
    goalI++;
    if (goalI == goals.length) {
      playTune(tune`
133.92857142857142: g4~133.92857142857142,
133.92857142857142: d5~133.92857142857142,
133.92857142857142: a5~133.92857142857142,
3883.928571428571`);
      addSprite(5, 0, win);
      locked = true;
    } else {
      playTune(tune`
133.92857142857142: g4~133.92857142857142,
133.92857142857142: d5~133.92857142857142,
4017.8571428571427`);
    }
  } else {
    // lose
          playTune(tune`
133.92857142857142: a5~133.92857142857142,
133.92857142857142: d5~133.92857142857142,
133.92857142857142: g4~133.92857142857142,
3883.928571428571`);
    addSprite(0, 0, lose);
    locked = true;
    
  } 
}

renderSegments();


onInput("a", () => {flip(0b1000)});

onInput("d", () => {flip(0b0100)});

onInput("j", () => {flip(0b0010)});

onInput("l", () => {flip(0b0001)});

onInput("i", () => {
  checkLevel();
});

function flip(num) {
  // use bitwise XOR to toggle bits
  if (!locked) {
    current = current ^ num;
  }
}


afterInput(() => {
  // render the indicators
  clearTile(1, 4);
  if (current & 0b1000) {
    addSprite(1, 4, bitOn);
  } else {
    addSprite(1, 4, bitOff);
  }

  clearTile(2, 4);
  if (current & 0b0100) {
    addSprite(2, 4, bitOn);
  } else {
    addSprite(2, 4, bitOff);
  }
  
  clearTile(3, 4);
  if (current & 0b0010) {
    addSprite(3, 4, bitOn);
  } else {
    addSprite(3, 4, bitOff);
  }

  clearTile(4, 4);
  if (current & 0b0001) {
    addSprite(4, 4, bitOn);
  } else {
    addSprite(4, 4, bitOff);
  }

  renderSegments();
  // TODO check if match w/ target

  
});
