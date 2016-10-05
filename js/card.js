/****
card.js
By fching

Requirements:
	Know info to display
		-Handled by some other object
	Know value for play
		-Handled by some other object
	Know if it's a valid card

****/

var Card = function(){

	this.valHard;		//Int, if >10 then set as 10
	this.valSoft;		//Only set if is Ace
	this.displayName;	//Int, 
	this.suitIndex;		//Int, index within suit.  e.g. 0=A
	this.suit;			//spades, clubs, diamonds, hearts
};

/*
Card.prototype.initByDisplay = function(){

	var validSuit;
	if(suit=="spades" || suit=="clubs" || suit=="diamonds" || suit=="hearts"){
		validSuit = true;
			console.log("validSuit is true");
	}
	else {
		validSuit = false;
			console.log("validSuit is false.  Card not created");
			return;
	}

	var validDisplay;
	if( (displayName>1 && displayName<11) || (displayName == "Jack" || displayName == "Queen" || displayName == "King" || displayName == "Ace") ){
		validDisplay = true;
			console.log("validDisplay is true");
	}
	else{
		validSuit = false;
			console.log("validDisplay is false. Card not created");
			return;
	}

	this.valHard;
	this.valSoft;
	this.displayName = displayName;
	this.suitIndex;
	this.suit = suit;
};
*/

/*
Card.prototype.isValid = function() {

	if(this.valHard &&
		this.valSoft &&
		this.displayName &&
		this.suitIndex &&
		this.suit)
		return true;
	
	else return false;
};
*/