function speedRecognitionHandler() {
  var mic = document.getElementsByClassName("micIcon")[0];
  mic.classList.add("mic");
  console.log(mic.classList);
  var searchInput = document.getElementsByClassName("input_box")[0];
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
  var SpeechRecognitionEvent =
    SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  recognition.start();

  recognition.onresult = function (event) {
    searchInput.value = event.results[0][0].transcript;
  };

  recognition.onend = function (event) {
    mic.classList.remove("mic");
  };
}

function regularSearchHandler(e) {
  e.preventDefault();
  var form = document.forms.search;
  var textterm = form.elements[0].value;
  form.action = `https://google.com/search?q=${textterm}`;
  form.submit();
}

function feelingLuckyHandler(e) {
  e.preventDefault();
  var form = document.forms.search;
  var textterm = form.elements[0].value;
  form.action = `https://google.com/webhp?#q=${textterm}&btnI=I`;
  form.submit();
}

function imageSearchHandler(e) {
  e.preventDefault();
  var form = document.forms.search;
  var textterm = form.elements[0].value;
  form.action = `https://google.com/webhp?#q=${textterm}&tbm=isch`;
  form.submit();
}
