const API_KEY = "9T0De2Yl0hPjBHyUWHrRuv3StHeEGlIp"
const API_PREFIX = "https://api.giphy.com/v1/gifs/search?api_key=";
const API_SETTINGS = "&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

function formSubmitted(event) {
    event.preventDefault();
    let inputFieldContent = document.querySelector("[name=meme-input]").value;
    console.log(inputFieldContent);
}
function renderGifs(response) {
    console.log(response);
}

function getMemes(searchExpression) {
    fetch(
        `${API_PREFIX}${API_KEY}&q=${searchExpression}&limit=25&${API_SETTINGS}`
    )
        .then((data) => data.json())
        .then(renderGifs);

}

document.querySelector("#meme-form").addEventListener("submit", formSubmitted);