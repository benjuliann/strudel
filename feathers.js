//benjulian
//feathers

setCpm(160/4)

$DRUMS: stack (
  s("bd").beat("0, 4, 8, 11, 14", 16).bank("RolandTR909").gain(1).duckorbit("1:3"),
  //s("bd bd bd bd*2").bank("RolandTR909").gain(1).duckorbit("1:3"),
  s("[hh*2 hh hh*2 hh*2]").bank("RolandTR808").gain(1),
).orbit(2).lpf(5000)._scope()
$BASS: stack(
  s("supersaw!8").note("<c#3 g#2 c#3 [f2 d#2]>").orbit(7),
  s("supersaw!16").note("<c#2 g#1 c#2 [f1 d#1]>").gain(1),
).lpf(slider(770, 100, 2000, 1))._pianoroll()

$MEL: stack(
  //piano melody
  note("<[[d#4 c4] [a#4 c4] [d#4 c4] [g4 g#4]]>").s("piano").lpf(250).gain(1),
  //FAST
  //note("<[[d#4 c4] [a#4 c4] [d#4 c4] [g4 c5]]*2>").s("sine").lpf(250).gain(1),
  //modify: g#4 to *2, c5 f5 d#5, /2
).room("<0 .2 .4 .2>")._pianoroll()
_$MEL2: stack(
  note("<[d#6 d#6] [g#5 g5] [d#6 d#6 d#6 a#5] [b#5 a#5] [a#5 a#5 a#5 c6] [g#5 g5] [d#6 g6] [g#5 g5] >").sound("sawtooth").lpf(600).orbit(7)
)._pianoroll()
_$BASS2: stack(
  note("<[c#3@2 ~@2 c#3@2 ~@2 c#3@3] [~ c#3 g#2@2 ~@2 g#2@2 g#2] [c#3@2 ~@2 c#3@2 ~@2 c#3@3] [~ c#3 f2@2 ~@2 d#2@2 d#2]>"),
  note("<[c#2@2 ~@2 c#2@2 ~@2 c#2@3] [~ c#2 g#1@2 ~@2 g#1@2 g#1] [c#2@2 ~@2 c#2@2 ~@2 c#2@3] [~ c#2 f1@2 ~@2 d#1@2 d#1]>").s("sine").gain(1.2)
).lpf(slider(770, 100, 2000, 1))._pianoroll()
_$DRUMS2: stack(
  s("bd").beat("0, 3, 6, 9, 10, 13, 15", 16).bank("RolandTR909").gain(1).slow(2),
  s("[hh*2 hh hh*2 hh*2]").bank("RolandTR808").gain(1),
).orbit(2).lpf(8000)._scope()
