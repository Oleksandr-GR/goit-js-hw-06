function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputField = document.querySelector('input')
const createClickHandling = document.querySelector('button[data-create]')
const destroyClickHandling = document.querySelector('button[data-destroy]')
const figureBlock = document.querySelector('#boxes');
figureBlock.style.display = "flex";
figureBlock.style.listStyle = "none"; console.log(figureBlock)

let size = 20;

createClickHandling.addEventListener('click', createBoxes);
destroyClickHandling.addEventListener('click', destroyBoxes);

function createBoxes(amount) {

  amount = Number(inputField.value);

  for (let i = 1; i <= amount; i += 1){
      
    size += 10;
    figureBlock.insertAdjacentHTML('beforeend', `<div style="height:${size}px; width:${size}px; border: 1px solid black; background-color: ${getRandomHexColor()};"></div>`)
      
  }
}

function destroyBoxes() {
  size = 20;
  figureBlock.innerHTML = '';
  inputField.value = '';

}