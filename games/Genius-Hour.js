/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const bos = "b"
const gloink = "g"
const krishna = "k"
const wall = "w"
const walls = "i"
const caine = "c"
const caines = "r"

setLegend(
  [player, bitmap`
................
................
................
.....22222......
.....20202......
.....27272......
.....22022......
......222.......
...33333........
...3............
...333333.......
........3.......
....33333.......
....3...........
....333333......
.........3......`],
  [bos, bitmap`
................
................
................
................
................
....HH..HH......
....H0H0HH......
....HH0HHH......
................
................
................
................
................
................
................
................`],
  [gloink, bitmap`
................
................
................
................
................
................
.....666........
....60606.......
....66066.......
.....666........
................
................
................
................
................
................`],
  [krishna, bitmap`
....3333........
....3333........
....3333........
....3333........
....333333333...
....330333033...
....333303333...
....333333333...
................
................
................
................
................
................
................
................`],
  [wall, bitmap`
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......
.....3333.......
.....3223.......`],
  [walls, bitmap`
................
................
................
................
3333333333333333
3232323232323232
3232323232323232
3333333333333333
................
................
................
................
................
................
................
................`],
  [caine, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [caines, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`], 
  
  
)

afterInput(() => {
  const playerSprite = getFirst(player);
  const spritesToRemove = [bos, gloink, krishna]; // Define the sprite types to remove

  spritesToRemove.forEach(spriteType => {
    const collidedSprite = getTile(playerSprite.x, playerSprite.y).find(sprite => sprite.type === spriteType);
    if (collidedSprite) {
      collidedSprite.remove();
    }
  });


  // Check if there are no more sprites of bos, gloink, and krishna on the board
  if (getAll(bos).length === 0 && getAll(gloink).length === 0 && getAll(krishna).length === 0) {
    // Increment the level
    level++;
    
    // Check if there are more levels
    if (level < levels.length) {
      setMap(levels[level]); // Load the next level
    } else {
      console.log("Congratulations! You have completed all levels.");
      // You can add additional logic here for game completion
    }
  }
});

setSolids([player, wall, walls])

 addText("Gather The Gloinks", { 
        x: 1,
        y: 3,
        color: color`6`
      })

addText("Use WASD to move!", { 
        x: 2,
        y: 5,
        color: color`6`
      })

addText("Press K to start", { 
        x: 2,
        y: 7,
        color: color`6`
      })

addText("Caine says good luck", { 
        x: 0,
        y: 9,
        color: color`6`
      })

addText("You'll need it...", { 
        x: 2,
        y: 11,
        color: color`0`
      })

onInput("k", () => {
  clearText()
})

let level = 0
const levels = [
  map`
...wg.....
..b.......
...ikgi...
..gw..b...
......wk..
.wb.k..i..
......wp..
..........`,
  map`
wiiiiiiiw
wi.k.b..w
wpw..w.gw
w.wb..k.w
w...ib..w
wb.g..wgw
wiw...k.w
wk.g..ibw
iiiiiiiii`,
  map`
wiiiiiiiiiw
w..k.ibbw.w
w.b.ibw.g.w
ww.w.k..wkw
w..b.i.gwgw
wwgk.wkw..w
w.i.kwpw..w
wiiiiiiiiiw`, 
  map`
piiiiiiiiwiiiiiiiw
..w.....kw..g.kk.w
w..g.....w..b....w
w.iii...w....i..ww
wb...w.b..kiii...w
w...gw..wb..biwkbw
w.b..wk.w..i.....w
w..ibw.i.i.g..w..w
wg...w...b......bw
w.b..w...bi.bw.g.w
w.w...ig...iww.i.w
w.w.k..w.b.b.....w
w.w....w......i.iw
wiiiiiiiiiiiiiiiiw`, 
map`
p..giiiiiiiiiiii
....i...g..g...w
w.....giiiiii.bw
w..k.........g.w
ww....g...gw.k.w
w.i.g.w.......bw
wb....wg.g.b...w
wb.ib.w...g.g..w
wbbk..w..g.i.wbw
w..b..w.gw.k...w
w...g.g....b..bw
wbi.biiiii.....w
w..b....g..g.wbw
wb.bb.kw.......w
w.i.b..........w
iiiiiiiiiiiiiiii`, 
map`
p.iiiiiiiiiiiiiii
w...k.b..w......w
w....g..k.......w
w..w...w.w.iiii.w
w..wb..wbw.b...bw
wb.wk..w.w..k...w
w.kw..gw.w..wg.kw
w..w.k....b.w...w
w..w.b......w...w
w.g.iiiiiii.wkg.w
w...b....g..w...w
w.kg...k....w...w
w.....iiii....b.w
wb..........k...w
iiiiiiiiiiiiiiiii`, 
map`
iiiiiiiiiiiiiii
w....b..bw....w
w..k.iii.w..g.w
w.gwb.g..w...bw
w..w....bw..k.w
w..g..iiik.ii.w
w.k...wpw....gw
wiiii.w.w.w...w
w.bw......w.b.w
w..wgi....w...w
w..w..ii..w...w
w..g.b....wii.w
w....k..g...b.w
w........kii..w
iiiiiiiiiiiiiii`, 
map`
............................................................................
............................................................................
............................................................................
............................................................................
............................................................................
............................................................................
............................................................................
.....ccccc.c..c.....ccccc.c..c..c...........................................
.....c.c.c.c..c.....c.c.c.c..c..c...........................................
.....c.c.c.cccc.....c.c.c.cccc..c...........................................
.....c.c.c....c.....c.c.c....c..c...........................................
.....c...c....c.....c...c....c..............................................
.....c...c..ccc..c..c...c..ccc..c...........................................
................c...........................................................
............................................................................
............................................................................
............................................................................
.....rrrrr.rrrrr...rrrrr.rrrrr.rrrrr.rrrrr.rrrrr.rrrrr.rrrrr................
.......r.....r.....r...r.r...r.r...r.r.....r...r.r...r.r....................
.......r.....r.....r...r.r...r.r...r.rrrrr.r...r.r...r.rrrrr................
.......r.....r.....rrrrr.rrrrr.rrrrr.r.....rrrrr.rrrrr.....r................
.......r.....r.....r...r.r.....r.....r.....r...r.rrr.......r................
.....rrrrr...r.....r...r.r.....r.....rrrrr.r...r.r..rr.rrrrr................
............................................................................
............................................................................
............................................................................
......c..c.cccc.c..c..c.c.....c.ccccc.......................................
......c..c.c..c.c..c.c..cc....c.c...........................................
......c..c.c..c.c..c.....c....c.c...........................................
......cccc.c..c.c..c......c..cc.ccccc.......................................
.........c.c..c.c..c......cc.c..c...........................................
.........c.c..c.c..c.......c.c..c...........................................
.......ccc.cccc.cccc........c...ccccc.......................................
............................................................................
............................................................................
............................................................................
......rrrrr.rrrrr.r....r.rrrrr.rrrrr.r...r.rrrrr.rrrrr...rrrrr.r...r.rrrrr..
......r.......r...rr...r...r...r.....r...r.r.....r...r.....r...r...r.r......
......rrrrr...r...r.r..r...r...rrrrr.rrrrr.rrrrr.r...r.....r...rrrrr.rrrrr..
......r.......r...r..r.r...r.......r.r...r.r.....r...r.....r...r...r.r......
......r.......r...r...rr...r.......r.r...r.r.....r...r.....r...r...r.r......
......r.....rrrrr.r....r.rrrrr.rrrrr.r...r.rrrrr.rrrrr.....r...r...r.rrrrr..
............................................................................
............................................................................
............................................................................
............................................................................
..rrrrrrr.ccccccc.r......r.cccccc.r....r.ccccccc.r....r.cccccc.rrrrr...ccc..
..r.....r.c.....c..r.....r.c......rr...r....c....r....r.c....c.r.......ccc..
..r.....r.c.....c..r.......c......rr...r....c....r....r.c....c.r.......ccc..
..r.....r.c.....c..r.....r.c......r.r..r....c....r....r.c....c.r.......ccc..
..r.....r.c.....c...r....r.c......r.r..r....c....r....r.c....c.r.......ccc..
..r.....r.c.....c...r....r.c......r.r..r....c....r....r.c....c.r.......ccc..
..rrrrrrr.c.....c...r......c......r..r.r....c....r....r.c....c.r.......ccc..
..r.....r.c.....c...r....r.cccccc.r..r.r....c....r....r.cccccc.rrrrr...ccc..
..r.....r.c.....c....r...r.c......r..r.r....c....r....r.c.c....r.......ccc..
..r.....r.c.....c....r..r..c......r...rr....c....r....r.c..c...r.......ccc..
..r.....r.c.....c....r..r..c......r...rr....c....r....r.c..c...r.......ccc..
..r.....r.c.....c.....rr...c......r...rr....c....r....r.c...c..r............
..r.....r.c.....c.....rr...c......r....r....c....r....r.c....c.r.......rrr..
..r.....r.c.....c.....rr...c......r....r....c....r....r.c....c.r.......rrr..
..r.....r.ccccccc......r...cccccc.r....r....c....rrrrrr.c....c.rrrrr...rrr..
............................................................................
............................................................................
............................................................................
............................................................................
............................................................................
............................................................................`, 
]



function jumpToLevel(levelIndex) {
  if (levelIndex < levels.length) {
    setMap(levels[levelIndex]);  // Set the map to the specified level
    level = levelIndex;  // Update the current level
    clearText();  // Clear any text on the screen
  } else {
    console.log("Level index out of range.");
  }
}


afterInput(() => {
  const playerSprite = getFirst(player);
  const spritesToRemove = [bos, gloink, krishna]; // Use the actual sprite variables

  spritesToRemove.forEach(spriteType => {
    const collidedSprite = getTile(playerSprite.x, playerSprite.y).find(sprite => sprite.type === spriteType);
    if (collidedSprite) {
      collidedSprite.remove();
    }
  });
});




// Create a tune:
const melody = tune`
179.64071856287424: E4^179.64071856287424 + D5-179.64071856287424,
179.64071856287424: C4-179.64071856287424 + C5^179.64071856287424,
179.64071856287424: E4^179.64071856287424 + D5^179.64071856287424,
179.64071856287424: C4-179.64071856287424 + E5^179.64071856287424,
179.64071856287424: E4^179.64071856287424 + F5^179.64071856287424,
179.64071856287424: C4-179.64071856287424 + G5^179.64071856287424,
179.64071856287424: E4^179.64071856287424 + F5/179.64071856287424,
179.64071856287424: C4~179.64071856287424 + E5/179.64071856287424,
179.64071856287424: E4-179.64071856287424 + D5/179.64071856287424,
179.64071856287424: C4~179.64071856287424 + C5/179.64071856287424,
179.64071856287424: E4-179.64071856287424 + D5~179.64071856287424,
179.64071856287424: C4~179.64071856287424 + E5~179.64071856287424,
179.64071856287424: E4-179.64071856287424 + F5~179.64071856287424,
179.64071856287424: C4/179.64071856287424 + G5~179.64071856287424,
179.64071856287424: E4^179.64071856287424 + F5-179.64071856287424,
179.64071856287424: C4/179.64071856287424 + E5-179.64071856287424,
179.64071856287424: E4^179.64071856287424 + D5-179.64071856287424,
179.64071856287424: C4/179.64071856287424 + C5-179.64071856287424,
179.64071856287424: E4^179.64071856287424 + D5^179.64071856287424,
179.64071856287424: C4~179.64071856287424 + E5^179.64071856287424,
179.64071856287424: E4-179.64071856287424 + F5^179.64071856287424,
179.64071856287424: C4~179.64071856287424 + G5^179.64071856287424,
179.64071856287424: E4-179.64071856287424 + F5~179.64071856287424,
179.64071856287424: C4~179.64071856287424 + E5~179.64071856287424,
179.64071856287424: E4-179.64071856287424 + D5~179.64071856287424,
179.64071856287424: C5~179.64071856287424 + C4^179.64071856287424,
179.64071856287424: D5/179.64071856287424 + E4/179.64071856287424,
179.64071856287424: E5/179.64071856287424 + C4^179.64071856287424,
179.64071856287424: F5/179.64071856287424 + E4/179.64071856287424,
179.64071856287424: G5/179.64071856287424 + C4^179.64071856287424,
179.64071856287424: F5-179.64071856287424 + E4/179.64071856287424,
179.64071856287424: E5-179.64071856287424 + C4^179.64071856287424`

// Play the melody repeatedly in the background
const playback = playTune(melody, Infinity);

// You can stop the playback at a specific point if needed
// playback.end();



setMap(levels[level]);

setPushables({
  [player]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("w", () => {
  getFirst(player).y += -1
})

onInput("a", () => {
  getFirst(player).x += -1
})

onInput("d", () => {
  getFirst(player).x += 1
})


