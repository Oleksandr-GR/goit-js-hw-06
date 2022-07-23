function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackground = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color')
const currentColorText = document.querySelector('.color')


changeColorBtn.addEventListener('click', changeColor)

function changeColor() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  currentColorText.textContent = getRandomHexColor()

}