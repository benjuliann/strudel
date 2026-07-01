/*
"sway"
@by benjulian
*/

setCpm(120/4)
const key = "f3:major"
samples('https://shabda.ndre.gr/Hey.json?strudel=1')
samples('github:tidalcycles/dirt-samples')

$KICK: stack(
  s("bd").beat("0, 3, 5", 8).s("drums").gain(1).duckorbit(2).duckattack("<0.1>").duckdepth(1),
  s("bd").beat("0, 3, 5", 8).bank("9000"),
)

$DRUMS: stack(
  s("[- hh*2] [hh - hh@2] [hh hh hh -] -").bank("casiorz1"), //ace, circuitstom, casiorz1
  s("cp").beat("1, 3", 4).bank("mc303").gain(3),
  s("cp").beat("1, 3", 4).bank("RolandTR808").gain(1.5),
  //s("Hey:7").beat("1, 3, 7", 8).decay(0.4).gain(0.15).speed(1),
  //s("[sd - - sd] [- - sd -] [- - sd@2][sd sd sd -]").bank("ace").gain(1.5)
)._scope()

$BASS: stack(
  note(`<[[2@2 - 2] [- - 3@2][- 3] -] 
       [[4@2 - 4] [- - 5@2][- 5] -]>`)
  .s("sine, supersaw").scale(key).octave(-2)
).orbit(4).gain(1.3)

$KEYS: stack(
  note(`<[[[-3@2, -1@2] - - [-3, -1]] [- [-2@2, 0@2]][- [-2, 0@2]] -]
  [[[-1@2, 1@2] - - [-1, 1]] [- [-3@2, -1@2]][- [-3, 0@2]] -]>`)
).orbit(2).s("square").scale(key).octave(1).lpf(700)

$MEL: note("2 4 1 0 7 6 4 2").decay(0.2).scale(key).octave(1).gain(0.50)

$SYNTH: note("-1 0 1 [2 4]").slow(2).scale(key).gain(0.4).s("gm_epiano1")
