/*
@title vintage vuitton - earfzilla
remade @by benjulian
*/

setCpm(126/4)

$BASS: note(`[[d1 d2]@6*6 [d1 f#2] [a1 <f#2 b3>]]@2*2 
            [[e1 e2]@6*6 [e1 f#2] [a3 f#3]] 
            [[a1 g2] [d1 g2]@7*7]`)
  .s("saw").slow(8).gain(0.6).compressor("-20:20:10:.002:.02")

$KICK: s("kick")
  .struct("[[t]@3*3 [t - t t t - t -]]@3*3 [[t][t - - t - - - -][t] [t - t t t - t -]]")
  .slow(8).compressor("-20:20:10:.002:.02")
//$SNARE2: n("10").s("snare_low").struct("[t ~ t t] [[~ t] t ~ ~]")
$HAT: s("insect, triangles").decay(0.2).room(0.05).gain(0.5).fast(2)

$BELL: stack(
  s("metal:1").struct("~*3 [~ ~ ~ ~ ~ t ~ ~]").decay(0.2),
  s("metal:4").struct("~*3 [~ ~ ~ ~ ~ ~ ~ t]").decay(0.2)
).slow(2).gain(0.6).room(0.1)

$SNARE: s("kr55_sd")
  .struct("- t")
  .fast(2).gain(1.2)

//.chop(4).cut(1)
//.scrub(irand(16).div(16).seg(8))
$VOX: n(0).s("vuittonsample").struct("~@30 t").slow(8)._pianoroll()
$SAMPLE: n(1).s("vuittonsample").slice(16, "0*13@13 4*3@3 0*13@13 4*3@3 8*16@16 12*16@16").slow(8)._pianoroll()//.splice(2, "<0 1>")
$SYNTH: note("~@7*7 [~ ~ [[a4 b4] a4] [g4 f#4]]").s("sqr").slow(8)

_$VOX2: n(3).s("vuittonsample").struct("t ~@30").gain(1.2).slow(8)._pianoroll()

_$CHORDS: note(`[[d3, a3, f#4]@13*13 [g3, g4 ,b4]@3*3]@2*2 
              [[e3, g3, b4]@16*16]
              [[g3, d4, d5]@16*16]`)
  .n(7).s("gm_epiano1").slow(8).decay(0.3).sustain(0)//.lpf(1000)
//.n(7).s("gm_epiano1") or .n(6).s("gm_epiano2")
