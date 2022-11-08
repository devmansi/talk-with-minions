const btnTranslate = document.querySelector("#btn-translate");
const txtArea = document.querySelector("#input");
const outputDiv = document.querySelector("#output");
const apiUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
    return apiUrl + "?" + "text= " + text;
}

function errorHandler(error) {
    console.log("Something went wrong.", error);

    alert("Something went wrong. Please try after sometime.")
}

btnTranslate.addEventListener("click", () => {
    let inputText = txtArea.value; 

    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then((json) => {
            let translation = json.contents.translated;

            outputDiv.innerText = translation;
        })
        .catch(errorHandler)
});