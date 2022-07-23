const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute('data-length')


textInput.addEventListener('blur', () => {

    Number(textInput.value.length) === Number(dataLength) ? textInput.classList.add('valid') : textInput.classList.add('invalid');
    
})

