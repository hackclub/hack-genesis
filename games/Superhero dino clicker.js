
/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Super Dino Cliker
@author: Jayc231456
@tags: []
@addedOn: 2024-11-14
*//*
@title: Juice Clicker
@author: ikejlemieux
@tags: []
@addedOn: 2024-07-29
*/

const player = "p";
const background = "b"

setLegend(
  [ player, bitmap`
................
................
................
........2222....
........2...22..
........2.2..2..
........2....2..
........222222..
......33332.....
.....3....2.....
....3.....2.....
..........2.....
..........2.....
........22222...
........2...2...
........2...2...` ],
  [ background, bitmap`
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
0000000000000000`]
)


setSolids([])

let level = 0
const levels = [
  map`
..p
...
...`
]


setMap(levels[level])

setPushables({
  [ player ]: []
})

setBackground(background);


//game code
var counter = 0;
var autoDinos = 0;
var buttonCountdown = 0;

// Create a tune:
const buy = tune`
138.24884792626727: G4-138.24884792626727,
138.24884792626727: C5-138.24884792626727,
4147.465437788018`
const make = tune`
500: C4-500,
15500`
const buyFail = tune`
85.71428571428571: C4/85.71428571428571,
85.71428571428571: C4/85.71428571428571,
2571.428571428571` 


function gameText(){
  //set colors for if you can buy things
  var allowA
  var allowW
  var allowS
  var allowD
  if (counter >= 40){
    allowA = color`4`
  } else allowA = color`3`

  if (counter >= 100){
    allowW = color`4`
  } else allowW = color`3`

  if (counter >= 700){
    allowS = color`4`
  } else allowS = color`3`

  if (counter >= 2000){
    allowD = color`4`
  } else allowD = color`3`
  
  clearText();

  //display item prices
  addText(
`   Item:     Price:`
,
    {
    y:7,
    x:0,
    color:color`9`
  });
  
  addText(
'l: Make Dino:  0',
    {
    y:8,
    x:0,
    color: color`4`
  });

    addText(
'A: 1x Dino:   40',
    {
    y:9,
    x:0,
    color: allowA
  });

    addText(
'W: 10x Dino:  100',
    {
    y:10,
    x:0,
    color: allowW
  });

    addText(
'S: 40x Dino:  700',
    {
    y:11,
    x:0,
    color: allowS
  });

    addText(
'D: 100x Dino: 2000',
    {
    y:12,
    x:0,
    color: allowD
  });

    addText(
"red: can't buy",
    {
    y:14,
    x:0,
    color: color`3`
  });

    addText(
'green: can buy',
    {
    y:15,
    x:0,
    color: color`4`
  });
  
  //display player info
  addText(counter.toString() + " Dinos;", {y: 2, x: 3, color: color`4`});

  addText("Auto Dinos: " + autoDinos.toString(), {
    y:5,
    x:2,
    color:color`6`
  });

}


gameText();

const autoIncrease = setInterval(() => {
  counter += autoDinos;
  gameText();
}, 1000);

//helps remove keyboard rapid fire
const buttonDelay = setInterval(() => {
  if (buttonCountdown > 0) {
    buttonCountdown -= 1;
  }
}, 10);

onInput("l", () => {
  if (buttonCountdown <= 0){
    counter += 1;
    gameText();
    playTune(make);
  }
})

onInput("a", () => {
  if (buttonCountdown <= 0){
    if (counter >= 40) {
      autoDinos += 2;
      counter -= 40;
      gameText();
      playTune(buy);
    } else {playTune(buyFail);}
  }
})

onInput("w", () => {
  if (buttonCountdown <= 0){
    if (counter >= 100) {
      autoDinos += 10;
      counter -= 100;
      gameText();
      playTune(buy);
    }
  }
})

onInput("s", () => {
  if (buttonCountdown <= 0){
    if (counter >= 700) {
      autoDinos += 40;
      counter -= 700;
      gameText();
      playTune(buy);
    }
  }
})

onInput("d", () => {
  if (buttonCountdown <= 0){
    if (counter >= 2000) {
      autoDinos += 100;
      counter -= 2000;
      gameText();
      playTune(buy);
    }
  }
})

afterInput(() => {
  buttonCountdown = 5;

})

