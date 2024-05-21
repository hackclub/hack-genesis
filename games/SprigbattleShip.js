/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started
@title: SprigbattleShip
@author: Legonathanjereb
@tags: ["classic"]
@img: ""
@addedOn: 2024-04-26
*/

// based on battleship

//WASD (left side) to move and L (the button to the right on the right side) to place shipts and attack on specifyed spaces

//17 ships (I dont know how to line them up like in real battleship so this is the next best thing)
//10x10 board (A-I)x(1-10)

const player = "p"
const c1 = "1"
const c2 = "2"
const c3 = "3"
const c4 = "4"
const c5 = "5"
const c6 = "6"
const c7 = "7"
const c8 = "8"
const c9 = "9"
const c10 = "0"
const rA = "q"
const rB = "w"
const rC = "e"
const rD = "r"
const rE = "t"
const rF = "y"
const rG = "u"
const rH = "i"
const rI = "o"
const background = "a"
const extrabackground = "s"
const ship = "d"
const miss = "f"
const hit = "g"
const emiss = "j"
const eposition = "k"
const eattack = "l"

setLegend(
  [player, bitmap`
55555......55555
5777........7775
57............75
57............75
5..............5
................
................
................
................
................
................
5..............5
57............75
57............75
5777........7775
55555......55555` ],
  [c1, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLL0000LLLLLL1
1LL000000LLLLLL1
1LL000L00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1L000000000000L1
1L000000000000L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c2, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLL00000LLLLL1
1LLL0000000LLLL1
1LL000LLL000LLL1
1L000LLLLL000LL1
1LLLLLLLL000LLL1
1LLLLLLL000LLLL1
1LLLLLL000LLLLL1
1LLLLL000LLLLLL1
1LLL0000LLLLLLL1
1LL00000LLLLLLL1
1L000000000000L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c3, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLL00000LLLLL1
1LLL0000000LLLL1
1LLLLLLL0000LLL1
1LLLLLLLL000LLL1
1LLLLLLL0000LLL1
1LLLL000000LLLL1
1LLLL000000LLLL1
1LLLLLLL0000LLL1
1LLLLLLLL000LLL1
1LLLLLLL0000LLL1
1LLL0000000LLLL1
1LLLL00000LLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c4, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLLL00LLLLLL1
1LLLLL000LLLLLL1
1LLLL0000LLLLLL1
1LLL00L00LLLLLL1
1LL00LL00LLLLLL1
1L00LLL00LLLLLL1
1L000000000000L1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c5, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1L000000000000L1
1L000000000000L1
1L00LLLLLLLLLLL1
1L00LLLLLLLLLLL1
1L000LLLLLLLLLL1
1LL0000LLLLLLLL1
1LLL00000000LLL1
1LLLL00000000LL1
1LLLLLLLLLLL00L1
1L00LLLLLLLL00L1
1L00000000000LL1
1LL000000000LLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c6, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLL00000LLLLL1
1LLL0000000LLLL1
1LL000LLLLLLLLL1
1L000LLLLLLLLLL1
1L00LLLLLLLLLLL1
1L0000000000LLL1
1L000LLLLLL00LL1
1L00LLLLLLLL0LL1
1L00LLLLLLLL0LL1
1L000LLLLLL00LL1
1LL000LLLL00LLL1
1LLL0000000LLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c7, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1L000000000000L1
1L000000000000L1
1LLLLLLLLLL000L1
1LLLLLLLLL000LL1
1LLLLLLLL000LLL1
1LLLLLLL000LLLL1
1LLLLLL000LLLLL1
1LLLLL000LLLLLL1
1LLLL000LLLLLLL1
1LLL000LLLLLLLL1
1LL000LLLLLLLLL1
1L000LLLLLLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c8, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLL000000LLLL1
1LLL00000000LLL1
1LL00LLLLLL00LL1
1LL0LLLLLLLL0LL1
1LL00LLLLLL00LL1
1LLL00000000LLL1
1LLL00000000LLL1
1LL00LLLLLL00LL1
1LL0LLLLLLLL0LL1
1LL00LLLLLL00LL1
1LLL00000000LLL1
1LLLL000000LLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c9, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLL000000LLLL1
1LLL00LLLL00LLL1
1LLL0LLLLLL0LLL1
1LLL0LLLLLL0LLL1
1LLL00LLLL00LLL1
1LLLL0000000LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLL00LLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [c10, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL00LLL0000LLL1
1LL00LL000000LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL00LL00LL1
1LL00LL000000LL1
1LL00LLL0000LLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rA, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLLL00LLLLLL1
1LLLLL0000LLLLL1
1LLLL00LL00LLLL1
1LLLL0LLLL0LLLL1
1LLL00LLLL00LLL1
1LLL00LLLL00LLL1
1LL0000000000LL1
1LL0000000000LL1
1LL00LLLLLL00LL1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rB, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL0000LLLLLLLL1
1LL000000LLLLLL1
1LL00LLL00LLLLL1
1LL00LLLL00LLLL1
1LL00LLLL00LLLL1
1LL0000000LLLLL1
1LL00000000LLLL1
1LL00LLLLL00LLL1
1LL00LLLLLL00LL1
1LL00LLLLLL00LL1
1LL000000000LLL1
1LL00000000LLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rC, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLL00000000L1
1LLLL000000000L1
1LLL0000LLLLLLL1
1LL000LLLLLLLLL1
1L000LLLLLLLLLL1
1L00LLLLLLLLLLL1
1L00LLLLLLLLLLL1
1L000LLLLLLLLLL1
1LL000LLLLLLLLL1
1LLL0000LLLLLLL1
1LLLL000000000L1
1LLLLL00000000L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rD, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL00000LLLLLLL1
1LL0000000LLLLL1
1LL00LLL000LLLL1
1LL00LLLL000LLL1
1LL00LLLLL000LL1
1LL00LLLLLL00LL1
1LL00LLLLLL00LL1
1LL00LLLLL000LL1
1LL00LLLL000LLL1
1LL00LLL000LLLL1
1LL0000000LLLLL1
1LL00000LLLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rE, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL0000000000LL1
1LL0000000000LL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL0000000000LL1
1LL0000000000LL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL0000000000LL1
1LL0000000000LL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rF, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL0000000000LL1
1LL0000000000LL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL0000000000LL1
1LL0000000000LL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LL00LLLLLLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rG, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LL0000000000LL1
1L000000000000L1
1L00LLLLLLLL00L1
1L00LLLLLLLLLLL1
1L00LLLLLLLLLLL1
1L00LLL000000LL1
1L00LLL000000LL1
1L00LLLLLLL00LL1
1L00LLLLLLL00LL1
1L00LLLLLLL00LL1
1L00000000000LL1
1LL000000000LLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rH, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L000000000000L1
1L000000000000L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1L00LLLLLLLL00L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [rI, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1L000000000000L1
1L000000000000L1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1LLLLLL00LLLLLL1
1L000000000000L1
1L000000000000L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [background, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [extrabackground, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ship, bitmap`
................
................
.......1333.....
.......13333....
.......1........
.......1........
.......1........
.....11111111...
....11LL111111..
....11LL1L1L111.
....11111111111.
1111111111111111
.111111111111111
..11L11L11L11L11
...111111111111.
....11111111111.`],
  [miss, bitmap`
................
...2222222222...
..222222222222..
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
.22222222222222.
..222222222222..
...2222222222...
................`],
  [hit, bitmap`
33............33
333..........333
.333........333.
..333......333..
...333....333...
....333..333....
.....333333.....
......3333......
......3333......
.....333333.....
....333..333....
...333....333...
..333......333..
.333........333.
333..........333
33............33`],
  [emiss, bitmap`
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
................`], //leave blank for actual run
  [eposition, bitmap`
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
................`], //leave blank for actual run
  [eattack, bitmap`
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
................`]
)
setBackground(background);

setSolids([])
//player spaces 
// y 13 - 21 
// x 1 - 10

//enemy spaces
// y 2 - 11
// x 1 - 10

let level = 0
const levels = [
  map`
sssssssssss
s1234567890
q..........
w..........
e..........
r..........
t..........
y..........
u..........
i..........
o..........
sssssssssss
s1234567890
qp.........
w..........
e..........
r..........
t..........
y..........
u..........
i..........
o..........`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  moveUP()
})
onInput("d", () => {
  moveRP()
})
onInput("a", () => {
  moveLP()
})
onInput("s", () => {
  moveDP()
})
onInput("l", () => {
  placeAttack()
})

//player movement when placing ships
function moveRP(){
  getFirst(player).x += 1;
}
function moveLP(){
  getFirst(player).x -= 1;
  if(getFirst(player).x < 1){
    getFirst(player).x = 10;
  }
}

function moveUP(){
    getFirst(player).y -= 1;
    if(getFirst(player).y < 13 && getFirst(player).y >= 11){
      getFirst(player).y = 21;
  }else if(getFirst(player).y < 2){
      getFirst(player).y = 10;
  }
}

function moveDP(){
  getFirst(player).y += 1;
  if(getFirst(player).y > 10 && getFirst(player) <= 11){
    getFirst(player).y = 2;
  }
}

//places player ships/attacks
var ships = 17;
function placeAttack(){
  var x = getFirst(player).x;
  var y = getFirst(player).y;
  if(ships > 0 && getAll(ship).x != x && getAll(ship).y != y){
    ships -= 1;
    addSprite(x,y, ship)
  }
  if(ships == 0 && getFirst(player).y >= 12){
    getFirst(player).x = 1;
    getFirst(player).y = 2;
    for(var i = 0; i < 16; i++){
      let xe = Math.floor(Math.random() * 10 + 1);
      let ye = Math.floor(Math.random() * 10 + 2);
      addSprite(xe, ye, eposition);
    }
  }else if(getFirst(player).y < 11){
    var xp = getFirst(player).x;
    var yp = getFirst(player).y;
    if(tilesWith(player, eposition).length > 0){
      clearTile(xp, yp);
      addSprite(xp, yp, player);
      addSprite(xp, yp, hit);
    }else{
      addSprite(xp, yp, miss);
    }
  }
  if(getFirst(player).y < 11){
    var ex = Math.floor(Math.random() * 10 + 1);
    var ey = Math.floor(Math.random() * 9 + 13);
    addSprite(ex, ey, eattack);
    if(tilesWith(eattack, ship).length > 0){
      clearTile(ex, ey);
      addSprite(ex, ey, hit);
    }else{
      addSprite(ex, ey, emiss);
    }
  }
  //win condition
  if(tilesWith(eposition).length <= 0 && ships == 0){
    addText("YOU WIN!", {
      x: 6,
      y: 8,
      color: color`7`
    })
  }else if(tilesWith(ship).length == 0){
    addText("COMPUTER WINS!", {
      x: 6,
      y: 8,
      color: color`3`
    })
  }
}
