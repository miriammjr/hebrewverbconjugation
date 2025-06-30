// import "/paal/paal-shlemim-efol.js";
const input = document.getElementById("input");
document.onload = function () {
  input.innerHTML = "";
};

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
const curr = document.getElementById("all");

console.log(test1.presentMascSing());
console.log(test1.presentFemPlural());
console.log(test1.presetFemSing());
console.log(test1.presentMascPlural());

curr.innerHTML = `<p>${test1.presentMascSing()}</p>`;

function addText(x) {
  input.innerHTML = input.innerHTML + x;
  console.log("PRESSED");
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
