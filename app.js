var btnTranslate = document.querySelector("#btn-translate"); // document.querysel is a api call
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// translation function
function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text;
}

// error handaler function



console.log(txtInput)

function clickEventHandler() {


    var inputText = txtInput.value; // taking input 

    // calling server for processing 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        

}
btnTranslate.addEventListener("click", clickEventHandler)