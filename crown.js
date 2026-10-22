/*
@title crown
@by benjulian
*/

setCpm(140/4)

_$bass: note("f#2@3 d2@5 b1@8")
  .s("supersaw, sine")
  .slow(4)

$bass2: note("d2@3 f#2@5 b1@8")
  .s("supersaw, sine")
  .slow(4)

_$recorder: note("f#3@3 d3@5 b2@8")
  .s("recorder_bass_sus")
  .slow(4).gain(1)

_$strings: note("[f#3,a3,g#4]@3 [d3,a3,e4]@5 [b2,a3,e4]@8")
  .s("gm_string_ensemble_1")
  .slow(4)
  .room(0.4).swingBy(1/3, 4)

$strings2: note("[f#3,a3,e4]@3 [f#3,a3,g#4]@5 [b2,a3,e4]@8")
  .s("gm_string_ensemble_1")
  .slow(4)
  .room(0.4).swingBy(1/3, 4)

_$choir: note("[f#3,a3,g#4]@3 [d3,a3,e4]@5 [b2,a3,e4]@8")
  .s("gm_choir_aahs")
  .slow(4)
  .room(0.4)

$lead: note("c#5 f#5 <c#5 b4> <b4 a4>")
  .fast(2).swingBy(1/2, 4)
  .gain(0.7)
  .delay(0.3)
  .pan("-0.73 0.73")

$kick: n("0").s("kick")
  .struct("t ~ ~ t ~ ~ t ~ ~ ~ t ~ ~ t ~ ~ t ~ ~ t ~ ~ t ~ ~ ~ t ~ ~ t ~ t")
  .slow(4)

$snare: n("0").s("snare")
  .struct("~ t")

_$snare2: n("1").s("snare")
  .struct(" t ~ ~ t ~ ~ t ~ ~ ~ t ~ ~ t ~ t")
  .slow(2)
  .gain(0.5)

$oh: n("1").s("hats")
  .struct("t t")
  .gain(0.3)
  .room(0.2)
  
_$hh: n("0").s("hats")
  .struct("t t t t", "t t t t t t t t", "t t t t", "t t t t")
  .gain(0.2)
  .slow(2)
