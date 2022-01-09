//Changing first dice

var x = Math.random() * 6;
var x = Math.floor(x) + 1;

var randomDiceImage = "images/dice"+x+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//Changing Second dice


var y = Math.random() * 6;
var y = Math.floor(y) + 1;

var randomDiceImage2 = "images/dice"+y+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

//Checking

if(x>y)
{
  document.querySelector("h1").innerHTML = "Player 1 wins"
}

if(x<y)
{
  document.querySelector("h1").innerHTML = "Player 2 wins"
}

if(x==y)
{
  document.querySelector("h1").innerHTML = "Its a Draw"
}
