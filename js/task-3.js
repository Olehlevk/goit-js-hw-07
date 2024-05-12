const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", handleInput);

function handleInput(event) {
  const getValue = event.target.value.trim();
  outputValue.textContent = getValue || "Anonymous";
}
