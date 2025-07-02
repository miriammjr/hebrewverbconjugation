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

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", (event) => {
    addText(letters[i].value);
  });
}
