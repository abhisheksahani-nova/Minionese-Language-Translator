var txtInput = document.querySelector("#txt-input");
var button = document.querySelector("#btn-click");
var outputDiv = document.querySelector("#out-div");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text){
  return url + "?"+"text="+text;
}

function handleClick() {

  var text = txtInput.value;

  fetch(constructURL(text))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(error => {
      console.log("error occured ", error);
      alert("Something wrong with server! try again after some time")
    })
}

button.addEventListener("click", handleClick);
