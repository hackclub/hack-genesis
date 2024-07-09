/*
@title:  BrainBoom
@author: Kapilarny
@tags: []
@addedOn: 2024-00-00
*/

// -------------------
// Sprites
// -------------------
const player = "p";
const box = "b";
const sel_box = "s";
const interpret_box = "i";

// I'm not going to lie, i don't like this "one char sprite identifier" system
// you could've just made something like -> create_sprite(); function and than you'd get a unique sprite_id to interface with
// And you even recommend storing the keys in variables so WHYY

const add = "+";
const sub = "-";
const shift_right = "<";
const shift_left = ">";
const open_loop = "[";
const close_loop = "]";
const output = "="; // i hate this so much
const input = ",";
const end = "N";

const arr_left = "l";
const arr_right = "r";

// -------------------
// Numbers
// -------------------

const zero = "A";
const one = "B";
const two = "C";
const three = "D";
const four = "E";
const five = "F";
const six = "G";
const seven = "H";
const eight = "I";
const nine = "J";

// You know whats better than creating bitmaps for numbers 0-9?
// Creating bitmaps not for one set of numbers 0-9 but two! (since you cant displace sprites with floating point precision :))))))))))))))))

const zero_2 = "0";
const one_2 = "1";
const two_2 = "2";
const three_2 = "3";
const four_2 = "4";
const five_2 = "5";
const six_2 = "6";
const seven_2 = "7";
const eight_2 = "8";
const nine_2 = "9";

// I hate my life

setLegend(
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
    [ box, bitmap`
................
.00000000000000.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.0............0.
.00000000000000.
................` ],
    [ sel_box, bitmap`
3333333333333333
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3333333333333333` ],
    [ interpret_box, bitmap`
7777777777777777
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7..............7
7777777777777777` ],
    [ add, bitmap`
................
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.00000000000000.
.00000000000000.
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
.......00.......
................` ],
    [ sub, bitmap`
................
................
................
................
................
................
................
.00000000000000.
.00000000000000.
................
................
................
................
................
................
................` ],
    [ shift_right, bitmap`
................
........00......
.......00.......
......00........
.....00.........
....00..........
...00...........
..00............
..00............
...00...........
....00..........
.....00.........
......00........
.......00.......
........00......
................` ],
    [ shift_left, bitmap`
................
......00........
.......00.......
........00......
.........00.....
..........00....
...........00...
............00..
............00..
...........00...
..........00....
.........00.....
........00......
.......00.......
......00........
................` ],
    [ open_loop, bitmap`
................
................
................
...000000.......
...0............
...0............
...0............
...0............
...0............
...0............
...0............
...0............
...000000.......
................
................
................` ],
    [ close_loop, bitmap`
................
................
................
.......000000...
............0...
............0...
............0...
............0...
............0...
............0...
............0...
............0...
.......000000...
................
................
................` ],
    [ output, bitmap`
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
......000.......
......000.......
......000.......
................
................
................` ],
    [ input, bitmap`
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
.......0........
......00........
.....00.........
.....0..........
................
................` ],
    [ end, bitmap`
................
................
................
..000...........
..0.............
..0.............
..0.............
..000...........
..0...0..0.00...
..0...00.0.0.0..
..0...0.00.00...
..0...0..0......
..000...........
................
................
................` ],
    [ arr_right, bitmap`
................
................
..........0.....
..........00....
..........000...
..........0000..
..........00000.
.000000000000000
.000000000000000
..........00000.
..........0000..
..........000...
..........00....
..........0.....
................
................` ],
    [ arr_left, bitmap`
................
................
.....0..........
....00..........
...000..........
..0000..........
.00000..........
000000000000000.
000000000000000.
.00000..........
..0000..........
...000..........
....00..........
.....0..........
................
................` ],
    [ zero, bitmap`
................
................
...000..........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
...000..........
................
................` ],
    [ one, bitmap`
................
................
.....0..........
....00..........
....00..........
...000..........
...0.0..........
.....0..........
.....0..........
.....0..........
.....0..........
.....0..........
.....0..........
.....0..........
................
................` ],
    [ two, bitmap`
................
................
....00..........
...00000........
..00...0........
.......0........
......00........
......0.........
.....00.........
....00..........
....0...........
...00...........
...0............
..000000........
................
................` ],
    [ three, bitmap`
................
................
..0000..........
.....00.........
......0.........
......0.........
.....00.........
.....0..........
..0000..........
.....00.........
......0.........
.....00.........
....00..........
..000...........
................
................` ],
    [ four, bitmap`
................
................
....0...........
....0...........
...00...........
...0............
..00............
..0.............
..00000.........
.....0..........
.....0..........
.....0..........
.....0..........
.....0..........
................
................` ],
    [ five, bitmap`
................
................
..000000........
..0.............
..0.............
..0.............
..0.............
..0.............
..00000.........
......00........
.......0........
.......0........
.......0........
..000000........
................
................` ],
    [ six, bitmap`
................
................
..0000..........
..0.............
..0.............
..0.............
..0.............
..00000.........
..0...0.........
..0...0.........
..0...0.........
..0...0.........
..00000.........
................
................
................` ],
    [ seven, bitmap`
................
................
..000000........
.......0........
.......0........
.......0........
......00........
......0.........
.....00.........
.....0..........
.....0..........
....00..........
....0...........
....0...........
................
................` ],
    [ eight, bitmap`
................
................
...0000.........
..00..00........
..0....0........
..0....0........
..0....0........
..0....0........
...0000.........
..0....0........
..0....0........
..0....0........
..0...00........
...0000.........
................
................` ],
    [ nine, bitmap`
................
................
..00000.........
..0...0.........
..0...0.........
..0...0.........
..00000.........
......0.........
......0.........
......0.........
......0.........
......0.........
..0..00.........
..0000..........
................
................` ],
    [ zero_2, bitmap`
................
................
.........0000...
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
.........0000...
................
................` ],
    [ one_2, bitmap`
................
................
............00..
...........000..
..........00.0..
.........00..0..
........00...0..
.............0..
.............0..
.............0..
.............0..
.............0..
.............0..
.............0..
................
................` ],
    [ two_2, bitmap`
................
................
.........00000..
........00...0..
.............0..
.............0..
............0...
...........0....
...........0....
..........00....
..........0.....
.........0......
........00......
........0000000.
................
................` ],
    [ three_2, bitmap`
................
................
........000000..
.............0..
.............0..
.............0..
.............0..
.............0..
........000000..
.............0..
.............0..
.............0..
.............0..
........000000..
................
................` ],
    [ four_2, bitmap`
................
................
...........0....
..........00....
.........00.....
.........0......
........00......
........0...0...
........000000..
............0...
............0...
............0...
............0...
............0...
................
................` ],
    [ five_2, bitmap`
................
................
........000000..
........0.......
........0.......
........0.......
........0.......
........0.......
........000000..
.............0..
.............0..
.............0..
.............0..
........00000...
................
................` ],
    [ six_2, bitmap`
................
................
........000000..
........0.......
........0.......
........0.......
........0.......
........0.......
........000000..
........0....0..
........0....0..
........0....0..
........0....0..
........000000..
................
................` ],
    [ seven_2, bitmap`
................
................
........000000..
.............0..
.............0..
.............0..
............00..
............0...
...........00...
...........0....
..........00....
..........0.....
.........00.....
.........0......
................
................` ],
    [ eight_2, bitmap`
................
................
.........0000...
........0....0..
........0....0..
........0....0..
........0....0..
........0....0..
.........0000...
........0....0..
........0....0..
........0....0..
........0....0..
.........0000...
................
................` ],
    [ nine_2, bitmap`
................
................
........000000..
........0....0..
........0....0..
........0....0..
........0....0..
........000000..
.............0..
.............0..
.............0..
.............0..
.............0..
........000000..
................
................` ],
)


// -------------------
// BF implementation
// -------------------

let should_stop = false;

// Data cells
let data_cells = [];
let data_cells_size = 6;
let data_pointer = 0;

// Output cells
let output_cells = [];
let output_size = 6;
let output_pointer = 0;

let loop_stack = [];
let curr_instr = 0;
let curr_tile = 0;
let code = [];

const reset_interpreter_data = () => {
    should_stop = false;
  
    data_cells = [];
    data_pointer = 0;   
    
    for(let i = 0; i < data_cells_size; i++) {
        data_cells.push(0);
    }

    output_cells = [];
    output_pointer = 0;
  
    // Fill output cells with 0
    for(let i = 0; i < output_size; i++) {
        output_cells.push(0);
    }
    
    loop_stack = [];
    curr_instr = 0;
    curr_tile = 0;
    code = [];

    selected = 0;
    offset = 0;
    render_all_boxes();
    render_data_boxes();
    render_output_boxes();
    render_box(sel_box);
};

const stop_exec = () => {
    console.log("Executed successfully!");

    // im lazy (this is to make the eventual tests not pass based on stuff)
    if(should_stop) {
        output_cells = [];
        output_pointer = 0;
        for(let i = 0; i < output_size; i++) {
            output_cells.push(0);
        }
    } else {
        render_output_boxes();
    }

    console.log(`Data cells: ${data_cells}`);
    console.log(`Output cells: ${output_cells}`);
      
    setTimeout(() => {
      reset_interpreter_data();
      input_disabled = false;
    }, 3000);
};

const program_loop = () => {
    setTimeout(() => {
        // console.log(`${curr_instr} vs ${code.length}`);
        if(curr_instr >= code.length || should_stop) {
            stop_exec();
            return;
        }

        const next_instr = code[curr_instr];
        program_step(next_instr);
    }, 1000);
}

const advance_box = () => {
    if(selected === max_selected) offset++;
    else selected++;
    // console.log(`Advancing: ${selected + offset}`);
    let temp = selected;
    render_all_boxes();
    render_data_boxes();
    render_output_boxes();
    // render_data_box(interpret_box, data_pointer);
    render_interpret_boxes();
    selected = temp;
    render_box(interpret_box);
}

let aCharCode = "A".charCodeAt(0);

let get_char_from_ascii = (ascii_code) => {
    return String.fromCharCode(ascii_code);
}

const program_step = (instr) => {
    // console.log(`Program step! (${curr_instr}) (${instr})`);
    if(instr === "N" || offset === max_offset) {
        // if(!(curr_instr+1 >= code.length)) advance_box();
        stop_exec();
        return;
    }

    // if(!(curr_instr+1 >= code.length)) advance_box();
  
    if(program[curr_tile] == -1) {
        if(!(curr_instr+1 > code.length)) advance_box();
        program_loop(); // basically continue;
        return;
    }
  
    if(instr === "[") {
        loop_stack.push(curr_instr);

        curr_instr++;
        if(!(curr_instr+1 > code.length)) advance_box();
        program_loop(); // basically continue;
        return;
    }
    
    if(instr === "]") {
        let start = loop_stack.pop();
        if(data_cells[data_pointer] !== 0) {
            // console.log(`${selected}, ${start}, ${offset}`);
            selected = start - offset-1;
            curr_instr = start-1;
        }

        curr_instr++;
        if(!(curr_instr+1 > code.length)) advance_box();
        program_loop(); // basically continue;
        return;
    }
  
    run_instruction(instr);
    curr_instr++;
    if(!(curr_instr+1 > code.length)) advance_box();
    program_loop(); // basically continue;
}

const run_program = () => {
    console.log(`Running program -> ${code}`);
    program_loop();
};

const run_instruction = (instruction) => {
    // console.log(`Running inst => ${instruction}`);
    // console.log(`Data cells: ${data_cells}`);
    // console.log(`Output cells: ${output_cells}`);
    
    switch(instruction) {
        case "+":
            data_cells[data_pointer]++;
            break;
        case "-":
            data_cells[data_pointer]--;
            break;
        case ">":
            if(data_pointer - 1 !== -1) data_pointer--;
            break;
        case "<":
            if(data_pointer + 1 !== data_cells_size) data_pointer++;
            break;
        case ".":
            console.log("Inserting to output!");
            output_cells[output_pointer] = data_cells[data_pointer];
            if(output_pointer+1 !== output_size) output_pointer++;
            break;
        case ",":
            // Not implemented
            break;
        default:
            console.log(`Unrecognized instruction! ${instruction}`);
            break;
    }
};

let instruction_set = ["+", "-", "<", ">", "[", "]", ".", ",", "N"];

// -------------------
// Render Functions
// -------------------

const get_op_sprite = () => {
  const id = program[offset + selected];
  if(id === 6) return "="; // I hate that i have to hardcode that
  return instruction_set[id];
}

const render_box = (box_sprite) => {
    clearTile(selected+1, 5);
    addSprite(selected+1, 5, box_sprite);
    if(program[offset + selected] !== -1) {
        // const op_sprite = parseInt(program[offset + selected]);
        addSprite(selected+1, 5, get_op_sprite());
    }
};

const render_arrows = () => {
    // console.log(offset);
  
    if(offset > 0) {
        addSprite(0, 5, arr_left);
    } else {
        clearTile(0, 5);
    }

    if(offset !== program_size - max_selected) {
        addSprite(9, 5, arr_right)
    } else {
        clearTile(9, 5);
    }
};

// IMPORTANT: This function resets `selected` variable! (this is bad code but oh well)
const render_all_boxes = () => {
    selected = 0;
    while(selected !== max_selected+1) {
        render_box(box);
        selected++;
    }
    selected = 0;
};

const get_number_sprites = (num) => {  
    let digs = [];
    let num_str = num.toString();
    for(var i = 0; i < num_str.length; i++) {
        digs.push(num_str[i]);
    }
  
    if(digs.length == 0) return [zero, zero_2];
  
    let first = zero;
    let second = digs[0];

    if(digs.length >= 2) {
        first = get_char_from_ascii(aCharCode + parseInt(digs[1]));
    }

    return [first, second];
};

const render_num_box = (num, box_sprite, x, y) => {
    clearTile(x, y);
    addSprite(x, y, box_sprite);

    const nums = get_number_sprites(num);
    // console.log(nums);
    addSprite(x, y, nums[0]);
    addSprite(x, y, nums[1]);
};

const render_data_boxes = () => {
    for(var i = 0; i < data_cells_size; i++) {
        render_num_box(data_cells[i], box, 3 + i, 3);
    }
};

const render_output_boxes = () => {
   for(var i = 0; i < output_size; i++) {
        render_num_box(output_cells[i], box, 3 + i, 1);
    }
}

const render_interpret_boxes = () => {
    render_num_box(output_cells[output_pointer], interpret_box, 3 + output_pointer, 1);
    render_num_box(data_cells[data_pointer], interpret_box, 3 + data_pointer, 3);
}

// -------------------
// Game implementation
// -------------------

// Game states
const MAIN_MENU = 0;
const LEVEL_SELECT = 1;
const IN_INTERPRETER = 2;
const IN_PROMPT = 3;

let input_disabled = false;

let game_state = MAIN_MENU;

let level = game_state
const levels = [
  map`
...
...
...`,
  map`
.`,
  map`
p.........
...bbbbbb.
..........
...bbbbbb.
..........
.sbbbbbbbr
..........
..........`,
  map`
.`
]

let selected = 0;
const max_selected = 7;

let program = [];
let program_size = (max_selected * 2);

let offset = 0;
let max_offset = program_size - max_selected;

// Fill program out with blanks
for(var i = 0; i < program_size+1; i++) {
    program.push(-1);
}

setMap(levels[level]);

onInput("d", () => {
    if(game_state == IN_INTERPRETER) {
        if(input_disabled) return;
      
        if(selected === max_selected) {
            if(offset === program_size - max_selected) return;
            offset++;
            render_all_boxes();
            selected = max_selected;
            render_box(sel_box);
            render_arrows();
          
            return;
        }
      
        render_box(box);
        selected++;
        render_box(sel_box);
        render_arrows();
    }
});

onInput("a", () => {
    if(game_state == IN_INTERPRETER) {
        if(input_disabled) return;
        
        if(selected === 0) {
            if(offset == 0) return;
            offset--;
            render_all_boxes();
            selected = 0;
            render_box(sel_box);
            render_arrows();
          
            return;
        }
      
        render_box(box);
        selected--;
        render_box(sel_box);
        render_arrows();
    }
});

onInput("j", () => {
    if(game_state === MAIN_MENU && menu_tutorial_prompt) {
        menu_tutorial_prompt = false;
        prompt_multiline("Task:\nWrite from\n0 to 5 to the output cells", color`0`, IN_INTERPRETER);
    } else if(game_state == IN_INTERPRETER) {
        if(input_disabled) return;
      
        if(program[offset + selected] === 8) program[offset + selected] = -1;
        else program[offset + selected]++;
    
        render_box(sel_box);
    }
});

onInput("l", () => {
    if(game_state === MAIN_MENU && menu_tutorial_prompt) {
        menu_tutorial_prompt = false;
        // switch_game_state(IN_INTERPRETER);
    } else if(game_state == IN_INTERPRETER) {
        if(input_disabled) return;
      
        if(program[offset + selected] === -1) program[offset + selected] = 8;
        else program[offset + selected]--;
    
        render_box(sel_box);
    }
});

onInput("i", () => {
    if(game_state == IN_INTERPRETER) {
        if(input_disabled) return;
        input_disabled = true;
    
        offset = 0;
        selected = 0;
        render_all_boxes();
        render_arrows();
    
        render_box(interpret_box);
      
        // Create a digestible array for the interpreter
        code = [];
        for(var i = 0; i < program.length; i++) {
            if(program[i] == -1) continue;
            code.push(instruction_set[program[i]]);
        }
    
        run_program();
    }
});

onInput("k", () => {
    if(game_state == IN_INTERPRETER) {
        if(!input_disabled || should_stop) return;

        should_stop = true;
    }
});

const switch_game_state = (to) => {
    clearText();
    setMap(levels[to]);
    if(to === IN_INTERPRETER) {
        reset_interpreter_data();
    }

    game_state = to;
}

let menu_tutorial_prompt = false;

let prompted_game_state = -1;
const prompt_multiline = (text, color, to) => {
    switch_game_state(IN_PROMPT);
    prompted_game_state = -1;

    // Set one second timeout on prompt exit
    setTimeout(() => {
        prompted_game_state = to;  
    }, 1000);
    
    let lines = [];

    let temp = "";
    let curr = 0;
    for(var i = 0; i < text.length; i++) {
        temp += text[i];
      
        if(text[i] === '\n' || curr === 13 || i+1 === text.length) {
            lines.push(temp);
            temp = "";
            curr = 0;
        } else {
            curr++;
        }
    }
    
    for(var i = 0; i < lines.length; i++) {
        addText(lines[i], {x: 3, y: 3+i, color });
    }
}

afterInput(() => {
    // console.log(game_state);
  
    if(game_state === MAIN_MENU) {
        if(menu_tutorial_prompt) return;
        clearText();

        addText("Play tutorial?", {x: 3, y:7, color: color`0`});
        addText("J -> Yes", {x: 3, y: 9, color: color`4`});
        addText("L -> No", {x: 3, y: 10, color: color`3`});

        menu_tutorial_prompt = true;
    } else if(game_state === IN_PROMPT) {
        if(prompted_game_state !== -1) switch_game_state(prompted_game_state);
    }
});

addText("Brain Boom", {x: 5, y: 1, color: color`0`});
addText("Made by Kapi", {x: 4, y: 2, color: color`0`});

addText("Press anything", {x: 3, y: 7, color: color`0`});
addText("to start!", {x: 3, y: 8, color: color`0`});