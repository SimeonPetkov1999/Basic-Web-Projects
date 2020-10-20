var randomNum1 = Math.ceil(Math.random() * 6);
var randomNum1 = Math.ceil(Math.random() * 6);

var randomDice = "dice" + randomNum1 + ".png";

var randomDiceSource = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);

var randomNum2 = Math.ceil(Math.random()*6);
var randomDiceSource2 ="images/dice"+ randomNum2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML = "🌎Player 1 WINS!🌎"
}

else if(randomNum2>randomNum1)
{
    document.querySelector("h1").innerHTML = "🚩Player 2 WINS!🚩"
}

else 
{
    document.querySelector("h1").innerHTML = "DRAW! Refresh again."
}