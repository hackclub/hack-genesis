/*
@title: osu-mania
@author: Alex Park
@tags: ['']
@img: ""
@addedOn: 2023-01-01
*/

/*
A game similar to osu! Mania or Piano Tiles

--How to play--
Hit the notes on time to the beat when they cross the red bar.
Controls: a,d,j,l corresponding to the keys going left to right.
*/

/*
==========================================================
customize the following to make any song/level you imagine
==========================================================
*/

// the first 4 pixels from the left side represent the notes
// individual notes are read bottom to top, beatmaps are read in array order
const beatmaps = [
  bitmap`
................
................
................
................
.0..............
0...............
.0..............
..0.............
...0............
0.0.............
.0.0............
0.0.............
...0............
..0.............
.0..............
0...............`,
  bitmap`
................
................
................
................
................
................
................
................
................
.0..............
0...............
.0..............
..0.............
0...............
..0.............
0...............`,
  bitmap`
.0..............
..0.............
.0..............
0...............
..0.............
.0..............
0...............
.0..............
.0..............
0...............
.0..............
..0.............
...0............
..0.............
.0..............
0...............`,
  bitmap`
..0.............
...0............
.0..............
0...............
................
................
...0............
................
...0............
................
...0............
...0............
..0.............
.0..............
0...............
.0..............`,
  bitmap`
................
..0.............
...0............
0...............
.0..............
................
0000............
................
0000............
................
.0..............
0...............
..0.............
...0............
.0..............
0...............`,
  bitmap`
..0.............
.0..............
0..0............
..0.............
.0..............
0...............
................
.0.0............
0.0.............
.0.0............
0.0.............
................
.00.............
.00.............
.00.............
0...............`,
  bitmap`
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
................
................
................
................
...0............`
];

const note = "n";
const bar = "b";
const amogus = "a"

setLegend(
  [ note, bitmap`
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
  [ bar, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [ amogus, bitmap`
7777777777777777
7...333333333..7
7...333333333..7
7...333333333..7
7999333........7
7999333........7
7999333333333..7
7999333333333..7
7999333333333..7
7...333333333..7
7...333333333..7
7...333333333..7
7...333...333..7
7...333...333..7
7...333...333..7
7777777777777777`]
)

const maniaMap = map`
....
....
....
....
....
....
....
....
....
....
....`
setMap(maniaMap);

const barHeight = 9;

// initialize bottom bar
function initializeBottomBar() {
  for (let i=0;i<=3;i++) {
    addSprite(i, barHeight, "b");
  }
}
initializeBottomBar();

let score = 0;

function updateScoreText() {
  clearText();
  addText(score.toString(), { 
    x: 8,
    y: 1,
    color: color`5`
  });
}
updateScoreText();

setSolids([bar]);

function clearNote(x) {
  // clear a space 1 unit above and below the bar
  for (let y=barHeight-1;y<=barHeight+1;y++) {
      const tile = getTile(x, y);
      if (tile == undefined) continue;
      // check if a note was present
      tile.forEach((sprite) => {
        if (sprite.type == "n" || sprite.type == "a") {
          // 1 point for 1 unit below or above, 2 points for hitting the note on time
          if (sprite.y == barHeight-1 || sprite.y == barHeight+1) {
            score+=1;
          } else {
            score+=2;
          }
        }
        updateScoreText();
      });
      clearTile(x, y);
  }
  // regenerate deleted part of bar
  initializeBottomBar();
}

// map inputs to hitting notes
onInput("a", () => {
  clearNote(0);
});
onInput("d", () => {
  clearNote(1);
});
onInput("j", () => {
  clearNote(2);
});
onInput("l", () => {
  clearNote(3);
});

function placeRowOfNotes(beatmapNum, row) {
  if (beatmapNum >= beatmaps.length || row > 15) return;
  const beatmap = beatmaps[beatmapNum];
  let notes = beatmap.split("\n");
  notes.reverse();
  // console.log(notes);
  for (let noteIndex=0;noteIndex<4;noteIndex++) {
    if (notes[row].charAt(noteIndex) == "0") {
      // random chance to spawn in an Amogus instead of normal note sprite
      addSprite(noteIndex, 0, Math.floor(Math.random() * 100) > 95 ? "a" : "n");
    }
  }
}

let btmp = 0
let row = 0;
// loop() function
setInterval(() => {
  // spawn in new notes
  placeRowOfNotes(btmp, row);
  if (row == 15) {
    btmp++;
    row=0;
  } else {
    row++;
  }
 
  // move down all notes
  getAll("n").forEach((note) => {
    // delete tiles which have hit the bottom
    if (note.y == barHeight+1) {
      clearTile(note.x, note.y);
    }
    note.y += 1;
  });
  getAll("a").forEach((note) => {
    // delete tiles which have hit the bottom
    if (note.y == barHeight+1) {
      clearTile(note.x, note.y);
    }
    note.y += 1;
  });
}, 225);

// Music
let tracks = [
tune`
1428.5705,
102.04075000000002: G5^96.08837291666661,
102.04075000000002: A5^96.08837291666661,
408.16299999999984: B5^386.9045104166668,
408.16300000000007: E5^386.90451041666705,
408.16300000000007: F#5^386.90451041666705,
204.08150000000003: B5^193.02708541666647,
408.16300000000007: E5^193.02708541666647,
1428.5704999999998: D6^193.02708541666647,
408.16300000000007: B5^386.90451041666665,
408.16300000000007: E5^386.90451041666665,
408.16300000000007: F#5^386.90451041666665,
204.08150000000003: E5^193.02708541666647,
1836.7334999999994: B4^193.02708541666647,
204.08150000000091: B3^193.02708541666647,
204.08149999999915: A3^193.02708541666647,
204.08150000000091: B3^193.02708541666647,
204.08149999999915: E4^193.02708541666647,
408.16300000000007: F#4^193.02708541666647,
204.08150000000091: B3^193.02708541666647,
204.08149999999915: E4^193.02708541666647,
408.16300000000007: F#4^193.02708541666647,
204.08150000000091: B3^193.02708541666647,
204.08149999999915: F#4^193.02708541666647,
408.16300000000007: G4^193.02708541666647,
204.08150000000091: B3^193.02708541666647,
204.08149999999915: B4^193.02708541666647,
408.16300000000007: A4^193.02708541666647,
408.16300000000007: G4^193.02708541666647,
204.08150000000091: F#4^203.23116041666543,
102.04074999999868: G4^101.19041041666499,
102.04075000000046: F#4^96.08837291666639,
204.08150000000091: E4^193.02708541666647,
408.1629999999983: D5^193.02708541666647,
204.08150000000091: D5^193.02708541666823,
204.08149999999915: D5^193.02708541666823,
408.16300000000007: D5^193.02708541666823,
204.08150000000091: B4^193.02708541666823,
408.16300000000007: B4^386.90451041666483,
204.08149999999915: B3^193.02708541666823,
204.08150000000091: A3^193.02708541666823,
204.08149999999915: B3^193.02708541666823,
204.08150000000091: E4^193.02708541666823,
408.16300000000007: F#4^193.02708541666823,
204.08150000000091: B3^193.02708541666647,
204.08149999999736: E4^193.02708541666647,
408.16300000000183: F#4^193.02708541667002,
204.08150000000091: B3^193.02708541666647,
204.08149999999736: F#4^193.02708541666647,
408.16300000000183: G4^193.02708541667002,
204.08150000000091: D5^193.02708541666647,
408.1629999999983: B4^193.02708541666647,
204.08150000000091: B4^193.02708541666647,
408.1629999999983: A4^193.02708541666647,
204.08150000000091: G4^193.02708541667002,
408.16300000000183: F#4^193.02708541666647,
204.08149999999736: E4^193.02708541666647,
408.16300000000183: F#4^193.02708541667002,
408.1629999999983: F#4^193.02708541666647,
204.08150000000091: F#4^193.02708541667002,
204.08150000000091: E4^193.02708541666647,
408.1629999999983: E4^193.02708541666647,
0: B3^193.02708541667002,
204.08150000000091: F#4^193.02708541667002,
0: A3^193.02708541666647,
204.08150000000091: E4^193.02708541666647,
0: B3^193.02708541666647,
204.08149999999736: F#4^193.02708541666647,
0: E4^193.02708541667002,
204.08150000000091: A4^193.02708541667002,
0: F#4^193.02708541667002,
408.16300000000183: B4^193.02708541667002,
0: B3^193.02708541666647,
204.08149999999736: E4^193.02708541666647,
0: E4^193.02708541667002,
204.08150000000091: A4^193.02708541667002,
0: F#4^193.02708541667002,
408.16300000000183: B4^193.02708541667002,
`,
];

setTimeout(() => {
  tracks.forEach((e) => playTune(e));
}, 825)
