/*
Queen St by twentythree  
remade by benjulian
*/

setCpm(97/4)
const key = "c:major"
samples('https://shabda.ndre.gr/Hey.json?strudel=1')

$BASS: note("<[0@2 -1@2 2 ~@1.5 2@2 2@2]>").s("square, sine")
  .gain(0.8).scale(key).transpose(-12).lpf(2000).orbit("3").room(0.8)._pianoroll()
$MEL: note("<[4 ~ [4 ~] [2 ~] [6 ~ ~] [4 ~] [5 ~] [6 ~]] [[7 ~] ~ [8 ~] [6 ~] [6 ~ ~] [6 ~] [4 ~] [5 ~]]>")
  .s("supersaw").room(0.3).scale(key).transpose(12).gain(1.5)._pianoroll()
$TXT: note("<[[7 6 ~ ~] [4 6 5 ~] ~ [4 ~ ~] [~ ~ 6 5] ~ [9 ~ ~] [~ ~ 6 5]]>")
 .s("gm_lead_1_square").scale(key).transpose(12).slow(2).room(0.8).gain(0.25)._pianoroll()
$DRUMS: stack (
  s("bd").beat("<[0] [0, 3, 6]@3>", 16).bank("RolandTR909").gain(1.5),
  s("bd").beat("<[0] [0, 3, 6]@3>", 16).bank("bossdr110").gain(1).room(0.5),
  s("cp").beat("1, 3", 4).bank("mc303").gain(3),
  s("cp").beat("1, 3", 4).bank("RolandTR808").gain(1.5),
  s("Hey:7").beat("1, 3, 7", 8).decay(0.4).gain(0.5).speed(1.3)
)._scope()
