/*
@title: type_or_die
@author: Jesse Blum (@jblum-coder)
@tags: []
@img: ""
@addedOn: 2024-01-23
*/



/*                          
   ____    ___    _   _   _____   ____     ___    _       ____  
  / ___|  / _ \  | \ | | |_   _| |  _ \   / _ \  | |     / ___| 
 | |     | | | | |  \| |   | |   | |_) | | | | | | |     \___ \ 
 | |___  | |_| | | |\  |   | |   |  _ <  | |_| | | |___   ___) |
  \____|  \___/  |_| \_|   |_|   |_| \_\  \___/  |_____| |____/ 
                                                                                                 
-------------------------------------------------------------------
Title Screen:
J to Start

In Game:
WASD for movement
J to select letter
K to delete letter

Game Over Screen:
J to reset
*/



/*
  _   _    ___   __        __    _____    ___      ____    _          _     __   __
 | | | |  / _ \  \ \      / /   |_   _|  / _ \    |  _ \  | |        / \    \ \ / /
 | |_| | | | | |  \ \ /\ / /      | |   | | | |   | |_) | | |       / _ \    \ V / 
 |  _  | | |_| |   \ V  V /       | |   | |_| |   |  __/  | |___   / ___ \    | |  
 |_| |_|  \___/     \_/\_/        |_|    \___/    |_|     |_____| /_/   \_\   |_|  
                                                                                  
The objective of the game is to type out the word on screen by moving the cursor around.
But, you have to type it out before the timer runs out, or you lose.
Try to get the highest score you can.
Each word is 3 letters long, but there are some 4 letter words, so be fast.
*/



// variables //
let points = 0
let maxTime = 15
let timeLeft = maxTime
let fps = 800
const maps = {
  gameMap:map`
............
............
.abcdefghij.
.klmnopqrst.
.uvwxyzP....
............
............
............`,
  titleMap:map`
............
............
..type.or...
............
....die.....
............
............
............`,
  overMap:map`
............
............
..game......
............
.....over...
............
............
............`
}
let currentMap = maps.titleMap
const stringLocation1 = {
    y: 2,
    color: color`0`
}
const stringLocation2 = {
    y: 3,
    color: color`3`
}
const stringLocation3 = {
    y: 13,
    color: color`0`
}
const stringLocation4 = {
  y: 12,
  color: color`0`

// objects //
}
const player = "P"
const blueSquare = "B"
const words = ["hat", "cat", "bat", "dog", "log", "fox", "box", "car", "bar", "far",
  "sun", "fun", "run", "pen", "den", "hen", "red", "bed", "led", "top",
  "hop", "pop", "lip", "tip", "rip", "dot", "lot", "pot", "bug", "rug",
  "mug", "cup", "cut", "nut", "tag", "rag", "bag", "zip", "lip", "tip",
  "tap", "map", "cap", "fig", "pig", "wig", "bus", "sub", "rub", "jet",
  "net", "set", "web", "wet", "bet", "gem", "pen", "men", "ten", "cow",
  "how", "now", "row", "key", "pea", "tea", "sea", "bee", "see", "ski",
  "dig", "fig", "big", "bit", "fit", "hit", "kit", "lit", "nut", "cut",
  "rat", "bat", "cat", "mat", "hat", "sat", "pat", "sun", "fun", "run",
  "pink", "blue", "gray", "gold", "star", "moon", "leaf", "tree", "rose",
  "ship", "book", "lamp", "fire", "rain", "wind", "kite", "lake", "song",
  "fish", "note", "moon", "bear", "deer", "wolf", "hawk", "sofa", "door",]
const maxWords = words.length
const maxStringLength = 8
let randomWord = ""
let currentString = ""
const changeMapSound = tune`
56.28517823639775: C4-56.28517823639775,
56.28517823639775: D4-56.28517823639775,
56.28517823639775: C4-56.28517823639775,
56.28517823639775: D4-56.28517823639775,
56.28517823639775: E4-56.28517823639775,
56.28517823639775: D4-56.28517823639775 + F4-56.28517823639775,
1463.4146341463415` 
const click = tune`
56.074766355140184: B5/56.074766355140184 + A5-56.074766355140184,
1738.3177570093458`
const click2 = tune`
56.074766355140184: E5/56.074766355140184 + D5-56.074766355140184,
1738.3177570093458`
const dewoopdewoop = tune`
89.28571428571429: A5-89.28571428571429,
89.28571428571429: G5-89.28571428571429,
89.28571428571429: A5-89.28571428571429,
89.28571428571429: B5-89.28571428571429,
2500`
const wrong = tune`
65.78947368421052: G4/65.78947368421052 + A4^65.78947368421052,
65.78947368421052: F4/65.78947368421052 + G4^65.78947368421052,
65.78947368421052: F4^65.78947368421052 + E4/65.78947368421052,
65.78947368421052: D4/65.78947368421052 + E4^65.78947368421052,
65.78947368421052: C4/65.78947368421052 + D4^65.78947368421052,
1776.3157894736842`
const move = tune`
56.60377358490566: C4^56.60377358490566,
1754.7169811320755`
const gameMusic = tune`
500: E4~500,
500: E4~500,
500: F4~500,
500: E4~500,
500: C4~500,
500: D4~500,
500: C4~500,
500: D4~500,
500: E4~500,
500: E4~500,
500: F4~500,
500: E4~500,
500: C4~500,
500: D4~500,
500: C4~500,
500: D4~500,
500: E4~500,
500: E4~500,
500: F4~500,
500: E4~500,
500: C4~500,
500: D4~500,
500: C4~500,
500: D4~500,
500: E4~500,
500: E4~500,
500: F4~500,
500: E4~500,
500: G4~500,
500: F4~500,
500: D4~500,
500: C4~500`
const ticks = [
  tune`
114.94252873563218: B5^114.94252873563218,
3563.2183908045977`, tune`
114.94252873563218: E5^114.94252873563218,
3563.2183908045977`]
let playTickNum = 0
let playback



// letters //
const l_a = "a"
const l_b = "b"
const l_c = "c"
const l_d = "d"
const l_e = "e"
const l_f = "f"
const l_g = "g"
const l_h = "h"
const l_i = "i"
const l_j = "j"
const l_k = "k"
const l_l = "l"
const l_m = "m"
const l_n = "n"
const l_o = "o"
const l_p = "p"
const l_q = "q"
const l_r = "r"
const l_s = "s"
const l_t = "t"
const l_u = "u"
const l_v = "v"
const l_w = "w"
const l_x = "x"
const l_y = "y"
const l_z = "z"



// set images //
setLegend(
  [player, bitmap`
6666666..6666666
666..........666
66............66
6..............6
6..............6
6..............6
6..............6
................
................
................
6..............6
6..............6
6..............6
66............66
666..........666
6666666..6666666`],
  [blueSquare, bitmap`
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
  [l_a, bitmap`
................
.00000000000000.
.00000000000000.
..............0.
..............0.
..0000000000000.
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_b, bitmap`
.000............
.000............
.000............
.000............
.000............
.0000000000000..
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_c, bitmap`
................
..000000000000..
.00000000000000.
.00..........00.
.00..........00.
.00.............
.00.............
.00.............
.00.............
.00.............
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_d, bitmap`
............000.
............000.
............000.
............000.
............000.
..0000000000000.
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_e, bitmap`
................
................
..00000000000...
.00000000000000.
.000........000.
.000........000.
.000........000.
.00000000000000.
.00000000000000.
.00.............
.00.............
.00.............
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_f, bitmap`
................
....00000000....
....000000000...
....00.....00...
....00.....00...
....00..........
....00..........
....00..........
....00..........
.0000000000.....
.0000000000.....
....00..........
....00..........
....00..........
....00..........
................`],
  [l_g, bitmap`
................
...00000000000..
..000000000000..
..00.......000..
..00........00..
..00........00..
..00........00..
..00........00..
..00.......000..
..000000000000..
...00000000000..
............00..
............00..
............00..
..000000000000..
..000000000000..`],
  [l_h, bitmap`
.000............
.000............
.000............
.000............
.000............
.0000000000000..
.00000000000000.
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
................`],
  [l_i, bitmap`
................
...0000000000...
...0000000000...
......0000......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
......0000......
...0000000000...
...0000000000...
................`],
  [l_j, bitmap`
................
...00000000000..
...00000000000..
.......0000.....
........00......
........00......
........00......
........00......
........00......
........00......
........00......
........00......
.......000......
...0000000......
...0000000......
................`],
  [l_k, bitmap`
................
...00......00...
...00......00...
...00....0000...
...00..0000.....
...00.000.......
...00000........
...0000.........
...0000.........
...000000.......
...00.0000......
...00...000.....
...00....000....
...00.....00....
...00.....00....
................`],
  [l_l, bitmap`
................
................
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...000..........
...0000000000...
...0000000000...
................`],
  [l_m, bitmap`
................
.00000000000000.
.00000000000000.
.000..0000..000.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
................`],
  [l_n, bitmap`
................
.0000........00.
.00000.......00.
.000000......00.
.0000000.....00.
.00.00000....00.
.00..0000....00.
.00...0000...00.
.00....0000..00.
.00.....000..00.
.00......000.00.
.00......000.00.
.00.......00000.
.00........0000.
.00.........000.
................`],
  [l_o, bitmap`
................
................
..000000000000..
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_p, bitmap`
................
..000000000000..
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
.0000000000000..
.000............
.000............
.000............
.000............
.000............`],
  [l_q, bitmap`
................
..000000000000..
.00000000000000.
.000........000.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
...........00...
...........00.00
...........0000.
............00..`],
  [l_r, bitmap`
................
...0000000000...
...0000000000...
...000.....00...
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
...00...........
................`],
  [l_s, bitmap`
................
...0000000000...
...0000000000...
...000.....00...
...00...........
...00...........
...00...........
...0000000000...
...00000000000..
...........000..
............00..
............00..
...........000..
...00000000000..
....0000000000..
................`],
  [l_t, bitmap`
................
...0000000000...
...0000000000...
......0000......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
................`],
  [l_u, bitmap`
................
................
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
.00000000000000.
..000000000000..
................`],
  [l_v, bitmap`
................
................
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.00..........00.
.000........000.
..000......0000.
...000....000...
....000..000....
.....000000.....
......0000......
.......00.......
................`],
  [l_w, bitmap`
................
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.00....00....00.
.000..0000..000.
.00000000000000.
.00000000000000.
................`],
  [l_x, bitmap`
................
.00..........00.
.000........000.
..000......000..
...000....000...
....000..000....
.....000000.....
......0000......
......0000......
.....000000.....
....000..000....
...000....000...
..000......000..
.000........000.
.000........000.
................`],
  [l_y, bitmap`
................
.00..........00.
.000........000.
.0000......000..
..0000....0000..
...00000.0000...
.....0000000....
.......0000.....
........00......
........00......
.......000......
.......00.......
......000.......
....0000........
...00000........
................`],
  [l_z, bitmap`
................
.00000000000000.
.00000000000000.
.............00.
...........0000.
.........00000..
........00000...
......00000.....
.....00000......
...00000........
..00000.........
.0000...........
.000............
.00000000000000.
.00000000000000.
................`])



// game methods //
function changeMapToTitle() {
  clearText()
  currentMap = maps.titleMap
  setMap(currentMap)
  setBackground(blueSquare)
  addText("Press J to Start", stringLocation3)
  playTune(changeMapSound)
}
function changeMapToGame() {
  currentMap = maps.gameMap
  setMap(currentMap)
  setBackground(blueSquare)
  playTune(changeMapSound)
}
function changeMapToOver() {
  currentMap = maps.overMap
  setMap(currentMap)
  setBackground(blueSquare)
  addText("Points: " + points + " ", stringLocation1)
  addText("Press J to Reset", stringLocation3)
  playTune(changeMapSound)
}
function returnRandomText() {
  let rand = Math.floor(Math.random() * maxWords)
  let wordChose = words[rand]
  return wordChose
}
function updateText() {
  clearText()
  addText(randomWord, stringLocation1)
  addText(currentString, stringLocation2)
  addText("Points: " + points + " ", stringLocation3)
  addText("Time: " + timeLeft + " ", stringLocation4)
}
function compareStrings() {
  if (currentString == randomWord) {
    newWord()
    addPoint()
    updateText()
    playTune(dewoopdewoop)
  }
  if (currentString.length == randomWord.length) {
    currentString = ""
    updateText()
    playTune(wrong)
  }
}
function addToString(tile) {
  if (currentString.length < maxStringLength) {
    currentString += tile.type
  }
}
function removeFromString() {
  if (currentString.length > 0) {
  currentString = currentString.substring(0, currentString.length - 1)
  playTune(click2)
  }
}
function newWord() {
  randomWord = returnRandomText()
  currentString = ""
}
function resetGame() {
  changeMapToTitle()
  resetTimer()
}
function addPoint() {
  points += 1
  resetTimer()
}
function resetPoints() {
  points = 0
}
function resetTimer() {
  timeLeft = maxTime
}
function setGameOver () {
  clearText()
  changeMapToOver()
  playback.end()
}
function timerTick() {
  if (currentMap == maps.gameMap) {
    clearText()
    timeLeft -= 1
    updateText()
    
    if (timeLeft == 0) {setGameOver()}
    else {    
      if (playTickNum == 0) {
        playTickNum = 1
      } 
      if (playTickNum == 1) {
        playTickNum = 0
      }
          playTune(ticks[playTickNum])
    }
  } 
}
function startGame() {
  newWord()
  resetPoints()
  changeMapToGame()
  updateText()
  playback = playTune(gameMusic, Infinity)
}



// input //
onInput("s", () => {
  if (currentMap == maps.gameMap) {
    getFirst(player).y += 1
    playTune(move)
  }
})
onInput("w", () => {
if (currentMap == maps.gameMap) {
  getFirst(player).y -= 1
  playTune(move)
  }
})
onInput("d", () => {
if (currentMap == maps.gameMap) {
  getFirst(player).x += 1
  playTune(move)
  }
})
onInput("a", () => {
if (currentMap == maps.gameMap) {
  getFirst(player).x -= 1
  playTune(move)
  }
})
onInput("j", () => {
  if (currentMap == maps.gameMap) {
      let tile = getTile(getFirst(player).x, getFirst(player).y)[1]
    if (tile != undefined) {
      addToString(tile)
      updateText()
      compareStrings()
      playTune(click)
    }
  }
  else if (currentMap == maps.titleMap) {
    startGame()
  }
  else {
    resetGame()
  }
})
onInput("k", () => {
  if (currentMap == maps.gameMap) {
    removeFromString()
    updateText()
  }
})



// run on start //
resetGame()
setInterval(timerTick, fps)
