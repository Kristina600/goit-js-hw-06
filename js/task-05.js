const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
    

input.addEventListener("input", (event) => {

    span.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        return span.textContent = `Anonymous`

    } else
   
     if (event.currentTarget.value === " " ) {
        return span.textContent = `Anonymous` 
    }

});

