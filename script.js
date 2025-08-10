// Declaring elements
const submitButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultContainer = document.getElementById("result");
let userValue;

function Palindrome() {
  if (textInput.value == "") {
    alert("Please input a value");
    return;
  }
  userValue = textInput.value.trim();
  const lcString = userValue.toLowerCase();
  const finalString = lcString.replace(/[^a-zA-Z0-9]/g, "");
  reverseInput(finalString);
}

function reverseInput(string) {
  const reverseString = string.split("").reverse().join("");
  checkPali(reverseString, string);
}

function checkPali(reverseString, string) {
  if (reverseString === string) {
    resultContainer.textContent = `${userValue} is a palindrome.`;
  } else {
    resultContainer.textContent = `${userValue} is not a palindrome.`;
  }
}

checkBtn.addEventListener("click", Palindrome);
