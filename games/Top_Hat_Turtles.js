
// Top Hat Turtles!
// Use W,A,S,D and I,J,K,L keys to play (Two players required!)
// Get each turtle to its respective Top Hat Totem and get to the next level!
// (Hint! Each turtle's hat corresponds to it's totem!)

/*
@title: Top_Hat_Turtles
@author: Dreck Yam
@img: ""
@tags: ['multiplayer', 'cooperative']
@addedOn: 2024-05-29
*/

const melody = tune`
176.47058823529412: G4-176.47058823529412 + C4^176.47058823529412,
176.47058823529412: G4-176.47058823529412,
176.47058823529412: G4-176.47058823529412 + D4^176.47058823529412,
176.47058823529412: G4-176.47058823529412,
176.47058823529412: A4-176.47058823529412 + C4^176.47058823529412,
176.47058823529412: D5-176.47058823529412 + G5~176.47058823529412,
176.47058823529412: B4-176.47058823529412 + D4^176.47058823529412 + F5~176.47058823529412,
176.47058823529412: G4-176.47058823529412 + E5~176.47058823529412,
176.47058823529412: A4-176.47058823529412 + C4^176.47058823529412 + D5~176.47058823529412,
176.47058823529412: A4-176.47058823529412 + C5~176.47058823529412,
176.47058823529412: A4-176.47058823529412 + D4^176.47058823529412,
176.47058823529412: A4-176.47058823529412,
176.47058823529412: F4-176.47058823529412 + C4^176.47058823529412,
176.47058823529412: A4-176.47058823529412,
176.47058823529412: G4-176.47058823529412 + D4^176.47058823529412,
176.47058823529412: D4-176.47058823529412,
176.47058823529412: G4-176.47058823529412 + C4^176.47058823529412,
176.47058823529412: G4-176.47058823529412,
176.47058823529412: G4-176.47058823529412 + D4^176.47058823529412,
176.47058823529412: G4-176.47058823529412,
176.47058823529412: A4-176.47058823529412 + C4^176.47058823529412,
176.47058823529412: D5-176.47058823529412,
176.47058823529412: B4-176.47058823529412 + D4^176.47058823529412,
176.47058823529412: G4-176.47058823529412,
176.47058823529412: C4^176.47058823529412 + D5-176.47058823529412 + G5~176.47058823529412 + A4~176.47058823529412,
176.47058823529412,
176.47058823529412: B4-176.47058823529412 + D4^176.47058823529412 + E5~176.47058823529412 + F4~176.47058823529412,
176.47058823529412,
176.47058823529412: A4-176.47058823529412 + C4^176.47058823529412 + D5~176.47058823529412 + E4~176.47058823529412,
176.47058823529412: G4-176.47058823529412 + C5~176.47058823529412 + D4~176.47058823529412,
176.47058823529412: D4^176.47058823529412,
176.47058823529412`
addText("Press S to Start", {
  x: 2,
  y: 2,
  color: color`2`
  })

onInput("s", () => {
  clearText()
})
const player = "p"
const player2 = "q"
const wall = "w"
const filler = "f"
const background = "b"
const playergoal = "g"
const player2goal = "h"

const playback = playTune(melody, Infinity)

setLegend(
  [ player, bitmap`
................
................
................
................
...........000..
...........000..
...........000..
...0000000.333..
..0DDDDDD000000.
.0DDDDDDDD044440
0DDDDDDDDDD02040
0DDDDDDDDDD0440.
00000000000000..
.04040.04040....
.04040.04040....
.00000.00000....` ],
  [ player2, bitmap`
................
................
................
................
..000...........
..000...........
..000...........
..777.0000000...
.000000DDDDDD0..
044440DDDDDDDD0.
04020DDDDDDDDDD0
.0440DDDDDDDDDD0
..00000000000000
....04040.04040.
....04040.04040.
....00000.00000.` ],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL1111LLLLL1L
L1LL111111L11L1L
L1L1111111111L1L
L1L111111111LL1L
L1LL1L1L1L1LLL1L
L1LL1L1L1L1LLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ],
  [ filler, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000LLLL00000L0
0L00LLLLLL0LL0L0
0L0LLLLLLLLLL0L0
0L0LLLLLLLLL00L0
0L00L0L0L0L000L0
0L00L0L0L0L000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000` ],
  [ background, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ],
  [ playergoal, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL111111LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LL11333311LL1L
L1LL10000001LL1L
L1LL11111111LL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ],
  [ player2goal, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL111111LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LL11777711LL1L
L1LL10000001LL1L
L1LL11111111LL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ]
)
setBackground(background)
setSolids([ player, player2, filler, wall])

let level = 0
const levels = [
  map`
wwwwwwwwwf
hp......wf
wwwwwww.wf
fw....w.wf
fw.w....wf
fw.wwwwwww
fw......qg
fwwwwwwwww`,
  map`
ffffffwwww
wwwwwww.qg
w.....w.ww
w.www.w..w
w...w.ww.w
www.w....w
hp..w..www
wwwwwwwwff`,
  map`
fwwwffffff
ww.wwwwwww
w...ww...w
hpw.ww.wqg
ww..ww..ww
fw.wwww.wf
fw......wf
fwwwwwwwwf`,
  map`
ffwwwwwwww
ffw....w.w
www.ww...w
hpwqgwww.w
w.wwww...w
w....w.www
wwww...wff
fffwwwwwff`,
  map`
wwwwwwffff
hpww.wwwww
w..w.....w
ww.w.www.w
w..w.w...w
w.ww.w.www
w....w..qg
wwwwwwwwww`
]
setMap(levels[level])

onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
  setLegend(
  [ player, bitmap`
................
................
................
................
..000...........
..000...........
..000...........
..333.0000000...
.000000DDDDDD0..
044440DDDDDDDD0.
04020DDDDDDDDDD0
.0440DDDDDDDDDD0
..00000000000000
....04040.04040.
....04040.04040.
....00000.00000.` ]
) 
})
onInput("s", () => {
  getFirst(player).y += 1
})
onInput("d", () => {
  getFirst(player).x += 1
  setLegend(
  [ player, bitmap`
................
................
................
................
...........000..
...........000..
...........000..
...0000000.333..
..0DDDDDD000000.
.0DDDDDDDD044440
0DDDDDDDDDD02040
0DDDDDDDDDD0440.
00000000000000..
.04040.04040....
.04040.04040....
.00000.00000....` ]
) 
})

onInput("i", () => {
  getFirst(player2).y -= 1
})
onInput("j", () => {
  getFirst(player2).x -= 1
  setLegend(
  [ player2, bitmap`
................
................
................
................
..000...........
..000...........
..000...........
..777.0000000...
.000000DDDDDD0..
044440DDDDDDDD0.
04020DDDDDDDDDD0
.0440DDDDDDDDDD0
..00000000000000
....04040.04040.
....04040.04040.
....00000.00000.` ]
)
})
onInput("k", () => {
  getFirst(player2).y += 1
})
onInput("l", () => {
  getFirst(player2).x += 1
  setLegend(
  [ player2, bitmap`
................
................
................
................
...........000..
...........000..
...........000..
...0000000.777..
..0DDDDDD000000.
.0DDDDDDDD044440
0DDDDDDDDDD02040
0DDDDDDDDDD0440.
00000000000000..
.04040.04040....
.04040.04040....
.00000.00000....` ]
)
})

afterInput(() => {
  const player_win = tilesWith(player, playergoal).length;
  const player_goal = tilesWith(playergoal).length;
  const player2_win = tilesWith(player2, player2goal).length;
  const player2_goal = tilesWith(player2goal).length;

  if (player_win === player_goal) {
    if (player2_win === player2_goal) {
      level = level + 1

setLegend(
  [ player, bitmap`
................
................
................
................
...........000..
...........000..
...........000..
...0000000.333..
..0DDDDDD000000.
.0DDDDDDDD044440
0DDDDDDDDDD02040
0DDDDDDDDDD0440.
00000000000000..
.04040.04040....
.04040.04040....
.00000.00000....` ],
  [ player2, bitmap`
................
................
................
................
..000...........
..000...........
..000...........
..777.0000000...
.000000DDDDDD0..
044440DDDDDDDD0.
04020DDDDDDDDDD0
.0440DDDDDDDDDD0
..00000000000000
....04040.04040.
....04040.04040.
....00000.00000.` ],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL1111LLLLL1L
L1LL111111L11L1L
L1L1111111111L1L
L1L111111111LL1L
L1LL1L1L1L1LLL1L
L1LL1L1L1L1LLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ],
  [ filler, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000LLLL00000L0
0L00LLLLLL0LL0L0
0L0LLLLLLLLLL0L0
0L0LLLLLLLLL00L0
0L00L0L0L0L000L0
0L00L0L0L0L000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000` ],
  [ background, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ],
  [ playergoal, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL111111LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LL11333311LL1L
L1LL10000001LL1L
L1LL11111111LL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ],
  [ player2goal, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLL111111LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LLL100001LLL1L
L1LL11777711LL1L
L1LL10000001LL1L
L1LL11111111LL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL` ]
)
setBackground(background)
setSolids([ player, player2, filler, wall])
      
      if (level > 4) {
        addText("You Won!", {
          x:7,
          y:2,
          color:color`2`
        })
      } else {
        setMap(levels[level])
      }
    }
  }
})
