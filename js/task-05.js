const inputText = document.querySelector('input');
const outputText = document.querySelector('span');


inputText.addEventListener("input", (event) => {
    event.currentTarget.value === '' ? outputText.textContent = 'Anonimus' : outputText.textContent = event.currentTarget.value;
})
