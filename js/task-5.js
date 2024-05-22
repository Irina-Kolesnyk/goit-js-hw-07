function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const chahgeColor = document.querySelector('.color');
const chahgeColorBtn = document.querySelector('.change-color');

chahgeColorBtn.addEventListener('click', function () {
    const randomColorElem = getRandomHexColor();
    document.body.style.backgroundColor = randomColorElem;
    chahgeColor.textContent = randomColorElem;
});


