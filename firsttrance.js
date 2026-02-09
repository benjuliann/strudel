setCpm(140/4)

$drums: stack (
  s("bd bd bd bd").gain(0.5),
  s("hh hh oh hh hh hh oh oh").gain(0.6),
  s("cp").beat("4, 12", 16).gain(0.7)
).orbit(2)._scope().lpf(5000)//.bank("RolandTR909")

$bass: stack(
  s("supersaw!8").note("<[f#1 f#2]*4 [a1 a2]*4 [e1 e2]*4 [b1 b2]*4>").lpf(800),
  s("supersaw!16").note("<c#3 e3 b2 f#3>").gain(0.35)
)._scope()
$mel: note("<[[a4 e4] e5 [d5 c#5] [d5 c#5]] [[a4 e4] e5 [d5 c#5] [b4 c#5]] [[a4 e4] e5 [d5 c#5] [d5 c#5]] [[a4 e4] e5 [a5 g#5] [e5 c#5]]>")
.sound("sawtooth").lpf(900).orbit(7)
