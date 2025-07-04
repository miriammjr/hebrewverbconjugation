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

document.addEventListener("keydown", (event) => {
  if (parseInt(event.key) >= 1 && parseInt(event.key) < 10) {
    addText(vowels[event.key - 1].value);
    event.preventDefault();
  } else if (event.key == "Escape") {
    input.value = "";
  } else if (event.key == "Enter") {
    if (result.innerHTML == "") {
      check();
    } else {
      getVerb();
    }
  } else if (
    event.key.charCodeAt(0) >= 97 &&
    event.key.charCodeAt(0) <= 122 &&
    event.key != "w" &&
    !event.key.charCodeAt(1)
  ) {
    addText(letters[event.key.charCodeAt(0) - 97].value);
    event.preventDefault();
  } else if (event.key === ";") {
    addText(letters[26].value);
    event.preventDefault();
  } else if (event.key === ".") {
    addText(letters[27].value);
    event.preventDefault();
  } else if (event.key === ",") {
    addText(letters[28].value);
    event.preventDefault();
  } else if (event.key === "w") {
    event.preventDefault();
  }
});
