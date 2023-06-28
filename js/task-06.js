const inputEl = document.querySelector('#validation-input');
// console.log(inputEl)
const dataLength = inputEl.getAttribute('data-length');
// console.log(dataLength)


const checkInputValueLength = (event) => {
    const CurrentValue = event.currentTarget.value
    if (Number(dataLength) === Number(CurrentValue.length) ) {
        inputEl.classList.add('valid');
        inputEl.classList.replace('invalid', 'valid')

    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.replace('valid', 'invalid');
    }
}

inputEl.addEventListener('blur', checkInputValueLength)


   