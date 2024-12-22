/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Magic
@author: Layan Jethwa
@tags: []
@addedOn: 2024-00-00
*/

var isdead = false

const platform = "m"
const platform_l = "l"
const platform_r = "r"
const platform_lava = "7"
const platform_lava2 = "8"
const platform_lava3 = "9"
const ladder = "a"
const player = "p"
const player2 = "!"
const player3 = "£"
const player4 = "$"
const player5 = "%"
const player6 = "^"
const background = "b"
const n_ladder = "n"
const o_ladder = "o"
const wall = "w"
const t_wall = "t"
const lava = "v"
const stone = "1"
const stone2 = "2"
const stone3 = "3"
const under = "4"
const under2 = "5"
const under3 = "6"
const enemy = "e"
const dead = "d"
const key = "k"
const door = "h"
const playerb = '*'
const playerb2 = '('
const playerb3 = ')'
const playerb4 = '-'
const red = "+"
const door_o = "_"
const door_o2 = "="
const heart = "#"
const door_block = "@"
const door_red = "["
const door_green = "]"
const key_red = "{"
const key_green = "}"
const door_red_o = "<"
const door_red_o2 = "/"
const door_green_o = ">"
const door_green_o2 = "?"
const lava_pool = ":"
const geyser = "g"
const platform_geyser = "z"
const platform_geyser2 = "x"
const platform_geyser3 = "c"
const bridge = "i"
const shoot_geyser = "~"
const shoot_geyser2 = ";"
const shoot_geyser_bridge = "|"
const bridge_l = "L"
const bridge_r = "R"
const door_purple = "Q"
const door_orange = "A"
const key_purple = "W"
const key_orange = "S"
const door_purple_o = "E"
const door_purple_o2 = "T"
const door_orange_o = "D"
const door_orange_o2 = "F"
const rock = "Y"
const stone_rock = "U"

setLegend(
  [ platform, bitmap`
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
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ wall, bitmap`
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
....LLLLLLLL....
...LLLLLLLLLL...
..LLLLLLLLLLLL..
..LLLLLLLLLLLL..
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ t_wall, bitmap`
11LLLLLLLLLLLL11
L1LLLLLLLLLLLL1L
11.LLLLLLLLLL.1L
1...LLLLLLLL...1
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....
.....L1LL1L.....`],
  [ ladder, bitmap`
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ n_ladder, bitmap`
LL19C......9C111
1119C999CCCCC1LL
11.9CCCCCCCCC.1L
1..9C......9C..1
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...
...9C......9C...
...9C999CCCCC...
...9CCCCCCCCC...
...9C......9C...`],
  [ o_ladder, bitmap`
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
2229C......9C222
2229C999CCCCC222
2229CCCCCCCCC222
2229C......9C222`],
  [ player, bitmap`
......C22C......
.....C2020C.....
.....C2992C.....
......3223......
......2332......
......2202......
.......22.......
......2222......
.....220222.....
.....222222.....
.....722027.....
......7227......
................
................
................
................`],
  [ player2, bitmap`
......C27C......
.....C7020C.....
.....C2992C.....
......3723......
......2337......
......7202......
.......77.......
......2222......
.....270272.....
.....222722.....
....577202755...
..5555777755555.
................
................
................
................`],
  [ player3, bitmap`
................
................
................
......CCCC......
.....C2070C.....
.....C7997C.....
......3773......
......7332......
.....277072.....
....57207255....
..55577202755...
.5555577775555..
................
................
................
................`],
  [ player4, bitmap`
................
................
................
................
......CCCC......
.....C7090C.....
.....C3779C.....
......7333......
.....577035.....
....57707755....
..55577202755...
.5555577775555..
................
................
................
................`],
  [ player5, bitmap`
................
................
................
................
................
................
................
......CCCC......
.....C0907C.....
...55C3973C55...
..555773077555..
.55555777755555.
................
................
................
................`],
  [ player6, bitmap`
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
...555C0CC555...
.5555C99535555..
................
................
................
................`],
  [ playerb, bitmap`
......CCCC......
.....C2222C.....
.....C2222C.....
......3233......
......2322......
......2222......
.......22.......
......2222......
.....222222.....
.....222222.....
.....722227.....
......7227......
................
................
................
................`],
  [ playerb2, bitmap`
................
................
.......CC.......
......C22C......
......C22C......
......3233......
.......32.......
.......22.......
......2222......
......2222......
......7227......
.......77.......
................
................
................
................`],
  [ playerb3, bitmap`
................
................
................
................
................
.......CC.......
......C22C......
......3233......
.......32.......
......2222......
......2222......
.......77.......
................
................
................
................`],
  [ playerb4, bitmap`
................
................
................
................
................
................
................
................
.......CC.......
.......33.......
.......32.......
.......22.......
................
................
................
................`],
  [ enemy, bitmap`
......0000......
.....030030.....
.....000000.....
.....003300.....
.....030030.....
......0000......
....03099030.L..
...6039996030L..
.....066990LL1L.
.....000000..L1L
.....00..00...L1
.....00..00.....
................
................
................
................`],
  [ key, bitmap`
................
................
................
................
................
..666...........
..6.66666666....
..666....6.6....
.........6.6....
................
................
................
................
................
................
................`],
  [ key_red, bitmap`
................
................
................
................
................
..333...........
..3.33333333....
..333....3.3....
.........3.3....
................
................
................
................
................
................
................`],
  [ key_green, bitmap`
................
................
................
................
................
..444...........
..4.44444444....
..444....4.4....
.........4.4....
................
................
................
................
................
................
................`],
  [ key_purple, bitmap`
................
................
................
................
................
..HHH...........
..H.HHHHHHHH....
..HHH....H.H....
.........H.H....
................
................
................
................
................
................
................`],
  [ key_orange, bitmap`
................
................
................
................
................
..999...........
..9.99999999....
..999....9.9....
.........9.9....
................
................
................
................
................
................
................`],
  [ background, bitmap`
5555555555555555
5555555555555555
5556555555555555
5562655555555555
5556555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555255555
5555555552725555
5555555555255555
5555555555555555
5555555555555555
5555555555555555`],
  [ heart, bitmap`
................
................
................
................
................
....33....33....
...3333..3333...
...3223333333...
...322333333C...
....3333333C....
.....33333C.....
......333C......
.......3C.......
................
................
................`],
  [ lava, bitmap`
1111193333311LLL
1LL1133339311111
1L11L9933339LLL1
L11LL99339991111
11LLL9399939L1LL
LLLL933399939L11
LLL9339996999LLL
LLL99999999999LL
LLL99696669969LL
LLL99966669999LL
LLL69666666699LL
LL699669969669LL
LL666696666696LL
L66996966696666L
116116L61169L116
1L116LL69LL11L69`],
  [ stone, bitmap`
11111111111LLL11
11LLL1111LL11111
1111111111111111
11LLLLLL11LLL111
1111111111111111
L1111111LL11111L
L1LL1L11111LLLLL
L11111LLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ stone2, bitmap`
111111LLL1111111
111111111L111111
1111111111111111
1LLL11111111LLL1
1111111111111111
LL11111L11L11111
LLLL111LL111L11L
L11LLLLLLLLLLLLL
LLLLLLLL1111LLLL
LLLLLLLLLLL1LLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ stone3, bitmap`
1111111111111111
1111111111111LL1
1111LL1111111111
111LL1111LL11111
1111111111111111
L11LL11111L11LLL
LL111LLLL11LLL1L
LLL11LLLLLLLLL1L
LLLL1LLL111LLLLL
LLLL1LLLLLLLLLLL
LLLL11LLLLLL11LL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ under, bitmap`
11111111111LLL11
11LLL1111LL11111
1111111111111111
11LLLLLL11LLL111
1111111111111111
.1111111LL11111.
..LL1L11111.....
...11111........
................
................
................
................
................
................
................
................`],
  [ under2, bitmap`
111111LLL1111111
111111111L111111
1111111111111111
1LLL11111111LLL1
1111111111111111
..11111.11L11111
....111..111.11.
................
................
................
................
................
................
................
................
................`],
  [ under3, bitmap`
1111111111111111
1111111111111LL1
1111LL1111111111
111LL1111LL11111
1111111111111111
.11LL11111L11...
..111....11.....
...11...........
................
................
................
................
................
................
................
................`],
  [ platform_l, bitmap`
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
22222222222221L1
222222222221111L
222222222221LL11
222222222211111L`],
  [ platform_r, bitmap`
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
1L11222222222222
L1LLL22222222222
1111112222222222
LLL1L11222222222`],
  [ platform_lava, bitmap`
.11.1..11..1L1.L
.L1.1..LLL.11.L1
.1L..1.1L.....1L
..1.L1..1.....11
....LLL...L1....
....1L1...L11...
...........11...
........LL1.....
....11..111.....
.....11..1.L1...
.....LL....1L...
...........1....
LL16399633339311
11113993399331LL
1LL1133993631111
1111113936311LL1`],
  [ platform_lava2, bitmap`
.............L11
.LLL...11....LL1
.L11L.LL1.LL..L.
.L111.L...LL1...
...........11...
......L11.......
..L.1.LL........
..LL1...LL1.....
..L11...L11.....
......LL........
......L11.......
................
LL13393336399311
11113633993361LL
1LL1139399331111
1111113336311LL1`],
  [ platform_lava3, bitmap`
111L...L.....LLL
L11L.L11.....1L.
LL...L1L.....111
.....L....LL....
L1L...L...L11...
L11..L11..L1....
.1...LLL........
L.......LLL.....
...L1L..11L.....
...11L...1L.....
....L...........
................
LL13633339339311
11113993639331LL
1LL1199393361111
1111116399311LL1`],
  [ dead, bitmap`
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
0000000000000000`],
  [ door, bitmap`
................
.......00.......
......0660......
....00666600....
....066CC660....
....06CCCC60....
...066CCCC660...
...06CCCCCC60...
...06CCCC0C60...
...06CCCC6C60...
...06CCCCCC60...
...06CCCCCC60...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ red, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [ door_o, bitmap`
................
........666.....
.....666CC6.....
....06CCCC60....
....6CCCCC60....
....6CCCCC60....
...06CCCCC650...
...06CCCCC650...
...06CCCC0650...
...06CCCC6650...
...06CCCCC650...
...06CCCCC650...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_o2, bitmap`
................
.......00.......
......0550......
....00555500....
....06555550....
....06555550....
...06C5555550...
...06C5555550...
...0605555550...
...0665555550...
...06C5555550...
...06C5555550...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_block, bitmap`
11111111111LLL11
11LLL1111LL11111
1111111111111111
11LLLLLL11LLL111
1111111111111111
.1111111LL1111LL
..LL1L1111111111
..111111111LL111
..1111111111111.
...LL11LL11111..
...1111LLL111...
....11111111....
....11L11LL1....
......111.......
.......LL.......
.......1........`],
  [ door_red, bitmap`
................
.......00.......
......0330......
....00333300....
....033CC330....
....03CCCC30....
...033CCCC330...
...03CCCCCC30...
...03CCCC0C30...
...03CCCC3C30...
...03CCCCCC30...
...03CCCCCC30...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_green, bitmap`
................
.......00.......
......0440......
....00444400....
....044CC440....
....04CCCC40....
...044CCCC440...
...04CCCCCC40...
...04CCCC0C40...
...04CCCC4C40...
...04CCCCCC40...
...04CCCCCC40...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_red_o, bitmap`
................
........333.....
.....333CC3.....
....03CCCC30....
....3CCCCC30....
....3CCCCC30....
...03CCCCC350...
...03CCCCC350...
...03CCCC0350...
...03CCCC3350...
...03CCCCC350...
...03CCCCC350...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_red_o2, bitmap`
................
.......00.......
......0550......
....00555500....
....03555550....
....03555550....
...03C5555550...
...03C5555550...
...0305555550...
...0335555550...
...03C5555550...
...03C5555550...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_green_o, bitmap`
................
........444.....
.....444CC4.....
....04CCCC40....
....4CCCCC40....
....4CCCCC40....
...04CCCCC450...
...04CCCCC450...
...04CCCC0450...
...04CCCC4450...
...04CCCCC450...
...04CCCCC450...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_green_o2, bitmap`
................
.......00.......
......0550......
....00555500....
....04555550....
....04555550....
...04C5555550...
...04C5555550...
...0405555550...
...0445555550...
...04C5555550...
...04C5555550...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_purple, bitmap`
................
.......00.......
......0HH0......
....00HHHH00....
....0HHCCHH0....
....0HCCCCH0....
...0HHCCCCHH0...
...0HCCCCCCH0...
...0HCCCC0CH0...
...0HCCCCHCH0...
...0HCCCCCCH0...
...0HCCCCCCH0...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_orange, bitmap`
................
.......00.......
......0990......
....00999900....
....099CC990....
....09CCCC90....
...099CCCC990...
...09CCCCCC90...
...09CCCC0C90...
...09CCCC9C90...
...09CCCCCC90...
...09CCCCCC90...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_purple_o, bitmap`
................
........HHH.....
.....HHHCCH.....
....0HCCCCH0....
....HCCCCCH0....
....HCCCCCH0....
...0HCCCCCH50...
...0HCCCCCH50...
...0HCCCC0H50...
...0HCCCCHH50...
...0HCCCCCH50...
...0HCCCCCH50...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_purple_o2, bitmap`
................
.......00.......
......0550......
....00555500....
....0H555550....
....0H555550....
...0HC5555550...
...0HC5555550...
...0H05555550...
...0HH5555550...
...0HC5555550...
...0HC5555550...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_orange_o, bitmap`
................
........999.....
.....999CC9.....
....09CCCC90....
....9CCCCC90....
....9CCCCC90....
...09CCCCC950...
...09CCCCC950...
...09CCCC0950...
...09CCCC9950...
...09CCCCC950...
...09CCCCC950...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ door_orange_o2, bitmap`
................
.......00.......
......0550......
....00555500....
....09555550....
....09555550....
...09C5555550...
...09C5555550...
...0905555550...
...0995555550...
...09C5555550...
...09C5555550...
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [ lava_pool, bitmap`
1111116333911111
LL11633363331LL1
1113393333393111
1LL9939399339311
1139399993933931
.11933999393931L
..L193339399LL11
..11966999669911
..1LL6966LL9111.
...11L6996L111..
...111LL6L111...
....1166L111....
....111L61L1....
......161.......
.......LL.......
.......1........`],
  [ geyser, bitmap`
1111172727711LLL
1LL1127775711111
1L11L7275577LLL1
L11LL77727271111
11LLL2257577L1LL
LLLL755725255L11
LLL7752797727LLL
LLL97973775532LL
LLL32323233533LL
LLL99333923323LL
LLL96239293933LL
LL699669369699LL
LL626699999626LL
L66996262692666L
116116L61169L116
1L116LL69LL11L69`],
  [ platform_geyser, bitmap`
.11.1..11..1L1.L
.L1.1..LLL.11.L1
.1L..1.1L.....1L
..1.L1..1.....11
....LLL...L1....
....1L1...L11...
...........11...
........LL1.....
....11..111.....
.....11..1.L1...
.....LL....1L...
...........1....
LL17277772777211
11117552752551LL
1LL1172755771111
1111117572711LL1`],
  [ platform_geyser2, bitmap`
.............L11
.LLL...11....LL1
.L11L.LL1.LL..L.
.L111.L...LL1...
...........11...
......L11.......
..L.1.LL........
..LL1...LL1.....
..L11...L11.....
......LL........
......L11.......
................
LL17757772755711
11117277557721LL
1LL1175755771111
1111117772711LL1`],
  [ platform_geyser3, bitmap`
111L...L.....LLL
L11L.L11.....1L.
LL...L1L.....111
.....L....LL....
L1L...L...L11...
L11..L11..L1....
.1...LLL........
L.......LLL.....
...L1L..11L.....
...11L...1L.....
....L...........
................
LL17277775775711
11117557275771LL
1LL1155757721111
1111112755711LL1`],
  [ bridge, bitmap`
................
................
................
................
................
................
................
................
................
CCCCCCCC999CCCCC
C999CCCCCCCCCCCC
CCCCCCCCCCCC999C
................
................
................
................`],
  [ bridge_l, bitmap`
................
................
................
................
................
................
................
................
................
...............C
..............CC
.......CCCCCCCCC
2222222CC2CCC1L1
2222222C92C1111L
2222222C92C1LL11
2222222CC211111L`],
  [ bridge_r, bitmap`
................
................
................
................
................
................
................
................
................
C...............
CCC.............
CCCCCCCCC.......
1L11CCCCC2222222
L1LLL22C92222222
1111112C92222222
LLL1L11CC2222222`],
  [ shoot_geyser, bitmap`
L..2777275277.L.
11.7572775772.L1
LL.2527775727...
.L.7575775777..L
L117525725777.L1
.1L7575275727LL1
...7575775752...
.L.2525775757...
11.7575272757...
L1.7525777757..L
.L.7775777727.L1
...7722222757..L
LL17277272777...
11117552752551LL
1LL1172755771111
1111117572711LL1`],
  [ shoot_geyser2, bitmap`
L..2777275277.L.
11.7572775772.L1
LL.2527775727...
.L.75757757571.L
L117525725757.L1
.1L7575275757.L1
...7575775252...
.L.2525775757...
11.7575275757...
L1.752577525711L
.L.2575775752.L1
...7525225757..L
LL.7575275757...
11.252527525711L
.L.7575775727.11
...7527277272...`],
  [ shoot_geyser_bridge, bitmap`
11.7277277757..1
LL17577572757.1L
...7577577577.1L
.L175725725721..
1L.7572577577.11
.1.7727757527.L1
...F257C57C27.L1
..C722F77C55FC..
.CF775CC57272FC.
CCCCC775775C5CFC
CFC2277522572CCF
CFC7525577525CCF
L1L7575277575L11
1117275277575L1L
1L17577272775111
11L77777772251L1`],
  [ rock, bitmap`
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
  [ stone_rock, bitmap`
11111111111LLL11
11LLL1111LL11111
1111111111111111
11LLLLLL11LLL111
1111111111111111
11111111LL1111LL
11LL1L1111111111
11111111111LL111
1111111111111111
111LL11LL11111LL
1111111LLL1111L1
11LL111111111111
111111L11LL11LL1
1L111111111111L1
1LL1111LL1111111
111111111111L111`]
);

let level = 4
const levels = [
  map`
mmmommmmmh
465nt65464
momawommom
6nt65n46n4
oawomammao
n54nt6546n
ammawmomma
546546n545
mml9rmammm
121v312312`,
  map`
mmommwommh
64n6t5n654
omamwmamom
n56@4654n5
amm[mommam
64545n4@46
mommmam]mo
5n6t56454n
mamwml9rma
123132v312`,
  map`
ommw.wommh
n6@6.6n464
amQLiRaomm
6564.54n@6
mmoLiRmaAo
65nt.t@t6n
moaw.wowma
5n65.5n465
mamlzrammm
1212g32312`,
  map`
mmmommmomh
564n5t4n64
mol7rwmamo
5n4:6t645n
oamQmwl7ra
n546546:45
ammoLiR]mo
645nU7UU6n
mml7Uv3Uma
132v3YY221`
]

let lives = 3

function level_setup(level) {
  if (level == 4) {
    win()
  } else {
    clearText()
    haswon = false
    isdead = false
    exit = false
    jumping = false
    climbing = false
    collided = false
    landed = true
    setMap(levels[level])
    setBackground(background)
    for (let i = 0; i < lives; i++) {
      addSprite(i,9,"#")
    }
    getlava = getAll(lava)
    getpool = getAll(lava_pool)
    lava_tile = getlava.concat(getpool)
    geyser_tile = getFirst(geyser)
    inventory = []
    inventory_length = 0
    if (level == 0) {
      addSprite(0,8,"p")
      addSprite(6,4,"e")
      addSprite(6,4,"k")
      addSprite(2,2,"e")
    } else if (level == 1) {
      addSprite(0,8,"p")
      addSprite(2,6,"e")
      addSprite(4,0,"e")
      addSprite(5,2,"}")
      addSprite(4,8,"{")
      addSprite(3,0,"k")
    } else if (level == 2) {
      addSprite(0,8,"p")
      addSprite(8,2,"e")
      addSprite(9,8,"e")
      addSprite(6,6,"W")
      addSprite(2,0,"S")
      addSprite(8,6,"k")
    } else if (level == 3) {
      addSprite(0,8,"p")
      addSprite(6,4,"}")
      addSprite(8,8,"W")
      addSprite(4,4,"k")
      addSprite(6,2,"e")
      addSprite(0,0,"e")
    }
    movedirs = Array.apply(null, Array(getAll(enemy).length)).map(Number.prototype.valueOf,-1)
  }
}

level_setup(level)

let lava_switch = ["7","8","9"]
let geyser_switch = ["z","x","c"]
var lava_index = 0
var geyser_index = 0
var geyser_on = false
var geyser_bubbling = false

function geyser_eruption_kill() {
  if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (geyser_tile)) {
    if ((tilesWith(player,shoot_geyser).length == 1)||(tilesWith(player,shoot_geyser2).length == 1)||(tilesWith(player,shoot_geyser_bridge).length == 1)) {
      tile = getFirst(player)
      setTimeout(() => {
        setBackground(red)
        collided = true
        if (getFirst(player)) {
          getFirst(player).remove()
        }
      }, 300);
      for (let i = 0; i < melting.length; i++) {
        setTimeout(() => {
          if (i > 0) {
            if (getFirst(melting[i-1])) {
              getFirst(melting[i-1]).remove()
            }
          } else {
            if (getFirst(player)) {
              getFirst(player).remove()
            }
          }
          addSprite(tile.x,tile.y,melting[i])
        }, i*300);
      }
      setTimeout(() => {
        die()
      }, 2000);
    }
  }
}

function geyser_erupt() {
  if (geyser_tile) {
    kill_check = setInterval(geyser_eruption_kill, 10);
    geyser_on = true
    clearTile(geyser_tile.x, geyser_tile.y-1)
    addSprite(geyser_tile.x, geyser_tile.y-1, shoot_geyser)
    setTimeout(() => {
      if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (geyser_tile)) {
        clearTile(geyser_tile.x, geyser_tile.y-1)
        addSprite(geyser_tile.x, geyser_tile.y-1, platform_geyser)
      }
      clearInterval(kill_check)
    },1700);
    for (let i = 7; i >= 0; i--) {
      setTimeout(() => {
        if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (geyser_tile)) {
          if(getTile(geyser_tile.x,i).some(s => s.type === bridge)) {
            getTile(geyser_tile.x, i).find(s => s.type === bridge).remove()
            addSprite(geyser_tile.x,i,shoot_geyser_bridge)
          } else {
            clearTile(geyser_tile.x,i)
            addSprite(geyser_tile.x,i,shoot_geyser2)
          }
        }
      },(7-i)*100);
      
      setTimeout(() => {
        if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (geyser_tile)) {
          if(getTile(geyser_tile.x,i).some(s => s.type === shoot_geyser_bridge)) {
            getTile(geyser_tile.x, i).find(s => s.type === shoot_geyser_bridge).remove()
            addSprite(geyser_tile.x,i,bridge)
          } else {
            clearTile(geyser_tile.x,i)
          }
        }
      },800+(i*100));
    }
  }
}
  
function level_animation(){
  if ((!(isdead)) && (tilesWith(player).length == 1) && (!(exit))){
    if (lava_tile) {
      for (let i = 0; i < lava_tile.length; i++) {
        if (!(getFirst(player).x == lava_tile[i].x && getFirst(player).y == lava_tile[i].y-1)){
          clearTile(lava_tile[i].x, lava_tile[i].y-1)
          addSprite(lava_tile[i].x, lava_tile[i].y-1,lava_switch[lava_index])
          lava_index += 1
          lava_index %= 3
        }
      }
    }
    if (geyser_tile) {
      if ((!(getFirst(player).x == geyser_tile.x && getFirst(player).y == geyser_tile.y-1)) && (!(geyser_on))){
        clearTile(geyser_tile.x, geyser_tile.y-1)
        addSprite(geyser_tile.x, geyser_tile.y-1,geyser_switch[geyser_index])
        geyser_index += 1
        geyser_index %= 3
        if ((Math.floor(Math.random()*3) == 2) && (!(geyser_bubbling))) {
          geyser_bubbling = true
          let timer = Math.floor((Math.random()*5000)+5000);
          setTimeout(() => {
            geyser_erupt()
          }, timer);
          setTimeout(() => {
            geyser_on = false
            geyser_bubbling = false
          }, 1700+timer);
        }
      }
    }
  }
}
setInterval(level_animation, 500);

const melting = ["p","!","£","$","%","^"]

function lava_kill(){
  if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (lava_tile)) {
    for (let i = 0; i < lava_tile.length; i++) {
      if (!(collided)){
        if ((getFirst(player).x == lava_tile[i].x && getFirst(player).y == lava_tile[i].y-1)){
          setBackground(red)
          collided = true
          lava_collision_index = i
          if (getFirst(player)) {
            getFirst(player).remove()
          }
          for (let j = 0; j < melting.length; j++) {
            setTimeout(() => {
              if (i == lava_collision_index) {
                clearTile(lava_tile[i].x,lava_tile[i].y-1)
                addSprite(lava_tile[i].x,lava_tile[i].y-1,platform_lava)
                addSprite(lava_tile[i].x,lava_tile[i].y-1,melting[j])
              }
            }, j*300);
          }
          setTimeout(() => {
            die()
          }, 2000);
        }
      }
    }
  }
}
setInterval(lava_kill, 10);


function geyser_kill(){
  if ((!(isdead)) && (tilesWith(player).length == 1) && (!(collided)) && (geyser_tile)) {
    if ((getFirst(player).x == geyser_tile.x && getFirst(player).y == geyser_tile.y-1)){
      setTimeout(() => {
        setBackground(red)
        collided = true
        if (getFirst(player)) {
          getFirst(player).remove()
        }
      }, 300);
      for (let i = 0; i < melting.length; i++) {
        setTimeout(() => {
          clearTile(geyser_tile.x,geyser_tile.y-1)
          addSprite(geyser_tile.x,geyser_tile.y-1,platform_geyser)
          addSprite(geyser_tile.x,geyser_tile.y-1,melting[i])
        }, i*300);
      }
      setTimeout(() => {
        die()
      }, 2000);
    }
  }
}
setInterval(geyser_kill, 10);

function die(){
  if (!(isdead)) {
    isdead = true
    lives -= 1
  }
  setMap(map`d`)
  addText("Oh no, you died!", { 
  x: 2,
  y: 1,
  color: color`3`
})
  addText(`You have ${lives}`, {
    x: 4,
    y: 5,
    color: color`3`
  })
  addText("heart(s) left.", { 
  x: 3,
  y: 7,
  color: color`3`
  })
  addText("Press", { 
  x: 6,
  y: 11,
  color: color`3`
  })
  addText("j", { 
  x: 12,
  y: 11,
  color: color`2`
  })
  if (lives > 0) {
    addText("to continue.", { 
    x: 4,
    y: 13,
    color: color`3`
  })
  } else {
    addText("to play again.", { 
    x: 3,
    y: 13,
    color: color`3`
  })
  }
}

function win(){
  haswon = true
  setMap(map`d`)
  addText("Well done, you have", { 
  x: 1,
  y: 1,
  color: color`3`
  })
  addText("won the game!", {
  x: 3,
  y: 3,
  color: color`3`
  })
  addText(`You have ${lives}/3`, {
  x: 4,
  y: 6,
  color: color`3`
  })
  addText("heart(s) left.", { 
  x: 3,
  y: 8,
  color: color`3`
  })
  addText("Press", { 
  x: 6,
  y: 11,
  color: color`3`
  })
  addText("j", { 
  x: 12,
  y: 11,
  color: color`2`
  })
  addText("to play again.", { 
  x: 3,
  y: 13,
  color: color`3`
  })
}


let enemy_blocks = [wall,door,door_red,door_green,door_purple,door_orange,bridge,platform_geyser,platform_geyser2,platform_geyser3,shoot_geyser]
function move_enemies(){
  if (!(collided)) {
    let es = getAll(enemy);
    for (let i = 0; i < es.length; i++) {
      if (es[i].x == 9){
        movedirs[i] = -1
      } 
      else if (es[i].x == 0){
        movedirs[i] = 1
      } else if ((getTile(es[i].x+movedirs[i],es[i].y).some(s => enemy_blocks.includes(s.type)))){
        movedirs[i] = -movedirs[i]
      }
      
      es[i].x += movedirs[i]
    }

    if ((!(isdead)) && (tilesWith(player).length == 1)) {
      if (tilesWith(player, enemy).length > 0) {
        tile = getFirst(player)
        collided = true
        setTimeout(() => {
          setBackground(red)
        }, 300);
        for (let i = 0; i < melting.length; i++) {
        setTimeout(() => {
          if (i > 0) {
            getFirst(melting[i-1]).remove()
          } else {
            getFirst(player).remove()
          }
          addSprite(tile.x,tile.y,melting[i])
        }, i*300);
      }
      setTimeout(() => {
        die()
      }, 1800);
      }
    }
  }
}
setInterval(move_enemies, 500);

inventory_length = 0
function pick_up_key(){
  if (tilesWith(player, key).length > 0) {
    getFirst(key).remove();
    inventory.push("k");
    clearTile(9,0);
    addSprite(9,0,"_");
  } else if ( tilesWith(player, key_red).length > 0) {
    getFirst(key_red).remove();
    inventory.push("{");
    let current_tile = getFirst(door_red)
    clearTile(current_tile.x, current_tile.y);
    addSprite(current_tile.x,current_tile.y,"<");
  } else if ( tilesWith(player, key_green).length > 0) {
    getFirst(key_green).remove();
    inventory.push("}");
    let current_tile = getFirst(door_green)
    clearTile(current_tile.x, current_tile.y);
    addSprite(current_tile.x,current_tile.y,">");
  } else if ( tilesWith(player, key_purple).length > 0) {
    getFirst(key_purple).remove();
    inventory.push("W");
    let current_tile = getFirst(door_purple)
    clearTile(current_tile.x, current_tile.y);
    addSprite(current_tile.x,current_tile.y,">");
  } else if ( tilesWith(player, key_orange).length > 0) {
    getFirst(key_orange).remove();
    inventory.push("S");
    let current_tile = getFirst(door_orange)
    clearTile(current_tile.x, current_tile.y);
    addSprite(current_tile.x,current_tile.y,">");
  }
  if (inventory.length !== inventory_length) {
    inventory_length = inventory.length
    for (let i = 0; i < inventory_length; i++) {
      addSprite(10-inventory_length,9,inventory[i])
    }
  }
}
setInterval(pick_up_key,500);

const leaving = ["p","*","(",")","-"]

function enter_door(){
  exit = true
  inventory = inventory.filter(function (item) {
    return item !== 'k';
  });
  for (let i = 0; i < leaving.length; i++) {
        setTimeout(() => {
            if (i > 0){
              getFirst(leaving[i-1]).remove()
            } else {
              getFirst(player).remove()
            }
            addSprite(9,0,leaving[i])
          }, i*150);
  }
  setTimeout(() => {
    addSprite(width()-1,0,leaving[4])
  }, 1500);
  setTimeout(() => {
    level += 1
    level_setup(level)
  }, 2000);
}
    

setSolids([ player, wall, door, door_red, door_green, door_purple, door_orange, rock, stone_rock ]);

onInput("d", () => {
  if ((!(isdead)) && (tilesWith(player).length == 1) && ((getFirst(player).y %2 == 0) || jumping)) {
    getFirst(player).x += 1
    if (tilesWith(door_o, player).length > 0) {
      enter_door()
    } else if (tilesWith(door_red_o, player).length > 0) {
      let tile = getFirst(door_red_o)
      getFirst(door_red_o).remove()
      addSprite(tile.x,tile.y,door_red_o2)
      inventory = inventory.filter(function (item) {
        return item !== '{';
      });
      getFirst(key_red).remove();
    } else if (tilesWith(door_green_o, player).length > 0) {
      let tile = getFirst(door_green_o)
      getFirst(door_green_o).remove()
      addSprite(tile.x,tile.y,door_green_o2)
      inventory = inventory.filter(function (item) {
        return item !== '}';
      });
      getFirst(key_green).remove();
    } else if (tilesWith(door_purple_o, player).length > 0) {
      let tile = getFirst(door_purple_o)
      getFirst(door_purple_o).remove()
      addSprite(tile.x,tile.y,door_purple_o2)
      inventory = inventory.filter(function (item) {
        return item !== 'W';
      });
      getFirst(key_purple).remove();
    } else if (tilesWith(door_orange_o, player).length > 0) {
      let tile = getFirst(door_orange_o)
      getFirst(door_orange_o).remove()
      addSprite(tile.x,tile.y,door_orange_o2)
      inventory = inventory.filter(function (item) {
        return item !== 'S';
      });
      getFirst(key_orange).remove();
    }
  }
})

onInput("a", () => {
  if ((!(isdead)) && (tilesWith(player).length == 1) && ((getFirst(player).y %2 == 0) || jumping)) {
    getFirst(player).x -= 1
    if (tilesWith(door_red_o, player).length > 0) {
      let tile = getFirst(door_red_o)
      getFirst(door_red_o).remove()
      addSprite(tile.x,tile.y,door_red_o2)
      inventory = inventory.filter(function (item) {
        return item !== '{';
      });
      getFirst(key_red).remove();
    } else if (tilesWith(door_green_o, player).length > 0) {
      let tile = getFirst(door_green_o)
      getFirst(door_green_o).remove()
      addSprite(tile.x,tile.y,door_green_o2)
      inventory = inventory.filter(function (item) {
        return item !== '}';
      });
      getFirst(key_green).remove();
    } else if (tilesWith(door_purple_o, player).length > 0) {
      let tile = getFirst(door_purple_o)
      getFirst(door_purple_o).remove()
      addSprite(tile.x,tile.y,door_purple_o2)
      inventory = inventory.filter(function (item) {
        return item !== 'W';
      });
      getFirst(key_purple).remove();
    } else if (tilesWith(door_orange_o, player).length > 0) {
      let tile = getFirst(door_orange_o)
      getFirst(door_orange_o).remove()
      addSprite(tile.x,tile.y,door_orange_o2)
      inventory = inventory.filter(function (item) {
        return item !== 'S';
      });
      getFirst(key_orange).remove();
    }
  }
})

onInput("w", () => {
  if ((!(isdead)) && (tilesWith(player).length == 1)  && !(climbing)) {
    if ((tilesWith(ladder, player).length > 0) && !(jumping)){
      climbing = true
      landed = true
      getFirst(player).y -= 1
      jumping = false
      setTimeout(() => {
        jumping = false
        climbing = false
        getFirst(player).y -= 1
      }, 100);
    } else if (tilesWith(n_ladder, player).length > 0) {
      jumping = false
      climbing = true
      landed = true
      getFirst(player).y -= 1
      climbing = false
    }
    else if ((getFirst(player).y %2 == 0) && !(jumping)){
      getFirst(player).y -= 1
      jumping = true
      landed = false
      climbing = false
      setTimeout(() => {
        if (!(landed)) {
          getFirst(player).y += 1
          jumping = false
          landed = true
          climbing = false
        }
      }, 400);
    }
  }
})

onInput("s", () => {
  if ((!(isdead)) && (tilesWith(player).length == 1) && !(jumping) && !(climbing)) {
    if (tilesWith(o_ladder, player).length > 0) {
      climbing = true
      landed = true
      getFirst(player).y += 1
      jumping = false
      setTimeout(() => {
        getFirst(player).y += 1
        jumping = false
        climbing = false
      }, 100);
    }
  }
})

onInput("j", () => {
  if (isdead || haswon) {
    if (lives == 0 || haswon) {
      lives = 3
      level = 0
    }
    level_setup(level)
  }
})