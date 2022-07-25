const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', (event) => {

    // Number(textInput.value.length) === Number(dataLength) ? textInput.classList.add('valid') : textInput.classList.add('invalid');
    
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        classCheck()
    } else (event.currentTarget.classList.add('invalid'));

    function classCheck() {
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.replace('invalid', 'valid')
        } else { event.currentTarget.classList.add('valid') }
    };
})

