console.log("java up and running");
//list of characters
var charlieBrown = document.getElementById("charlieBrown");
var sallyBrown = document.getElementById("sallyBrown");
var marcie = document.getElementById("marcie");
var peppermintpatty = document.getElementById("peppermintpatty");
var schroeder = document.getElementById("schroeder");
var linus = document.getElementById("linus");
var lucy = document.getElementById("lucy");
var snoopy = document.getElementById("snoopy");
var woodstock = document.getElementById("woodstock");

//list of questions and list of answers
var questionBank = ["who has a big head", "who has a blanket", "who plays the piano", "who has a best bird friend"];
var solutionBank = ["Charlie Brown", "Linus", "Schroeder", "Snoopy"];
var clickValue = 0;

function generateQuestion() {
	var question = Math.floor(Math.random() * questionBank.length);
	console.log(questionBank[question]);
}
generateQuestion();

//check answer function
// document.addEventListener("click", checkAnswer);
function checkAnswer() {
    if (question == solutionBank[questionBank] == clickValue){
    	console.log(clickValue);
    	console.log("right answer");
    } else {
    	console.log("wrong answer");
    }
    generateQuestion();
}

//click value
charlieBrown.addEventListener("click", checkAnswer);



// if (charlieBrown == question == solutionBank[question])
// 		console.log("charlie brown audio");
// } else {
// 	console.log("charlie brown losing audio")
// }
// el.addEventListener("click", modifyText, false);







//need to create a click button to start game
//create an alert with player 1's turn
//need to give each character a clickable div inorder to check answer

