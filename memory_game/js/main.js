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
	this.setAttribute('src', cards[cardId].cardImg)
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert ("You found a match!");
		}else { 
			alert("Sorry, try again.");
		}
	} 	
}
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push (cards[cardId].rank);
	console.log("user flipped card " + cards[cardId].rank);
	console.log(cards[cardId].cardImg);
	console.log(cards[cardId].suit);
	chechForMatch();
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var dumb = document.createElement('img');
		console.log(dumb);
		dumb.setAttribute('scr', "images/back.png",);
		dumb.setAttribute("data-id", i);
		dumb.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(document.dumb);
	}
}

createBoard();


