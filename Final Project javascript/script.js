// Bake-Off Challenge, Ayah Ghazouli, July 24, 2025
"use strict";

const userName = window.prompt("Welcome to Nightruder Bake-Off! What's your name?");
window.alert(`Hi ${userName}, get ready to bake with math!`);
console.log("User name:", userName);

document.getElementById("adjustBtn").addEventListener("click", adjustRecipe);

function adjustRecipe() {
  const amount = parseFloat(document.getElementById("amount").value);
  const second = parseFloat(document.getElementById("second").value);
  const operator = document.getElementById("operator").value;
  const resultSpan = document.getElementById("result");
  const logo = document.querySelector(".logo"); 
  let result;

  if (isNaN(amount) || isNaN(second)) {
    resultSpan.textContent = "Please enter valid numbers.";
    resultSpan.className = "highlight"; 
    return;
  }

  switch (operator) {
    case "+": result = amount + second; break;
    case "-": result = amount - second; break;
    case "*": result = amount * second; break;
    case "/": result = second !== 0 ? amount / second : "Can't divide by zero"; break;
    case "**": result = amount ** second; break;
    default: result = "Invalid operator";
  }

  resultSpan.textContent = result;
  resultSpan.classList.add("correct"); 
  logo.src = result > 100 ? "overbake.jpg" : "bakeSuccess.jpg";
  logo.alt = result > 100 ? "Overbaked!" : "Perfect bake!";
  console.log("submit:", result);
}

// Quiz
const userAnswers = []; 

document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
    const quizScore = document.getElementById("quizScore");
  const quizImage = document.querySelector(".logo");
  let score = 0;

  const answers = [
    { name: "q1", correct: "b" },
    { name: "q2", correct: "b" },
    { name: "q3", correct: "c" }
  ];

  answers.forEach(q => {
    const selected = document.querySelector(`input[name="${q.name}"]:checked`);
    if (selected) {
      userAnswers.push(selected.value);
      if (selected.value === q.correct) {
        score++;
      }
    }
  });

  quizScore.textContent = `Score: ${score}/3`;

  if (score === 3) {
    quizScore.classList.remove("highlight");
    quizScore.classList.add("correct");
    quizImage.src = "bakeSuccess.jpg";
    quizImage.alt = "bakeSuccess.jpg";
  } else {
    quizScore.classList.remove("correct");
    quizScore.classList.add("highlight");
    quizImage.src = "overbake.jpg";
    quizImage.alt = "overbake.jpg";
  }

  console.log("Quiz score:", score);
})

  

// Poll
const votes = []; 
document.getElementById("pollBtn").addEventListener("click", () => {
  const choice = document.getElementById("pollSelect").value;
  votes.push(choice);
  document.getElementById("pollResult").textContent = `You voted for: ${choice}`;
  console.log("Poll choice:", choice);
});

const labels = document.getElementsByTagName("label");
console.log("Total label tags:", labels.length);


const pollOptions = document.querySelectorAll("#pollSelect option");
pollOptions.forEach(opt => console.log("Poll option:", opt.value));

let tipLevel = 0;
while (tipLevel < 2) {
  console.log("Tip level:", tipLevel);
  tipLevel++;
}


for (let i = 0; i < pollOptions.length; i++) {
  console.log("Poll option (for):", pollOptions[i].textContent);
}
