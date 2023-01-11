const textInput = document.getElementById('txt');
const playAudio = document.getElementById('play');
const PauseAudio = document.getElementById('pause');
const resumeAudio = document.getElementById('resume');
const section = document.getElementById('content');

section.addEventListener("scroll", function() {
    if (section.scrollTop >= 1) {
      document.querySelector("nav").style.boxShadow = "0px 0px 5px black";
    } else {
      document.querySelector("nav").style.boxShadow = "none";
    }
});

let a = '';
let click = false;

playAudio.addEventListener('click', () => {
    a = textInput.value;
    speech(a);
    console.log(a);
});

resumeAudio.addEventListener('click', resumeSpeech);

PauseAudio.addEventListener('click', stopSpeech);

function speech(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
}

//Create a function that allows the user to pick the speed of the reader
//if the user picks the value of 1 the speed should equal to slow.

function stopSpeech() {
    speechSynthesis.pause();
}

function resumeSpeech() {
    speechSynthesis.resume()
}
