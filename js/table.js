/****
table.js
By fching

Requirements:
	On Shoe
		-Add single Card
		-Add single deck's worth of Cards (52)
		-Shuffle, option of how many times
		-Pop last Card to House.hand
		-Pop last Card to Player.hand
	On Player
		-Deal initial cards
		-If BJ, Winner
		-Option to Add Card
			-If bust, Clear Hand
			-Else, Option to Add Card
	On House
		-Same as Player except plays automatically

	In Play
		-After House plays, check hands for winners
		-Player: Add or subtract chips
		-House: Add or subtract chips
		

****/

//Constructor
var Player = function(){
	this.hand = new Hand();			//=new Hand(); tbd
	this.chips;			//=new Chips(); tbd
};

var House = function(){
	this.hand = new Hand();			//=new Hand(); tbd
	this.chips;			//=new Chips(); tbd
};

var Table = function(){
	this.shoe = new Shoe();
	this.mover = new Mover();
	this.player = new Player();
	this.house = new House();

	this.trash = new Hand();

	this.count = 0;
};

Table.prototype.moveCard = function(deal_from,deal_to) {
	if( !(deal_to instanceof Hand) ){
		console.log("deal_to is not a Hand object");
		return false;
	}
	else {
		var a = this.mover.copyHere( deal_from.contents.pop() );
		var b = deal_to.addCard( this.mover.contents.pop() );

			//console.log("Dealt " + a);
			if(deal_from instanceof Shoe){
				this.count += this.changeCount( b.valSoft );

				//console.log(b);
				//console.log("Count is now " + this.count);
			}

	//Change display of Count
	$('#count-display').text( this.getCount() );

	}

	return b;
};

Table.prototype.changeCount = function(value) {
	if(value>9)
		return -1;
	else if(value<10 && value>6)
		return 0;
	else if(value<7)
		return 1;
};

Table.prototype.getCount = function() {
	console.log("Count is now " + this.count);
	return this.count;
};

Table.prototype.addChips = function(target,numToAdd) {
		target.chips += numToAdd;
		return numToAdd;
	}

Table.prototype.clearTable = function() {
	var numCardsHouse = this.house.hand.contents.length;
	var numCardsPlayer = this.player.hand.contents.length;

	for(i=0;i<numCardsHouse;i++){
		this.moveCard(this.house.hand,this.trash);
	}
		//console.log("House hand cleared, contents.length is " + this.house.hand.contents.length);

	for(k=0;k<numCardsPlayer;k++){
		this.moveCard(this.player.hand,this.trash);
	}
		//console.log("House hand cleared, contents.length is " + this.player.hand.contents.length);
};

