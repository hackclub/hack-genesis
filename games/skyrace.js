/*
@title: skyrace
@author: Shourya Pandey

About game :- 
  this is a multiplayer game you have to avoid collision with the mountain,
  green indicator plane can be controlled by the left switches 
  and the orange indicator plane can be controlled by the right switches

  controls  plane1   plane2

  forward     w         i
  backwards   s         k
  right       d         l
  left        a         j
*/



const plane1 = "p";
const cloud = "b";
const plane2 = "g";
const sky = "r";
const mountain = "e"

const melody = tune`
245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: B4~245.9016393442623,
245.9016393442623: C5~245.9016393442623 + D5~245.9016393442623 + B4/245.9016393442623,
245.9016393442623: D5-245.9016393442623,
245.9016393442623: B4/245.9016393442623 + E5^245.9016393442623,
245.9016393442623: E5~245.9016393442623 + D5~245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: D5-245.9016393442623,
245.9016393442623: D5~245.9016393442623 + B4/245.9016393442623 + F5^245.9016393442623,
245.9016393442623: C5~245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: C5-245.9016393442623 + G5^245.9016393442623,
245.9016393442623: D5~245.9016393442623 + E5~245.9016393442623 + B4/245.9016393442623,
245.9016393442623: F5-245.9016393442623 + G5^245.9016393442623,
245.9016393442623: F5~245.9016393442623 + B4/245.9016393442623 + A5^245.9016393442623,
245.9016393442623: C5-245.9016393442623,
245.9016393442623: C5-245.9016393442623 + B4/245.9016393442623 + F5^245.9016393442623,
245.9016393442623: E5^245.9016393442623,
245.9016393442623: B4/245.9016393442623 + D5~245.9016393442623 + C5^245.9016393442623,
245.9016393442623: C5~245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: B4-245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: B4~245.9016393442623,
245.9016393442623: B4/245.9016393442623 + C5~245.9016393442623 + D5~245.9016393442623,
245.9016393442623: D5-245.9016393442623,
245.9016393442623: B4/245.9016393442623 + E5^245.9016393442623,
245.9016393442623: E5~245.9016393442623 + D5~245.9016393442623,
245.9016393442623: B4/245.9016393442623,
245.9016393442623: D5-245.9016393442623,
245.9016393442623: B4/245.9016393442623 + D5~245.9016393442623 + F5^245.9016393442623`
const playback = playTune(melody, Infinity)

setLegend(
  [ plane1, bitmap`
................
................
................
................
................
......0000......
......0LL0......
......0550......
......0550......
.....011110.....
...0001111000...
...0111111110...
0000114004110000
0111114004111110
0000000000000000
................`],
  [ cloud, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777770007777777
7777000200777777
7777022220077777
7700022222000077
7002222222222000
0222222222222220
0222222222222220
0222222222222000
7000022200000077
7777000007777777
7777777777777777
7777777777777777`],
  [ mountain, bitmap`
777777C22CCC7777
77777CC2222C7777
7777CC22222CC007
7777C22222220000
7000000000002222
7020220220022200
700200200222C077
777CCCCCCCCCC777
777CCCCCCCCCC777
777CCCCCCCCCCC77
777CCCCCCCCCCC77
77CCCCCCCCCCCC77
7CCCCCCCCCCCCC77
7CCCCCCCCCCCCCC7
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [ plane2, bitmap`
................
................
................
................
................
......0000......
......0LL0......
......0550......
......0550......
.....011110.....
...0001111000...
...0111111110...
0000119009110000
0111119009111110
0000000000000000
................`],
  [ sky, bitmap`
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
7777777777777777`]
);

let level = 0;
const levels = [
  map`
rrrrrrr
rrrrrrr
rbrrrbr
rrrrrrr
rrrrrrr
rrrrgrr
rrrprrr`,

];
setBackground('r')

const currentLevel = levels[level];
setMap(currentLevel);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

onInput("w", () => {
  getFirst(plane1).y -= 1;
});

onInput("a", () => {
  if (getFirst(plane1).x !== 0){
    getFirst(plane1).x -=1;
  }
});

onInput("d", () => {
  if (getFirst(plane1).x !== 6){
    getFirst(plane1).x +=1;
  }
});

onInput("s", () => {
  getFirst(plane1).y += 1;
});

onInput("i", () => {
  getFirst(plane2).y -= 1;
});

onInput("j", () => {
  if (getFirst(plane2).x !== 0){
    getFirst(plane2).x -=1;
  }
});

onInput("l", () => {
  if (getFirst(plane2).x !== 6){
    getFirst(plane2).x +=1;
  }
});

onInput("k", () => {
  getFirst(plane2).y += 1;
});


let intervalCount = 0
let intervalSpeed = 400
let loop = setInterval(() => {
  intervalCount += 1
  getAll(cloud).forEach((car) => {console.log(car); if(car.y == 6) {clearTile(car.x, car.y)}; car.y += 1})
  getAll(mountain).forEach((car) => {console.log(car); if(car.y == 6) {clearTile(car.x, car.y)}; car.y += 1})
  if (intervalCount % 2 === 0){
  addSprite(getRandomInt(6), 0, cloud)
    addSprite(getRandomInt(6), 0, mountain)}
  


 if(tilesWith(plane1, mountain).length !== 0){
    playback.end()
    addText("Game Over!", {
      x: 5,
      y: 6,
      color: color`3`
    });
    clearInterval(loop)
  }
  
  
  if(tilesWith(plane2, mountain).length !== 0){
    playback.end()
    addText("Game Over!", {
      x: 5,
      y: 6,
      color: color`3`
    });
    clearInterval(loop)
  }

}, intervalSpeed)
