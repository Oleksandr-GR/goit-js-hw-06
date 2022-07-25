function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const currentColorText = document.querySelector('.color');


changeColorBtn.addEventListener('click', changeColor)

function changeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  currentColorText.textContent = color;

}