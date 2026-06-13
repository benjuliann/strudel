//benjulian
//gardiner

setCpm(174/4)
const energy = slider(1.92, 0, 10)

const bassnotes = [
  "[c2, g3]",
  "[c2, f#3]",
  "[e1, d3]",
  "[d1, a2]",
  "[d1, f#3]",
  "[d1, e3]",
]

//: s("supersaw!8").note("<c2 c2 e1 d1>").lpf(600)
BASS: s("supersaw!8").note(pick(bassnotes, "<0 [0 [1 0 1]] 2 [3 4 [4 5]]>"))
  .lpf(600)
  ._pianoroll()//.transpose("-1")

$DRUMS: stack (
  s("bd").beat("0, 3, 5", 8).slow(2),
  s("cp").beat("1, 3", 4).slow(2),
)

$HATS: stack (
  s("[hh*16]").lpf(1000),
  //s("hh").beat("0, 4, 8, 12, 16, 20, 24, 26, 30, 32", 32)
)


$MELODY: s("square").note("<0 4 6 4 0 4 8 6>").scale("E4:minor")
  .fast(4)
  .lpf(400)
  ._pianoroll()
//.transpose("-1")
