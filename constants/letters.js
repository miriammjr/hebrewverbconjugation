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
const blank = "";
const letters = [
  shin, // a ש 1
  nun, // b נ2
  bet, // c ב3
  gimel, // d ג4
  kof, // e ק5
  kaf, // f כ6
  ayin, // g ע7
  yod, // h י8
  nunsofit, // i ן9
  khet, // j ח10
  lamed, // k ל11
  kafsofit, // l 12ך
  tsadi, // m צ13
  mem, // n מ14
  memsofit, // 15o ם
  pe, // p פ16
  sin, // q /17
  resh, // r ר18
  dalet, // s ד19
  alef, // t א20
  vav, // u ו21
  he, // v ה22
  "", // w '23
  samekh, // x24 ס
  tet, // y ט25
  zayin, // z ז26
  pesofit, // ; ף27
  tsadisofit, // . 28ץ
  tav, // , ת29
];

for (let i = 0; i < letters.length; i++) {
  if (i != 22) {
    letters[i].addEventListener("click", (event) => {
      addText(letters[i].value);
    });
  }
}

const dageshkal = ["ב", "ג", "ד", "כ", "פ", "ת"];
