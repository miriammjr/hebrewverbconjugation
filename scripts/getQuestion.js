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

function getPresentVerb() {
  tense.innerHTML = "present tense";
  let x = Math.floor(Math.random() * 4);
  if (x == 0) {
    // question.innerHTML = "Masculine singular present of " + test1.infinitive();
    currAnswer = test1.presentMascSing();
    person.innerHTML = "";
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
  } else if (x == 1) {
    // question.innerHTML = "Feminine singular present of " + test1.infinitive();
    currAnswer = test1.presentFemSing();
    person.innerHTML = "";
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
  } else if (x == 2) {
    // question.innerHTML = "Masculine plural present of " + test1.infinitive();
    currAnswer = test1.presentMascPlural();
    person.innerHTML = "";
    gender.innerHTML = "masculine";
    number.innerHTML = "plural";
  } else if (x == 3) {
    // question.innerHTML = "Feminine plural present of " + test1.infinitive();
    currAnswer = test1.presentFemPlural();
    person.innerHTML = "";
    gender.innerHTML = "feminine";
    number.innerHTML = "plural";
  }
}

function getPastVerb() {
  tense.innerHTML = "past tense";
  let x = Math.floor(Math.random() * 9);
  if (x == 0) {
    // question.innerHTML = "Singular first person past of " + test1.infinitive();
    currAnswer = test1.pastFirstSingular();
    gender.innerHTML = "";
    number.innerHTML = "singular";
    person.innerHTML = "first person";
  } else if (x == 1) {
    // question.innerHTML =
    "Singular second person masculine past of " + test1.infinitive();
    currAnswer = test1.pastSecondSingularMale();
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
    person.innerHTML = "second person";
  } else if (x == 2) {
    // question.innerHTML =
    "Singular second person feminine past of " + test1.infinitive();
    currAnswer = test1.pastSecondSingularFemale();
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
    person.innerHTML = "second person";
  } else if (x == 3) {
    // question.innerHTML =
    "Singular third person masculine past of " + test1.infinitive();
    currAnswer = test1.pastThirdSingularMale();
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
    person.innerHTML = "third person";
  } else if (x == 4) {
    // question.innerHTML =
    "Singular third person feminine past of " + test1.infinitive();
    currAnswer = test1.pastThirdSingularFemale();
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
    person.innerHTML = "third person";
  } else if (x == 5) {
    // question.innerHTML = "Plural first person past of " + test1.infinitive();
    currAnswer = test1.pastFirstPersonPlural();
    gender.innerHTML = "";
    number.innerHTML = "plural";
    person.innerHTML = "first person";
  } else if (x == 6) {
    // question.innerHTML =
    "Plural second person masculine past of " + test1.infinitive();
    currAnswer = test1.pastSecondPluralMale();
    gender.innerHTML = "masculine";
    number.innerHTML = "plural";
    person.innerHTML = "second person";
  } else if (x == 7) {
    // question.innerHTML =
    "Plural second person feminine past of " + test1.infinitive();
    currAnswer = test1.pastSecondPluralFemale();
    gender.innerHTML = "feminine";
    number.innerHTML = "plural";
    person.innerHTML = "second person";
  } else if (x == 8) {
    // question.innerHTML = "Plural third person past of " + test1.infinitive();
    currAnswer = test1.pastThirdPlural();
    gender.innerHTML = "";
    number.innerHTML = "plural";
    person.innerHTML = "third person";
  }
}

function getFutureVerb() {
  tense.innerHTML = "future tense";
  let x = -1;
  if (femFutureBox.checked) {
    x = Math.floor(Math.random() * 10);
  } else {
    x = Math.floor(Math.random() * 8);
  }

  if (x == 0) {
    // question.innerHTML =
    "Singular first person future of " + test1.infinitive();
    currAnswer = test1.futureFirstSing();
    gender.innerHTML = "";
    number.innerHTML = "singular";
    person.innerHTML = "first person";
  } else if (x == 1) {
    // question.innerHTML =
    "Singular masculine second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondMasculineSing();
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
    person.innerHTML = "second person";
  } else if (x == 2) {
    // question.innerHTML =
    "Singular feminine second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondFeminineSing();
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
    person.innerHTML = "second person";
  } else if (x == 3) {
    // question.innerHTML =
    "Singular masculine third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdMasculineSing();
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
  } else if (x == 4) {
    // question.innerHTML =
    "Singular feminine third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdFeminineSing();
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
  } else if (x == 5) {
    // question.innerHTML = "Plural first person future of " + test1.infinitive();
    currAnswer = test1.futureFirstPlural();
    gender.innerHTML = "";
    number.innerHTML = "plural";
    person.innerHTML = "first person";
  } else if (x == 6) {
    // question.innerHTML = "Plural second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondMascPlural();
    gender.innerHTML = "masculine";
    number.innerHTML = "plural";
    person.innerHTML = "second person";
  } else if (x == 7) {
    // question.innerHTML = "Plural third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdPlural();
    gender.innerHTML = "masculine";
    number.innerHTML = "plural";
    person.innerHTML = "third person";
  } else if (x == 8) {
    // question.innerHTML =
    "Plural second person feminine future of " + test1.infinitive();
    currAnswer = test1.futureSecondFemininePlural();
    gender.innerHTML = "feminine";
    number.innerHTML = "plural";
    person.innerHTML = "second person";
  } else if (x == 9) {
    // question.innerHTML =
    "Plural third person feminine future of " + test1.infinitive();
    currAnswer = test1.futureThirdFemininePlural();
    gender.innerHTML = "feminine";
    number.innerHTML = "plural";
    person.innerHTML = "third person";
  }
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
  if (x == 0) {
    // question.innerHTML =
    "Singular masculine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeMasculine();
    gender.innerHTML = "masculine";
    number.innerHTML = "singular";
  } else if (x == 1) {
    // question.innerHTML =
    "Singular feminine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeFeminine();
    gender.innerHTML = "feminine";
    number.innerHTML = "singular";
  } else if (x == 2) {
    // question.innerHTML = "Plural imperative of " + test1.infinitive();
    currAnswer = test1.imperativePlural();
    gender.innerHTML = "masculine";
    number.innerHTML = "plural";
  } else if (x == 3) {
    // question.innerHTML = "Plural feminine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeFemininePlural();
    gender.innerHTML = "feminine";
    number.innerHTML = "plural";
  }
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
