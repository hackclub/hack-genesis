/*
@title: Worthless Clicker
@author: BasilE
@tags: []
@addedOn: 2024-10-22
*/

// It's a clicker game. you click. surely nothing could come of this.

const centerX = Math.floor(width() / 2);
const centerY = Math.floor(height() / 2);
const clickNoise = tune`
500,
500: B5-500,
15000`
const happyNoise = tune`
176.47058823529412,
176.47058823529412: F5-176.47058823529412,
176.47058823529412: G5-176.47058823529412,
176.47058823529412: A5-176.47058823529412,
4941.176470588235`
const music = tune`
166.66666666666666: G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666,
166.66666666666666: G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666,
166.66666666666666: G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666,
166.66666666666666: G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666,
166.66666666666666: E5/166.66666666666666 + C5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: D5/166.66666666666666 + F5/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + E5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + E5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + E5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: B4/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: E5/166.66666666666666 + C5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: B4/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: E5/166.66666666666666 + C5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: B4/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + A4/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: D5/166.66666666666666 + B4/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + A4/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: D5/166.66666666666666 + B4/166.66666666666666,
166.66666666666666: E5/166.66666666666666 + C5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: D5/166.66666666666666 + F5/166.66666666666666,
166.66666666666666: C5/166.66666666666666 + E5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666 + D5/166.66666666666666,
166.66666666666666: E5/166.66666666666666 + G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666,
166.66666666666666: G5/166.66666666666666 + C4-166.66666666666666,
166.66666666666666: F5/166.66666666666666` 
const button = 'b';
const button2 = 'c';
const bg = 'g';
const bgnscrn = 't';
const initscrn = 'w';
const pixel = 'px';
const beginbutton = 'h'
const levels = [bg, bgnscrn, initscrn];
var clicks = 0;
let lastClickTime = 0;
const clickCooldown = 200;

setLegend(
  [button, bitmap`
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
......33333.....
.....3333333....
.....0000000....
....0LLLLLLL0...
....000000000...
................`],
  [button2, bitmap`
................
................
................
................
................
................
................
........6.......
.....6..6..6....
......6...6.....
................
......33333.....
.....0000000....
....0LLLLLLL0...
....000000000...
................`],
  [initscrn, bitmap`
5000000000000005
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
0222222222222220
5022000000000005
0220555555555555
5005555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555`],
  [bg, bitmap`
1109011111109011
1109011111109011
1LLLLLLLLLLLLLL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LDDDDDDDDDDDDL1
1LLLLLLLLLLLLLL1
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
  [beginbutton, bitmap`
................
................
................
.77.............
7337............
73.37...........
73.LLLLLLLLLL...
73L4424442442L..
7L442424424244L.
.L442424422444L.
.L442424424244L.
..L4424442442L..
...LLLLLLLLLL...
................
................
................`],
  [bgnscrn, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
L330000000000000
LL33000000000000
LLL3300000000000
LLLL330000000000
LLLLL33000000000
LLLLLL0000000000
LLLLLLL000000000`]


);

function init_start() {
  setMap(levels[2])
  clearText()
  addText("Hey, could you", { x: centerX + 3, y: centerY + 2, color: `0` })
  addText("click this", { x: centerX + 3, y: centerY + 3, color: `0` })
  addText("500 times", { x: centerX + 3, y: centerY + 4, color: `0` })
  addText("please?", { x: centerX + 3, y: centerY + 5, color: `0` })
  addText("S- OK", { x: centerX + 7, y: centerY + 13, color: `4` })

  onInput("s", () => {
    main_loop()
  })
}

function start_screen() {
  setMap(levels[1])
  addText("Awesome Clicker", { x: centerX, y: centerY, color: color`2` });
  onInput("s", () => {
    init_start()
  });
}


function main_loop() {
  const playback = playTune(music, Infinity)
  setMap(levels[0])
  clearText();


  onInput("d", () => {

    const currentTime = Date.now();
    if (currentTime - lastClickTime >= clickCooldown) {
      let bspr = addSprite(0, 0, button);

      clicks += 1;
      playTune(clickNoise);
      lastClickTime = currentTime;
      clearText();

      addText(clicks.toString(), { x: centerX + 10, y: centerY + 6, color: color`4` });


    };
  });
  afterInput(() => {
    if (clicks == 500) {
      win_cond_reach()
    }
  });
}

function win_cond_reach() {
  playTune(happyNoise);
  console.log("WIN!");
  clearTile(0,0)
};


start_screen();
