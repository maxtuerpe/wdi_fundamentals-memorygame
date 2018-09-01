console.log ("up and running");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var chechForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert ("You found a match!");
		}else { 
			alert("Sorry, try again.");
		}
	} 	
}
var flipCard = function(cardId){
	cardsInPlay.push (cards[cardId])
	console.log("user flipped card " + cards[cardId]);
	chechForMatch();
}
flipCard(0);
flipCard(1);
