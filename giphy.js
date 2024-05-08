function formSunmitted(event) {
    event.preventDefault();
    let inputFieldContent = document.querySelector("[name=meme-input]").value;
    console.log(inputFieldContent);
}

document.querySelector("#meme-form").addEventListener("submit", formSubmitted);