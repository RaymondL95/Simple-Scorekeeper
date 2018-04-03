var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display= document.querySelector("#p1Display");
var p2Display= document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");  //select all spans within a p
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner"); // adds a class to the p1display span therefore setting it green
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner"); // adds a class to the p2display span therefore setting it green
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click",function(){
	reset();
});
function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver= false;
	p1Display.classList.remove("winner"); // remove green color class.
	p2Display.classList.remove("winner");
}
numInput.addEventListener("change",function(){ // change runs function when value changes
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value); // wnumInput is string convert to num
	reset();
});