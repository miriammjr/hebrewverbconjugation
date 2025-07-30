const choose = document.getElementById("choose");
const chooseModal = document.getElementById("chooseModal");
const verbClose = document.getElementById("verbClose");
const chooseContent = document.getElementById("chooseContent");
const collapsibles = document.getElementsByClassName("collapsible");

const verbLists = document.getElementsByClassName("verbList");

let selectedVerbs = [];
for (let i = 0; i < conjugationList.length; i++) {
  selectedVerbs.push([]);
}
let currEfolVerbList = [];
let currEfalVerbList = [];

for (let i = 0; i < verbLists.length; i++) {
  verbLists[i].style.display = "none";
  // console.log(collapsibles[i]);
  collapsibles[i].addEventListener("click", function () {
    if (verbLists[i].style.display === "block") {
      verbLists[i].style.display = "none";
    } else {
      verbLists[i].style.display = "block";
    }
  });

  for (let j = 0; j < eval(`${conjugationList[i]}Verbs.length`); j++) {
    let currentDisplayVerb = eval(`${conjugationList[i]}Verbs[${j}]`);
    verbLists[i].innerHTML =
      verbLists[i].innerHTML +
      `<div class="verb">
    <input type="checkbox" class="verblistverbs" name="current verb" value=${i} onclick="selectVerbs(${i},${j})">
       <label>${currentDisplayVerb[2]}${currentDisplayVerb[1]}${currentDisplayVerb[0]} (${currentDisplayVerb[4]})</label>
       </div>`;
  }
}

function selectVerbs(gzeraNumber, value) {
  if (selectedVerbs[gzeraNumber].includes(value)) {
    selectedVerbs[gzeraNumber].splice(
      selectedVerbs[gzeraNumber].indexOf(value),
      1
    );
  } else {
    selectedVerbs[gzeraNumber].push(value);
  }
}

choose.onclick = function () {
  chooseModal.style.display = "block";
};

verbClose.onclick = function () {
  chooseModal.style.display = "none";
};
