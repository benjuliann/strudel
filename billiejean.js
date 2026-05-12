//benjulian
//billie jean

setCpm(117/4)

const DRUMS = stack (
  s("bd").beat("0, 4", 8).bank("lm1").gain(1),
  s("sd").beat("2, 6", 8).bank("dmx") ,
  s("[hh*8]").bank("rolandd70").lpf(4000)
).room(0.2)

const PERC1 = stack (
  s("cp").beat("2", 8).bank("bossdr550"),
  s("[sh*8]").bank("circuitsdrumtracks").lpf(4500)
).gain(0.15)

const BASS1 = note("<[0 -3 -1 0 -1 -3 -4 -3]>").s("gm_fretless_bass").scale("f#1:minor").gain(0.6)

const SINE1 = note("<[0 -3 -1 0 -1 -3 -4 -3]>").s("sine").scale("f#2:minor")

const KEYS1 = stack(
  note("<[0 - - 1 - - - -] [2 - - 1 - - - - ]>").s("gm_voice_oohs").scale("f#4:minor").gain(0.4).lpf(2000),
  note("<[0 - - 1 - - - -] [2 - - 1 - - - - ]>").s("gm_synth_strings_2").scale("f#4:minor"),
  note("<[0 - - 1 - - - -] [2 - - 1 - - - - ]>").s("gm_synth_strings_2").scale("f#4:minor").transpose(-5),
).room(0.5).gain(0.7)


$: arrange(
  [2, DRUMS],
  [4, stack(DRUMS, BASS1, SINE1)],
  [4, stack(DRUMS, BASS1, SINE1, KEYS1, PERC1)]
)._pianoroll()
