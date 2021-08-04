var btnTranslate = document.querySelector("#btn-translate"); // document.querysel is a api call
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

 //var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

// translation function
function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text;
}

// error handaler function

function errorHandaler(error){
    console.log("error occured",error)
    alert("Something wrong with server : try again after sometime ")
}

//console.log(txtInput)

function clickEventHandler() {
    // outputDiv.innerText = "Banana language " + txtInput.value; // reading output 

    var inputText = txtInput.value; // taking input 

    // calling server for processing 

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandaler) // handaling error

}
btnTranslate.addEventListener("click", clickEventHandler)