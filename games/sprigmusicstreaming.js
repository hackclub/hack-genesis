/*
@title: Sprig Music Streaming
@description: Sprig Music Streaming is about listening to different recreations of songs by selecting songs from three different albums. You can choose between MBDTF by Kanye West, Full Moon Fever by Tom Petty, or Immunity by Clairo. 
@author: jesse563
@tags: []
@addedOn: 2024-06-24
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

*/

const cursor = "c"
const back = "b"
const mbdtf = "m"
const immu = "i"
const fmf = "f"
const mu1 = "1"
const mu2 = "2"
const mu3 = "3"
const s1 = "4"
const s2 = "5"
const s3 = "6"
const mbg = "!"
const obg = "~"
const ibg = "@"
const fbg = "#"
const tut1 = "z"
const tut2 = "x"
const tut3 = "v"

setLegend(
  [ cursor, bitmap`
..000...........
..0110..........
..022100........
..0222110.......
..022222100.....
..0222222100....
..02222222100...
..022222222100..
..022222220000..
..02222220......
..022002210.....
..020.022210....
..00...02210....
.......00220....
........000.....
................` ],
  [ mbdtf, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333666666663333
33336CCC97763333
333360CC99763333
33336CCC99763333
33336C55F9963333
33336C75C9963333
33336CCC99C63333
3333666666663333
3333333333333333
3333333333333333
3333333333333333
3333333333333333` ],
  [ mu1, bitmap`
................
00.....00..0....
0.0...0.0..0....
0.0...0.0..0....
0.0...0.0..0....
0.0...0.0..0....
0.0...0.0..0....
0.0...0.0..0....
0.00.00.0..0....
0..0.0..0..0....
0..0.0..0..0....
0..0.0..0..0....
0..0.0..0..0....
0..0.0..0..00...
0...0...0...0000
................` ],
  [ mu2, bitmap`
................
..0...00000....0
..0..00...00...0
..0..0.....00...
..0..0..........
..0..00.........
..0...0.........
..0...00000.....
..0.......00....
..0........00...
..0.........0...
..0..0......0...
..0..0.....00...
.00...0...00...0
00.....0000....0
................` ],
  [ mu3, bitmap`
................
000000....0000..
..0..0..00...00.
..0....00.....0.
..0....0........
..0....0........
..0....0........
..0....0........
..0....0........
..0....0........
..0....0........
..0....0......0.
..0....00.....0.
..0..0..0....00.
000000..000000..
................` ],
  [ s1, bitmap`
5555555555555555
5777777777777775
5777777777777775
5777777777777775
5777722777777775
5777722277777775
5777722222777775
5777722222277775
5777722222277775
5777722222777775
5777722277777775
5777722777777775
5777777777777775
5777777777777775
5777777777777775
5555555555555555` ],
  [ s2, bitmap`
HHHHHHHHHHHHHHHH
H88888888888888H
H88888888888888H
H88888888888888H
H88882288888888H
H88882228888888H
H88882222288888H
H88882222228888H
H88882222228888H
H88882222288888H
H88882228888888H
H88882288888888H
H88888888888888H
H88888888888888H
H88888888888888H
HHHHHHHHHHHHHHHH` ],
  [ s3, bitmap`
DDDDDDDDDDDDDDDD
D44444444444444D
D44444444444444D
D44444444444444D
D44442244444444D
D44442224444444D
D44442222244444D
D44442222224444D
D44442222224444D
D44442222244444D
D44442224444444D
D44442244444444D
D44444444444444D
D44444444444444D
D44444444444444D
DDDDDDDDDDDDDDDD` ],
  [ mbg, bitmap`
3333333363663333
3333333336333333
3333333333333366
6333333333336633
3633333333363333
3363333336633333
3336333663333333
3333666333333333
3333333333333333
3333333333333333
3333333333333333
6333333333333333
3633333333333333
3366633333333336
3333666333333663
3333333633336333` ],
  [ back, bitmap`
1111111111111111
1222222222222221
1222202222222221
1222002222222221
1220000000002221
1200000000000221
1220002222200221
1222002222200221
1222202222200221
1222222222200221
1222222222200221
1220000000000221
1220000000022221
1222222222222221
1222222222222221
1111111111111111` ],
  [ obg, bitmap`
8888HHHHHHHH8888
888HHHHHHHHHH888
88HHHHHHHHHHHH88
8HHHHHHHHHHHHHH8
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
8HHHHHHHHHHHHHH8
88HHHHHHHHHHHH88
888HHHHHHHHHH888
8888HHHHHHHH8888
88888HHHHHH88888` ],
  [ immu, bitmap`
C9CCC111C1111111
C99CC111C1111111
9919CC11C1111111
9999CC11C1111111
9999CC11C1111111
9996CC11C1111111
16661CC1C1111111
16661CC111111111
2662222211111111
2222222221111111
2222222221111111
2222222222111111
2212222122211111
2122222129211111
2221222299911111
2222222299911111` ],
  [ ibg, bitmap`
2222222222228822
2222222222888822
2222222222822222
2222222222828882
2222888222828288
2228828882822288
2288222282888882
2282288282228822
2282282882222222
2282288828822222
2288222228222222
2228882888222222
2222288822222222
2222222222222222
2222222222222222
2222222222222222` ],
  [ fmf, bitmap`
2222222222222222
2222222222222222
2222000000002222
2222080808802222
2222000000002222
2222888888882222
2222666600662222
2222666000662222
2222666006662222
2222666000662222
2222000000002222
2222000000002222
2222777777772222
2222777777772222
2222222222222222
2222222222222222` ],
  [ tut1, bitmap`
................
.000.000.000.0.0
.0.0..0..0.0.00.
.000..0..0...00.
.0...000.000.0.0
................
.000.0..0.......
.0.0.00.0.......
.000.0.00.......
.0.0.0..0.......
................
000.0..00..0.0..
0.0.0..0.0.0.0..
000.0..00..0.0..
0.0.0..0.0.0.0..
0.0.00.00...0...` ],
  [ tut2, bitmap`
222.2..222.2.2..
2.2.2..2.2..2...
222.2..222..2...
2...22.2.2..2...
................
222....2222.....
2.2....2..2.2222
222....22...2..2
2.2.....222.2..2
..........2.2..2
........222.2222
00000...........
0.0.0...22.2.222
0.0.0...22.2.2..
0.0.0...2.22.2.2
0.0.0...2.22.222` ],
  [ tut3, bitmap`
................
................
.000.0..0.00000.
.0...00.0...0...
.000.00.0...0...
.0...0000...0...
.0...0.00.0.0...
.000.0..0.000...
................
..0000..0...0.0.
.00..00.0...0.0.
.0....0..0.0..0.
.0....0...0...0.
.0....0...0.....
.00..00...0...0.
..0000....0.....` ],
  [ fbg, bitmap`
666F6666666F6666
66666666666F6666
66666666666F6666
6666666666FFF666
666666666FFFFF66
F66666FFFFFFFFFF
666666666FFFFF66
6666666666FFF666
66666666666F6666
66666666666F6666
666F6666666F6666
666F666666666666
66FFF66666666666
FFFFFFF666666666
66FFF66666666666
666F666666666666` ]
)

setSolids([])

let level = 0
const levels = [
  map`
~123~
~c~~~
~~f~~
~m~i~
~zxv~`,
  map`
c!m!b
!!!!!
!4!5!
!!6!!
!!!!!`,
  map`
c@i@b
@@@@@
@4@5@
@@6@@
@@@@@`,
  map`
c#f#b
#####
#4#5#
##6##
#####`
]

setMap(levels[level])
setBackground(obg)

onInput("w", () => {
  getFirst(cursor).y -= 1
})

onInput("s", () => {
  getFirst(cursor).y += 1
})

onInput("a", () => {
  getFirst(cursor).x -= 1
})

onInput("d", () => {
  getFirst(cursor).x += 1
})

afterInput(() => {
  if (level > 0) {
    if (getFirst(cursor).x == getFirst(back).x && getFirst(cursor).y == getFirst(back).y) {
      level = 0
      setMap(levels[level])
      setBackground(obg)
    }
  }
  if (level == 0) {
    if (getFirst(cursor).x == getFirst(mbdtf).x && getFirst(cursor).y == getFirst(mbdtf).y) {
      level+=1
      setMap(levels[level])
      setBackground(mbg)
    }
    else if (getFirst(cursor).x == getFirst(immu).x && getFirst(cursor).y == getFirst(immu).y) {
      level = 2
      setMap(levels[level])
      setBackground(ibg)
    }
    else if (getFirst(cursor).x == getFirst(fmf).x && getFirst(cursor).y == getFirst(fmf).y) {
      level = 3
      setMap(levels[level])
      setBackground(fbg)
    }
  }
  if (level == 1) {
    if (getFirst(cursor).x == getFirst(s1).x && getFirst(cursor).y == getFirst(s1).y) {
      playTune(tune`
555.5555555555555: E5^555.5555555555555,
555.5555555555555,
555.5555555555555: E5^555.5555555555555,
555.5555555555555,
555.5555555555555: E5^555.5555555555555,
555.5555555555555,
555.5555555555555: E4^555.5555555555555,
555.5555555555555,
555.5555555555555: D5^555.5555555555555,
555.5555555555555,
555.5555555555555: D5^555.5555555555555,
555.5555555555555,
555.5555555555555: D5^555.5555555555555,
555.5555555555555,
555.5555555555555: D4^555.5555555555555,
555.5555555555555,
555.5555555555555: C5^555.5555555555555,
555.5555555555555,
555.5555555555555: C5^555.5555555555555,
555.5555555555555,
555.5555555555555: C5^555.5555555555555,
555.5555555555555,
555.5555555555555: C4^555.5555555555555,
555.5555555555555,
555.5555555555555: A4^555.5555555555555,
555.5555555555555,
555.5555555555555: A4^555.5555555555555,
555.5555555555555,
555.5555555555555: A4^555.5555555555555,
555.5555555555555,
555.5555555555555: E5^555.5555555555555,
555.5555555555555`)
    }
    else if (getFirst(cursor).x == getFirst(s2).x && getFirst(cursor).y == getFirst(s2).y) {
      playTune(tune`
254.23728813559322: B4^254.23728813559322,
254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322,
254.23728813559322: B4^254.23728813559322,
254.23728813559322,
254.23728813559322: B4^254.23728813559322 + D5^254.23728813559322,
254.23728813559322: B4^254.23728813559322 + D5^254.23728813559322,
254.23728813559322: D5^254.23728813559322 + B4^254.23728813559322,
254.23728813559322: D5^254.23728813559322 + B4^254.23728813559322,
254.23728813559322: A5^254.23728813559322 + B4^254.23728813559322,
254.23728813559322: G5^254.23728813559322 + B4^254.23728813559322,
254.23728813559322,
254.23728813559322: B4^254.23728813559322 + G5^254.23728813559322,
254.23728813559322: B4^254.23728813559322 + G5^254.23728813559322,
254.23728813559322: B4^254.23728813559322 + G5^254.23728813559322,
254.23728813559322: B4^254.23728813559322 + G5^254.23728813559322,
254.23728813559322: B4^254.23728813559322 + F5^254.23728813559322,
254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
254.23728813559322: E5^254.23728813559322 + G4^254.23728813559322,
508.47457627118644`)
    }  
    else if (getFirst(cursor).x == getFirst(s3).x && getFirst(cursor).y == getFirst(s3).y) {
      playTune(tune`
315.7894736842105: B4/315.7894736842105,
315.7894736842105: C5/315.7894736842105 + C4-315.7894736842105,
315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105,
315.7894736842105: B4/315.7894736842105,
315.7894736842105: C5/315.7894736842105 + C4-315.7894736842105,
315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105,
315.7894736842105: B5/315.7894736842105 + B4-315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105: E5/315.7894736842105 + E4-315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105,
315.7894736842105: B5/315.7894736842105 + B4-315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105: G5/315.7894736842105 + G4-315.7894736842105,
315.7894736842105: F5/315.7894736842105 + F4-315.7894736842105,
315.7894736842105: E5/315.7894736842105 + E4-315.7894736842105,
315.7894736842105: C5/315.7894736842105 + C4-315.7894736842105,
1263.157894736842`)
    }  
  }
  if (level == 2) {
    if (getFirst(cursor).x == getFirst(s1).x && getFirst(cursor).y == getFirst(s1).y) {
      playTune(tune`
315.7894736842105: F4^315.7894736842105 + C5^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + C5^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + C5^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + C5^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + B4^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + B4^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + B4^315.7894736842105,
315.7894736842105: F4^315.7894736842105 + B4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + G4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + G4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + G4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + G4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + A4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + A4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + A4^315.7894736842105,
315.7894736842105: E4^315.7894736842105 + A4^315.7894736842105,
315.7894736842105: C5^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: C5^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: C5^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: C5^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: B4^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: B4^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: B4^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: B4^315.7894736842105 + F4^315.7894736842105,
315.7894736842105: G4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: G4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: G4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: G4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: A4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: A4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: A4^315.7894736842105 + E4^315.7894736842105,
315.7894736842105: A4^315.7894736842105 + E4^315.7894736842105`)
    }
    else if (getFirst(cursor).x == getFirst(s2).x && getFirst(cursor).y == getFirst(s2).y) {
      playTune(tune`
322.5806451612903: E5^322.5806451612903,
322.5806451612903,
322.5806451612903: C5^322.5806451612903,
322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: C5^322.5806451612903,
322.5806451612903: A4^322.5806451612903,
322.5806451612903: G4^322.5806451612903,
322.5806451612903,
322.5806451612903: E5^322.5806451612903,
322.5806451612903,
322.5806451612903: C5^322.5806451612903,
322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903: B4^322.5806451612903,
322.5806451612903,
322.5806451612903: A4^322.5806451612903,
322.5806451612903: E5^322.5806451612903,
322.5806451612903: E5^322.5806451612903,
322.5806451612903: E5^322.5806451612903,
322.5806451612903: E5^322.5806451612903,
322.5806451612903: G4^322.5806451612903,
322.5806451612903: F4^322.5806451612903`)
    }  
    else if (getFirst(cursor).x == getFirst(s3).x && getFirst(cursor).y == getFirst(s3).y) {
      playTune(tune`
206.89655172413794: F5/206.89655172413794,
206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794,
206.89655172413794: C5/206.89655172413794,
413.7931034482759,
206.89655172413794: B4/206.89655172413794,
206.89655172413794: B4/206.89655172413794,
206.89655172413794: B4/206.89655172413794,
206.89655172413794,
206.89655172413794: C5/206.89655172413794,
206.89655172413794,
206.89655172413794: D5/206.89655172413794,
413.7931034482759,
206.89655172413794: F5/206.89655172413794,
206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794: D5/206.89655172413794,
206.89655172413794,
206.89655172413794: C5/206.89655172413794,
1448.2758620689656`)
    }  
  }
  if (level == 3) {
    if (getFirst(cursor).x == getFirst(s1).x && getFirst(cursor).y == getFirst(s1).y) {
      playTune(tune`
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: G4^340.90909090909093 + G5~340.90909090909093,
340.90909090909093: A4^340.90909090909093 + A5~340.90909090909093,
340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
681.8181818181819,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: G4^340.90909090909093 + G5~340.90909090909093,
340.90909090909093,
340.90909090909093: A4^340.90909090909093 + A5~340.90909090909093,
340.90909090909093,
340.90909090909093: A4^340.90909090909093 + A5~340.90909090909093,
340.90909090909093,
340.90909090909093: A4^340.90909090909093 + A5~340.90909090909093,
340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: F4^340.90909090909093 + F5~340.90909090909093,
340.90909090909093: F4^340.90909090909093 + G4^340.90909090909093 + F5~340.90909090909093 + G5~340.90909090909093,
2045.4545454545455`)
    }
    else if (getFirst(cursor).x == getFirst(s2).x && getFirst(cursor).y == getFirst(s2).y) {
      playTune(tune`
309.2783505154639: B4^309.2783505154639,
309.2783505154639: D5^309.2783505154639,
309.2783505154639,
309.2783505154639: G4^309.2783505154639 + B4^309.2783505154639 + E5^309.2783505154639,
309.2783505154639: D5^309.2783505154639 + A4^309.2783505154639,
309.2783505154639: D4^309.2783505154639 + G4^309.2783505154639 + B4^309.2783505154639,
309.2783505154639,
309.2783505154639: G4^309.2783505154639,
309.2783505154639: A4^309.2783505154639,
309.2783505154639,
309.2783505154639: E4^309.2783505154639 + G4^309.2783505154639 + B4^309.2783505154639,
309.2783505154639: D4^309.2783505154639 + A4^309.2783505154639,
309.2783505154639: D4^309.2783505154639 + G4^309.2783505154639,
309.2783505154639,
309.2783505154639: B4^309.2783505154639,
309.2783505154639: D5^309.2783505154639,
309.2783505154639,
309.2783505154639: G4^309.2783505154639 + B4^309.2783505154639 + E5^309.2783505154639,
309.2783505154639: D5^309.2783505154639,
309.2783505154639: D5^309.2783505154639 + A4^309.2783505154639,
309.2783505154639: B4^309.2783505154639,
309.2783505154639: A4^309.2783505154639,
309.2783505154639: C4^309.2783505154639 + A4^309.2783505154639,
309.2783505154639: G4^309.2783505154639,
309.2783505154639: G4^309.2783505154639,
309.2783505154639,
309.2783505154639: G4^309.2783505154639,
309.2783505154639: G4^309.2783505154639,
309.2783505154639,
309.2783505154639: E4^309.2783505154639 + G4^309.2783505154639 + B4^309.2783505154639,
309.2783505154639: D4^309.2783505154639 + A4^309.2783505154639,
309.2783505154639: D4^309.2783505154639 + G4^309.2783505154639`)
    }  
    else if (getFirst(cursor).x == getFirst(s3).x && getFirst(cursor).y == getFirst(s3).y) {
      playTune(tune`
277.77777777777777,
277.77777777777777: C5^277.77777777777777 + E4^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
277.77777777777777: C5^277.77777777777777 + G4^277.77777777777777,
277.77777777777777: D4^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
277.77777777777777: G4^277.77777777777777,
277.77777777777777: F4^277.77777777777777 + C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
277.77777777777777: F4^277.77777777777777,
277.77777777777777: F4^277.77777777777777,
277.77777777777777: E4^277.77777777777777 + C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: C5^277.77777777777777,
277.77777777777777: A4^277.77777777777777,
2222.222222222222`)
    }  
  }
})
