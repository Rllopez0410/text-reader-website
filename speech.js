const textInput = document.getElementById('txt');
const playAudio = document.getElementById('play');
const stopAudio = document.getElementById('stop');
const pauseAudio = document.getElementById('pause');
const dltbtn = document.getElementById('delete');
//Create a quarySelectAll to make an array of options that will allow users to
//change and pick the speed of the reader.


let a = '';
let clickPause = false;

playAudio.addEventListener('click', () => {
    if (!clickPause) {
        a = textInput.value;
        speech(a);
    } else if (clickPause) {
        resumeSpeech();
    }
    document.getElementById('pause').style.color = "black";
    document.getElementById('stop').style.color = "black";
});

dltbtn.addEventListener('click', () => {
    textInput.value = "";
    document.getElementById('pause').style.color = "black";
    document.getElementById('play').style.color = "black";
    document.getElementById('stop').style.color = "black";
});

pauseAudio.addEventListener('click', pauseSpeech);

stopAudio.addEventListener('click', stopSpeech);

function speech(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
        document.getElementById('play').style.color = "red";
        textInput.disabled = true;
        utterance.addEventListener('end', () => {
            textInput.disabled = false;
            document.getElementById('play').style.color = "black";
        });
}

//Create a function that allows the user to pick the speed of the reader
//if the user picks the value of 1 the speed should equal to slow.

function pauseSpeech() {
    speechSynthesis.pause();
    clickPause = true;
    document.getElementById('pause').style.color = "red";
    document.getElementById('play').style.color = "black";
    document.getElementById('stop').style.color = "black";
}

function resumeSpeech() {
    speechSynthesis.resume();
    clickPause = false;
}
 
function stopSpeech() {
    if (!clickPause || clickPause) {
        speechSynthesis.cancel();
        document.getElementById('pause').style.color = "black";
        document.getElementById('play').style.color = "black";
        document.getElementById('stop').style.color = "red";
    }
}