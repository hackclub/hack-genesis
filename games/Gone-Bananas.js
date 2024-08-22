const player = "p"
const player2 = "a"
const spike = "s"
const sword = "S"
const walksound = tune`
104.52961672473867: C4-104.52961672473867 + D4-104.52961672473867 + E4-104.52961672473867 + F4-104.52961672473867 + G4-104.52961672473867,
3240.4181184668987`
const ground_grass = "g"
setLegend(
  [ player, bitmap`
................
................
......00........
.....0660.......
...0000000......
...0.020600.....
...00000660.....
.....006660.....
....00066600....
...00.06660.0...
...0.006660.00..
.....066600.....
.....06600......
.....0000.......
.....0..0.......
....00..00......` ],
  [ player2, bitmap`
................
................
......00........
.....0990.......
...0000000......
...0.020900.....
...00000990.....
.....009990.....
....00099900....
...00.09990.0...
...0.009990.00..
.....099900.....
.....09900......
.....0000.......
.....0..0.......
....00..00......`],
  [sword, bitmap`
................
........0.......
.......000......
......00L00.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
....000C6C000...
......00000.....
.......000......
.......000......`],
  [spike, bitmap`
......00........
......00........
......10........
.....010........
.....010........
.....010........
....0L110.......
....0L110.......
....0L1110......
....0L1110......
...0LL1110......
...0LL1110......
..0LLLL1100.....
..0LLLLL110.....
..0LLLLLL10.....
................`],
  [ground_grass, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCHHCC
CCCCCCCCCC88HHCC
CCCCCCCCCC884CCC
CCCCCCCCCCCC4CCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCC33CCCCCCCCCC
CCDDD3CCCCCCCCCC
CCDD4CCCCCCCCCCC
CCCC4CCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  
)

setSolids([]);


let level = 0
const levels = [map `
.......
.......
..sss..
.saSps.
..sss..
.......
.......`,
  map`
..........
..........
.s..s.....
..........
..pS......
..........
..........
...s......
..........
.s...aS...`, map`
.......
.......
.......
.......
.......
.......
.......`
]

setMap(levels[level])
setBackground(ground_grass)

setPushables({
  [ player ]: [], [player2]: []
})

addText("Gone Bananas \n \n   press I", { 
  x: 4,
  y: 1,
  color: color`7`
});

onInput("i", () => {
  if(level === 0){
    level = 1
    setMap(levels[1])
    clearText()
  }else{
    if (getFirst(player2).y > 0){
  getFirst(player2).y -= 1
  playTune(walksound)
  }
  }
})


onInput("j", () => {
  if(getFirst(player2).x > 0){
  getFirst(player2).x -= 1
  getAll(sword)[1].x = getFirst(player2).x+1;
  playTune(walksound)
  }
})


onInput("k", () => {
  if(getFirst(player2).y < 10){
  getFirst(player2).y += 1
  playTune(walksound)
  }
})


onInput("l", () => {
  if(getFirst(player2).x < 10){
  getFirst(player2).x += 1
  getAll(sword)[1].x = getFirst(player2).x+1;
  playTune(walksound)
  }
})

onInput("s", () => {
  if(getFirst(player).y < 10){
  getFirst(player).y += 1
  playTune(walksound)
  }
  
})


onInput("w", () => {
  if(getFirst(player).y > 0){
  getFirst(player).y -= 1
  playTune(walksound)
  }
})


onInput("a", () => {
  if (level === 2){
    setMap(levels[1])
    level = 1}
  clearText()
  if(getFirst(player).x > 0){
  getFirst(player).x -= 1
  getAll(sword)[0].x = getFirst(player).x + 1
  playTune(walksound)
  }
  
})


onInput("d", () => {
  if(getFirst(player).x < 10){
  getFirst(player).x += 1
  getAll(sword)[0].x = getFirst(player).x + 1
  playTune(walksound)
  }
})

afterInput(() =>  {
                  getAll(sword)[0].y = getFirst(player).y ;
                  getAll(sword)[1].y = getFirst(player2).y;
if( tilesWith(player,spike).length > 0|| tilesWith(player,sword).length>0){
setMap(levels[1])
  level = 2
  setMap(levels[level])
  addText("player 2 won!\n \n \n \n \n  press A", { 
  x: 4,
  y: 1,
  color: color`9`
});
};if( tilesWith(player2,spike).length > 0 || tilesWith(player2,sword).length>0){
setMap(levels[1])
  level = 2
  setMap(levels[level])
  addText("player 1 won!\n \n \n \n \n  press A", { 
  x: 4,
  y: 1,
  color: color`6`
});
};if(Math.random()>0.6){addSprite(Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),spike)}})