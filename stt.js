var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resultElement = document.getElementById('result');

var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startButton.addEventListener('click', () => { recognition.start(); });
stopButton.addEventListener('click', () => { recognition.stop(); });

recognition.addEventListener('result', (event) => {
    var aux = event.results[event.resultIndex]
    const result = aux[0].transcript;
    resultElement.value = result;
});