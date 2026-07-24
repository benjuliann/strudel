/*
"montgary"
@by benjulian and skyla
*/

setCpm(125/4)

const key = "d#4:minor"
//const energy = slider(200, 200, 7000, 10)

$DRUMS: stack (
  s("hh!16").gain(0.3).lpf(2000).bank("compurhythm1000"),
  s("ace_bd").beat("0, 7, 8, 11, 14", 16).duckorbit(2).duckattack(0.4),
  s("cp").beat("2", 4).fast(2).room(0.2),//.duckorbit(1).duckattack(0.3),
  //s("akailinn_sd").beat("2", 4).gain(0.2).room(0.2),
)

$ARP: note("<[0 1 4 <3 8 4 9>]>").fast(4).scale(key).gain(0.3).lpf(500)

$BASS: s("supersaw!32").note("<[0 [-3 -2]] [[-4 -3] -2]>")
  .slow(2).scale(key).transpose(-24).lpf(200)

$: note("<[f4 f4 f4] [f#4@2 c#4 bb3]>").s("sine")
  .transpose(12).fast(2).lpf(400).gain(0.3)
_$SQ: s("square").note("bb, d#").struct("x - x x x - x").lpf(700).gain(0.5)



samples({
  v: 'https://cdn.freesound.org/previews/742/742280_5781159-lq.mp3',
})
$: s("v").slice(16, "9*4 11*2 [6 8] 12*2"
                .every(3, x=>x.rev())).slow(4)//.seg(16)
  .cut(0.6).gain(0.2).orbit(2)
  .speed("<1>").room(0.5).size(10).delay(0.2)

bass: n("<0 2 0 4>".sub(7).add("0,4?,7")).scale("d#4:minor").sound("sine")
  .seg(16)
  .legato(1.4).penv(0.1)//.penv("4, 0, -4")
  .dist("3:0.02")//.orbit(2)

m: s("ace_hh(<9 11>,16)").gain(0.1).delay("<0.5 0.7>").orbit(1).gain(sine.range(0,0.15).slow(4))

//all(x, x=>bpf(9000))



//all(x, x=>x.lpf(0))
