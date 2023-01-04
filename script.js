const textInput = document.getElementById('txt');
const playAudio = document.getElementById('play');
const PauseAudio = document.getElementById('pause');
const resumeAudio = document.getElementById('resume');

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

function stopSpeech() {
    speechSynthesis.pause();
}

function resumeSpeech() {
    speechSynthesis.resume()
}