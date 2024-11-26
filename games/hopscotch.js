/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: hopscotch
@author: brycen weeks
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const rope = "s"
const deco1 = "d"
const deco2 = "f"
const deco3 = "j"
const deco4 = "x"
const spike = "v"
const jump = "u"
const torch1 = "o"
const torch2 = "n"
const particles = "r"
const splosion = "k"

let speed = 500
let score = 0
let level = 0
let jumping = false
let running = true

setLegend(
  [player, bitmap`
................
..............3.
..3...........3.
..3..........3..
...3...333..3...
....3.3...3.3...
....33...0.33...
....3.0....3....
....3....0.3....
....3.000..3....
.....3....3.....
......3333......
......3..3......
......3..3......
......3..3......
....333..333....`],
  [rope, bitmap`
.3............3.
323..........323
333..........333
333..........333
.3............3.
.L............L.
.L............L.
.L...........L..
.L...........L..
..L..........L..
..LL........LL..
...L........L...
....L......L....
.....LLLLLL.....
................
................`],
  [deco1, bitmap`
................
00..............
10..............
10..............
100.............
1100............
11L00...........
11L100..........
1L11100.........
L1111D000.......
L11DD11L000.....
LLDD111L1100....
11LD111L1110....
111D111L1110....
11DDL11LL110....
11D1L111L110....`],
  [deco2, bitmap`
LLDLLLLLLL10....
11D111L11110....
11DL11L11110....
1DDL1DD11110....
1D1LD1DDDDD0....
DD1DL11L1110....
D11DD11L1110....
1111D111L110....
1111D111L110....
1111DL111L100...
1111DL111L1100..
D1DDD11111L1100.
1DDL111111L1110.
111L111111L1110.
11L111111L111100
1L1111111L111110`],
  [deco3, bitmap`
................
................
........000000..
.......001111000
......00L1111111
......01LL111DDD
......011LLDDD11
......0DDDDL1111
......011111L111
......0D11111L11
......0D11111L11
.....001D1111L11
.....0111DDD1L11
.....011111DDDDD
....00111111L111
....01111111L111`],
  [deco4, bitmap `
....01111111L111
....01111111L111
....0DDD1111L111
....0111D111L111
....0111D111L111
....011DD11L1111
...0011D1DDL1111
...0111D11LDDDDD
..00111DLLL11111
..01111DL1L11111
..0111LD11L11111
..011LLD111L1111
.0011L1D111L1111
.011LL1DD11LLL11
0011L111D11111LL
00111L11DD11111L`],
  [spike, bitmap `
................
................
................
................
................
................
................
................
................
..0...0...0...0.
..0...0...0...0.
.0L0.010.0L0.010
.0L0.010.0L0.010
.0L0.010.0L0.010
0LLL01110LLL0111
0LLL01110LLL0111`],
  [jump, bitmap `
333333..........
....3..33.3.....
....3..3.3.3....
3..33..3.3.3....
33.3...3...3....
.33........3....
....9..9........
....9..9....9999
....9..9...99..9
....9..9...9...9
.....999..9...99
......99..9..99.
..........999...
..........9.....
..........9.....
................`],
  [torch2, bitmap`
................
...........3..3.
.........3.3.33.
.........3.3.33.
.........393339.
.........399999.
..........66693.
...........CCC..
...........CCC..
...........CCC..
...........CCC..
...........CCC..
...........CCC..
...........CCC..
...........CCC..
...........CCC..`],
  [torch1, bitmap `
....3333........
....393333......
....3969993.....
....3966693.....
.....6666.......
.....CCCC.......
....CCCCC.......
...CCCCC........
CCCCCCC.........
CCCCCC..........
CCCCC...........
................
................
................
................
................`],
  [particles, bitmap `
................
................
.....1.......1..
.....1.......1..
.....1.......1..
.....1.......1..
.....1.......1..
.....1.......1..
.1...1...1...1..
.1...1...1...1..
.1...1...1...1..
.1...1...1......
.1.......1......
.1.......1......
.1.......1......
.1..............`],
  [splosion, bitmap `
................
................
.....3..33......
.....33333......
..333333333333..
..333333333333..
..333399933333..
..33999999933...
..339996999333..
33339966699993..
333399966699933.
33333399999933..
..3333339933....
......333333....
......33333.....
................`]

)

setSolids([])

const levels = [
  map`
..s..
o....
.....
d.p.j
fvvvx`,
  map`
..r..
o.s..
.....
d.p.j
fvvvx`,
  map`
..r..
o.r..
..s..
d.p.j
fvvvx`,
  map`
..r..
o.r..
..r..
d.p.j
fvvvx`,
  map`
.....
o....
.....
d.p.j
fvvvx`
]

function updateScoreText() {
  clearText() // Clear previous score text
  addText(`Score: ${score}`, { x: 1, y: 1, color: color`3` }) // Display updated score
}

setMap(levels[level])

setPushables({
  [player]: []
})

onInput("s", () => {
  if (!jumping) {
    getFirst(player).y -= 1;
    jumping = true;
    setTimeout(() => {
      setTimeout(() => {
        jumping = false; // Reset jumping flag after the jump is completed
      }, speed);
    }, speed);
  }
});

setInterval(() => {
  if (running) {
    setMap(levels[level])
    level = (level + 1) % levels.length
    if (level == 4 && !jumping) {
      speed = 1000000000000000
      clearText()
      addText(`You lost! ${score}`, { x: 1, y: 1, color: color`4` })
      running = false
    } else if (level == 4) {
      // score
      addText(`Press S to Jump`, { x: 1, y: 6, color: color`H` })
      score++
      updateScoreText()
      speed -= 1
    }
  }
}, speed);

updateScoreText()

afterInput(() => {

})