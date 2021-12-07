const inputSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSizeControl.addEventListener("input", function () {
    text.style.fontSize = `${inputSizeControl.value}px`;
});
