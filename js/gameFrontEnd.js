/****
runAndDisplay.js (additional Table.prototype functions)
By fching

Requirements:
		Run the game itself and jQuery in the visuals

		
****/

Table.prototype.runGame = function() {

	//Deal Player and House
	this.dealAll();

	//Reset display
	this.displayReset();

	//Display one of Dealer's cards
	this.displayCard("#house-card1",this.house.hand.contents[1]);

	//Play Player's Hand
	var isPlayerStillActive = this.playHand(this.player.hand);
		if(!isPlayerStillActive){
			console.log("Player busted. House wins.");
			this.clearTable();
			return;
		}

	//Play Dealer's Hand
	var isHouseStillActive = this.playHandAuto(this.house.hand);
		if(!isHouseStillActive){
			console.log("House busted. Player wins.");
			this.clearTable();
			return;
		}
	//Both are still alive, determine winner
	this.compareHands();

	//Clear table
	this.clearTable();

};


/************
DISPLAYER FUNCTIONS
************/

Table.prototype.displayCard = function(gui_target,theCard) {

	var to_display = theCard.suit +"-"+ theCard.displayName;
			console.log(to_display);


			//console.log(gui_target);

		$(gui_target).attr('class',to_display);

	return true;
};

Table.prototype.displayHand = function(target,theHand) {
	var size = theHand.contents.length;
	for(i=0;i<size;i++){
		var to_display = theHand.contents[i].suit +"-"+ theHand.contents[i].displayName;
			console.log(to_display);

		var gui_target = target+i;
			console.log(gui_target);

		$(gui_target).attr('class',to_display);

	}
	return true;
};

Table.prototype.displayReset = function() {

	//Reset displayed cards
	$('#player1-card0').attr('class','hidden-card');
	$('#player1-card1').attr('class','hidden-card');

	$('#house-card0').attr('class','hidden-card');
	$('#house-card1').attr('class','hidden-card');

	var numCardSlots = 9;
	for(i=2;i<numCardSlots;i++){
		var target = "#player1-card"+i;
		$(target).attr('class','#');

		target = "#house-card"+i;
		$(target).attr('class','#');
	}

	//Reset hand values
	$('#player-hand-value').text('');
	$('#house-hand-value').text('');

	//Reset Action Display
	$('#action-display').html('');

};

Table.prototype.displayHandValue = function(gui_target,theHand) {

	var toDisplay = theHand.getDisplayValue();

	$(gui_target).delay(300).text(toDisplay);
	return toDisplay;

};

Table.prototype.displayHitOrStand = function() {

	$('#action-display').html("Soft value is +");


};


