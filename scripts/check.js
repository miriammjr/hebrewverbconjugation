const checkButton = document.getElementById("check");

function check() {
  console.log(input.innerHTML);
  if (input.innerHTML == currAnswer) {
    result.innerHTML = "Correct.";
  } else {
    result.innerHTML = "Wrong. The right answer is " + currAnswer + ".";
    console.log("inputted: " + input.innerHTML);
    console.log("correct: " + currAnswer);
    for (let i = 0; i < currAnswer.length; i++) {
      console.log("Answer at " + i + ": " + currAnswer.charAt(i));
      console.log("Input at " + i + ": " + input.innerHTML.charAt(i));
    }
  }
}

checkButton.addEventListener("click", (event) => check());
