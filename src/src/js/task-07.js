const rangeLine = document.querySelector('#font-size-control');
const textFont = document.querySelector('#text');


rangeLine.addEventListener('input', rangeNumber);

function rangeNumber (event) {
    const rangeNumber = event.currentTarget.value;
    textFont.style.fontSize = `${rangeNumber}`+'px'
}