var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares= document.querySelectorAll(".square");
var h1= document.querySelector("h1");
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
var resetButton= document.querySelector("#reset");
var pickedColor = pickColor();
easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numberOfSquares=3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i<squares.length/2;i++){
		squares[i].style.backgroundColor=colors[i];
	}
		for(var i=squares.length/2;i<squares.length;i++){
		squares[i].style.display="none";
	}

});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");	
	numberOfSquares=6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block ";
	}	
});


resetButton.addEventListener("click",function(){
colors = generateRandomColors(numberOfSquares);
pickedColor = pickColor();
messageDisplay.textContent="";
this.textContent="New Colors";
colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){
      var clickedColor=this.style.backgroundColor;
      console.log(clickedColor, pickedColor);
      if(clickedColor===pickedColor){
      	messageDisplay.textContent="Correct!";
      	resetButton.textContent="Play Again";
        changeColors(clickedColor);
        h1.style.backgroundColor=clickedColor;
      }
      else
      {
      	this.style.backgroundColor="#232323";
      	messageDisplay.textContent="Try Again";
      }
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}