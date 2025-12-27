const texts =[
    "The quick brown fox jumps over the lazy dog",
    "Typing fast is a skill you can practise daily",
    "Javascript makes web pages interactive"
]

const textDisplay = document.getElementById("text")
const input = document.getElementById("input")
const timeDisplay = document.getElementById("time")
const WPMDisplay = document.getElementById("WPM")
const restartBtn = document.getElementById("restart")


let startTime, timer, currentText;

function newText(){
   startTime = new Date()
   timer = setInterval(() => {
    let seconds = Math.floor((new Date() - startTime)/1000)
    timeDisplay.textContent = seconds;

   const words = input.ariaValueMax.trim ().split(/\s+/).length
   const minutes = seconds / 60 || 1
   const WPM = Math.round(words/ minutes)
   WPMDisplay.textContent = WPM

  if (input.value === currentText) clearInterval(timer)
  }, 1000)

}
 
input.addEventListener("input", () => {
    startTime = null
    newText();
})

newText()