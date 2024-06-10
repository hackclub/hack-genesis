{}
/*
@title: keyTester
@tags: ['tool']
@addedOn: 2023-01-12
@author: devramsean0
*/
// Music
const beep = tune`
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004,
132.15859030837004: c4~132.15859030837004`
// Sprites & Maps
const indicator = "i";
const block = "b";
setLegend(
  [indicator, bitmap`
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
  [block, bitmap`
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
)
setMap(map`
ibibibibib
bibibibibi
ibibibibib
bibibibibi
ibibibibib
bibibibibi`)
addText
// Keys
onInput("w", () => {
  addText("W", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
  
})
onInput("a", () => {
  addText("A", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("s", () => {
  addText("S", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("d", () => {
  addText("D", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("i", () => {
  addText("I", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("j", () => {
  addText("J", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("k", () => {
  addText("K", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
onInput("l", () => {
  addText("L", { color:color`9`})
  playTune(beep)
  setTimeout(() => {
    clearText()
  }, 5000)
})
// 