// VOWELS
const holam = document.getElementById("holam");
const tzere = document.getElementById("tzere");
const segol = document.getElementById("segol");
const shva = document.getElementById("shva");
const khirik = document.getElementById("khirik");
const patakh = document.getElementById("patakh");
const dagesh = document.getElementById("dagesh");
const kamatz = document.getElementById("kamatz");
const kubutz = document.getElementById("kubutz");
const reducedSegol = document.getElementById("reduced-segol");
const reducedPatakh = document.getElementById("reduced-patakh");
const reducedKamatz = document.getElementById("reduced-kamatz");
const vowels = [
  reducedSegol,
  dagesh,
  shva,
  khirik,
  kubutz,
  holam,
  segol,
  tzere,
  kamatz,
  patakh,
  reducedKamatz,
  reducedPatakh,
];

for (let i = 0; i < vowels.length; i++) {
  vowels[i].addEventListener("click", (event) => {
    addText(vowels[i].value);
  });
}
