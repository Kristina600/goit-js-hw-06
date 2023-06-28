const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
textEl.style.fontSize = inputEl.value"px";



const changeSize = (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(inputEl.value);
    console.log(textEl.style.fontSize)
}

inputEl.addEventListener('input', changeSize)