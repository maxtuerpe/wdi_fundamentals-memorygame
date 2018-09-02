console.log ("up and running");


var cards = [
{
	rank: "queen" ,
	suit: "diamonds" ,
	cardImg: "images/queen-of-diamonds.png",
},
{
	rank: "queen",
	suit: "hearts" ,
	cardImg: "images/queen-of-hearts.png",
},
{
	rank: "king" ,
	suit: "diamonds" ,
	cardImg: "images/king-of-diamonds.png",
},
{
	rank: "king" ,
	suit: "hearts" ,
	cardImg: "images/king-of-hearts.png",
},
];
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
	cardsInPlay.push (cards[cardId].rank);
	console.log("user flipped card " + cards[cardId].rank);
	console.log(cards[cardId].cardImg);
	console.log(cards[cardId].suit);
	chechForMatch();
}
flipCard(0);
//flipCard(1);
