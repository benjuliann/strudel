/*
"addition"
@by benjulian
*/

setCpm(140/4)
const energy = slider(6.16, 0, 10)
const key = "c#4:major"

const bassnotes = [
  "[d2, a2]",
  "[e2, b2]",
  "[f2, c3]",
  "[g2, c3]",
  "[a2, e3]",
  "[a2, a3]"
]

//: s("supersaw!8").note("<c2 c2 e1 d1>").lpf(600)
$SQR: s("square!8").note(pick(bassnotes, "<0 [0 [1 0 1]] 2 [3 4 [4 5]]>"))
  .lpf(800).transpose(1)
  ._pianoroll().gain(0.8).orbit(2)

$BASS: note("< -6 [1 0] -4 [0 -2]>").s("supersaw").scale(key).transpose(-24).detune("0.3").orbit(2)

$DRUMS: stack (
  s("bd").beat("0, 2, 7, 8, 10, 13, 15", 16).slow(2).s("drums").gain(1).duckorbit(2).duckattack("<0.1>").duckdepth(1),
  //s("sd").beat("4, 7, 9, 12, 14", 16).bank("emudrumulator").transpose(3),
  s("sd").beat("2", 4).s("snare_hi"),
  s("cp").beat("2", 4)
)

$HATS: stack (
  //s("[hh*16]").lpf(1000),
  s("hh").beat("0, 4, 8, 12, 16, 20, 24, 26, 30, 32", 32)
).bank("compurhythm1000").gain(0.7)

//gm_synth_strings1
$STRINGS: s("gm_synth_strings_1").note(pick(bassnotes, "<4 4 3 3>")).transpose(13).euclid(7, 8).gain(0.8).orbit(2)

$ARP: note("<[1 4 7 9]@4 [0 2 4 7]@4>").s("sine").fast(8).scale(key).room(0.8).gain(0.5).orbit(2)

$MELODY: s("square").note("<1 4 -3 -2 2 0>").scale(key).orbit(2)
  .fast(8)
  .lpf(400).gain(0.6).detune("0.5")
  ._pianoroll()

