// import "/paal/paal-shlemim-efol.js";
const input = document.getElementById("input");
document.onload = function () {
  input.innerHTML = "";
};

const result = document.getElementById("result");
const question = document.getElementById("question");
const start = document.getElementById("start");
const checkButton = document.getElementById("check");

const clear = document.getElementById("clear");
const alef = document.getElementById("alef");
const samekh = document.getElementById("samekh");
const vav = document.getElementById("vav");
const gimel = document.getElementById("gimel");
const resh = document.getElementById("resh");
const yod = document.getElementById("yod");
const memsofit = document.getElementById("memsofit");
const tav = document.getElementById("tav");

const vavholam = document.getElementById("vav-holam");
const tzere = document.getElementById("tzere");
const segol = document.getElementById("segol");
const shva = document.getElementById("shva");
const khirik = document.getElementById("khirik");
let letters = [alef, samekh, vav, gimel, resh, yod, memsofit, tav];
let vowels = [vavholam, tzere, segol, shva, khirik];

const test1 = new PaalShlemimEfol("ר", "ג", "ס");
// const curr = document.getElementById("all");
let currAnswer = "";

// curr.innerHTML = `<p>${test1.presentMascSing()}</p>`;

function addText(x) {
  input.innerHTML = input.innerHTML + x;
}

function getPresentVerb() {
  input.innerHTML = "";
  result.innerHTML = "";
  let x = Math.floor(Math.random() * 4);
  console.log(x);
  if (x == 0) {
    question.innerHTML = "Masculine singular present of לִסְגּוֹר";
    currAnswer = test1.presentMascSing();
  } else if (x == 1) {
    question.innerHTML = "Feminine singular present of לִסְגּוֹר";
    currAnswer = test1.presentFemSing();
  } else if (x == 2) {
    question.innerHTML = "Masculine plural present of לִסְגּוֹר";
    currAnswer = test1.presentMascPlural();
  } else if (x == 3) {
    question.innerHTML = "Feminine plural present of לִסְגּוֹר";
    currAnswer = test1.presentFemPlural();
  }
}

function check() {
  console.log(input.innerHTML);
  if (input.innerHTML == currAnswer) {
    result.innerHTML = "Correct.";
  } else {
    result.innerHTML = "Wrong. The right answer is " + currAnswer + ".";
  }
}

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", (event) => {
    addText(letters[i].value);
  });
}

for (let i = 0; i < vowels.length; i++) {
  vowels[i].addEventListener("click", (event) => {
    addText(vowels[i].value);
  });
}

clear.addEventListener("click", (event) => {
  input.innerHTML = "";
});

start.addEventListener("click", (event) => getPresentVerb());
// start.addEventListener("click", (event) => console.log("PRESSED"));
checkButton.addEventListener("click", (event) => check());
