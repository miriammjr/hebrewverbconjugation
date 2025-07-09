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

const singularBox = document.getElementById("singular");
const pluralBox = document.getElementById("plural");

const masculineBox = document.getElementById("masculine");
const feminineBox = document.getElementById("feminine");
const neutralBox = document.getElementById("neutral");

const firstBox = document.getElementById("first");
const secondBox = document.getElementById("second");
const thirdBox = document.getElementById("third");

const englishBox = document.getElementById("english");

let currAnswer = "";

// function getVerb() {
//   clearInput();
//   result.innerHTML = "";
//   gender.innerHTML = "";
//   number.innerHTML = "";
//   person.innerHTML = "";
//   question.innerHTML = test1.infinitive();
//   let currentFunctions = [];
//   if (presentBox.checked == true) {
//     currentFunctions.push("present");
//   }
//   if (pastBox.checked == true) {
//     currentFunctions.push("past");
//   }
//   if (futureBox.checked == true) {
//     currentFunctions.push("future");
//   }
//   if (imperativeBox.checked == true) {
//     currentFunctions.push("imperative");
//   }
//   if (currentFunctions.length == 0) {
//     question.innerHTML = "Select a tense below.";
//   } else {
//     let x = Math.floor(Math.random() * currentFunctions.length);
//     let tense = currentFunctions[x];
//     if (tense == "present") {
//       getPresentVerb();
//     } else if (tense == "past") {
//       getPastVerb();
//     } else if (tense == "future") {
//       getFutureVerb();
//     } else if (tense == "imperative") {
//       getImperativeVerb();
//     }
//   }
// }

function getVerb() {
  clearInput();

  result.innerHTML = "";
  gender.innerHTML = "";
  number.innerHTML = "";
  person.innerHTML = "";

  // TENSES
  // ALWAYS RELEVANT
  let currTense = "";
  let tenses = [];
  if (presentBox.checked) {
    tenses.push("Present");
  }
  if (pastBox.checked) {
    tenses.push("Past");
  }
  if (futureBox.checked) {
    tenses.push("Future");
  }
  if (imperativeBox.checked) {
    tenses.push("Imperative");
  }

  if (tenses.length == 0) {
    tenses.push("Present");
    tenses.push("Past");
    tenses.push("Future");
    tenses.push("Imperative");
  }

  let x = Math.floor(Math.random() * tenses.length);
  currTense = tenses[x];
  tense.innerHTML = currTense;

  // SINGULAR VS PLURAL
  // ALWAYS RELEVANT
  let currNumber = "";
  if (singularBox.checked && !pluralBox.checked) {
    currNumber = "Singular";
  } else if (!singularBox.checked && pluralBox.checked) {
    currNumber = "Plural";
  } else {
    let x = Math.floor(Math.random() * 2);
    if (x == 0) {
      currNumber = "Singular";
    } else {
      currNumber = "Plural";
    }
  }
  number.innerHTML = currNumber;

  // PERSON
  // FIRST VS SECOND VS THIRD
  // IRRELEVANT FOR IMPERATIVE AND PRESENT
  let currPerson = "";
  let persons = [];
  if (currTense != "Present" && currTense != "Imperative") {
    if (firstBox.checked) {
      persons.push("First");
    }
    if (secondBox.checked) {
      persons.push("Second");
    }
    if (thirdBox.checked) {
      persons.push("Third");
    }
    if (persons.length == 0) {
      persons.push("First");
      persons.push("Second");
      persons.push("Third");
    }
    let x = Math.floor(Math.random() * persons.length);
    currPerson = persons[x];
    person.innerHTML = currPerson + " Person";
  }

  // GENDER
  // Masculine vs Feminine
  // irrelevant in first person past/future, third person plural past
  // will need extra barriers for future plural
  let currGender = "";
  if ((currTense == "Past" || currTense == "Future") && currPerson == "First") {
    currGender = "";
  } else if (
    currTense == "Past" &&
    currPerson == "Third" &&
    currNumber == "Plural"
  ) {
    currGender = "";
  } else if (
    (currTense == "Future" || currTense == "Imperative") &&
    currNumber == "Plural" &&
    (currPerson == "Second" || currPerson == "Third" || currPerson == "") &&
    !femFutureBox.checked
  ) {
    currGender = "Masculine";
    gender.innerHTML = "Masculine (neutral in modern Hebrew)";
  } else {
    if (masculineBox.checked && !feminineBox.checked) {
      currGender = "Masculine";
    } else if (!masculine.checked && feminine.checked) {
      currGender = "Feminine";
    } else {
      let x = Math.floor(Math.random() * 2);
      if (x == 0) {
        currGender = "Masculine";
      } else {
        currGender = "Feminine";
      }
    }
    gender.innerHTML = currGender;
  }

  let currVerb;
  if (currVerbList.length == 0) {
    currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[0]);
  } else {
    x = Math.floor(Math.random() * currVerbList.length);
    console.log(currVerbList);

    currVerb = new PaalShlemimEfol(PaalShlemimEfolVerbs[currVerbList[x]]);
  }

  currAnswer = eval(
    `currVerb.${currTense}${currPerson}${currNumber}${currGender}()`
  );
  if (englishBox.checked) {
    question.innerHTML = eval(
      `currVerb.${currTense}${currPerson}${currNumber}${currGender}English()`
    );
  } else {
    question.innerHTML = currVerb.infinitive();
  }
  // console.log(`${currTense}${currPerson}${currNumber}${currGender}()`);
}

start.addEventListener("click", (event) => getVerb());
