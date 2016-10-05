/****
shoe.js
By fching

Requirements:

	Hold Cards
		-Hold Array of Card objects
		-Add single Card (1)
		-Add single deck's worth of Cards (52)

	Distribute Cards
		-Pass Card to Table
			-Table passes to House, Player
			-Table passes to Table.trash


****/

var Shoe = function(){

	this.contents = [];
};


Shoe.prototype.addSingleDeck = function() {

	that = this.contents;

	function isFaceVal(card) {
		if(card.suitIndex == 11){
			card.displayName = "jack";
			card.valSoft = 10;
			card.valHard = 10;
		}
		else if(card.suitIndex == 12){
			card.displayName = "queen";
			card.valSoft = 10;
			card.valHard = 10;
		}
		else if(card.suitIndex == 13){
			card.displayName = "king";
			card.valSoft = 10;
			card.valHard = 10;
		}
		else if(card.suitIndex == 1){
			card.displayName = "ace";
			card.valSoft = 11;
			card.valHard = 1;
		}
	};

		var pointInDeck = 0;
		var suit;
		//Suits Loop
		for(i=0;i<4;i++){
			if(i==0) suit = "spades";
			else if(i==1) suit = "clubs";
			else if(i==2) suit = "diamonds";
			else if(i==3) suit = "hearts";
												//console.log("now building " + suit + "..");
			//Cards Loop
			for(j=1;j<14;j++){
				var created = new Card();

				created.suit = suit;
				created.suitIndex = j;
				created.displayName = j;
				created.valHard = j;
				created.valSoft = j;
				isFaceVal(created);

				that.push(created);
												//console.log("Card "+ i +" pushed to this");
				pointInDeck++;
			};
		//console.log(suit + " is now complete");
		};
};

Shoe.prototype.shuffle = function(level){

	for(i=0;i<level;i++){
		var x = Math.floor( Math.random() * this.contents.length );
			//console.log("x is " + x);
		var y = Math.floor( Math.random() * this.contents.length );
			//console.log("y is " + y);

		var tmp = this.contents[x];
		this.contents[x] = this.contents[y];
		this.contents[y] = tmp;

			//console.log("Swap occurred");
	};
			//console.log("Shuffle Complete");
};

Shoe.prototype.getValHard = function() {
	
	var value = 0;
	for(i=0;i<this.contents.length;i++){

		value += this.contents[i].valHard;
	};

	return value;
};