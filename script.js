//decalring elements

const submitButton = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultContainer = document.getElementById("result");
let userValue = userInput.value;
//declare result elements dont forget

function normalizeInput() {
  userValue = userInput.value.trim();
  if (userValue) {
    const lcString = userValue.toLowerCase();
    console.log(lcString);
    const finalString = lcString.replace(/[^a-zA-Z0-9]/g, "");
    console.log(finalString);
    reverseInput(finalString);
    userInput.value = "";
  } else {
    alert("Please input a value");
  }
}

function reverseInput(string) {
  const charArray = string.split("");
  const reverseArray = charArray.reverse();
  const reverseString = reverseArray.join("");
  console.log(reverseString);
  checkPali(reverseString, string);
}

function checkPali(reverseString, string) {
  if (reverseString === string) {
    resultContainer.innerHTML = `<p class="result">${userValue} is a palindrome.</p>`;
  } else {
    resultContainer.innerHTML = `<p class="result">${userValue} is not a palindrome.</p>`;
  }
}

submitButton.addEventListener("click", normalizeInput);
