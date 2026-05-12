//benjulian
//plates

setCpm(150/4)
const energy = slider(6.16, 0, 10)

const bassnotes = [
  "[d2, a2]",
  "[e2, b2]",
  "[f2, c3]",
  "[g2, c3]",
  "[a2, e3]",
  "[a2, a3]"
]

$BASS: s("supersaw!8").note("<3 [3 4] 2 [0 -3]>").scale("d#2:major").lpf(600)

_BASS: s("square!8").note(pick(bassnotes, "<0 [0 [1 0 1]] 2 [3 4 [4 5]]>"))
  .lpf(800)
  ._pianoroll().gain(0.6)
$DRUMS: stack (
  s("bd").beat("0, 2, 11", 16).bank("RolandTR909").gain(1),
  s("sd").beat("4, 9, 12, 15", 16).bank("emudrumulator").transpose(3)
).slow(2 )

$HATS: stack (
  s("[hh*16]").lpf(1000),
  //s("rd").beat("0, 4, 8, 12, 16, 20, 24, 26, 30, 32", 32)
).bank("compurhythm1000").gain(0.2)


$MELODY: note("<[-4 -2 0 1 4 -1 0 1]*2 [-5 -3  0 1 5 2 4 5]*2>").s("square").scale("d#4:major")
  .slow(2)
  .lpf(400)
  ._pianoroll()

