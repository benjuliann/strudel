//benjulian
//circles

setCpm(132/4)
const energy = slider(0.06, 0, 10)

$BASS: stack(
  s("square!8").note("<a2 [g2 c2] f2 [d2 e2]>").gain(0.7),
  s("square!16").note("<a1 [g1 c1] f1 [d1 e1]>").gain(0.8),
).lpf(slider(1412, 100, 2000, 1)).lpenv(energy)._pianoroll()
$DRUMS: stack (
  s("bd").beat("0, 6, 10", 16).bank("RolandTR909").gain(1).duckorbit("1:3"),
  s("[hh*16]").bank("RolandTR808").gain(0.6),
  s("cp").beat("1, 3", 4).bank("RolandTR808").gain(1)
).orbit(2).lpf(8000)._scope()
$MEL: stack(
  note("<[a3@4 c4@8 d4@4 g4@8 d4@8] [a3@4 c4@8 d4@4 g4@8 d4@8] [f3@4 a3@8 c4@4 e4@8 c4@8] [d3@4 f3@8 c4@4 e4@8 g3@8]>"),
).pan(0.5).gain(1)._pianoroll()
$SYNTH: stack(
    note("<[b5@2 b5 b5]*4 <[g5@2 g5 g5]*4 [a5@2 a5 a5]*4>>").pan(0.1),
    note("<[e5@2 e5 e5]*4 <[d5@2 d5 d5]*4 [d5@2 c5 c5]*4>>").pan(0.9),
).lpf(slider(3937, 100, 5000, 1)).decay(0.2).gain(0.3)._pianoroll()
$SYNTH2: stack(
    //SYNTH2
    //note("<[c4@2 c4 c4]*4 [b3@2 e4 g3] [a3@2 a3 a3]*4 [g3@2 g3 g3]*4>").s("saw").gain(0.7)
  note("<[c4@2] [b3@2 e4 g3] [a3@2] [g3@2]>").s("saw").gain(0.6)
).pan(0.8).lpf(slider(2271, 200, 5000, 1))._pianoroll()
