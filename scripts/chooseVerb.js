const choose = document.getElementById("choose");
const chooseModal = document.getElementById("chooseModal");
const close = document.getElementById("chooseClose");
const chooseContent = document.getElementById("chooseContent");
const verbList = document.getElementById("verbList");

let currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[0]);

for (let i = 0; i < PaalShlemimEfolVerbs.length; i++) {
  verbList.innerHTML =
    verbList.innerHTML +
    `<input type="radio" class="verblistverbs" name="current verb" value=${i} onclick="selectVerbs(${i})">
       <label>${PaalShlemimEfolVerbs[i][2]}${PaalShlemimEfolVerbs[i][1]}${PaalShlemimEfolVerbs[i][0]} (${PaalShlemimEfolVerbs[i][4]})</label>`;
}

function selectVerbs(value) {
  currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[value]);
}

choose.onclick = function () {
  chooseModal.style.display = "block";
};

close.onclick = function () {
  chooseModal.style.display = "none";
};
