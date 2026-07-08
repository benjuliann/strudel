
/*
"the feeling" by steve lacy
remade @by benjulian
*/

setCpm(86/4)
const key = "eb:major"

$DRUMS: stack(
  s("bd").beat("0, 7, 9", 16).fast(2).s("drums"),
  s("hh").beat("0, 7, 9, 12", 16).offset(0.2).fast(2).gain(1).s("hihat"),
  s("[hh*32]").offset(0.1).gain(0.4).s("hihat"),
  s("sd").beat("2, 6, 10, 14", 16).bank("mc303").gain(1).speed(0.85),
).slow(2)._scope()
$BASS: stack(
  note(`<[ab bb eb c]>`).s("supersaw, sine").octave(-1).gain(0.8),
  note(`<[ab bb eb c]>`).s("supersaw, sine").octave(-2),
).slow(4).lpf(150).room(1)._scope()

$MEL: note(`<[[- c] [eb ab] [- g] [- f]]
            [[- d][- bb2] [- ab2] [- g2]]
            [[- g2] [eb bb2] [- ab2] [- g2]]*2@2>`).s("ocarina_vib").octave(1).decay(0.5).room(1)._pianoroll()

$PIANO: stack(
  note(`<[-4, -2, 2] [-3, 1] [-7, -3, -1] [-7, -3, -1]>`).gain(0.6),
  note(`<[- [- [f,ab]] [- [eb,g]] [- [eb,g]]]
            [- [- [d,f]] - -]
            [- [- eb] [- d] [- [bb2,d]]]
            [c2 [- eb] - - ]>`).gain(0.5)
).s("piano").scale(key).transpose(12).lpf(500)._pianoroll()

$BACKING: stack(
  note("<[eb4] [f4] [f4] [c4]>").beat("0, 2, 3, 5, 6, 10, 14, 15", 16).s("gm_electric_guitar_muted").gain(0.7),
  note("<[eb [eb f]] [d c] [bb2 ab2] [g2]>").s("sqr").octave(2).lpf(400).room(1).gain(0.3)
)._pianoroll()
