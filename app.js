var btnTranslate = document.querySelector("#btn-translate"); // document.querysel is a api call
var txtInput = document.querySelector("#txt-input")
console.log(txtInput)

function clickEventHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
}
btnTranslate.addEventListener("click", clickEventHandler)