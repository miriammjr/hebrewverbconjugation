const question = document.getElementById("question");
const start = document.getElementById("start");
const result = document.getElementById("result");

const presentBox = document.getElementById("present");
const pastBox = document.getElementById("past");
const futureBox = document.getElementById("future");
const imperativeBox = document.getElementById("imperative");
const femFutureBox = document.getElementById("femfuture");

let currAnswer = "";

function getPresentVerb() {
  let x = Math.floor(Math.random() * 4);

  if (x == 0) {
    question.innerHTML = "Masculine singular present of " + test1.infinitive();
    currAnswer = test1.presentMascSing();
  } else if (x == 1) {
    question.innerHTML = "Feminine singular present of " + test1.infinitive();
    currAnswer = test1.presentFemSing();
  } else if (x == 2) {
    question.innerHTML = "Masculine plural present of " + test1.infinitive();
    currAnswer = test1.presentMascPlural();
  } else if (x == 3) {
    question.innerHTML = "Feminine plural present of " + test1.infinitive();
    currAnswer = test1.presentFemPlural();
  }
}

function getPastVerb() {
  let x = Math.floor(Math.random() * 9);
  if (x == 0) {
    question.innerHTML = "Singular first person past of " + test1.infinitive();
    currAnswer = test1.pastFirstSingular();
  } else if (x == 1) {
    question.innerHTML =
      "Singular second person masculine past of " + test1.infinitive();
    currAnswer = test1.pastSecondSingularMale();
  } else if (x == 2) {
    question.innerHTML =
      "Singular second person feminine past of " + test1.infinitive();
    currAnswer = test1.pastSecondSingularFemale();
  } else if (x == 3) {
    question.innerHTML =
      "Singular third person masculine past of " + test1.infinitive();
    currAnswer = test1.pastThirdSingularMale();
  } else if (x == 4) {
    question.innerHTML =
      "Singular third person feminine past of " + test1.infinitive();
    currAnswer = test1.pastThirdSingularFemale();
  } else if (x == 5) {
    question.innerHTML = "Plural first person past of " + test1.infinitive();
    currAnswer = test1.pastFirstPersonPlural();
  } else if (x == 6) {
    question.innerHTML =
      "Plural second person masculine past of " + test1.infinitive();
    currAnswer = test1.pastSecondPluralMale();
  } else if (x == 7) {
    question.innerHTML =
      "Plural second person feminine past of " + test1.infinitive();
    currAnswer = test1.pastSecondPluralFemale();
  } else if (x == 8) {
    question.innerHTML = "Plural third person past of " + test1.infinitive();
    currAnswer = test1.pastThirdPlural();
  }
}

function getFutureVerb() {
  let x = -1;
  if (femFutureBox.checked) {
    x = Math.floor(Math.random() * 10);
  } else {
    x = Math.floor(Math.random() * 8);
  }

  if (x == 0) {
    question.innerHTML =
      "Singular first person future of " + test1.infinitive();
    currAnswer = test1.futureFirstSing();
  } else if (x == 1) {
    question.innerHTML =
      "Singular masculine second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondMasculineSing();
  } else if (x == 2) {
    question.innerHTML =
      "Singular feminine second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondFeminineSing();
  } else if (x == 3) {
    question.innerHTML =
      "Singular masculine third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdMasculineSing();
  } else if (x == 4) {
    question.innerHTML =
      "Singular feminine third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdFeminineSing();
  } else if (x == 5) {
    question.innerHTML = "Plural first person future of " + test1.infinitive();
    currAnswer = test1.futureFirstPlural();
  } else if (x == 6) {
    question.innerHTML = "Plural second person future of " + test1.infinitive();
    currAnswer = test1.futureSecondMascPlural();
  } else if (x == 7) {
    question.innerHTML = "Plural third person future of " + test1.infinitive();
    currAnswer = test1.futureThirdPlural();
  } else if (x == 8) {
    question.innerHTML =
      "Plural second person feminine future of " + test1.infinitive();
    currAnswer = test1.futureSecondFemininePlural();
  } else if (x == 9) {
    question.innerHTML =
      "Plural third person feminine future of " + test1.infinitive();
    currAnswer = test1.futureThirdFemininePlural();
  }
}

function getImperativeVerb() {
  let x = -1;
  if (femFutureBox.checked) {
    x = Math.floor(Math.random() * 4);
  } else {
    x = Math.floor(Math.random() * 3);
  }

  if (x == 0) {
    question.innerHTML =
      "Singular masculine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeMasculine();
  } else if (x == 1) {
    question.innerHTML =
      "Singular feminine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeFeminine();
  } else if (x == 2) {
    question.innerHTML = "Plural imperative of " + test1.infinitive();
    currAnswer = test1.imperativePlural();
  } else if (x == 3) {
    question.innerHTML = "Plural feminine imperative of " + test1.infinitive();
    currAnswer = test1.imperativeFemininePlural();
  }
}

function getVerb() {
  input.value = "";
  result.innerHTML = "";
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
    console.log(x);
  }
}

start.addEventListener("click", (event) => getVerb());
