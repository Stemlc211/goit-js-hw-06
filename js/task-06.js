const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const requiredLength = parseInt(input.getAttribute("data-length"), 10);

  if (input.value.length === requiredLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
