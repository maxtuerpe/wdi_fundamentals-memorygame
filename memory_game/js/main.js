console.log ("up and running");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [cardOne, cardTwo];
var cardOne = cards[0];
var cardTwo = cards[1];

console.log("User flipped" + " " +cardOne);
console.log("User flipped" + " " +cardTwo);


if (cardsInPlay.length === 2) {

if (cardOne === cardTwo)
	alert ("You found a match!")
else  
	alert("Sorry, try again.")
}