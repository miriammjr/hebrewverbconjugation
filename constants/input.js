// input bar
const input = document.getElementById("input");
document.onload = clearInput();
// adds a letter
function addText(x) {
  input.value = input.value + x;
}

function clearInput() {
  input.value = "";
}
// clear button
const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
  clearInput();
});

const backspace = document.getElementById("backspace");
// delete button
function deleteButton() {
  input.value = input.value.substring(0, input.value.length - 1);
}
backspace.addEventListener("click", (event) => deleteButton());

document.addEventListener("keydown", (event) => {
  if (!event.ctrlKey) {
    if (parseInt(event.key) >= 0 && parseInt(event.key) < 10) {
      addText(vowels[event.key].value);
      event.preventDefault();
    } else if (event.key == "-") {
      addText(vowels[10].value);
      event.preventDefault();
    } else if (event.key == "=") {
      addText(vowels[11].value);
      event.preventDefault();
    } else if (event.key == "Escape") {
      clearInput();
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
    } else if (event.key === "ש") {
      addText("שׁ");
      event.preventDefault();
    } else if (event.key === "/") {
      addText("שׂ");
      event.preventDefault();
    }
  }
});

function checkLetters() {
  const showLetters = document.getElementById("showLetters");

  if (showLetters.checked == true) {
    document.getElementById("letters").style.display = "flex";
  } else {
    document.getElementById("letters").style.display = "none";
  }
}
