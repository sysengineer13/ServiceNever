function ready(fn) {
  if (document.readyState != "loading") {
    fn()
  } else {
    document.addEventListener("DOMContentLoaded", fn)
  }
}

let audio
ready(() => {
  const next = document.getElementById('waldobutton')
  audio = document.getElementById('teams')
  // next.addEventListener('click',()=>{
  //   setTimeout(playAudio, 20 * 1000)
  // })

  // It works in chrome without a click
  setTimeout(playAudio, 6 * 1000)
})

const playAudio = () => {
  var min = 5,
    max = 10
  var rand = Math.floor(Math.random() * (max - min + 1) + min)
  audio.play()
  setTimeout(() => { audio.stop()}, 12000)
  setTimeout(playAudio, rand * 1000)
}

