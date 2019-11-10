//vsariables
var secondsLeft = 75;
var timeElement = document.getElementById("timeElement");
var startButton = document.getElementById("start-button");
var questionArea = document.getElementById("question-area");
var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choiceArray = ["choice0", "choice1", "choice2", "choice3"];
var correctAnswers = 0;
var score = 0:

//how it starts
function startup(){
    var start = document.createElement("button")
    start.innerHTML = "Start"
    startButton.append(start);
}
startup();

