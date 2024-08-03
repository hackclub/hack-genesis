/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Spring
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

const wall = "w"

const arrow_0 = "0"
const arrow_45 = "1"
const arrow_90 = "2"
const arrow_135 = "3"
const arrow_180 = "4"
const arrow_225 = "5"
const arrow_270 = "6"
const arrow_315 = "7"

const arrowIncrement = 45

setLegend(
  [ arrow_0, bitmap`
................
................
................
.........00.....
.........000....
...........000..
............000.
.000000000000000
.000000000000000
............000.
...........000..
.........000....
.........00.....
................
................
................` ],
  [ arrow_45, bitmap`
................
................
................
................
.....0000000....
.....0000000....
........0000....
.......00000....
......000.00....
.....000..00....
....000...00....
...000..........
..000...........
.000............
000.............
00..............` ],
  [ arrow_90, bitmap`
.......00.......
......0000......
.....000000.....
.....000000.....
....00.00.00....
...00..00..00...
...00..00..00...
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
................` ],
  [ arrow_135, bitmap`
................
................
................
................
....0000000.....
....0000000.....
....0000........
....00000.......
....00.000......
....00..000.....
....00...000....
..........000...
...........000..
............000.
.............000
..............00` ],
  [ arrow_180, bitmap`
................
................
................
.....00.........
....000.........
..000...........
.000............
000000000000000.
000000000000000.
.000............
..000...........
....000.........
.....00.........
................
................
................` ],
  [ arrow_225, bitmap`
..............00
.............000
............000.
...........000..
..........000...
....00...000....
....00..000.....
....00.000......
....00000.......
....0000........
....0000000.....
....0000000.....
................
................
................
................` ],
  [ arrow_270, bitmap`
................
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
...00..00..00...
...00..00..00...
....00.00.00....
.....000000.....
.....000000.....
......0000......
.......00.......` ],
  [ arrow_315, bitmap`
00..............
000.............
.000............
..000...........
...000..........
....000...00....
.....000..00....
......000.00....
.......00000....
........0000....
.....0000000....
.....0000000....
................
................
................
................` ],
  [ player, bitmap`
................
................
.......000......
.......0.0......
......0..0......
......0...0.0...
....0003.30.0...
....0.0...000...
....0.05550.....
......0...0.....
.....0....0.....
.....0...0......
......000.......
......0.0.......
.....00.00......
................` ],
  [ wall, bitmap`
0000000000000000
0000000000000000
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0099999999999900
0000000000000000
0000000000000000` ]
)

setSolids([ player, wall ])

let level = 0
const levels = [
  map`
....................
....................
....................
....................
....................
.ww.ww.ww.ww.ww.ww.w
....................
....................
....................
....................
...w...w...w...w...w
....................
.w...w...w...w...w..
.............w......
....................
w..................w
w..................w
....................
w.wpw.w.w.w.w.w.w.w.
wwwwwwwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

let fullX = null
let fullY = null
let xVel = 0
let yVel = 0
let gravity = 0.1

let inAir = false

let arrowType = null

let fullMap = null

onInput("s", () => {
  // getFirst(player).y += 1
  // const arrowSprite = addSprite(2, 2, arrow_0)
  // const arrowSprite45 = addSprite(3, 2, arrow_45)
  // arrowSprite.rotate = 20
})

onInput("i", () => {
  if (arrowType === null && !inAir) {
    addSprite(0, 0, arrow_0)
    arrowType = arrow_0
    setArrowPosition()
  }
})

onInput("j", () => {
  if (arrowType !== null) {
    let nextArrow = true

    // TODO: rather than "looping" the arrow around, simply prevent it from being moved past the bounds
    // TODO: same logic (almost) would be added to the "l" input listener. it's not there currently for testing purposes.
    while (nextArrow) {
      const arrowTypeNum = Number(arrowType)
      
      const lastArrow = 360 / arrowIncrement - 1
      const newType = (arrowTypeNum === lastArrow) ? 0 : (arrowTypeNum + 1)
      
      const arrowSprite = getFirst(arrowType)
      arrowSprite.type = newType.toString()
      arrowType = newType.toString()
  
      setArrowPosition()

      nextArrow = checkArrowIsInvalid()
    }
    
    // console.log(getArrowDeg())

    // const p = getFirst(player)
    // const walls = getAll(wall)
    // const arrowDeg = getArrowDeg()
    // const touching = walls.filter(w => (
    //   (w.y === p.y && Math.abs(w.x - p.x) <= 1) ||
    //   (w.x === p.x && Math.abs(w.y - p.y) <= 1)
    // ))
    // .map(w => ({ angle: Math.atan2(p.y-w.y, p.x-w.x)*(180/Math.PI) })).map(w => ({ angle: w.angle < 0 ? w.angle + 360 : w.angle })).map(w => ({ angle: w.angle, distance: Math.abs(getArrowDeg()-w.angle) % 360 }))
    // const someIsInvalid = walls.some(w => {
    //   const isTouching = (
    //     (w.y === p.y && Math.abs(w.x - p.x) <= 1) ||
    //     (w.x === p.x && Math.abs(w.y - p.y) <= 1)
    //   )
      
    //   if (!isTouching) return false
      
    //   let angle = Math.atan2(p.y-w.y, p.x-w.x)*(180/Math.PI)
    //   angle = angle < 0 ? angle + 360 : angle

    //   const distance = Math.abs(arrowDeg-angle) % 360
    //   if (distance <= 45) return true
    // })
    // if (someIsInvalid) console.log("nope!")
    // console.log(touching)
    // if (touching.some(t => t.distance <= 45)) {
    //   console.log("nope!")
    // }
    // console.log(touching)
  }
})

onInput("l", () => {
  if (arrowType !== null) {
    const arrowTypeNum = Number(arrowType)
    
    const lastArrow = 360 / arrowIncrement - 1
    const newType = (arrowTypeNum === 0) ? lastArrow : (arrowTypeNum - 1)
    
    const arrowSprite = getFirst(arrowType)
    arrowSprite.type = newType.toString()
    arrowType = newType.toString()
    
    setArrowPosition()
  }
})

onInput("k", () => {
  if (arrowType !== null) {
    inAir = true
    
    const deg = getArrowDeg()
    const rad = deg * (Math.PI / 180)

    const arrowSprite = getFirst(arrowType)
    arrowSprite.remove()
    arrowType = null

    const startVel = 1
    xVel = startVel * Math.cos(rad)
    yVel = -startVel * Math.sin(rad)

    setMapFromParsed(fullMap)

    // const touchingWalls = getTouching()
    // console.log(touchingWalls)
    
    const playerSprite = getFirst(player)
    fullX = playerSprite.x
    fullY = playerSprite.y
    
    centerMap()

    // console.log(fullX)
    // console.log(fullY)
    // console.log(deg)
    // console.log(xVel)
    // console.log(yVel)
    
    const interval = setInterval(() => {
      setMapFromParsed(fullMap)
      
      const p = getFirst(player)
      
      // playerSprite.x += xVel
      // playerSprite.y += yVel
      fullX += xVel
      fullY += yVel

      const oldX = p.x
      const oldY = p.y
      
      p.x = Math.round(fullX)
      p.y = Math.round(fullY)
      
      yVel += gravity

      // if (
      //   // (xVel && oldX === playerSprite.x) ||
      //   // (yVel && oldY === playerSprite.y)
      //   Math.round(fullX) !== playerSprite.x ||
      //   Math.round(fullY) !== playerSprite.y
      // ) {
      //   console.log("clear");
      //   clearInterval(interval);
      // }

      // if (isEffectivelyZero()) {
      //   console.log("clear")
      //   clearInterval(interval)
      // }

      const walls = getAll(wall)
      // TODO: check which side player is touching wall, compared against vel
      // if (walls.some(w => playerTouchingWall(playerSprite, w))) {
      if (
        walls.some(w => (
          (w.x === p.x && w.y === p.y - 1 && yVel < 0 && !isEffectivelyZero(yVel)) ||
          (w.y === p.y && w.x === p.x + 1 && xVel > 0 && !isEffectivelyZero(xVel)) ||
          (w.x === p.x && w.y === p.y + 1 && yVel > 0 && !isEffectivelyZero(yVel)) ||
          (w.y === p.y && w.x === p.x - 1 && xVel < 0 && !isEffectivelyZero(xVel))
        ))
      ) {
        console.log("clear")
        clearInterval(interval)
        inAir = false
      }

      // TODO: prevent arrow from showing up when interval still exists
    
      fullMap = getParsedMap()
      
      centerMap()
    }, 60)
  }
})

afterInput(() => {
  
})

function setArrowPosition() {
  if (arrowType !== null) {
    // console.log("hello")
    // console.log(getFirst(player)) // undefined
    // console.log(getAll(wall)) // []
    // console.log(getTile(0, 0))
    // console.log(getFirst("0"))
    // console.log(getAll("0"))
    
    const playerSprite = getFirst(player)
    const arrowSprite = getFirst(arrowType)

    const deg = getArrowDeg()
    const rad = deg * (Math.PI / 180)
    const distance = 1
    const x = distance * Math.cos(rad)
    const y = distance * Math.sin(rad)
    // console.log(`deg: ${deg}`)
    // console.log(`x: ${x}`)
    // console.log(`y: ${y}`)
    
    arrowSprite.x = Math.round(playerSprite.x + x)
    arrowSprite.y = Math.round(playerSprite.y - y)
    
    // arrowSprite.x = playerSprite.x + 1
    // arrowSprite.y = playerSprite.y - 1
  }
}

function getArrowDeg() {
  if (arrowType === null) return null
  return Number(arrowType) * arrowIncrement
}

// function getArrowDeg(thisArrowType) {
//   if (typeof thisArrowType === "string" || typeof thisArrowType === "number")
//     return Number(arrowType) * arrowIncrement
//   else if (arrowType === null) return null
//   else return Number(arrowType) * arrowIncrement
// }

function getParsedMap() {
  // console.log(height())
  
  const map = [];

  for (let y = 0; y < height(); y++) {
    const row = []
    map.push(row)
    
    for (let x = 0; x < width(); x++) {      
      const tile = getTile(x, y).map(tile => tile.type)
      row.push(tile)
    }
  }
  
  return map;
}

function setMapFromParsed(parsedMap) {  
  setMap(
    parsedMap.map(row =>
      row.map(tile => tile.length === 0 ? "." : tile[0]).join("")
    ).join("\n")
  )

  // console.log(
  //   parsedMap.map(row =>
  //     row.map(tile => tile.length === 0 ? "." : tile[0]).join("")
  //   ).join("\n")
  // )

  // console.log(map)
  
  for (let y = 0; y < height(); y++) {
  // for (let y = 0; y < map.length; y++) {
    const row = parsedMap[y]

    // console.log("row")
    
    for (let x = 0; x < width(); x++) {
    // for (let x = 0; x < row.length; x++) {
      const tile = row[x]
      
      for (let i = 1; i < tile.length; i++) {
        const sprite = tile[i]
        // console.log(tile)
        addSprite(x, y, tile)
      }
    }
  }
}

function zoomMap(parsedMap, rawX, rawY, rawZoomWidth, rawZoomHeight) {
  // const rawX = 200
  // const rawY = 20
  // const rawZoomWidth = 10
  // const rawZoomHeight = 10

  const mapWidth = parsedMap[0].length
  const mapHeight = parsedMap.length

  // const zoomWidth = rawZoomWidth
  // const zoomHeight = rawZoomHeight
  
  const zoomWidth = Math.min(rawZoomWidth, mapWidth)
  const zoomHeight = Math.min(rawZoomHeight, mapHeight)
  const x = Math.max(Math.min(rawX, mapWidth-zoomWidth), 0)
  const y = Math.max(Math.min(rawY, mapHeight-zoomHeight), 0)

  // const x = rawX
  // const y = rawY
  
  const zoomedMap = []

  for (let iterY = 0; iterY < zoomHeight; iterY++) {
    const row = []
    zoomedMap.push(row)

    for (let iterX = 0; iterX < zoomWidth; iterX++) {
      const tile = []
      row.push(tile)

      // console.log("row");
      
      for (let i = 0; i < parsedMap[iterY+y][iterX+x].length; i++) {
        // console.log(parsedMap[iterY+y][iterX+x][i])
        tile.push(parsedMap[iterY+y][iterX+x][i])
      }
    }
  }

  return zoomedMap
}

function centerMap() {
  const playerSprite = getFirst(player)

  // console.log({x:playerSprite.x,y:playerSprite.y})

  const mapWidth = 10
  const mapHeight = 10
  
  const parsedMap = getParsedMap()
  const zoomedMap = zoomMap(
    parsedMap,
    playerSprite.x-Math.round(mapWidth/2)+1,
    playerSprite.y-Math.round(mapHeight/2),
    mapWidth,
    mapHeight
  )
  setMapFromParsed(zoomedMap)
}

// function getTouching() {
//   const playerSprite = getFirst(player)
//   const walls = getAll(wall)
//   // console.log({ playerSpriteX: playerSprite.x, playerSpriteY: playerSprite.y })
//   // console.log({ wallX: walls[0].x, wallY: walls[0].y })
//   // const touching = walls.filter(w => (
//   //   (w.y === playerSprite.y && Math.abs(w.x - playerSprite.x) <= 1) ||
//   //   (w.x === playerSprite.x && Math.abs(w.y - playerSprite.y) <= 1)
//   // ));
//   const touching = walls.filter(w => playerTouchingWall(playerSprite, w))
//   return touching
// }

// function playerTouchingWall(p, w) {
//   return (
//     (w.y === p.y && Math.abs(w.x - p.x) <= 1) ||
//     (w.x === p.x && Math.abs(w.y - p.y) <= 1)
//   )
// }

function checkArrowIsInvalid() {
  const p = getFirst(player)
  const walls = getAll(wall)
  const arrowDeg = getArrowDeg()

  console.log("\n\n\nNEW CHECK")
  
  const someIsInvalid = walls.filter(w => {
    const isTouching = (
      (w.y === p.y && Math.abs(w.x - p.x) <= 1) ||
      (w.x === p.x && Math.abs(w.y - p.y) <= 1)
    )

    if (!isTouching) return false

    console.log(isTouching)
    
    let _angle = Math.atan2(p.y-w.y, w.x-p.x)*(180/Math.PI)
    angle = _angle < 0 ? _angle + 360 : _angle

    const distance = Math.abs(arrowDeg-angle) % 360
    console.log({ angle, _angle, distance, px: p.x, py: p.y, wx: w.x, wy: w.y, dx: p.x-w.x, dy: p.y-w.y })
    if (distance <= 45) return true
  }).length >= 1
  
  return someIsInvalid
}

function isEffectivelyZero(num) {
  const epsilon = 1e-10
  return Math.abs(num) < epsilon
}

// console.log(getParsedMap())

// setMapFromParsed(zoomMap(getParsedMap()))

fullMap = getParsedMap()
centerMap()

// console.log(`width: ${width()}`)
// setMapFromParsed(zoomMap(getParsedMap(), 1, 0))
