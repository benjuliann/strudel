/*
"addition"
@by benjulian
*/
/*
await initHydra()
s0.initCam()
src(s0)
  .pixelate(200, 200, 140)
  .color(2.2, 2.2, 2)
  .luma(0.1)
  //.scale(0.4)
  .out()
*/
setCpm(140/4)


const key = "c4:major"

const bassnotes = [
  "[d2, a2]", "[e2, b2]", "[f2, c3]", "[g2, c3]", "[a2, e3]", "[a2, a3]"
]


$ARP: stack(
  note("<[1 4 7 9]@4 [0 2 4 7]@4>").s("sine").scale(key).orbit(2).fast(8).room(0.8).gain(0.5),
  s("square").note("<1 4 -3 -2 2 0>").scale(key).orbit(2).fast(8).lpf(400).gain(0.6).detune("0.5")
)._pianoroll()
$BASS: note("< -6 [1 0] -4 [0 -2]>").s("supersaw").scale(key).gain(1.5).transpose(-24).detune("0.3").orbit(2)
  ._scope()
const energy = slider(5890,0, 7000, 10)
$STRINGS: s("gm_synth_strings_1").note(pick(bassnotes, "<4 4 3 3>")).transpose(12).euclid(7, 8).gain(0.8).orbit(2).lpf(energy)

$SQR: s("square!8").note(pick(bassnotes, "<0 [0 [1 0 1]] 2 [3 4 [4 5]]>"))
  .lpf(energy).transpose(0)
  ._pianoroll().gain(0.8).orbit(2)

$DRUMS: stack (
  //s("[hh*16]").lpf(1000),
  //s("hh").beat("0, 4, 8, 12, 16, 20, 24, 26, 30, 32", 32).bank("compurhythm1000").gain(0.7),
  s("cp").beat("2", 4)
).lpf(10000)

$KICK: stack (
  s("drums").beat("0, 2, 7, 8, 10, 13, 15", 16).slow(2).gain(1).duckorbit(2).duckattack("<0.1>").duckdepth(1),
  //s("sd").beat("4, 7, 9, 12, 14", 16).bank("emudrumulator").transpose(3),
)



