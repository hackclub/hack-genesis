/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Monster Mayhem
@author: Gus Ruben
@tags: ['endless', 'halloween']
@addedOn: 2024-00-00
*/


const EMPTY = "_";
const GROUND="~";
const HOLE_RED = "R";
const HOLE_BLUE = "B";
const ZOMBIE = "Z";

const EMPTY_BITMAP = bitmap`
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
................`

const CORE_LEGEND = [
	[ EMPTY, EMPTY_BITMAP ],
	[ GROUND, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC` ],
	[ HOLE_RED, bitmap`
CCCCCCCCCCCCCCCC
C33333333333333C
C3CCCCCCCCCCCC3C
CCCCLLLLLLLLCCCC
CCLL00000000LLCC
CL000000000000LC
C00000000000000C
C00000000000000C
C00000000000000C
C00000000000000C
C00000000000000C
CC000000000000CC
CCCC00000000CCCC
C3CCCCCCCCCCCC3C
C33333333333333C
CCCCCCCCCCCCCCCC` ],
	[ HOLE_BLUE, bitmap`
CCCCCCCCCCCCCCCC
C77777777777777C
C7CCCCCCCCCCCC7C
CCCCLLLLLLLLCCCC
CCLL00000000LLCC
CL000000000000LC
C00000000000000C
C00000000000000C
C00000000000000C
C00000000000000C
C00000000000000C
CC000000000000CC
CCCC00000000CCCC
C7CCCCCCCCCCCC7C
C77777777777777C
CCCCCCCCCCCCCCCC` ],
];

const MONSTERS = [
	bitmap`
................
.....88DDDD.....
....888D022.....
....822D222D....
....D02D00DD....
....DDD00LD4....
.....DDD4444....
..DD7777DD47D...
.D447D777777DD..
.D4..DD77DD.D1..
.14..D477D7.1...
.....7777D75....
....5DD55555....
................
................
................`
]


function getLegendChar(x, y) {
	x++;
	y++;
	const charCode = ((x+y) * (x+y+1) * 0.5) + y; // cantor's pairing function
	return String.fromCharCode(charCode + 128); // add 128 so it's past all the normal chars we might want to use;
}

const STARTING_LEGEND=[];
const CUSTOM_LEGEND_CHARS = [];
for (let y = 0; y < 5; y++) {
	let row = [];
	for (let x = 0; x < 6; x++) {
		const ch = getLegendChar(x, y);
		row.push(ch);
		STARTING_LEGEND.push([ch, EMPTY_BITMAP]);
	}
	CUSTOM_LEGEND_CHARS.push(row);
}

const HOLES = [
	{x: 2, y: 1},
	{x: 4, y: 1},
	{x: 1, y: 2},
	{x: 2, y: 2},
	{x: 3, y: 2},
	{x: 4, y: 2},
	{x: 2, y: 3},
	{x: 4, y: 3},
]

function popup(x, y, typeIndex) {
	setLegend([getLegendChar(x, y), MONSTERS[typeIndex]], ...CORE_LEGEND);
}

const MAIN_MAP = map`
~~~~~~
~~RR~~
~RBRB~
~~RB~~
~~~~~~`;

// TODO: title screen

// the way this works is, it sets a map where each tile has a different sprite. then, those can be controlled indiviudally by setting the legend.
// it sets the map afterward by adding sprites 1 by 1. This way, the top layer of sprites can be controlled individually
// this is basically all just a workaround for the fact that adding a new sprite adds it at the bottom of the z-order stack
setLegend(...CORE_LEGEND, ...STARTING_LEGEND);
setMap(MAIN_MAP);
for (let x = 0; x < 6; x++) {
	for (let y = 0; y < 5; y++) {
		addSprite(x, y, CUSTOM_LEGEND_CHARS[y][x]);
	}
}

popup(HOLES[0].x, HOLES[0].y, 0);