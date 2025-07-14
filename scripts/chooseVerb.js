const choose = document.getElementById("choose");
const chooseModal = document.getElementById("chooseModal");
const verbClose = document.getElementById("verbClose");
const chooseContent = document.getElementById("chooseContent");
const verbList = document.getElementById("verbList");

// let currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[0]);
let currVerbList = [];

for (let i = 0; i < PaalShlemimEfolVerbs.length; i++) {
  verbList.innerHTML =
    verbList.innerHTML +
    `<div class="verb">
    <input type="checkbox" class="verblistverbs" name="current verb" value=${i} onclick="selectVerbs(${i})">
       <label>${PaalShlemimEfolVerbs[i][2]}${PaalShlemimEfolVerbs[i][1]}${PaalShlemimEfolVerbs[i][0]} (${PaalShlemimEfolVerbs[i][4]})</label>
       </div>`;
}

function selectVerbs(value) {
  if (currVerbList.includes(value)) {
    currVerbList.splice(currVerbList.indexOf(value), 1);
  } else {
    currVerbList.push(value);
  }
}

choose.onclick = function () {
  chooseModal.style.display = "block";
};

verbClose.onclick = function () {
  chooseModal.style.display = "none";
};
