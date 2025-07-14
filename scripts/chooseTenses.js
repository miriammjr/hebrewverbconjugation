const tenseModal = document.getElementById("tenseModal");
const chooseTense = document.getElementById("chooseTense");
const tenseClose = document.getElementById("tenseClose");
const allTenses = document.getElementById("allTenses");
let allTensesSelected = false;

chooseTense.onclick = function () {
  tenseModal.style.display = "block";
};

tenseClose.onclick = function () {
  tenseModal.style.display = "none";
};

allTenses.onclick = function () {
  if (allTensesSelected == false) {
    presentBox.checked = true;
    pastBox.checked = true;
    futureBox.checked = true;
    imperativeBox.checked = true;
    femFutureBox.checked = true;
    singularBox.checked = true;
    pluralBox.checked = true;

    masculineBox.checked = true;
    feminineBox.checked = true;
    firstBox.checked = true;
    secondBox.checked = true;
    thirdBox.checked = true;

    allTensesSelected = true;
  } else {
    presentBox.checked = false;
    pastBox.checked = false;
    futureBox.checked = false;
    imperativeBox.checked = false;
    femFutureBox.checked = false;
    singularBox.checked = false;
    pluralBox.checked = false;

    masculineBox.checked = false;
    feminineBox.checked = false;
    firstBox.checked = false;
    secondBox.checked = false;
    thirdBox.checked = false;

    allTensesSelected = false;
  }
};
