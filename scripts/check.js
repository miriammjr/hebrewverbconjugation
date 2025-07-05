const checkButton = document.getElementById("check");

function check() {
  console.log(input.value);
  if (input.value == currAnswer) {
    result.innerHTML = "Correct.";
  } else {
    result.innerHTML =
      "Wrong. The right answer is <span class='big'>" + currAnswer + "</span>.";
    console.log("inputted: " + input.value);
    console.log("correct: " + currAnswer);
    for (let i = 0; i < currAnswer.length; i++) {
      console.log("Answer at " + i + ": " + currAnswer.charAt(i));
      console.log("Input at " + i + ": " + input.value.charAt(i));
    }
  }
}

checkButton.addEventListener("click", (event) => check());
