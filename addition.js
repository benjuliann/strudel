//benjulian
//addition
//play w guitar

setCpm(130/4)
const energy = slider(6.16, 0, 10)

const bassnotes = [
  "[d2, a2]",
  "[e2, b2]",
  "[f2, c3]",
  "[g2, c3]",
  "[a2, e3]",
  "[a2, a3]"
]

//: s("supersaw!8").note("<c2 c2 e1 d1>").lpf(600)
_BASS: s("square!8").note(pick(bassnotes, "<0 [0 [1 0 1]] 2 [3 4 [4 5]]>"))
  .lpf(800)
  ._pianoroll().gain(0.6)
$DRUMS: stack (
  s("bd").beat("0, 2, 10", 16).bank("RolandTR909").gain(1),
  s("sd").beat("4, 7, 9, 12, 14", 16).bank("emudrumulator").transpose(3)
)

$HATS: stack (
  //s("[hh*16]").lpf(1000),
  s("hh").beat("0, 4, 8, 12, 16, 20, 24, 26, 30, 32", 32)
).bank("compurhythm1000").gain(0.7)


$MELODY: s("square").note("<1 4 -3 -2 2 0>").scale("c4:major")
  .fast(8)
  .lpf(400)
  ._pianoroll()

