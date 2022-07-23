const inputText = document.querySelector('input');
const outputText = document.querySelector('span');


inputText.addEventListener("input", (event) => {
    outputText.textContent = event.currentTarget.value;
})
