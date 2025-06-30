// import "/paal/paal-shlemim-efol.js";
const input = document.getElementById("input");
document.onload = function () {
  input.innerHTML = "";
};

const result = document.getElementById("result");
const question = document.getElementById("question");
const start = document.getElementById("start");
const checkButton = document.getElementById("check");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");

// LETTERS
const alef = document.getElementById("alef");
const bet = document.getElementById("bet");
const gimel = document.getElementById("gimel");
const dalet = document.getElementById("dalet");
const he = document.getElementById("he");
const vav = document.getElementById("vav");
const zayin = document.getElementById("zayin");
const khet = document.getElementById("khet");
const tet = document.getElementById("tet");
const yod = document.getElementById("yod");
const kaf = document.getElementById("kaf");
const kafsofit = document.getElementById("kafsofit");
const lamed = document.getElementById("lamed");
const mem = document.getElementById("mem");
const memsofit = document.getElementById("memsofit");
const nun = document.getElementById("nun");
const nunsofit = document.getElementById("nunsofit");
const samekh = document.getElementById("samekh");
const ayin = document.getElementById("ayin");
const pe = document.getElementById("pe");
const pesofit = document.getElementById("pesofit");
const tsadi = document.getElementById("tsadi");
const tsadisofit = document.getElementById("tsadisofit");
const kof = document.getElementById("kof");
const resh = document.getElementById("resh");
const shin = document.getElementById("shin");
const sin = document.getElementById("sin");
const tav = document.getElementById("tav");
const letters = [
  alef,
  bet,
  gimel,
  dalet,
  he,
  vav,
  zayin,
  khet,
  tet,
  yod,
  kaf,
  kafsofit,
  lamed,
  mem,
  memsofit,
  nun,
  nunsofit,
  samekh,
  ayin,
  pe,
  pesofit,
  tsadi,
  tsadisofit,
  kof,
  resh,
  shin,
  sin,
  tav,
];

// VOWELS
const holam = document.getElementById("holam");
const tzere = document.getElementById("tzere");
const segol = document.getElementById("segol");
const shva = document.getElementById("shva");
const khirik = document.getElementById("khirik");
const patakh = document.getElementById("patakh");
const dagesh = document.getElementById("dagesh");
const kamatz = document.getElementById("kamatz");
const shuruk = document.getElementById("shuruk");
const kubutz = document.getElementById("kubutz");
let vowels = [
  holam,
  tzere,
  segol,
  shva,
  khirik,
  patakh,
  dagesh,
  kamatz,
  shuruk,
  kubutz,
];

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

function deleteButton() {
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 2);
}

start.addEventListener("click", (event) => getPresentVerb());
// start.addEventListener("click", (event) => console.log("PRESSED"));
checkButton.addEventListener("click", (event) => check());
backspace.addEventListener("click", (event) => deleteButton());
