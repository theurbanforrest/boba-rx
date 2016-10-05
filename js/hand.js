/****
hand.js
By fching

Requirements:
	-Add Card
	-Pop Card
	-Display Value
****/

//Constructor
var Hand = function(){

	this.contents = [];
};

Hand.prototype.addCard = function(to_copy){

	var x = new Card();
	x.valHard = to_copy.valHard;
	x.valSoft = to_copy.valSoft;		
	x.displayName = to_copy.displayName;	
	x.suitIndex = to_copy.suitIndex;		
	x.suit = to_copy.suit;

	this.contents.push(x);
	return x;
};

Hand.prototype.getValHard = function(){

	var handValue = 0;

	for(i=0;i<this.contents.length;i++){
		handValue += this.contents[i].valHard;
	}

	return handValue;
};

Hand.prototype.getValSoft = function(){

	var handValue = 0;
	for(i=0;i<this.contents.length;i++){
		handValue += this.contents[i].valSoft;
	}

	return handValue;
};

Hand.prototype.getDisplayValue = function() {

	var soft = this.getValSoft();
	var hard = this.getValHard();

	if(soft>21){
		return hard;
	}
	else {
		return soft;
	}
};

