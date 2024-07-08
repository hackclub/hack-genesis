/*
@title:  BrainBoom
@author: Kapilarny
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

const font = [bitmap`
.........0......
.........0......
.........0......
........00......
........0.0.....
.......00.0.....
.......0...0....
......0....0....
.....00....00...
.....0......0...
.000000000000000
...00........0..
...0.........0..
..0...........0.
.0............0.
00............00`, bitmap`
.000000.........
..0...0000......
..0.......000...
..0..........00.
..0..........00.
..0.........00..
..0......000....
..00000000......
..0....0000.....
..0........00...
..0.........0...
..0........00...
..0......000....
..0000000.......
0000............
................`, bitmap`
........0000....
.....0000.......
....00..........
...0............
..0.............
.00.............
.0..............
.0..............
.0..............
.0..............
.00.............
..00............
...00...........
....00..........
.....000...00...
.......00000....`, bitmap`
.00000000.......
.0.......000....
.0..........00..
.0...........00.
.0............00
.0.............0
.0............00
.0............0.
.0............0.
.0...........0..
.0..........0...
.0........00....
..0.....000.....
..0...000.......
..00000.........
..0.............`, bitmap`
..00............
..00000000000...
..0.........00..
...0............
...0............
...0............
...000..........
...0..00000000..
...0............
...0............
...0............
...0............
...0............
...0000000......
..........00000.
................`, bitmap`
.0..............
.000000000000000
.00.............
..0.............
..0.............
..0.............
..0.............
..00000000000...
..0.............
..0.............
..0.............
.0..............
.0..............
.0..............
.0..............
.0..............`, bitmap`
.......0000.....
.....00.........
....00..........
...0............
..00............
..0.............
.0..............
.0..............
0...............
00.....00000....
.0.........0....
.0........00....
.00.......0.....
..0......00.....
..000...00......
....00000.......`,]

// Unsuccessfull attempt at adding the bitmaps programatically, unfortunately you cant really do that
// var legend = [];

// let startChar = "a";
// let startCharVal = startChar.charCodeAt(0);
// for(var i = 0; i < font.length; i++) {
//   let str = String.fromCharCode(startCharVal + i);
//   setLegend([ str, font[i] ]);
// }

// TODO: Make a script to generate a `setLegend` call

setLegend([ player, bitmap`
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
................` ], ["a", font[0]], ["b", font[1]])

setSolids([])

let level = 0
const levels = [
  map`
bbbbbbbbbb
..........
..........
..........
..........
..........
..........
..........`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("s", () => {
  
})

afterInput(() => {
  
})

// BF impl

// Data cells
let data_cells = [];
let data_cells_size = 5;
let data_pointer = 0;

// Output cells
let output_cells = [];
let output_size = 5;
let output_pointer = output_size; // back to front

// Fill data cells with 0
for(let i = 0; i < data_cells_size; i++) {
  data_cells.push(0);
}

// Fill output cells with 0
for(let i = 0; i < output_size; i++) {
  output_cells.push(0);
}

let loop_stack = [];

const run_program = (program) => {
    console.log(`Running program -> ${program}`);
  
    let instructions = program.split('');
    for(let i = 0; i < instructions.length; i++) {
        if(instructions[i] === "E") break;
        
        if(instructions[i] === "[") {
            loop_stack.push(i);
            continue;
        }

        if(instructions[i] === "]") {
            let start = loop_stack.pop();
            if(data_cells[data_pointer] !== 0) {
                i = start-1;
            }
          
            continue;
        }

        run_instruction(instructions[i]);
    }

    console.log(`Data cells: ${data_cells}`);
    console.log(`Output cells: ${output_cells}`);
};

const run_instruction = (instruction) => {
    // console.log(`Running inst => ${instruction}`);
  
    switch(instruction) {
        case "+":
            data_cells[data_pointer]++;
            break;
        case "-":
            data_cells[data_pointer]--;
            break;
        case ">":
            data_pointer--;
            break;
        case "<":
            data_pointer++;
            break;
        case ".":
            output_cells[output_pointer] = data_cells[data_pointer];
            if(output_pointer !== 0) output_pointer--;
            break;
        case ",":
            // Not implemented
            break;
        default:
            console.log(`Unrecognized instruction! ${instruction}`);
            break;
    }
};

const program = "+++[<++>-]<.";
run_program(program);

