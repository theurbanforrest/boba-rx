/****
classes/Table.js
Testing how classes work
By fching
****/

class Card {
	constructor() {
		this.valHard;
		this.valSoft;
		this.displayName;
		this.suitIndex;
		this.suit;
	}
}

class Shoe {
	constructor(inputDecks){
		this.deck = [];
		this.trash = [];

		function isFaceVal(card) {
			if(card.suitIndex == 11)
				card.displayName = "Jack";
			else if(card.suitIndex == 12)
				card.displayName = "Queen";
			else if(card.suitIndex == 13)
				card.displayName = "King";
			else if(card.suitIndex == 1)
				card.displayName = "Ace";
	
		for(k=0;k<inputDecks;k++){

		var pointInDeck = 0;
		var suit;
		//Suits Loop
		for(i=0;i<4;i++){
			if(i==0) suit = "spades";
			else if(i==1) suit = "clubs";
			else if(i==2) suit = "diamonds";
			else if(i==3) suit = "hearts";
												console.log("now building " + suit + "..");
			//Cards Loop
			for(j=1;j<14;j++){
				var createdCard = new Card();
				createdCard.suit = suit;
				createdCard.suitIndex = j;
				createdCard.displayName = j;

				isFaceVal(createdCard);
				pointInDeck++;

				this.deck.push(createdCard);
												console.log("Card "+ i +" pushed to this.deck");
			};
		console.log(suit + " is now complete");
		};
	};


	};
};

}