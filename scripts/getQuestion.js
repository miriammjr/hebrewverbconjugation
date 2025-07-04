const question = document.getElementById("question");
const start = document.getElementById("start");
const result = document.getElementById("result");

const presentBox = document.getElementById("present");
const pastBox = document.getElementById("past");
const futureBox = document.getElementById("future");
const imperativeBox = document.getElementById("imperative");
const femFutureBox = document.getElementById("femfuture");
const gender = document.getElementById("gender");
const number = document.getElementById("number");
const tense = document.getElementById("tense");
const person = document.getElementById("person");

let currAnswer = "";

// 4 present, 9 past, 10 future (8 without fem plurals), 4 imperative (3 w/o fem plurals), 1 imperative, 1 gerund

const presentConjugations = [
  test1.presentMascSing(),
  test1.presentFemSing(),
  test1.presentMascPlural(),
  test1.presentFemPlural(),
];

const pastConjugations = [
  test1.pastFirstSingular(),
  test1.pastSecondSingularMale(),
  test1.pastSecondSingularFemale(),
  test1.pastThirdSingularMale(),
  test1.pastThirdSingularFemale(),
  test1.pastFirstPersonPlural(),
  test1.pastSecondPluralMale(),
  test1.pastSecondPluralFemale(),
  test1.pastThirdPlural(),
];

const futureConjugations = [
  test1.futureFirstSing(),
  test1.futureSecondMasculineSing(),
  test1.futureSecondFeminineSing(),
  test1.futureThirdMasculineSing(),
  test1.futureThirdFeminineSing(),
  test1.futureFirstPlural(),
  test1.futureSecondMascPlural(),
  test1.futureThirdPlural(),
  test1.futureSecondFemininePlural(),
  test1.futureThirdFemininePlural(),
];

const imperativeConjugations = [
  test1.imperativeMasculine(),
  test1.imperativeFeminine(),
  test1.imperativePlural(),
  test1.imperativeFemininePlural(),
];

function getPresentVerb() {
  tense.innerHTML = "present tense";
  let x = Math.floor(Math.random() * 4);
  console.log(x);
  if (x == 0 || x == 2) {
    gender.innerHTML = "masculine";
  } else {
    gender.innerHTML = "feminine";
  }
  if (x == 0 || x == 1) {
    number.innerHTML = "singular";
  } else {
    number.innerHTML = "plural";
  }

  currAnswer = presentConjugations[x];
}

function getPastVerb() {
  tense.innerHTML = "past tense";
  let x = Math.floor(Math.random() * 9);
  if (x < 5) {
    number.innerHTML = "singular";
  } else {
    number.innerHTML = "plural";
  }
  if (x == 0 || x == 5) {
    person.innerHTML = "first person";
  } else if (x == 8 || x == 3) {
    person.innerHTML = "third person";
  } else {
    person.innerHTML = "second person";
  }
  if (x == 1 || x == 3 || x == 7) {
    gender.innerHTML = "masculine";
  } else if (x == 2 || x == 4 || x == 8) {
    gender.innerHTML = "feminine";
  }
  currAnswer = pastConjugations[x];
}

function getFutureVerb() {
  tense.innerHTML = "future tense";
  let x = -1;
  if (femFutureBox.checked) {
    x = Math.floor(Math.random() * 10);
  } else {
    x = Math.floor(Math.random() * 8);
  }
  if (x == 0 || x == 5) {
    person.innerHTML = "first person";
  } else if (x == 1 || x == 2 || x == 6 || x == 8) {
    person.innerHTML = "second person";
  } else {
    person.innerHTML = "third person";
  }
  if (x == 1 || x == 3 || x == 6 || x == 7) {
    gender.innerHTML = "masculine";
  } else if (x == 0 || x == 5) {
    gender.innerHTML = "";
  } else {
    gender.innerHTML = "feminine";
  }
  if (x < 5) {
    number.innerHTML = "singular";
  } else {
    number.innerHTML = "plural";
  }
  currAnswer = futureConjugations[x];
}

function getImperativeVerb() {
  tense.innerHTML = "imperative";
  let x = -1;
  if (femFutureBox.checked) {
    x = Math.floor(Math.random() * 4);
  } else {
    x = Math.floor(Math.random() * 3);
  }
  person.innerHTML = "";
  if (x < 2) {
    number.innerHTML = "singular";
  } else {
    number.innerHTML = "plural";
  }
  if (x == 0 || x == 2) {
    gender.innerHTML = "masculine";
  } else {
    gender.innerHTML = "feminine";
  }
  currAnswer = imperativeConjugations[x];
}

function getVerb() {
  clearInput();
  result.innerHTML = "";
  gender.innerHTML = "";
  number.innerHTML = "";
  person.innerHTML = "";
  question.innerHTML = test1.infinitive();
  let currentFunctions = [];
  if (presentBox.checked == true) {
    currentFunctions.push("present");
  }
  if (pastBox.checked == true) {
    currentFunctions.push("past");
  }
  if (futureBox.checked == true) {
    currentFunctions.push("future");
  }
  if (imperativeBox.checked == true) {
    currentFunctions.push("imperative");
  }
  if (currentFunctions.length == 0) {
    question.innerHTML = "Select a tense below.";
  } else {
    let x = Math.floor(Math.random() * currentFunctions.length);
    let tense = currentFunctions[x];
    if (tense == "present") {
      getPresentVerb();
    } else if (tense == "past") {
      getPastVerb();
    } else if (tense == "future") {
      getFutureVerb();
    } else if (tense == "imperative") {
      getImperativeVerb();
    }
  }
}

start.addEventListener("click", (event) => getVerb());
