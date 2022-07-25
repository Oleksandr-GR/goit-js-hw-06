const logForm = document.querySelector('.login-form')

logForm.addEventListener('submit', formSubmit);

function formSubmit(event) {

    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') { return alert("Пожалуйста, заполните все поля формы регистации") };

    const logData = {
        email: email.value, 
        password: password.value
    }

    console.log(logData);
    event.currentTarget.reset();
}

