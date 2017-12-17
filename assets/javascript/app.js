$(document).ready(function() {

function firstScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-success btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

firstScreen();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateHTML();
	timerWrapper();
});

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
});

$("body").on("click", ".reset-button", function(event){
	resetGame();
});

});

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'> That's correct! The answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Sorry, that's wrong. The correct answer was: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);
}

function generateTimeOutLoss
() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Time's up!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateTimeOutLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You're finished! Here are your results." + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Incorrect Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-success btn-lg btn-block reset-button' href='#' role='button'>Reset quiz</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the capital of New York?", "What is the capital of California?", "What is the capital of Texas?", "What is the capital of Illinois?", "What is the capital of Michigan?", "What is the capital of Colorado?", "What is the capital of Florida?", "What is the capital of Alaska?"];
var answerArray = [["New York City", "Albany", "Buffalo", "Rochester"], ["Los Angeles", "Sacramento", "San Diego", "San Francisco"], ["Austin", "Houston", "Dallas", "San Antonio"], ["Springfield", "Chicago", "Peoria", "Decatur"], ["Detroit", "Ann Arbor","Grand Rapids", "Lansing"], ["Colorado Springs", "Boulder", "Denver", "Fort Collins"], ["Orlando", "Tampa", "Miami", "Tallahassee"], ["Anchorage", "Juneau", "Fairbanks", "Wasilla"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/newyork.gif'>", "<img class='center-block img-right' src='assets/images/california.gif'>", "<img class='center-block img-right' src='assets/images/texas.gif'>", "<img class='center-block img-right' src='assets/images/illinois.gif'>", "<img class='center-block img-right' src='assets/images/michigan.gif'>", "<img class='center-block img-right' src='assets/images/illinois.gif'>", "<img class='center-block img-right' src='assets/images/colorado.jpg'>", "<img class='center-block img-right' src='assets/images/florida.gif'>", "<img class='center-block img-right' src='assets/images/alaska.gif'>"];
var correctAnswers = ["B. Albany", "B. Sacramento", "A. Austin", "A. Springfield", "D. Lansing", "C. Denver", "D. Tallahassee", "A. Anchorage"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;