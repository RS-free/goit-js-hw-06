function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const showColorSpan = document.querySelector(".color");

function changeColor() {
    const randomColors = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
    showColorSpan.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener("click", changeColor);
