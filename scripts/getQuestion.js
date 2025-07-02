const question = document.getElementById("question");
const start = document.getElementById("start");
const result = document.getElementById("result");

const presentBox = document.getElementById("present");
const pastBox = document.getElementById("past");
const futureBox = document.getElementById("future");
const imperativeBox = document.getElementById("imperative");

let currAnswer = "";

function getPresentVerb() {
  let x = Math.floor(Math.random() * 4);

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

function getPastVerb() {
  let x = Math.floor(Math.random() * 9);
  if (x == 0) {
    question.innerHTML = "Singular first person past of לִסְגּוֹר";
    currAnswer = test1.pastFirstSingular();
  } else if (x == 1) {
    question.innerHTML = "Singular second person masculine past of לִסְגּוֹר";
    currAnswer = test1.pastSecondSingularMale();
  } else if (x == 2) {
    question.innerHTML = "Singular second person feminine past of לִסְגּוֹר";
    currAnswer = test1.pastSecondSingularFemale();
  } else if (x == 3) {
    question.innerHTML = "Singular third person masculine past of לִסְגּוֹר";
    currAnswer = test1.pastThirdSingularMale();
  } else if (x == 4) {
    question.innerHTML = "Singular third person feminine past of לִסְגּוֹר";
    currAnswer = test1.pastThirdSingularFemale();
  } else if (x == 5) {
    question.innerHTML = "Plural first person past of לִסְגּוֹר";
    currAnswer = test1.pastFirstPersonPlural();
  } else if (x == 6) {
    question.innerHTML = "Plural second person masculine past of לִסְגּוֹר";
    currAnswer = test1.pastSecondPluralMale();
  } else if (x == 7) {
    question.innerHTML = "Plural second person feminine past of לִסְגּוֹר";
    currAnswer = test1.pastSecondPluralFemale();
  } else if (x == 8) {
    question.innerHTML = "Plural third person past of לִסְגּוֹר";
    currAnswer = test1.pastThirdPlural();
  }
}

function getFutureVerb() {
  let x = Math.floor(Math.random() * 8);
  if (x == 0) {
    question.innerHTML = "Singular first person future of לִסְגּוֹר";
    currAnswer = test1.futureFirstSing();
  } else if (x == 1) {
    question.innerHTML = "Singular masculine second person future of לִסְגּוֹר";
    currAnswer = test1.futureSecondMasculineSing();
  } else if (x == 2) {
    question.innerHTML = "Singular feminine second person future of לִסְגּוֹר";
    currAnswer = test1.futureSecondFeminineSing();
  } else if (x == 3) {
    question.innerHTML = "Singular masculine third person future of לִסְגּוֹר";
    currAnswer = test1.futureThirdMasculineSing();
  } else if (x == 4) {
    question.innerHTML = "Singular feminine third person future of לִסְגּוֹר";
    currAnswer = test1.futureThirdFeminineSing();
  } else if (x == 5) {
    question.innerHTML = "Plural first person future of לִסְגּוֹר";
    currAnswer = test1.futureFirstPlural();
  } else if (x == 6) {
    question.innerHTML = "Plural second person future of לִסְגּוֹר";
    currAnswer = test1.futureSecondMascPlural();
  } else if (x == 7) {
    question.innerHTML = "Plural third person future of לִסְגּוֹר";
    currAnswer = test1.futureThirdPlural();
  }
}

function getImperativeVerb() {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    question.innerHTML = "Singular masculine imperative of לִסְגּוֹר";
    currAnswer = test1.imperativeMasculine();
  } else if (x == 1) {
    question.innerHTML = "Singular feminine imperative of לִסְגּוֹר";
    currAnswer = test1.imperativeFeminine();
  } else if (x == 2) {
    question.innerHTML = "Plural imperative of לִסְגּוֹר";
    currAnswer = test1.imperativePlural();
  }
}

function getVerb() {
  input.innerHTML = "";
  result.innerHTML = "";
  if (imperativeBox.checked == false) {
    if (presentBox.checked == true) {
      if (pastBox.checked == true) {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 3);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getPastVerb();
          } else {
            getFutureVerb();
          }
        } else {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getPastVerb();
          }
        }
      } else {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getFutureVerb();
          }
        } else {
          getPresentVerb();
        }
      }
    } else {
      if (pastBox.checked == true) {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getFutureVerb();
          } else if (x == 1) {
            getPastVerb();
          }
        } else {
          getPastVerb();
        }
      } else {
        if (futureBox.checked == true) {
          getFutureVerb();
        } else {
          question.innerHTML = "Select a verb tense below.";
        }
      }
    }
  } else {
    if (presentBox.checked == true) {
      if (pastBox.checked == true) {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 4);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getPastVerb();
          } else if (x == 2) {
            getFutureVerb();
          } else {
            getImperativeVerb();
          }
        } else {
          let x = Math.floor(Math.random() * 3);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getPastVerb();
          } else if (x == 2) {
            getImperativeVerb();
          }
        }
      } else {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 3);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getFutureVerb();
          } else if (x == 2) {
            getImperativeVerb();
          }
        } else {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getPresentVerb();
          } else if (x == 1) {
            getImperativeVerb();
          }
        }
      }
    } else {
      if (pastBox.checked == true) {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 3);
          if (x == 0) {
            getFutureVerb();
          } else if (x == 1) {
            getPastVerb();
          } else if (x == 2) {
            getImperativeVerb();
          }
        } else {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getPastVerb();
          } else {
            getImperativeVerb();
          }
        }
      } else {
        if (futureBox.checked == true) {
          let x = Math.floor(Math.random() * 2);
          if (x == 0) {
            getFutureVerb();
          } else {
            getImperativeVerb();
          }
        } else {
          getImperativeVerb();
        }
      }
    }
  }
}

start.addEventListener("click", (event) => getVerb());
