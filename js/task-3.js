const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

function inputValue(value) {
    return value.trim();
}
function inputText(value) {
    return value === '' ? 'Anonimus' : value;
}
function updateExit(event) {
    const newValue = inputValue(event.target.value);
    outputElem.textContent = inputText(newValue);
}
inputElem.addEventListener('input', updateExit);