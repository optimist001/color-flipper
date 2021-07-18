//declare all variables

var colors = ["red", "blue", "green", "yellow", "orange", "skyblue", "pink"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
var counter = 0;

//function to change color

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}

//function to be performed whe button is clicked

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});