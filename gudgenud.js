/*
du bist gud genud 
remade by benjulian
*/

setCpm(122/4)
const key = "g:major"

// section1: ANACRUSIS
let vox = s("gudgenud:2").clip(8.6).scope()

// section2: CHORUS
let chords = chord("<C D D Em G>").anchor("<e5 f#5 a5 g5 b5>").scope()

let piano = note("<[-4,12] [[-3,13]@0.75 [-1,15]@0.25] [-2,14] [0,16]>").s("gm_piano")
  .scale(key).decay(3).room(.5).lpf(600)._pianoroll()
let kick = s("bd").beat("0, 4, 8, 11, 14", 16).orbit(1).bank("RolandTR909").gain(slider(0, 0, 1))._scope()
let hat = s("hh").beat("1", 2).bank("RolandTR909").fast(4).gain(slider(0, 0, 0.5)).scope()

// section3: BEATDROP 
let haus = stack(
  s("bd").beat("0", 2).bank("RolandTR909").fast(4).gain(1),
  //s("cp").beat("1", 2).fast(2).gain(0.3)
  s("sh").fast(16).decay(0.2).bank("akaixr10").gain(0.02),
  s("oh").fast(4).decay(1).bank("bossdr220").room(1).gain(slider(0.1248, 0, 0.2))
)

let vox2 = s("gudgenud:2").loop(2).begin(17/32-0.007).end(19/32).gain(1.4)

let synth = note(`<[[-4,-2]@0.75 [-4,-2]@0.25 
                  [-3,-1]@0.75 [-1,1]@0.25 
                  [-2,0]@0.75 [-2,0]@0.25 
                  [0,2]@0.75 [0,2]@0.25] 
                  [[-4,5]@0.75 [-4,5]@0.25 
                  [-3,4]@0.75 [-1,8]@0.25 
                  [-2,7]@0.75 [-2,7]@0.25 
                  [-2,7]@0.75 [-2,7]@0.25]>`).s("gm_pad_warm")
  .scale(key).room(.5).lpf(800).slow(4).decay(0.3)
  .ply("<4.@0.75 2@0.25>")._pianoroll()
let sub = note(`<[-7,-4]@0.75 [-7,-4]@0.25
                [-6,-3]@0.75 [-3,-1]@0.25
                [-5,-2]@0.75 [-5,-2]@0.25  
                [-3,0]@0.75 [-3,0]@0.25 
                >`).s("sine")
  .scale(key).transpose(0)
  .ply("<4.@0.75 2@0.25>").decay(0.5).room(1)
  ._pianoroll()

$: arrange(
  [0.6, vox],
  [4, stack(piano, kick)],
  [4, stack(piano, kick, hat)],
  [8, stack(hat, vox2, haus, synth, sub)]
)._pianoroll();