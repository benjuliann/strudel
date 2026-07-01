
/*
"holding me down"
@by benjulian
*/

setCpm(105/4)
const key = "f#3:chromatic"
const energy = slider(900, 300, 900, 1)


$DRUMS: stack(
  s("bd").beat("0, 4, 5, 7, 9, 12, 13", 16).s("drums").duckorbit(2).duckattack("<0.1>").duckdepth(1),
  s("[hh*16]").offset(0.1).bank("ace"),
  s("sd").beat("2, 6, 10, 14", 16).bank("mc303").gain(3).speed(0.85),
).slow(2)._scope()

$BASS: stack(
  note(`<[0 -2 -3 [-4 -2]] [0 -2 3 [5 -2]]>`).s("supersaw, sine").scale(key).octave(-1),
  note(`<[0 -2 -3 [-4 -2]] [0 -2 3 [5 -2]]>`).s("supersaw, sine").octave(-2),
).orbit(2).slow(4).lpf(energy)._pianoroll()

$PIANO: stack(
  note(`<<[0, 4, 7] [0, 4, 7] [0, 4, 7] [0, 3, 7]> 
        <[0, 4, 7] [0, 3, 7 [2, 5, 7]]>>`).s("piano").scale(key).gain(1).lpf(energy),
).orbit(2)._pianoroll()

$SYNTH: stack (
  note(" - 7 9 7 2 0 -5 0").s("tri").decay(0.5).delay(0.8).scale(key).octave(1).gain(slider(0.7, 0, 1, 0.1)).pan(0.8).orbit(2),
  note("- [0*9]@3").slow(2).s("piano").delay(0.5).scale(key).transpose(24).gain(0.3).pan(-0.8),
).lpf(energy)._pianoroll()
