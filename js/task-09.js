function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const colorDisplay = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  widget.computedStyleMap.backgroundColor = newColor;

  colorDisplay.textContent = newColor;
});
