var btnTranslate = document.querySelector("#btn-translate"); // document.querysel is a api call
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

//outputDiv.innerText= "Shivendra"

console.log(txtInput)

function clickEventHandler(){
    outputDiv.innerText= "Banana language " + txtInput.value; // reading output 
}
btnTranslate.addEventListener("click", clickEventHandler)