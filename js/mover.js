/****
mover.js
By fching

Requirements:
	Temporary Hand that moves cards
	
****/

var Mover = function(){

	this.contents = [];
};

Mover.prototype.copyHere = function(to_copy) {

	var x = new Card();
	x.valHard = to_copy.valHard;
	x.valSoft = to_copy.valSoft;		
	x.displayName = to_copy.displayName;	
	x.suitIndex = to_copy.suitIndex;		
	x.suit = to_copy.suit;

	this.contents.push(x);

	var success = x.displayName + " of " + x.suit;
	return success;
};