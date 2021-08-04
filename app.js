var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}


function errorHandler(error) {
    console.log("error occured", error)
    alert("Something wrong with server please try after sometime!!!");
}


function clickEventHandler() {
    var inputText = txtInput.value; //taking input

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

}
btnTranslate.addEventListener("click", clickEventHandler)