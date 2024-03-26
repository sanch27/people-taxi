const form = document.getElementById('form');
const password = document.getElementById('password');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success')


};


const validateInputs = () => {
    const passwordValue = password.value.trim();
    const phonenumber = phonenumber.value.trim();


    if(passwordValue === '') {
        setError(password, 'Password 8-digit is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 charcaters.')
    } else {
        setSuccess(password);
    }

    if(phonenumber === '') {
        setError(phonenumber, 'Phone number 10-digit is required');

    } else {
        setSuccess(phonenumber);
    }
};





