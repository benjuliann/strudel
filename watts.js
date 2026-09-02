/*
"watts"
@by benjulian
*/

setCpm(96/4)
samples('https://shabda.ndre.gr/string.json?strudel=1')
samples('https://shabda.ndre.gr/sing.json?strudel=1')
samples({
  vox: 'https://cdn.freesound.org/previews/742/742280_5781159-lq.mp3',
})

let kick = s("bd, compurhythm8000_bd, linnlm1_bd")
  .struct("t ~ ~ ~ ~ ~ t t ~ ~ t ~ ~ ~ ~ ~")
  .duckorbit(2)
  .duckattack(0.2)
  .duckdepth(1)

let snare = s("casiorz1_sd, sd")
  .struct("~ t ~ t")

let hihat = s("compurhythm8000_hh")
  .struct("t t t t".fast(4))
  .gain("<1 0.6 1 0.6>".fast(8))

let mel = note("c5 c5 d#4 d#4 bb4 bb4 d#4 d#4")
  .s("sine")
  .decay(0.4)
  .delay(0.4)

let bass = note("ab2 d#2 c#2@2 f2 [f#2 ab2] c#2@2")
  .s("sqr")
  .lpf(800)
  .slow(4)

let bass2 = note("ab2 d#2 c#2@2 f2 [f#2 ab2] c#2@2")
  .s("sine")
  .slow(4)
  .size(10)

let mel2 = note("d#5 d#4 d#5 d#4 d#5 [d#5 f5] [d#5 c5] <[d#5 c5] [g5 f5]>")
  .s("sine")
  .room(0.5)
  .decay(0.4)

let piano = note("bb3@3 d#4@3 bb3@2")
  .s("piano")
  .decay(0.5)
  .delay(0.5)
  .delaytime(1/3)
  .gain(2)
  .room(0.5)

let piano2 = note("bb3*3@3 d#4*3@3 bb3*2@2")
  .s("piano")
  .decay(0.4)
  .delay(0.2)
  .gain(1.5)
  .room(1)


$: arrange(
  [2, stack(kick, hihat, snare)],
  [8, stack(kick, hihat, snare, mel, bass2)],
  [8, stack(kick, hihat, snare, mel, bass, bass2, mel2, piano2)]
)
