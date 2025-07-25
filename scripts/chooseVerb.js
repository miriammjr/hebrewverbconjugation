const choose = document.getElementById("choose");
const chooseModal = document.getElementById("chooseModal");
const verbClose = document.getElementById("verbClose");
const chooseContent = document.getElementById("chooseContent");
const paalShlemimCollapsible = document.getElementById(
  "paalShlemimCollapsible"
);
const paalSlemimEFalCollapsible = document.getElementById(
  "paalShlemimEfalCollapsible"
);
const paalShlemimVerbList = document.getElementById("paalShlemimVerbList");
const paalShlemimEfalVerbList = document.getElementById(
  "paalShlemimEfalVerbList"
);

// let currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[0]);
let currVerbList = [];

paalShlemimVerbList.style.display = "none";
paalShlemimEfalVerbList.style.display = "none";

paalShlemimCollapsible.addEventListener("click", function () {
  if (paalShlemimVerbList.style.display === "block") {
    paalShlemimVerbList.style.display = "none";
  } else {
    paalShlemimVerbList.style.display = "block";
  }
});

paalSlemimEFalCollapsible.addEventListener("click", function () {
  if (paalShlemimEfalVerbList.style.display === "block") {
    paalShlemimEfalVerbList.style.display = "none";
  } else {
    paalShlemimEfalVerbList.style.display = "block";
  }
});

for (let i = 0; i < PaalShlemimEfolVerbs.length; i++) {
  paalShlemimVerbList.innerHTML =
    paalShlemimVerbList.innerHTML +
    `<div class="verb">
    <input type="checkbox" class="verblistverbs" name="current verb" value=${i} onclick="selectVerbs(${i})">
       <label>${PaalShlemimEfolVerbs[i][2]}${PaalShlemimEfolVerbs[i][1]}${PaalShlemimEfolVerbs[i][0]} (${PaalShlemimEfolVerbs[i][4]})</label>
       </div>`;
}

for (let i = 0; i < PaalShlemimEfalVerbs.length; i++) {
  paalShlemimEfalVerbList.innerHTML =
    paalShlemimEfalVerbList.innerHTML +
    `<div class="verb">
    <input type="checkbox" class="verblistverbs" name="current verb" value=${i} onclick="selectVerbs(${i})">
       <label>${PaalShlemimEfalVerbs[i][2]}${PaalShlemimEfalVerbs[i][1]}${PaalShlemimEfalVerbs[i][0]} (${PaalShlemimEfalVerbs[i][4]})</label>
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
