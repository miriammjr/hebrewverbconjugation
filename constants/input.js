// input bar
const input = document.getElementById("input");
document.onload = function () {
  input.innerHTML = "";
};

// adds a letter
function addText(x) {
  input.innerHTML = input.innerHTML + x;
}

// clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
  input.innerHTML = "";
});

const backspace = document.getElementById("backspace");
// delete button
function deleteButton() {
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 2);
}
backspace.addEventListener("click", (event) => deleteButton());
