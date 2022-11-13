var readlineSync = require('readline-sync');
var score = 0;


console.log("Let's Chech That You Know Arpit ?")
console.log("  ")

var userName = readlineSync.question("What is your Name? ");
console.log(" ")
console.log(" ")

console.log("Welcome " + userName)
console.log(" ")
console.log(" ")
console.log("Do you Know Arpit ? Let's Check  ")
console.log(" ")
console.log(" ")
console.log(" ")


function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(" ")
    console.log("You are right");
    score = score + 2;
  } else {
    console.log(" ")
    console.log("Sorry You are Wrong")
    score = score
  }

  console.log("Correct Answer: " + answer);
  console.log("Your score: " + score);
  console.log("---------------------------------------")
  console.log(" ")
}


var questionOne = {
  question: " Q1) What is Arpit NickName? Option(Lucky , Ak )",
  answer:"Lucky"

}
var questionTwo = {
  question: " Q2) What arpit like most ? Option(Tea,Coffee)",
  answer: "Coffee"

}
var questionThree = {
  question: " Q3) What is Arpit Passion? Option(Hacking,Coding)",
  answer: "Hacking"

}

var questionFour = {
  question: " Q4) How many brother he has? Option(One,Two)",
  answer: "One"

}

var questionFive = {
  question: " Q5) Where did he studying?? (Delhi,Chandigarh)",
  answer: "Chandigarh"

}
var questionSix = {
  question: " Q6) Which company laptop he has ?(Dell,Hp)",
  answer: "Dell"

}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)

}

console.log("Your final score :" + score)

if (score < 4) {
  console.log(" ")
  console.log("Sad !You dont know Arpit")
} else if (score < 8) {
  console.log(" ")
  console.log("You know Arpit little bit")
} else {
  console.log(" ")
  console.log("Great You know Arpit Very Well")
}