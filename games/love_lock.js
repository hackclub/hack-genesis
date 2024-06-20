/*
@title: love_lock
@tags: ['strategy']
@addedOn: 2022-09-15
@author: N Rizwan

Initial Script of Leo Mcelroy (@leo)
Modified and Created by N Rizwan (@N Rizwan)

Instructions:
Use w, a, s, d to move around.
You need the key to unlock the teleport to your Lover
Press j to reset the level.
Press k for Music.
Press i for Credits.
Press l for Controls.
*/


let unlock = 0;
addText(`${unlock} keys`, { x:2,color: color`3` });
//=====CONSTRAINS======
const player = 'p';
const player2 = 'h';
const key = 'k';
const toll = 't';
const wall = 'w';
const exit = 'e';
const box = 'f';
const love = 'c';
const bg = tune`
A5^249.51266,
249.5126724243164: B5^249.51266,
249.5126724243164: A5^249.51266,
249.5126724243164: G5^249.51266,
249.5126724243164: C4^998.05066 + G4-998.05066 + D5-249.51266,
249.5126724243164: E5^249.51266,
249.5126724243164: G5^499.02533,
499.0253448486328: C4^998.05066 + G4-998.05066,
249.5126724243164: E5^499.02533,
499.0253448486328: B5^249.51266,
249.5126724243164: C4^998.05066 + G4-998.05066,
998.0506896972656: D4^998.05066 + A4-998.05066 + A5-249.51266,
249.5126724243164: B5^249.51266,
249.5126724243164: A5^249.51266,
249.5126724243164: G5^249.51266,
249.5126724243164: E4^998.05066 + B4-998.05066 + D5-249.51266,
249.5126724243164: E5^249.51266,
249.5126724243164: G5^499.02533,
499.0253448486328: E4^998.05066 + B4-998.05066,
249.5126724243164: E5^249.51266,
249.5126724243164: B5^499.02533,
499.0253448486328: D4^998.05066 + A4-998.05066 + A5-998.05066,
998.0506896972656: D4^998.05066 + A4-998.05066 + A5-249.51266,
249.5126724243164: B5^249.51266,
249.5126724243164: A5^249.51266,
249.5126724243164: G5^249.51266,
249.5126724243164: C4^998.05066 + G4-998.05066 + D5-249.51266,
249.5126724243164: E5^249.51266,
249.5126724243164: G5^499.02533,
499.0253448486328: C4^998.05066 + G4-998.05066,
249.5126724243164: E5^499.02533,
499.0253448486328: G5^249.51266,
249.5126724243164: C4^998.05066 + G4-998.05066 + D6-249.51266,
249.5126724243164: B5^748.538,
748.5380172729492: D4^998.05066 + A4-998.05066 + G5-249.51266,
249.5126724243164: A5^499.02533,
499.0253448486328: B5^249.51266,
249.5126724243164: E4^998.05066 + B4-998.05066,
998.0506896972656: E4^998.05066 + B4-998.05066,
998.0506896972656: E4^998.05066 + B4-998.05066,
998.0506896972656: D4^998.05066 + A4-998.05066 + A5-249.51266,
249.51171875: B5^249.51266,
249.5136260986328: A5^249.51266,
249.51171875: G5^249.51266,
249.5136260986328: C4^998.05066 + G4-998.05066 + D5-249.51266,
249.51171875: E5^249.51266,
249.5136260986328: G5^499.02533,
499.0253448486328: C4^998.05066 + G4-998.05066,
249.51171875: E5^499.02533,
499.0253448486328: B5^249.51266,
249.5136260986328: C4^998.05066 + G4-998.05066,
998.0506896972656: D4^998.05066 + A4-998.05066 + A5-249.51266,
249.51171875: B5^249.51266,
249.5136260986328: A5^249.51266,
249.51171875: G5^249.51266,
249.5136260986328: E4^998.05066 + B4-998.05066 + D5-249.51266,
249.51171875: E5^249.51266,
249.5136260986328: G5^499.02533,
499.0253448486328: E4^998.05066 + B4-998.05066,
249.51171875: E5^249.51266,
249.5136260986328: B5^499.02533,
499.0253448486328: D4^998.05066 + A4-998.05066 + A5-998.05066,
998.0506896972656: D4^998.05066 + A4-998.05066 + A5-249.51266,
249.51171875: B5^249.51266,
249.5136260986328: A5^249.51266,
249.51171875: G5^249.51266,
249.5136260986328: C4^998.05066 + G4-998.05066 + D5-249.51266,
249.51171875: E5^249.51266,
249.5136260986328: G5^499.02533,
499.0253448486328: C4^998.05066 + G4-998.05066,
249.51171875: E5^499.02533,
499.0253448486328: G5^249.51266,
249.5136260986328: C4^998.05066 + G4-998.05066 + D6-249.51266,
249.51171875: B5^748.538,
748.5389709472656: D4^998.05066 + A4-998.05066 + G5-249.51266,
249.51171875: A5^499.02533,
499.0253448486328: B5^249.51266,
249.5136260986328: E4^998.05066 + B4-998.05066,
998.0506896972656: E4^998.05066 + B4-998.05066,
998.0506896972656: E4^1996.1013 + B4-1996.1013,
499.0234375: B4^249.51266,
249.51553344726562: B4^249.51266,
249.51171875: A4^249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-748.538,
748.5389709472656: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-249.51266,
249.51171875: E4^249.51266,
249.51171875: G4^499.02533,
499.0272521972656: G2^998.05066 + D3-998.05066 + D4-748.538,
748.5389709472656: D4^249.51266,
249.51171875: G2^998.05066 + D3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + A4-499.02533,
499.0234375: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + B4-499.02533,
499.0234375: A4^249.51266,
249.51553344726562: A4^249.51266,
249.51171875: E3^998.05066 + B3-998.05066,
249.51171875: G4^748.538,
748.5389709472656: E3^998.05066 + B3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + A4-249.51266,
249.51171875: G4^249.51266,
249.51171875: E4^249.51266,
249.51553344726562: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + E4-249.51266,
249.51171875: D4^249.51266,
249.51171875: G4^499.02533,
499.0272521972656: G2^998.05066 + D3-998.05066,
998.0506896972656: G2^998.05066 + D3-998.05066,
998.0506896972656: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.0506896972656: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0272521972656: D4^499.02533 + F#4-499.02533,
499.0234375: B4^249.51266,
249.51553344726562: B4^249.51266,
249.51171875: B4^499.02533,
499.0234375: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-499.02533,
499.0234375: G4^249.51266,
249.51553344726562: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-249.51266,
249.51171875: E4^249.51266,
249.51171875: G4^499.02533,
499.0272521972656: G2^998.05066 + D3-998.05066,
998.0506896972656: G2^998.05066 + D3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + A4-499.02533,
499.0234375: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + B4-499.02533,
499.0234375: A4^249.51266,
249.51553344726562: A4^249.51266,
249.51171875: E3^998.05066 + B3-998.05066,
249.51171875: G4^748.538,
748.5389709472656: E3^998.05066 + B3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51553344726562: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + A4-249.51266,
249.51171875: G4^249.51266,
249.51171875: E4^249.51266,
249.51553344726562: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + E4-249.51266,
249.51171875: D4^249.51266,
249.51171875: G4^499.02533,
499.0272521972656: G2^998.05066 + D3-998.05066,
998.0506896972656: G2^998.05066 + D3-998.05066,
998.0506896972656: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.046875: D4^998.05066 + F#4-998.05066,
499.03106689453125: A3^499.02533,
499.0234375: D4^499.02533 + F#4-499.02533,
499.0234375: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: B4^249.51266,
249.51934814453125: A4^499.02533,
499.0234375: A4^249.51266,
249.51171875: E3^998.05066 + B3-998.05066,
249.51171875: G4^249.51266,
249.51171875: E4^499.02533,
499.0234375: E3^499.02533 + B3-499.02533,
499.03106689453125: G3^499.02533,
499.0234375: C3^499.02533 + C4-998.05066 + E4-998.05066,
499.0234375: G3^499.02533,
499.0234375: C4^998.05066 + E4-998.05066,
499.03106689453125: G3^499.02533,
499.0234375: D3^499.02533 + D4-998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.03106689453125: A3^499.02533,
499.0234375: B2^499.02533 + B3-998.05066 + D4-998.05066,
499.0234375: F#3^499.02533,
499.0234375: B3^998.05066 + D4-998.05066,
499.03106689453125: F#3^499.02533,
499.0234375: E3^499.02533 + E4-998.05066 + G4-998.05066,
499.0234375: B3^499.02533,
499.0234375: E4^998.05066 + G4-998.05066,
499.03106689453125: B3^499.02533,
499.0234375: C3^499.02533 + C4-998.05066 + E4-998.05066,
499.0234375: G3^499.02533,
499.0234375: C4^998.05066 + E4-998.05066,
499.03106689453125: G3^499.02533,
499.0234375: D3^499.02533 + D4-998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.03106689453125: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
998.0545043945312: E3^499.02533 + B4-499.02533,
499.0234375: B3^499.02533 + B4-499.02533,
499.0234375: E4^998.05066 + B4-249.51266,
249.51934814453125: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^499.02533,
499.0234375: G3^499.02533,
249.51171875: C5^249.51266,
249.51171875: C4^499.02533,
249.51934814453125: B4^748.538,
249.51171875: G3^499.02533,
499.0234375: D3^499.02533 + A4-748.538,
499.0234375: A3^499.02533,
249.51171875: A4^249.51266,
249.51171875: D4^998.05066 + A4-249.51266,
249.51934814453125: G4^249.51266,
249.51171875: F#4^499.02533,
499.0234375: B2^499.02533 + F#4-748.538,
499.0234375: F#3^499.02533,
249.51171875: D4^249.51266,
249.51171875: B3^499.02533 + B4-499.02533,
499.03106689453125: F#3^499.02533 + A4-499.02533,
499.0234375: E3^499.02533 + G4-748.538,
499.0234375: B3^499.02533,
249.51171875: E4^249.51266,
249.51171875: E4^998.05066 + B4-499.02533,
499.03106689453125: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^499.02533 + E4-998.05066,
499.0234375: G3^499.02533,
499.0234375: C4^499.02533,
499.03106689453125: G3^499.02533,
499.0234375: D3^499.02533 + D4-998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.03106689453125: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^499.02533 + F#4-499.02533,
748.5427856445312: B4^249.51266,
249.51171875: E3^499.02533 + B4-499.02533,
499.0234375: B3^499.02533 + B4-499.02533,
499.0234375: E4^998.05066 + B4-249.51266,
249.51934814453125: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^499.02533,
499.0234375: G3^499.02533,
249.51171875: C5^249.51266,
249.51171875: C4^499.02533,
249.51934814453125: B4^748.538,
249.51171875: G3^499.02533,
499.0234375: D3^499.02533 + A4-748.538,
499.0234375: A3^499.02533,
249.51171875: A4^249.51266,
249.51171875: D4^998.05066 + A4-249.51266,
249.51934814453125: G4^249.51266,
249.51171875: F#4^499.02533,
499.0234375: B2^499.02533 + F#4-748.538,
499.0234375: F#3^499.02533,
249.51171875: D4^249.51266,
249.51171875: B3^499.02533 + B4-499.02533,
499.03106689453125: F#3^499.02533 + B4-499.02533,
499.0234375: E3^499.02533 + B4-748.538,
499.0234375: B3^499.02533,
249.51171875: G4^249.51266,
249.51171875: E4^998.05066,
499.03106689453125: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^499.02533,
499.0234375: G3^499.02533,
499.0234375: C4^499.02533,
499.03106689453125: G3^499.02533,
499.0234375: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.046875: D4^998.05066 + F#4-998.05066,
499.03106689453125: A3^499.02533,
499.0234375: D4^499.02533 + F#4-499.02533,
499.0234375: B4^249.51266,
249.51171875: B4^249.51266,
249.51171875: B4^499.02533,
499.03106689453125: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-499.02533,
499.0234375: G4^249.51266,
249.51171875: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-249.51266,
249.51934814453125: E4^249.51266,
249.51171875: G4^499.02533,
499.0234375: G2^998.05066 + D3-998.05066,
998.046875: G2^998.05066 + D3-998.05066 + A4-249.51266,
249.51934814453125: B4^249.51266,
249.51171875: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + A4-499.02533,
499.0234375: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + B4-499.02533,
499.03106689453125: A4^249.51266,
249.51171875: A4^249.51266,
249.51171875: E3^998.05066 + B3-998.05066,
249.51171875: G4^748.538,
748.53515625: E3^998.05066 + B3-998.05066 + A4-249.51266,
249.51934814453125: B4^249.51266,
249.51171875: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + A4-249.51266,
249.51171875: G4^249.51266,
249.51171875: E4^249.51266,
249.51171875: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + E4-249.51266,
249.51934814453125: D4^249.51266,
249.51171875: G4^499.02533,
499.0234375: G2^998.05066 + D3-998.05066,
998.046875: G2^998.05066 + D3-998.05066,
998.0545043945312: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.046875: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^499.02533 + F#4-499.02533,
499.0386962890625: B4^249.51266,
249.51171875: B4^249.51266,
249.51171875: B4^499.02533,
499.0234375: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-499.02533,
499.0234375: G4^249.51266,
249.51171875: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + G4-249.51266,
249.51171875: E4^249.51266,
249.51171875: G4^499.02533,
499.0234375: G2^998.05066 + D3-998.05066,
998.0621337890625: G2^998.05066 + D3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + A4-499.02533,
499.0234375: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: D3^998.05066 + A3-998.05066 + B4-499.02533,
499.0234375: A4^249.51266,
249.51171875: A4^249.51266,
249.51171875: E3^998.05066 + B3-998.05066,
249.51171875: G4^748.538,
748.5504150390625: E3^998.05066 + B3-998.05066 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^249.51266,
249.51171875: G4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + A4-249.51266,
249.51171875: G4^249.51266,
249.51171875: E4^249.51266,
249.51171875: E4^249.51266,
249.51171875: C3^998.05066 + G3-998.05066 + E4-249.51266,
249.51171875: D4^249.51266,
249.51171875: G4^499.02533,
499.0234375: G2^998.05066 + D3-998.05066,
998.0621337890625: G2^998.05066 + D3-998.05066,
998.046875: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.046875: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0386962890625: A3^499.02533,
499.0234375: G4^499.02533,
499.0234375: A4^499.02533,
499.0234375: E3^499.02533 + B4-1497.076,
499.0234375: B3^499.02533,
499.0234375: E4^499.02533,
499.0234375: B3^499.02533 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: C3^499.02533 + C5-998.05066,
499.0386962890625: G3^499.02533,
499.0234375: C4^499.02533 + B4-998.05066,
499.0234375: G3^499.02533,
499.0234375: D3^499.02533 + A4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0386962890625: A3^499.02533,
499.0234375: G4^499.02533,
499.0234375: A4^499.02533,
499.0234375: E3^499.02533 + B4-1497.076,
499.0234375: B3^499.02533,
499.0234375: E4^499.02533,
499.0234375: B3^499.02533 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: C3^499.02533 + C5-998.05066,
499.0386962890625: G3^499.02533,
499.0234375: C4^499.02533 + B4-998.05066,
499.0234375: G3^499.02533,
499.0234375: D3^499.02533 + A4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0386962890625: A3^499.02533,
499.0234375: D5^499.02533,
499.0234375: C5^499.02533,
499.0234375: E3^499.02533 + B4-1497.076,
499.0234375: B3^499.02533,
499.0234375: E4^499.02533,
499.0234375: B3^499.02533 + A4-249.51266,
249.51171875: B4^249.51266,
249.51171875: C3^499.02533 + C5-998.05066,
499.0386962890625: G3^499.02533,
499.0234375: C4^499.02533 + E4-998.05066,
499.0234375: G3^499.02533,
499.0234375: D3^499.02533 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
499.0386962890625: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
998.046875: E3^499.02533 + G4-1996.1013,
499.0234375: B3^499.02533,
499.0234375: E4^499.02533,
499.0234375: B3^499.02533,
499.0234375: C3^499.02533,
499.0386962890625: G3^499.02533,
499.0234375: C4^499.02533,
499.0234375: G3^499.02533 + A4-499.02533,
499.0234375: D3^998.05066 + A3-998.05066 + D4-998.05066 + F#4-998.05066,
998.046875: D4^998.05066 + F#4-998.05066,
499.0234375: A3^499.02533,
499.0234375: D4^998.05066 + F#4-998.05066,
998.0621337890625: B5^499.02533,
499.0234375: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: C4^998.05066 + G4-998.05066 + G5-499.02533,
499.0234375: G5^249.51266,
249.51171875: E5^249.51266,
249.51171875: C4^998.05066 + G4-998.05066 + G5-249.51266,
249.51171875: E5^249.51266,
249.51171875: G5^499.02533,
499.0234375: G3^998.05066 + D4-998.05066,
998.0621337890625: G3^998.05066 + D4-998.05066 + A5-249.51266,
249.51171875: B5^249.51266,
249.51171875: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: D4^998.05066 + A4-998.05066 + A5-499.02533,
499.0234375: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: D4^998.05066 + A4-998.05066 + B5-499.02533,
499.0234375: A5^249.51266,
249.51171875: A5^249.51266,
249.51171875: E4^998.05066 + B4-998.05066,
249.51171875: G5^748.538,
748.5504150390625: E4^998.05066 + B4-998.05066 + A5-249.51266,
249.51171875: B5^249.51266,
249.51171875: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: C4^998.05066 + G4-998.05066 + A5-249.51266,
249.51171875: G5^249.51266,
249.51171875: E5^249.51266,
249.51171875: E5^249.51266,
249.51171875: C4^998.05066 + G4-998.05066 + E5-249.51266,
249.51171875: D5^249.51266,
249.51171875: G5^499.02533,
499.0234375: G3^998.05066 + D4-998.05066,
998.0621337890625: G3^998.05066 + D4-998.05066,
998.046875: D4^998.05066 + A4-998.05066 + D5-998.05066 + F#5-998.05066,
998.046875: D5^998.05066 + F#5-998.05066,
499.0234375: A4^499.02533,
499.0234375: D5^998.05066 + F#5-998.05066,
998.0621337890625: B5^499.02533,
499.0234375: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: C4^1996.1013 + G4-1996.1013 + G5-499.02533,
499.0234375: G5^249.51266,
249.51171875: E5^249.51266,
249.51171875: G5^249.51266,
249.51171875: E5^249.51266,
249.51171875: G5^499.02533,
499.0234375: G3^1996.1013 + D4-1996.1013,
998.0621337890625: A5^249.51266,
249.51171875: B5^249.51266,
249.51171875: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: D4^1996.1013 + A4-1996.1013 + A5-499.02533,
499.0234375: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: B5^499.02533,
499.0234375: A5^249.51266,
249.51171875: A5^249.51266,
249.51171875: E4^1996.1013 + B4-1996.1013,
249.51171875: G5^748.538,
748.5504150390625: A5^249.51266,
249.51171875: B5^249.51266,
249.51171875: A5^249.51266,
249.51171875: G5^249.51266,
249.51171875: C4^1996.1013 + G4-1996.1013 + A5-249.51266,
249.51171875: G5^249.51266,
249.51171875: E5^249.51266,
249.51171875: E5^249.51266,
249.51171875: E5^249.51266,
249.51171875: D5^249.51266,
249.51171875: G5^499.02533,
499.0234375: G3^1996.1013 + D4-1996.1013,
1996.1090087890625: D4^998.05066 + A4-998.05066 + D5-998.05066 + F#5-998.05066,
998.046875: D5^998.05066 + F#5-998.05066,
499.0234375: A4^499.02533,
499.0234375: D5^499.02533 + F#5-499.02533,
499.0386962890625: D4^249.51266,
249.51171875: D4^249.51266,
249.51171875: B4^249.51266,
249.51171875: A4^499.02533,
499.0234375: A4^249.51266,
249.51171875: E2^499.02533,
249.51171875: G4^249.51266,
249.51171875: B2^499.02533 + E4-499.02533,
499.0234375: E3^2994.152`;
//=====BITMAPS======
setLegend(
  /*[player, bitmap`
................
................
................
....0000........
....0660........
....0660.0......
...04747010.....
..044747010.....
..044777060.....
.0404777410.....
.060777700......
..0047770.......
...057770.......
...057770.......
...050050.......
...030030.......`],*/
  [player2, bitmap`
................
................
................
................
................
.......00.......
.......660......
.......660......
......08800.....
.......888......
.....6688.6.....
.......7776.....
.......777......
.......6.6......
.......6..6.....
.......3..3.....`],
  [player, bitmap`
................
................
................
................
........00......
.......066......
........66......
......L04L4.....
.......444L4....
.......444L4....
.......044L4....
.......0067756..
......001007050.
......010107050.
......001003030.
.......000.000..`],
  [key, bitmap`
....00000000....
...0666666620...
..066666666620..
..016LL1000660..
..011666666660..
...0111666660...
....00116000....
......0160......
......01600.....
......016620....
......01660.....
......016620....
......01600.....
......0160......
......0160......
.......00.......`],
  [love, bitmap`
................
................
................
................
................
...333....333...
..33333.333333..
..333333333323..
..333333333233..
...3333333333...
...333333333....
....33333333....
.....333333.....
......3333......
.......33.......
................`],
  [toll, bitmap`
................
................
.....000000.....
....0LLLLLL0....
...0LLLLLLL20...
..0LLL0000LL20..
..0LL0....0LL0..
..0LL0....0LL0..
..0LL000000LL0..
.06666666666610.
.06266666666620.
.02666666666120.
.06666666661110.
..066666661110..
...0666611110...
....00000000....`],
  [wall, bitmap`
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
  [exit,  bitmap`
2444444444444442
4444444444444444
4444444442222444
4444224442224444
4442224442222444
4442244442122244
4422444444412244
4422444444412244
4422444444412244
4412244444122L44
4412224444222L44
444122222222L444
4444112222LL4444
4444411111L44444
4444444444444444
2444444444444442`],
  [box,  bitmap`
2333333333333332
3333333223333333
3333333223333333
3333223223223333
3332223223222333
3332233223322333
3322333223332233
3322333333332233
3322333333332233
3312233333322333
3312223333222333
3331222222221333
3333112222113333
3333311111133333
3333333333333333
2333333333333332`],
);

setSolids([ player, wall, box ])
setPushables({[player] : [box]})
let level=0;
const levels = [
  map`
wwwwww
......
......
wwwwww
p.kte.
wwwwww`,//Controls
  map`
wwwwwk
......
.wwwwt
.wk...
pwww.f
wet...`,//LEVEL 1
  map`
.w...w
...f.k
wwfw..
p..wwf
wfwwtk
e.t...`,//LEVEL 2
  map`
pf.tte
w...ww
kf...f
.w.f.k
tww.ww
.....k`,//LEVEL 3
  map`
kwpw.k
k.f.f.
tttttt
.f....
w.wfww
.t..te`,//LEVEL 4
  map`
.kf.te
.ww.ft
.w..w.
.wf.wf
.f.w.k
p..f..`,//LEVEL 5
  map`
wew.ww
wftk..
..w.w.
.wwfwt
fw..wt
pfk.we`,//LEVEL 6
  map`
.w.t.e
.f..wf
.wfwkk
.w.wwf
fw.kf.
pw....`,//LEVEL 7
  map`
pw.fwk
f...w.
k.fwwt
..ww..
.ww.ft
t.k.te`,//LEVEL 8
  map`
..f...
.f.w..
ffk.f.
pwfwk.
twwwww
....te`,//LEVEL 9
  map`
wkkwkk
ew.f..
twt.f.
tw.w..
p..wtw
fwkwkk`,//LEVEL 10
  map`
..f..k
.kww.w
.w.tkw
fw.fwe
.w.wcw
pwtehw`,//END
  map`
......
......
......
......
c....c
.p.h..`,//CREDIT
]
setMap(levels[level]);
//=====RESTART======
onInput("j", () => {
  clearText();
  unlock=0
  setMap(levels[level]);
});
//=====CONTROLS======
onInput("l", () => {
  clearText();
  unlock=0
  setMap(levels[level]);
  addText(`-LOVE LOCK-`, {y:1, color: color`3` });
  addText(`Movements `, {y:3, color: color`3` });
  addText(`W, A, S, D`, {y:4, color: color`4` });
  addText(`Other Controls`, {y:6, color: color`3` });
  addText(`I, J, K, L`, {y:7, color: color`7` });
  
});
//=====MUSIC======
var isPlaying = false;
onInput("k", () => {
  if (!isPlaying) {
    playTune(bg, Infinity);
    isPlaying = true;
  }
});
//=====CREDITS======
onInput("i", () => {
  clearText();
  unlock=0
  addText(`-CREDITS-`, {y:1, color: color`3` });
  addText(`Initial Script`, {y:3, color: color`3` });
  addText(`Leo Mcelroy`, {y:4, color: color`4` });
  addText(`Completed By`, {y:6, color: color`3` });
  addText(`N Rizwan`, {y:7, color: color`7` });
  addText(`Song`, {y:9, color: color`3` });
  addText(`Let Her Go`, {y:10, color: color`6` });
  setMap(levels[12]);
});
//=====MOVEMENT======
onInput("a", () => {
  getFirst(player).x -= 1;
});

onInput("d", () => {
  getFirst(player).x += 1;
});

onInput("s", () => {
  getFirst(player).y += 1;
});

onInput("w", () => {
  getFirst(player).y -= 1;
});
//=====================


afterInput(() => {
  tilesWith(key, player).forEach(tile => {
    tile.forEach(sprite => {
      if (sprite.type === key) {
        sprite.remove();
        unlock++;
        clearText();
        addText(`${unlock} keys`, { x:2,color: color`3` });
      } 
    })
  });

  tilesWith(toll, player).forEach(tile => {
    if (unlock) {
      unlock--;
      clearText();
      addText(`${unlock} keys`, { x:2,color: color`3` });
    } else {
      const p = getFirst(player);
      p.x -= p.dx;
      p.y -= p.dy;
    }

  });

  if (tilesWith(player, exit).length === 1) {
    if (level < levels.length-1) {
      level++;
      setMap(levels[level]);
      if (level == levels.length-1) {
        clearText();
        addText("YOU WIN!", {y:1, color: color`3` });
        addText(`-CREDITS-`, {y:3, color: color`3` });
        addText(`Initial Script`, {y:5, color: color`3` });
        addText(`Leo Mcelroy`, {y:6, color: color`4` });
        addText(`Completed By`, {y:8, color: color`3` });
        addText(`N Rizwan`, {y:9, color: color`7` });
        addText(`Song`, {y:11, color: color`3` });
        addText(`Let Her Go`, {y:12, color: color`6` });
      }
    }
  } 
})

