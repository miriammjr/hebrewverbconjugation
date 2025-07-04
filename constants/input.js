// input bar
const input = document.getElementById("input");
document.onload = function () {
  input.value = "";
};

// adds a letter
function addText(x) {
  input.value = input.value + x;
}

// clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
  input.value = "";
});

const backspace = document.getElementById("backspace");
// delete button
function deleteButton() {
  input.value = input.value.substring(0, input.value.length - 1);
}
backspace.addEventListener("click", (event) => deleteButton());
