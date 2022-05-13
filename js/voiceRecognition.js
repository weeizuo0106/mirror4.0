$(document).ready(function(){
  const log = console.log;
// Set Up or Import
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// Setting
var recognition = new SpeechRecognition();
log('recognition', recognition);
var speechRecognitionList = new SpeechGrammarList();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Get frontend UI elements
var diagnostic = document.querySelector('.output');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a voice command...');
}

recognition.onresult = function(event) {
  // 1) Get Input
  const result = event.results[0][0].transcript; 

  // 2) Process Input
  if (result=="weather") {
    loadWeatherContainer();
  }else if(result=="stop alarm"){
    stopAlarm();
  }else if(result=="set alarm") 
  {
    setAlarm();
  } else if(result=="")

  // 3) Update UI

  diagnostic.textContent = 'Result received: ' + result + '.';
}

function loadWeatherContainer(){
  console.log("detect weather");
}

function stopAlarm(){
  console.log("stop alarm");
}
// Error Handlers (Lessly Use)
recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}

});
